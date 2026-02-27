import { createContext, useContext, useState, useCallback } from "react";

/* ──────────────────────────────────────────────────────
   Temas disponibles – sólo Blancos · Marfil · Lila · Oro Rosa
   ────────────────────────────────────────────────────── */
export const THEMES = {
  flores: "flores",
  editorial: "editorial",
  bruma: "bruma",
};

const THEME_LIST = Object.values(THEMES);

/* ── Mapas de fuentes por tema ── */
const FONT_MAP = {
  flores: {
    title: "Great Vibes, cursive",
    heading: "Cormorant Garamond, serif",
    body: "Montserrat, sans-serif",
  },
  editorial: {
    title: "Cormorant Garamond, serif",
    heading: "Cormorant Garamond, serif",
    body: "Montserrat, sans-serif",
  },
  bruma: {
    title: "Pinyon Script, cursive",
    heading: "Cormorant Garamond, serif",
    body: "Montserrat, sans-serif",
  },
};

/* ── Estilos mapeados por tema (S = Styles) ── */
export const S = {
  /* ━━━━ BOSQUE DE FLORES ━━━━
     Centralized layout, paper texture, vine borders,
     circular photo frames, lots of whitespace */
  flores: {
    // Fondos
    pageBg: "bg-white bg-paper",
    sectionBg: "bg-white/70",
    cardBg: "bg-white border border-lila-light/40 shadow-md",
    heroBg: "bg-gradient-to-b from-white via-lila-pastel/20 to-white",
    footerBg: "bg-gradient-to-t from-lila-pastel/30 to-transparent",

    // Texto
    titleColor: "text-lila-dark",
    headingColor: "text-rosa-oro",
    textColor: "text-lila-dark/80",
    subtitleColor: "text-lila/90",
    accentColor: "text-rosa-oro",

    // Decoradores
    borderColor: "border-lila-light",
    dividerColor: "bg-lila-light/50",
    glowColor: "shadow-lila-light/30",

    // Countdown
    countdownBg: "bg-white/80 border border-lila-light/30",
    countdownNum: "text-rosa-oro",
    countdownLabel: "text-lila/70",

    // Galería
    photoBorder:
      "border-4 border-lila-light rounded-full shadow-lg shadow-lila-light/20",
    photoShape: "rounded-full",
    photoWrapper: "flex flex-wrap justify-center gap-8",

    // Botones
    buttonBg: "bg-rosa-oro hover:bg-rosa-oro-light text-white",
    buttonOutline:
      "border-2 border-rosa-oro text-rosa-oro hover:bg-rosa-oro/10",

    // Fuentes
    titleFont: "font-fairy",
    headingFont: "font-elegant",
    bodyFont: "font-body",

    // Efectos
    titleSize: "text-6xl md:text-8xl",
    cardRounded: "rounded-2xl",
    layoutClass: "text-center max-w-3xl mx-auto",
  },

  /* ━━━━ CUENTO EDITORIAL ━━━━
     Asymmetric luxury magazine style, large serif,
     deep shadows, gold sparkles on scroll */
  editorial: {
    pageBg: "bg-gradient-to-br from-marfil via-blanco-roto to-lila-pastel/15",
    sectionBg: "bg-marfil/50",
    cardBg: "bg-marfil border border-marfil-dark/20 shadow-2xl",
    heroBg: "bg-gradient-to-br from-marfil via-lila-pastel/10 to-marfil",
    footerBg: "bg-gradient-to-t from-marfil-dark/20 to-transparent",

    titleColor: "text-lila-deep",
    headingColor: "text-lila-dark",
    textColor: "text-lila-deep/70",
    subtitleColor: "text-rosa-oro",
    accentColor: "text-rosa-oro",

    borderColor: "border-marfil-dark/30",
    dividerColor: "bg-rosa-oro/30",
    glowColor: "shadow-rosa-oro-soft/20",

    countdownBg: "bg-marfil/90 border border-rosa-oro-soft/30 shadow-xl",
    countdownNum: "text-lila-deep",
    countdownLabel: "text-rosa-oro/80",

    photoBorder:
      "border-2 border-marfil-dark/20 rounded-lg shadow-2xl shadow-black/15",
    photoShape: "rounded-lg",
    photoWrapper: "grid grid-cols-1 md:grid-cols-2 gap-6",

    buttonBg: "bg-lila-dark hover:bg-morado-deep text-white shadow-xl",
    buttonOutline:
      "border-2 border-lila-dark text-lila-dark hover:bg-lila-dark/10",

    titleFont: "font-editorial",
    headingFont: "font-editorial",
    bodyFont: "font-body",

    titleSize: "text-7xl md:text-9xl font-light tracking-tight",
    cardRounded: "rounded-xl",
    layoutClass: "max-w-5xl mx-auto",
  },

  /* ━━━━ BRUMA REAL ━━━━
     Full-height sections, lilac clouds, extreme glassmorphism,
     polaroid-style floating photos */
  bruma: {
    pageBg: "bg-gradient-to-b from-lila-pastel/40 via-white to-lila-light/30",
    sectionBg: "bg-transparent",
    cardBg:
      "bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl shadow-lila/10",
    heroBg:
      "bg-gradient-to-b from-lila-light/30 via-white/50 to-lila-pastel/20",
    footerBg: "bg-gradient-to-t from-lila-light/30 to-transparent",

    titleColor: "text-lila-dark",
    headingColor: "text-lila-dark/90",
    textColor: "text-lila-deep/70",
    subtitleColor: "text-rosa-oro",
    accentColor: "text-rosa-oro-light",

    borderColor: "border-white/40",
    dividerColor: "bg-white/40",
    glowColor: "shadow-lila/20",

    countdownBg: "bg-white/15 backdrop-blur-xl border border-white/30",
    countdownNum: "text-lila-dark",
    countdownLabel: "text-rosa-oro/80",

    photoBorder: "border-8 border-white/80 rounded-sm shadow-xl shadow-lila/15",
    photoShape: "rounded-sm",
    photoWrapper: "flex flex-wrap justify-center gap-6",

    buttonBg: "bg-rosa-oro/80 backdrop-blur-sm hover:bg-rosa-oro text-white",
    buttonOutline:
      "border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm",

    titleFont: "font-calligraphy",
    headingFont: "font-elegant",
    bodyFont: "font-body",

    titleSize: "text-6xl md:text-8xl",
    cardRounded: "rounded-3xl",
    layoutClass: "text-center max-w-4xl mx-auto",
  },
};

/* ── Context ── */
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(THEMES.flores);

  const cycleTheme = useCallback(() => {
    setTheme((prev) => {
      const idx = THEME_LIST.indexOf(prev);
      return THEME_LIST[(idx + 1) % THEME_LIST.length];
    });
  }, []);

  const selectTheme = useCallback((t) => {
    if (THEME_LIST.includes(t)) setTheme(t);
  }, []);

  const styles = S[theme];
  const fonts = FONT_MAP[theme];

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme: selectTheme, cycleTheme, styles, fonts }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}

export default ThemeContext;
