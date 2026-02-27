import { motion, AnimatePresence } from "framer-motion";
import { useTheme, THEMES } from "../context/ThemeContext";
import { useState } from "react";

const THEME_META = {
  [THEMES.magico]: {
    label: "Mágico",
    emoji: "🌙",
    description: "Noche de linternas",
    bg: "bg-gradient-to-br from-noche to-morado",
    ring: "ring-dorado/60",
  },
  [THEMES.castillo]: {
    label: "Castillo Real",
    emoji: "🏰",
    description: "Blanco & Dorado",
    bg: "bg-gradient-to-br from-white to-purple-100",
    ring: "ring-amber-300",
  },
  [THEMES.amanecer]: {
    label: "Amanecer",
    emoji: "🌅",
    description: "Glassmorphism rosado",
    bg: "bg-gradient-to-br from-rose-100 to-purple-100",
    ring: "ring-rose-300",
  },
  [THEMES.jardin]: {
    label: "Jardín de Flores",
    emoji: "🌸",
    description: "Acuarela botánica",
    bg: "bg-gradient-to-br from-white to-purple-50",
    ring: "ring-purple-300",
  },
  [THEMES.porcelana]: {
    label: "Porcelana",
    emoji: "🤍",
    description: "Minimalismo violeta",
    bg: "bg-gradient-to-br from-white to-violet-50",
    ring: "ring-violet-300",
  },
  [THEMES.terciopelo]: {
    label: "Terciopelo",
    emoji: "👑",
    description: "Lila intenso & rosa",
    bg: "bg-gradient-to-br from-purple-800 to-fuchsia-900",
    ring: "ring-pink-400/60",
  },
  [THEMES.ensueno]: {
    label: "Ensueño",
    emoji: "✨",
    description: "Lila soñador pastel",
    bg: "bg-gradient-to-br from-purple-300 to-fuchsia-200",
    ring: "ring-purple-400",
  },
};

/**
 * FAB en la esquina inferior izquierda — Selector de Tema Visual.
 * Icono de varita mágica. Despliega un mini-menú con los 3 temas.
 */
export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2.5, type: "spring", stiffness: 200 }}
    >
      {/* Mini-menú desplegable */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
            className="absolute bottom-20 left-0 flex flex-col gap-2 min-w-[180px]"
          >
            {Object.entries(THEME_META).map(([key, meta]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setTheme(key);
                  setOpen(false);
                }}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl font-body text-sm cursor-pointer
                  border transition-all duration-300 backdrop-blur-md
                  ${
                    theme === key
                      ? `${meta.bg} text-white border-white/30 shadow-lg ring-2 ${meta.ring}`
                      : "bg-white/80 text-purple-900 border-purple-200/50 hover:bg-white/90 hover:border-purple-300"
                  }
                `}
              >
                <span className="text-xl">{meta.emoji}</span>
                <div className="text-left">
                  <p className="font-semibold leading-tight">{meta.label}</p>
                  <p
                    className={`text-xs ${theme === key ? "text-white/70" : "text-purple-400"}`}
                  >
                    {meta.description}
                  </p>
                </div>
                {theme === key && <span className="ml-auto text-xs">✓</span>}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón principal (varita mágica) */}
      <button
        onClick={() => setOpen(!open)}
        className={`
          group relative w-14 h-14 rounded-full flex items-center justify-center
          cursor-pointer outline-none focus:outline-none
          transition-all duration-500
          ${
            theme === "magico"
              ? "bg-gradient-to-br from-morado to-lila-dark shadow-[0_0_25px_rgba(106,13,173,0.5)]"
              : theme === "castillo"
                ? "bg-gradient-to-br from-white to-purple-100 shadow-xl border border-amber-200"
                : theme === "jardin"
                  ? "bg-gradient-to-br from-white to-purple-50 shadow-lg border border-purple-200/50"
                  : theme === "porcelana"
                    ? "bg-white shadow-lg border border-violet-200"
                    : theme === "terciopelo"
                      ? "bg-gradient-to-br from-purple-800 to-fuchsia-900 shadow-[0_0_25px_rgba(168,85,247,0.4)]"
                      : theme === "ensueno"
                        ? "bg-gradient-to-br from-purple-300 to-fuchsia-200 shadow-lg border border-purple-300/50"
                        : "bg-gradient-to-br from-rose-200 to-purple-100 shadow-lg border border-rose-200/60"
          }
        `}
        aria-label="Cambiar tema visual"
      >
        {/* Icono varita mágica */}
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl"
        >
          {open ? "✕" : "🪄"}
        </motion.span>

        {/* Glow ring */}
        <div
          className={`
          absolute inset-0 rounded-full transition-all duration-500
          ${
            theme === "magico"
              ? "shadow-[0_0_20px_rgba(201,160,220,0.4)]"
              : theme === "castillo"
                ? "shadow-[0_0_20px_rgba(217,180,60,0.3)]"
                : theme === "jardin"
                  ? "shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                  : theme === "porcelana"
                    ? "shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                    : theme === "terciopelo"
                      ? "shadow-[0_0_20px_rgba(236,72,153,0.35)]"
                      : theme === "ensueno"
                        ? "shadow-[0_0_20px_rgba(147,51,234,0.3)]"
                        : "shadow-[0_0_20px_rgba(244,114,182,0.3)]"
          }
        `}
        />
      </button>
    </motion.div>
  );
}
