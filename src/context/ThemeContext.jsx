import { createContext, useContext, useState } from "react";

/**
 * Siete temas visuales para la invitación:
 * - magico:     Fondo oscuro, linternas, degradados morados (original)
 * - castillo:   Blanco editorial minimalista, bordes dorados finos, sombras suaves
 * - amanecer:   Glassmorphism, gradiente blanco→lila pastel, oro rosa, cristal
 * - jardin:     Blanco acuarela botánico, acentos lavanda suaves, estilo watercolor
 * - porcelana:  Blanco puro con violeta frío, líneas finas, estilo high-fashion
 * - terciopelo: Fondo lila intenso, textura terciopelo, acentos crema/oro rosa
 * - ensueno:    Gradiente lila soñador, glassmorphism lavanda, todo respira lila
 */
export const THEMES = {
  magico: "magico",
  castillo: "castillo",
  amanecer: "amanecer",
  jardin: "jardin",
  porcelana: "porcelana",
  terciopelo: "terciopelo",
  ensueno: "ensueno",
};

/** Orden cíclico para el botón */
const THEME_ORDER = [THEMES.magico, THEMES.castillo, THEMES.amanecer, THEMES.jardin, THEMES.porcelana, THEMES.terciopelo, THEMES.ensueno];

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
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}

/* ─────────────────────────────────────────────
   Mapas de clases por tema (reutilizables)
   ───────────────────────────────────────────── */

export const themeStyles = {
  /* ── Contenedor raíz ── */
  root: {
    magico: "bg-noche text-white",
    castillo: "bg-slate-50 text-purple-900",
    amanecer: "bg-gradient-to-tr from-white via-purple-50 to-white text-purple-900",
    jardin: "bg-gradient-to-b from-white via-lavender-50 to-green-50/20 text-stone-800",
    porcelana: "bg-white text-violet-950",
    terciopelo: "bg-gradient-to-b from-purple-900 via-purple-800 to-fuchsia-900 text-purple-50",
    ensueno: "bg-gradient-to-br from-purple-200 via-fuchsia-100 to-purple-300 text-purple-950",
  },

  /* ── Títulos fairy (Great Vibes) ── */
  titleFairy: {
    magico: "text-dorado drop-shadow-[0_0_40px_rgba(255,215,0,0.3)]",
    castillo: "text-purple-800 drop-shadow-none",
    amanecer: "text-rose-400 drop-shadow-[0_0_20px_rgba(244,114,182,0.3)]",
    jardin: "text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.15)]",
    porcelana: "text-violet-700 drop-shadow-none",
    terciopelo: "text-pink-200 drop-shadow-[0_0_30px_rgba(236,72,153,0.3)]",
    ensueno: "text-purple-700 drop-shadow-[0_0_25px_rgba(147,51,234,0.25)]",
  },

  /* ── Títulos de sección (fairy más pequeños) ── */
  sectionTitle: {
    magico: "text-dorado",
    castillo: "text-purple-800",
    amanecer: "text-rose-400",
    jardin: "text-purple-400",
    porcelana: "text-violet-700",
    terciopelo: "text-pink-200",
    ensueno: "text-purple-700",
  },

  /* ── Subtítulos elegant ── */
  subtitle: {
    magico: "text-lila-light",
    castillo: "text-purple-600",
    amanecer: "text-purple-400",
    jardin: "text-stone-500",
    porcelana: "text-violet-400",
    terciopelo: "text-purple-200",
    ensueno: "text-purple-600",
  },

  subtitleMuted: {
    magico: "text-lila-light/60",
    castillo: "text-purple-400",
    amanecer: "text-purple-300",
    jardin: "text-stone-400",
    porcelana: "text-violet-300",
    terciopelo: "text-purple-300/60",
    ensueno: "text-purple-400",
  },

  /* ── Texto de cuerpo ── */
  bodyText: {
    magico: "text-lila-light/80",
    castillo: "text-purple-700",
    amanecer: "text-purple-600",
    jardin: "text-stone-600",
    porcelana: "text-violet-800",
    terciopelo: "text-purple-100/90",
    ensueno: "text-purple-800",
  },

  bodyMuted: {
    magico: "text-lila-light/50",
    castillo: "text-purple-400",
    amanecer: "text-purple-300",
    jardin: "text-stone-400",
    porcelana: "text-violet-300",
    terciopelo: "text-purple-300/50",
    ensueno: "text-purple-400",
  },

  /* ── Líneas decorativas ── */
  decorLine: {
    magico: "bg-gradient-to-r from-transparent via-dorado to-transparent",
    castillo: "bg-gradient-to-r from-transparent via-amber-300 to-transparent",
    amanecer: "bg-gradient-to-r from-transparent via-rose-300 to-transparent",
    jardin: "bg-gradient-to-r from-transparent via-purple-200 to-transparent",
    porcelana: "bg-gradient-to-r from-transparent via-violet-200 to-transparent",
    terciopelo: "bg-gradient-to-r from-transparent via-pink-300/60 to-transparent",
    ensueno: "bg-gradient-to-r from-transparent via-purple-400 to-transparent",
  },

  decorLineLila: {
    magico: "bg-gradient-to-r from-transparent via-lila to-transparent",
    castillo: "bg-gradient-to-r from-transparent via-purple-300 to-transparent",
    amanecer: "bg-gradient-to-r from-transparent via-rose-200 to-transparent",
    jardin: "bg-gradient-to-r from-transparent via-green-200/60 to-transparent",
    porcelana: "bg-gradient-to-r from-transparent via-violet-100 to-transparent",
    terciopelo: "bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent",
    ensueno: "bg-gradient-to-r from-transparent via-purple-300 to-transparent",
  },

  /* ── Cards ── */
  card: {
    magico: "border-lila/20 bg-noche/40 backdrop-blur-md hover:border-dorado/40",
    castillo: "border-amber-200 bg-white shadow-xl hover:border-amber-400 hover:shadow-2xl",
    amanecer: "border-white/40 bg-white/60 backdrop-blur-md shadow-lg hover:border-rose-300 hover:shadow-xl",
    jardin: "border-purple-100 bg-white/90 shadow-md hover:border-purple-200 hover:shadow-lg",
    porcelana: "border-violet-100 bg-white shadow-[0_1px_3px_rgba(139,92,246,0.08)] hover:border-violet-300 hover:shadow-[0_4px_20px_rgba(139,92,246,0.1)]",
    terciopelo: "border-pink-400/30 bg-purple-900/50 backdrop-blur-lg hover:border-pink-300/60 shadow-[0_0_20px_rgba(168,85,247,0.15)]",
    ensueno: "border-purple-300/50 bg-white/50 backdrop-blur-lg shadow-lg hover:border-purple-400 hover:shadow-[0_8px_30px_rgba(147,51,234,0.15)]",
  },

  cardHoverOverlay: {
    magico: "bg-gradient-to-br from-dorado/5 to-transparent",
    castillo: "bg-gradient-to-br from-amber-50 to-transparent",
    amanecer: "bg-gradient-to-br from-rose-50/50 to-transparent",
    jardin: "bg-gradient-to-br from-purple-50/40 to-transparent",
    porcelana: "bg-gradient-to-br from-violet-50/30 to-transparent",
    terciopelo: "bg-gradient-to-br from-pink-400/10 to-transparent",
    ensueno: "bg-gradient-to-br from-purple-200/30 to-transparent",
  },

  cardTitle: {
    magico: "text-dorado",
    castillo: "text-purple-800",
    amanecer: "text-rose-500",
    jardin: "text-purple-500",
    porcelana: "text-violet-700",
    terciopelo: "text-pink-200",
    ensueno: "text-purple-700",
  },

  cardIcon: {
    magico: "text-dorado/70",
    castillo: "text-amber-500",
    amanecer: "text-rose-400",
    jardin: "text-purple-300",
    porcelana: "text-violet-400",
    terciopelo: "text-pink-300/70",
    ensueno: "text-purple-400",
  },

  /* ── Countdown units ── */
  countdownUnit: {
    magico: "border-dorado/30 bg-noche/60 backdrop-blur-md shadow-[0_0_20px_rgba(255,215,0,0.1)]",
    castillo: "border-amber-200 bg-white shadow-xl",
    amanecer: "border-white/50 bg-white/60 backdrop-blur-md shadow-lg",
    jardin: "border-purple-100 bg-white/80 shadow-sm",
    porcelana: "border-violet-100 bg-white shadow-[0_1px_4px_rgba(139,92,246,0.06)]",
    terciopelo: "border-pink-400/30 bg-purple-800/60 backdrop-blur-md shadow-[0_0_20px_rgba(236,72,153,0.12)]",
    ensueno: "border-purple-300/40 bg-white/40 backdrop-blur-lg shadow-md",
  },

  countdownGlow: {
    magico: "bg-dorado/10",
    castillo: "bg-amber-100/50",
    amanecer: "bg-rose-100/50",
    jardin: "bg-purple-50/60",
    porcelana: "bg-violet-50/30",
    terciopelo: "bg-pink-400/10",
    ensueno: "bg-purple-300/20",
  },

  countdownValue: {
    magico: "text-dorado",
    castillo: "text-purple-800",
    amanecer: "text-rose-500",
    jardin: "text-purple-400",
    porcelana: "text-violet-700",
    terciopelo: "text-pink-200",
    ensueno: "text-purple-700",
  },

  countdownLabel: {
    magico: "text-lila-light/70",
    castillo: "text-purple-400",
    amanecer: "text-purple-300",
    jardin: "text-stone-400",
    porcelana: "text-violet-300",
    terciopelo: "text-purple-200/70",
    ensueno: "text-purple-400",
  },

  /* ── Gallery ── */
  galleryOverlay: {
    magico: "from-dorado/40",
    castillo: "from-amber-400/30",
    amanecer: "from-rose-300/30",
    jardin: "from-purple-300/25",
    porcelana: "from-violet-400/20",
    terciopelo: "from-pink-500/35",
    ensueno: "from-purple-500/30",
  },

  galleryBorderHover: {
    magico: "border-dorado/0 group-hover:border-dorado/60 shadow-[inset_0_0_0_0_rgba(255,215,0,0)] group-hover:shadow-[inset_0_0_30px_rgba(255,215,0,0.15)]",
    castillo: "border-transparent group-hover:border-amber-300 shadow-none group-hover:shadow-2xl",
    amanecer: "border-transparent group-hover:border-rose-300/60 shadow-none group-hover:shadow-[inset_0_0_20px_rgba(244,114,182,0.1)]",
    jardin: "border-transparent group-hover:border-purple-200 shadow-none group-hover:shadow-lg",
    porcelana: "border-transparent group-hover:border-violet-200 shadow-none group-hover:shadow-[0_8px_30px_rgba(139,92,246,0.12)]",
    terciopelo: "border-pink-400/0 group-hover:border-pink-300/60 shadow-none group-hover:shadow-[inset_0_0_25px_rgba(236,72,153,0.15)]",
    ensueno: "border-transparent group-hover:border-purple-400/60 shadow-none group-hover:shadow-[inset_0_0_25px_rgba(147,51,234,0.12)]",
  },

  galleryCard: {
    magico: "rounded-xl",
    castillo: "rounded-2xl shadow-lg",
    amanecer: "rounded-2xl",
    jardin: "rounded-3xl shadow-sm",
    porcelana: "rounded-lg",
    terciopelo: "rounded-xl shadow-lg",
    ensueno: "rounded-2xl shadow-md",
  },

  lightboxBg: {
    magico: "bg-noche/90 backdrop-blur-md",
    castillo: "bg-black/60 backdrop-blur-sm",
    amanecer: "bg-purple-900/40 backdrop-blur-lg",
    jardin: "bg-white/80 backdrop-blur-xl",
    porcelana: "bg-violet-950/50 backdrop-blur-md",
    terciopelo: "bg-purple-950/85 backdrop-blur-lg",
    ensueno: "bg-purple-400/40 backdrop-blur-xl",
  },

  /* ── WhatsApp Button ── */
  whatsappBg: {
    magico: "bg-gradient-to-r from-lila via-dorado to-lila",
    castillo: "bg-gradient-to-r from-purple-600 via-amber-400 to-purple-600",
    amanecer: "bg-gradient-to-r from-rose-400 via-amber-300 to-rose-400",
    jardin: "bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300",
    porcelana: "bg-gradient-to-r from-violet-500 via-violet-600 to-violet-500",
    terciopelo: "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-500",
    ensueno: "bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-500",
  },

  whatsappInner: {
    magico: "bg-gradient-to-r from-lila via-dorado to-dorado-soft",
    castillo: "bg-gradient-to-r from-purple-500 via-amber-300 to-amber-400",
    amanecer: "bg-gradient-to-r from-rose-300 via-amber-200 to-rose-300",
    jardin: "bg-gradient-to-r from-purple-300 via-purple-400 to-purple-300",
    porcelana: "bg-gradient-to-r from-violet-500 via-violet-600 to-violet-500",
    terciopelo: "bg-gradient-to-r from-pink-500 via-fuchsia-500 to-pink-500",
    ensueno: "bg-gradient-to-r from-purple-500 via-fuchsia-400 to-purple-500",
  },

  /* ── Footer ── */
  footerBorder: {
    magico: "border-lila/10",
    castillo: "border-purple-100",
    amanecer: "border-rose-100",
    jardin: "border-purple-50",
    porcelana: "border-violet-100",
    terciopelo: "border-pink-400/20",
    ensueno: "border-purple-300/30",
  },

  footerQuote: {
    magico: "text-lila-light/50",
    castillo: "text-purple-400",
    amanecer: "text-purple-300",
    jardin: "text-stone-400",
    porcelana: "text-violet-300",
    terciopelo: "text-purple-200/50",
    ensueno: "text-purple-500",
  },

  footerName: {
    magico: "text-dorado/60",
    castillo: "text-purple-700",
    amanecer: "text-rose-400/70",
    jardin: "text-purple-300",
    porcelana: "text-violet-500",
    terciopelo: "text-pink-200/60",
    ensueno: "text-purple-600",
  },

  footerYear: {
    magico: "text-lila-light/30",
    castillo: "text-purple-300",
    amanecer: "text-purple-200",
    jardin: "text-stone-300",
    porcelana: "text-violet-200",
    terciopelo: "text-purple-300/30",
    ensueno: "text-purple-300",
  },

  footerDecorStar: {
    magico: "text-dorado/40",
    castillo: "text-amber-300",
    amanecer: "text-rose-300",
    jardin: "text-purple-200",
    porcelana: "text-violet-200",
    terciopelo: "text-pink-300/40",
    ensueno: "text-purple-400",
  },

  footerDecorLine: {
    magico: "bg-dorado/30",
    castillo: "bg-amber-200",
    amanecer: "bg-rose-200",
    jardin: "bg-purple-100",
    porcelana: "bg-violet-100",
    terciopelo: "bg-pink-400/30",
    ensueno: "bg-purple-400/40",
  },

  /* ── Separadores ── */
  separatorLine: {
    magico: "bg-gradient-to-r from-transparent to-dorado/30",
    castillo: "bg-gradient-to-r from-transparent to-amber-200",
    amanecer: "bg-gradient-to-r from-transparent to-rose-200",
    jardin: "bg-gradient-to-r from-transparent to-purple-100",
    porcelana: "bg-gradient-to-r from-transparent to-violet-100",
    terciopelo: "bg-gradient-to-r from-transparent to-pink-400/30",
    ensueno: "bg-gradient-to-r from-transparent to-purple-400/40",
  },

  separatorLineReverse: {
    magico: "bg-gradient-to-l from-transparent to-dorado/30",
    castillo: "bg-gradient-to-l from-transparent to-amber-200",
    amanecer: "bg-gradient-to-l from-transparent to-rose-200",
    jardin: "bg-gradient-to-l from-transparent to-purple-100",
    porcelana: "bg-gradient-to-l from-transparent to-violet-100",
    terciopelo: "bg-gradient-to-l from-transparent to-pink-400/30",
    ensueno: "bg-gradient-to-l from-transparent to-purple-400/40",
  },

  separatorStar: {
    magico: "text-dorado/40",
    castillo: "text-amber-300",
    amanecer: "text-rose-300",
    jardin: "text-purple-200",
    porcelana: "text-violet-200",
    terciopelo: "text-pink-300/40",
    ensueno: "text-purple-400",
  },

  /* ── Dress code ── */
  dressCode: {
    magico: "text-lila-light/70",
    castillo: "text-purple-600",
    amanecer: "text-purple-400",
    jardin: "text-stone-500",
    porcelana: "text-violet-600",
    terciopelo: "text-purple-200/70",
    ensueno: "text-purple-600",
  },

  dressCodeHighlight: {
    magico: "text-dorado font-semibold",
    castillo: "text-amber-600 font-semibold",
    amanecer: "text-rose-500 font-semibold",
    jardin: "text-purple-500 font-semibold",
    porcelana: "text-violet-700 font-semibold",
    terciopelo: "text-pink-200 font-semibold",
    ensueno: "text-purple-700 font-semibold",
  },

  dressCodeNote: {
    magico: "text-lila-light/50",
    castillo: "text-purple-400",
    amanecer: "text-purple-300",
    jardin: "text-stone-400",
    porcelana: "text-violet-300",
    terciopelo: "text-purple-300/50",
    ensueno: "text-purple-400",
  },

  whatsappNote: {
    magico: "text-lila-light/40",
    castillo: "text-purple-300",
    amanecer: "text-purple-200",
    jardin: "text-stone-300",
    porcelana: "text-violet-200",
    terciopelo: "text-purple-300/40",
    ensueno: "text-purple-300",
  },

  /* ── Scroll arrow ── */
  scrollArrow: {
    magico: "text-dorado/60",
    castillo: "text-purple-300",
    amanecer: "text-rose-300",
    jardin: "text-purple-200",
    porcelana: "text-violet-300",
    terciopelo: "text-pink-300/60",
    ensueno: "text-purple-400",
  },
};
