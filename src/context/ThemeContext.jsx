import { createContext, useContext, useState } from 'react';

/**
 * Tres temas visuales para la invitación:
 * - magico:   Fondo oscuro, linternas, degradados morados (original)
 * - castillo: Blanco editorial minimalista, bordes dorados finos, sombras suaves
 * - amanecer: Glassmorphism, gradiente blanco→lila pastel, oro rosa, cristal
 */
export const THEMES = {
  magico: 'magico',
  castillo: 'castillo',
  amanecer: 'amanecer',
};

/** Orden cíclico para el botón */
const THEME_ORDER = [THEMES.magico, THEMES.castillo, THEMES.amanecer];

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEMES.magico);

  const cycleTheme = () => {
    setTheme((prev) => {
      const idx = THEME_ORDER.indexOf(prev);
      return THEME_ORDER[(idx + 1) % THEME_ORDER.length];
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
}

/* ─────────────────────────────────────────────
   Mapas de clases por tema (reutilizables)
   ───────────────────────────────────────────── */

export const themeStyles = {
  /* ── Contenedor raíz ── */
  root: {
    magico: 'bg-noche text-white',
    castillo: 'bg-slate-50 text-purple-900',
    amanecer: 'bg-gradient-to-tr from-white via-purple-50 to-white text-purple-900',
  },

  /* ── Títulos fairy (Great Vibes) ── */
  titleFairy: {
    magico: 'text-dorado drop-shadow-[0_0_40px_rgba(255,215,0,0.3)]',
    castillo: 'text-purple-800 drop-shadow-none',
    amanecer: 'text-rose-400 drop-shadow-[0_0_20px_rgba(244,114,182,0.3)]',
  },

  /* ── Títulos de sección (fairy más pequeños) ── */
  sectionTitle: {
    magico: 'text-dorado',
    castillo: 'text-purple-800',
    amanecer: 'text-rose-400',
  },

  /* ── Subtítulos elegant ── */
  subtitle: {
    magico: 'text-lila-light',
    castillo: 'text-purple-600',
    amanecer: 'text-purple-400',
  },

  subtitleMuted: {
    magico: 'text-lila-light/60',
    castillo: 'text-purple-400',
    amanecer: 'text-purple-300',
  },

  /* ── Texto de cuerpo ── */
  bodyText: {
    magico: 'text-lila-light/80',
    castillo: 'text-purple-700',
    amanecer: 'text-purple-600',
  },

  bodyMuted: {
    magico: 'text-lila-light/50',
    castillo: 'text-purple-400',
    amanecer: 'text-purple-300',
  },

  /* ── Líneas decorativas ── */
  decorLine: {
    magico: 'bg-gradient-to-r from-transparent via-dorado to-transparent',
    castillo: 'bg-gradient-to-r from-transparent via-amber-300 to-transparent',
    amanecer: 'bg-gradient-to-r from-transparent via-rose-300 to-transparent',
  },

  decorLineLila: {
    magico: 'bg-gradient-to-r from-transparent via-lila to-transparent',
    castillo: 'bg-gradient-to-r from-transparent via-purple-300 to-transparent',
    amanecer: 'bg-gradient-to-r from-transparent via-rose-200 to-transparent',
  },

  /* ── Cards ── */
  card: {
    magico: 'border-lila/20 bg-noche/40 backdrop-blur-md hover:border-dorado/40',
    castillo: 'border-amber-200 bg-white shadow-xl hover:border-amber-400 hover:shadow-2xl',
    amanecer: 'border-white/40 bg-white/60 backdrop-blur-md shadow-lg hover:border-rose-300 hover:shadow-xl',
  },

  cardHoverOverlay: {
    magico: 'bg-gradient-to-br from-dorado/5 to-transparent',
    castillo: 'bg-gradient-to-br from-amber-50 to-transparent',
    amanecer: 'bg-gradient-to-br from-rose-50/50 to-transparent',
  },

  cardTitle: {
    magico: 'text-dorado',
    castillo: 'text-purple-800',
    amanecer: 'text-rose-500',
  },

  cardIcon: {
    magico: 'text-dorado/70',
    castillo: 'text-amber-500',
    amanecer: 'text-rose-400',
  },

  /* ── Countdown units ── */
  countdownUnit: {
    magico: 'border-dorado/30 bg-noche/60 backdrop-blur-md shadow-[0_0_20px_rgba(255,215,0,0.1)]',
    castillo: 'border-amber-200 bg-white shadow-xl',
    amanecer: 'border-white/50 bg-white/60 backdrop-blur-md shadow-lg',
  },

  countdownGlow: {
    magico: 'bg-dorado/10',
    castillo: 'bg-amber-100/50',
    amanecer: 'bg-rose-100/50',
  },

  countdownValue: {
    magico: 'text-dorado',
    castillo: 'text-purple-800',
    amanecer: 'text-rose-500',
  },

  countdownLabel: {
    magico: 'text-lila-light/70',
    castillo: 'text-purple-400',
    amanecer: 'text-purple-300',
  },

  /* ── Gallery ── */
  galleryOverlay: {
    magico: 'from-dorado/40',
    castillo: 'from-amber-400/30',
    amanecer: 'from-rose-300/30',
  },

  galleryBorderHover: {
    magico: 'border-dorado/0 group-hover:border-dorado/60 shadow-[inset_0_0_0_0_rgba(255,215,0,0)] group-hover:shadow-[inset_0_0_30px_rgba(255,215,0,0.15)]',
    castillo: 'border-transparent group-hover:border-amber-300 shadow-none group-hover:shadow-2xl',
    amanecer: 'border-transparent group-hover:border-rose-300/60 shadow-none group-hover:shadow-[inset_0_0_20px_rgba(244,114,182,0.1)]',
  },

  galleryCard: {
    magico: 'rounded-xl',
    castillo: 'rounded-2xl shadow-lg',
    amanecer: 'rounded-2xl',
  },

  lightboxBg: {
    magico: 'bg-noche/90 backdrop-blur-md',
    castillo: 'bg-black/60 backdrop-blur-sm',
    amanecer: 'bg-purple-900/40 backdrop-blur-lg',
  },

  /* ── WhatsApp Button ── */
  whatsappBg: {
    magico: 'bg-gradient-to-r from-lila via-dorado to-lila',
    castillo: 'bg-gradient-to-r from-purple-600 via-amber-400 to-purple-600',
    amanecer: 'bg-gradient-to-r from-rose-400 via-amber-300 to-rose-400',
  },

  whatsappInner: {
    magico: 'bg-gradient-to-r from-lila via-dorado to-dorado-soft',
    castillo: 'bg-gradient-to-r from-purple-500 via-amber-300 to-amber-400',
    amanecer: 'bg-gradient-to-r from-rose-300 via-amber-200 to-rose-300',
  },

  /* ── Footer ── */
  footerBorder: {
    magico: 'border-lila/10',
    castillo: 'border-purple-100',
    amanecer: 'border-rose-100',
  },

  footerQuote: {
    magico: 'text-lila-light/50',
    castillo: 'text-purple-400',
    amanecer: 'text-purple-300',
  },

  footerName: {
    magico: 'text-dorado/60',
    castillo: 'text-purple-700',
    amanecer: 'text-rose-400/70',
  },

  footerYear: {
    magico: 'text-lila-light/30',
    castillo: 'text-purple-300',
    amanecer: 'text-purple-200',
  },

  footerDecorStar: {
    magico: 'text-dorado/40',
    castillo: 'text-amber-300',
    amanecer: 'text-rose-300',
  },

  footerDecorLine: {
    magico: 'bg-dorado/30',
    castillo: 'bg-amber-200',
    amanecer: 'bg-rose-200',
  },

  /* ── Separadores ── */
  separatorLine: {
    magico: 'bg-gradient-to-r from-transparent to-dorado/30',
    castillo: 'bg-gradient-to-r from-transparent to-amber-200',
    amanecer: 'bg-gradient-to-r from-transparent to-rose-200',
  },

  separatorLineReverse: {
    magico: 'bg-gradient-to-l from-transparent to-dorado/30',
    castillo: 'bg-gradient-to-l from-transparent to-amber-200',
    amanecer: 'bg-gradient-to-l from-transparent to-rose-200',
  },

  separatorStar: {
    magico: 'text-dorado/40',
    castillo: 'text-amber-300',
    amanecer: 'text-rose-300',
  },

  /* ── Dress code ── */
  dressCode: {
    magico: 'text-lila-light/70',
    castillo: 'text-purple-600',
    amanecer: 'text-purple-400',
  },

  dressCodeHighlight: {
    magico: 'text-dorado font-semibold',
    castillo: 'text-amber-600 font-semibold',
    amanecer: 'text-rose-500 font-semibold',
  },

  dressCodeNote: {
    magico: 'text-lila-light/50',
    castillo: 'text-purple-400',
    amanecer: 'text-purple-300',
  },

  whatsappNote: {
    magico: 'text-lila-light/40',
    castillo: 'text-purple-300',
    amanecer: 'text-purple-200',
  },

  /* ── Scroll arrow ── */
  scrollArrow: {
    magico: 'text-dorado/60',
    castillo: 'text-purple-300',
    amanecer: 'text-rose-300',
  },
};
