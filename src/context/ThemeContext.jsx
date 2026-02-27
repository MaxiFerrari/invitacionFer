import { createContext, useContext, useState } from "react";

/**
 * 3 diseños radicalmente diferentes:
 *
 * encanto  → "Encanto Real": Limpio, moderno, sol dorado y lila, layout tradicional.
 *             Tipografía: Great Vibes + Cormorant Garamond + Montserrat
 *
 * bosque   → "El Bosque Susurrante": Fotorrealista, bosque nocturno con neblina
 *             y luciérnagas, marcos de ramas, layout orgánico/disperso.
 *             Tipografía: IM Fell English SC + Montserrat
 *
 * luces    → "La Noche de las Luces": Cielo estrellado con faroles flotantes,
 *             glassmorphism, destellos dorados, layout centralizado etéreo.
 *             Tipografía: Pinyon Script + Cormorant Garamond + Montserrat
 */
export const THEMES = {
  encanto: "encanto",
  bosque: "bosque",
  luces: "luces",
};

const THEME_ORDER = [THEMES.encanto, THEMES.bosque, THEMES.luces];

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEMES.encanto);

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
   Configuración de diseño por tema
   ───────────────────────────────────────────── */

/** Fuentes por tema */
export const fonts = {
  title: {
    encanto: "font-fairy",
    bosque: "font-forest",
    luces: "font-calligraphy",
  },
  heading: {
    encanto: "font-elegant",
    bosque: "font-forest",
    luces: "font-elegant",
  },
  body: {
    encanto: "font-body",
    bosque: "font-body",
    luces: "font-body",
  },
};

/** Mapa completo de estilos por tema */
export const S = {
  /* ── Raíz ── */
  root: {
    encanto: "bg-gradient-to-b from-slate-50 via-purple-50/50 to-white text-purple-900",
    bosque: "bg-bosque text-amber-50",
    luces: "bg-cielo text-white",
  },

  /* ── Títulos principales ── */
  titleMain: {
    encanto: "text-purple-800 drop-shadow-none",
    bosque: "text-amber-200 drop-shadow-[0_0_30px_rgba(255,215,0,0.2)]",
    luces: "text-dorado animate-golden-pulse",
  },

  sectionTitle: {
    encanto: "text-purple-800",
    bosque: "text-amber-300/90",
    luces: "text-dorado",
  },

  /* ── Subtítulos ── */
  subtitle: {
    encanto: "text-purple-600",
    bosque: "text-niebla/80",
    luces: "text-lila-light/90",
  },

  subtitleMuted: {
    encanto: "text-purple-400",
    bosque: "text-niebla/50",
    luces: "text-lila-light/60",
  },

  /* ── Texto de cuerpo ── */
  bodyText: {
    encanto: "text-purple-700",
    bosque: "text-amber-100/80",
    luces: "text-lila-light/80",
  },

  bodyMuted: {
    encanto: "text-purple-400",
    bosque: "text-niebla/40",
    luces: "text-lila-light/50",
  },

  /* ── Líneas decorativas ── */
  decorLine: {
    encanto: "bg-gradient-to-r from-transparent via-amber-300 to-transparent",
    bosque: "bg-gradient-to-r from-transparent via-amber-700/40 to-transparent",
    luces: "bg-gradient-to-r from-transparent via-dorado/60 to-transparent",
  },

  decorLineLila: {
    encanto: "bg-gradient-to-r from-transparent via-purple-300 to-transparent",
    bosque: "bg-gradient-to-r from-transparent via-musgo/40 to-transparent",
    luces: "bg-gradient-to-r from-transparent via-lila/40 to-transparent",
  },

  /* ── Cards ── */
  card: {
    encanto: "border-amber-200 bg-white shadow-xl hover:border-amber-400 hover:shadow-2xl rounded-2xl",
    bosque: "border-amber-900/40 bg-bosque/70 backdrop-blur-sm shadow-[0_0_25px_rgba(0,0,0,0.4)] hover:border-amber-700/60 rounded-xl",
    luces: "border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_30px_rgba(255,215,0,0.08)] hover:border-dorado/30 hover:shadow-[0_0_40px_rgba(255,215,0,0.15)] rounded-2xl",
  },

  cardHoverOverlay: {
    encanto: "bg-gradient-to-br from-amber-50 to-transparent",
    bosque: "bg-gradient-to-br from-amber-900/10 to-transparent",
    luces: "bg-gradient-to-br from-dorado/5 to-transparent",
  },

  cardTitle: {
    encanto: "text-purple-800",
    bosque: "text-amber-300",
    luces: "text-dorado",
  },

  cardIcon: {
    encanto: "text-amber-500",
    bosque: "text-amber-600/70",
    luces: "text-dorado/70",
  },

  /* ── Countdown ── */
  countdownUnit: {
    encanto: "border-amber-200 bg-white shadow-xl rounded-2xl",
    bosque: "border-amber-900/30 bg-bosque/60 backdrop-blur-sm shadow-lg rounded-xl",
    luces: "border-dorado/20 bg-white/5 backdrop-blur-xl shadow-[0_0_20px_rgba(255,215,0,0.08)] rounded-2xl",
  },

  countdownGlow: {
    encanto: "bg-amber-100/50",
    bosque: "bg-amber-700/10",
    luces: "bg-dorado/10",
  },

  countdownValue: {
    encanto: "text-purple-800",
    bosque: "text-amber-200",
    luces: "text-dorado",
  },

  countdownLabel: {
    encanto: "text-purple-400",
    bosque: "text-niebla/50",
    luces: "text-lila-light/60",
  },

  /* ── Gallery ── */
  galleryOverlay: {
    encanto: "from-amber-400/30",
    bosque: "from-amber-900/50",
    luces: "from-dorado/40",
  },

  galleryBorderHover: {
    encanto: "border-transparent group-hover:border-amber-300 shadow-none group-hover:shadow-2xl",
    bosque: "border-transparent group-hover:border-amber-700/50 shadow-none group-hover:shadow-[inset_0_0_20px_rgba(139,69,19,0.2)]",
    luces: "border-dorado/0 group-hover:border-dorado/50 shadow-none group-hover:shadow-[inset_0_0_30px_rgba(255,215,0,0.12)]",
  },

  galleryCard: {
    encanto: "rounded-2xl shadow-lg",
    bosque: "rounded-lg shadow-md",
    luces: "rounded-xl",
  },

  lightboxBg: {
    encanto: "bg-black/60 backdrop-blur-sm",
    bosque: "bg-bosque/90 backdrop-blur-lg",
    luces: "bg-cielo/90 backdrop-blur-md",
  },

  lightboxClose: {
    encanto: "bg-purple-600 text-white hover:bg-amber-400 hover:text-purple-900 border-amber-300",
    bosque: "bg-amber-800 text-amber-100 hover:bg-amber-600 border-amber-600/40",
    luces: "bg-morado text-white hover:bg-dorado hover:text-noche border-dorado/40",
  },

  lightboxCaption: {
    encanto: "text-white",
    bosque: "text-amber-200",
    luces: "text-lila-light",
  },

  lightboxShadow: {
    encanto: "shadow-2xl",
    bosque: "shadow-[0_0_40px_rgba(139,69,19,0.3)]",
    luces: "shadow-[0_0_60px_rgba(255,215,0,0.2)]",
  },

  galleryCaptionText: {
    encanto: "text-purple-900",
    bosque: "text-amber-100",
    luces: "text-white",
  },

  /* ── WhatsApp ── */
  whatsappBg: {
    encanto: "bg-gradient-to-r from-purple-600 via-amber-400 to-purple-600",
    bosque: "bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800",
    luces: "bg-gradient-to-r from-lila via-dorado to-lila",
  },

  whatsappInner: {
    encanto: "bg-gradient-to-r from-purple-500 via-amber-300 to-amber-400",
    bosque: "bg-gradient-to-r from-amber-700 via-amber-500 to-amber-700",
    luces: "bg-gradient-to-r from-lila via-dorado to-dorado-soft",
  },

  whatsappText: {
    encanto: "text-white",
    bosque: "text-amber-50",
    luces: "text-noche",
  },

  whatsappGlow: {
    encanto: "hover:shadow-[0_0_30px_rgba(147,51,234,0.3)]",
    bosque: "hover:shadow-[0_0_30px_rgba(139,69,19,0.4)]",
    luces: "hover:shadow-[0_0_40px_rgba(255,215,0,0.4)]",
  },

  whatsappNote: {
    encanto: "text-purple-300",
    bosque: "text-niebla/30",
    luces: "text-lila-light/40",
  },

  /* ── Dress code ── */
  dressCode: {
    encanto: "text-purple-600",
    bosque: "text-niebla/70",
    luces: "text-lila-light/70",
  },

  dressCodeHighlight: {
    encanto: "text-amber-600 font-semibold",
    bosque: "text-amber-300 font-semibold",
    luces: "text-dorado font-semibold",
  },

  dressCodeNote: {
    encanto: "text-purple-400",
    bosque: "text-niebla/40",
    luces: "text-lila-light/50",
  },

  /* ── Footer ── */
  footerBorder: {
    encanto: "border-purple-100",
    bosque: "border-amber-900/20",
    luces: "border-lila/10",
  },

  footerQuote: {
    encanto: "text-purple-400",
    bosque: "text-niebla/50",
    luces: "text-lila-light/50",
  },

  footerName: {
    encanto: "text-purple-700",
    bosque: "text-amber-300/60",
    luces: "text-dorado/60",
  },

  footerYear: {
    encanto: "text-purple-300",
    bosque: "text-niebla/30",
    luces: "text-lila-light/30",
  },

  footerDecorStar: {
    encanto: "text-amber-300",
    bosque: "text-amber-700/40",
    luces: "text-dorado/40",
  },

  footerDecorLine: {
    encanto: "bg-amber-200",
    bosque: "bg-amber-800/30",
    luces: "bg-dorado/30",
  },

  /* ── Separadores ── */
  separatorLine: {
    encanto: "bg-gradient-to-r from-transparent to-amber-200",
    bosque: "bg-gradient-to-r from-transparent to-amber-800/30",
    luces: "bg-gradient-to-r from-transparent to-dorado/30",
  },

  separatorLineReverse: {
    encanto: "bg-gradient-to-l from-transparent to-amber-200",
    bosque: "bg-gradient-to-l from-transparent to-amber-800/30",
    luces: "bg-gradient-to-l from-transparent to-dorado/30",
  },

  separatorStar: {
    encanto: "text-amber-300",
    bosque: "text-amber-700/40",
    luces: "text-dorado/40",
  },

  separatorIcon: {
    encanto: "✦",
    bosque: "🌿",
    luces: "✦",
  },

  /* ── Scroll arrow ── */
  scrollArrow: {
    encanto: "text-purple-300",
    bosque: "text-amber-600/50",
    luces: "text-dorado/60",
  },
};
