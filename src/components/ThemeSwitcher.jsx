import { motion, AnimatePresence } from "framer-motion";
import { useTheme, THEMES } from "../context/ThemeContext";
import { useState } from "react";

const THEME_META = {
  [THEMES.encanto]: {
    label: "Encanto Real",
    description: "Moderno, sol dorado y lila",
    bg: "bg-gradient-to-br from-white to-purple-100",
    ring: "ring-amber-300",
    accentColor: "#C9A0DC",
  },
  [THEMES.bosque]: {
    label: "Bosque Susurrante",
    description: "Bosque nocturno, neblina",
    bg: "bg-gradient-to-br from-[#0d1f0d] to-[#1a3a1a]",
    ring: "ring-amber-700/60",
    accentColor: "#2d4a2d",
  },
  [THEMES.luces]: {
    label: "Noche de Luces",
    description: "Cielo estrellado, faroles",
    bg: "bg-gradient-to-br from-[#0a0a2e] to-[#1a1060]",
    ring: "ring-dorado/60",
    accentColor: "#1a0a2e",
  },
};

/** SVG de un farol antiguo (old lantern icon) */
function LanternIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 32 40"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Handle */}
      <path
        d="M12 4 C12 2, 20 2, 20 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <line
        x1="16"
        y1="2"
        x2="16"
        y2="0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Top cap */}
      <rect
        x="10"
        y="5"
        width="12"
        height="3"
        rx="1"
        fill="currentColor"
        opacity="0.8"
      />
      {/* Glass body */}
      <path
        d="M10 8 L8 30 Q8 33 16 33 Q24 33 24 30 L22 8 Z"
        fill="currentColor"
        opacity="0.3"
        stroke="currentColor"
        strokeWidth="1"
      />
      {/* Flame */}
      <ellipse cx="16" cy="19" rx="3" ry="5" fill="#FFD700" opacity="0.9" />
      <ellipse cx="16" cy="18" rx="1.5" ry="3" fill="#FFFACD" opacity="0.8" />
      {/* Bottom cap */}
      <rect
        x="9"
        y="33"
        width="14"
        height="3"
        rx="1"
        fill="currentColor"
        opacity="0.8"
      />
      {/* Bottom ring */}
      <ellipse
        cx="16"
        cy="38"
        rx="4"
        ry="1.5"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        opacity="0.5"
      />
    </svg>
  );
}

/**
 * FAB en la esquina inferior izquierda — Selector de Tema Visual.
 * Icono de farol antiguo. Despliega un mini-menú con los 3 diseños.
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
            className="absolute bottom-20 left-0 flex flex-col gap-2 min-w-[200px]"
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
                      ? `${meta.bg} ${key === "encanto" ? "text-purple-900" : "text-white"} border-white/30 shadow-lg ring-2 ${meta.ring}`
                      : "bg-white/80 text-purple-900 border-purple-200/50 hover:bg-white/90 hover:border-purple-300"
                  }
                `}
              >
                <LanternIcon
                  className={`w-5 h-7 flex-shrink-0 ${theme === key ? (key === "encanto" ? "text-amber-600" : "text-amber-300") : "text-purple-400"}`}
                />
                <div className="text-left">
                  <p className="font-semibold leading-tight">{meta.label}</p>
                  <p
                    className={`text-xs ${theme === key ? (key === "encanto" ? "text-purple-500" : "text-white/60") : "text-purple-400"}`}
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

      {/* Botón principal (farol antiguo) */}
      <button
        onClick={() => setOpen(!open)}
        className={`
          group relative w-14 h-14 rounded-full flex items-center justify-center
          cursor-pointer outline-none focus:outline-none
          transition-all duration-500
          ${
            theme === "encanto"
              ? "bg-gradient-to-br from-white to-purple-100 shadow-xl border border-amber-200"
              : theme === "bosque"
                ? "bg-gradient-to-br from-[#1a3a1a] to-[#2d4a2d] shadow-[0_0_25px_rgba(45,74,45,0.5)] border border-amber-900/40"
                : "bg-gradient-to-br from-morado to-noche shadow-[0_0_25px_rgba(106,13,173,0.5)] border border-dorado/30"
          }
        `}
        aria-label="Cambiar tema visual"
      >
        <motion.div
          animate={{ rotate: open ? 20 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {open ? (
            <span className="text-2xl">✕</span>
          ) : (
            <LanternIcon
              className={`w-6 h-8 ${
                theme === "encanto"
                  ? "text-purple-600"
                  : theme === "bosque"
                    ? "text-amber-400"
                    : "text-dorado"
              }`}
            />
          )}
        </motion.div>

        {/* Glow ring */}
        <div
          className={`
          absolute inset-0 rounded-full transition-all duration-500
          ${
            theme === "encanto"
              ? "shadow-[0_0_20px_rgba(217,180,60,0.3)]"
              : theme === "bosque"
                ? "shadow-[0_0_20px_rgba(200,255,100,0.2)]"
                : "shadow-[0_0_20px_rgba(255,215,0,0.4)]"
          }
        `}
        />
      </button>
    </motion.div>
  );
}
