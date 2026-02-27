import { useTheme, THEMES } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* ──────────────────────────────────────────────
   ThemeSwitcher – FAB para cambiar entre 3 temas
   ────────────────────────────────────────────── */

const themeOptions = [
  {
    id: THEMES.flores,
    label: "Bosque de Flores",
    emoji: "🌸",
    colors: ["#d4b5e8", "#e8d5f5", "#ffffff"],
  },
  {
    id: THEMES.editorial,
    label: "Cuento Editorial",
    emoji: "📖",
    colors: ["#fff8e7", "#b76e79", "#5c1d6e"],
  },
  {
    id: THEMES.bruma,
    label: "Bruma Real",
    emoji: "☁️",
    colors: ["#e8d5f5", "#d4b5e8", "#c9a0dc"],
  },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Botón FAB principal */}
      <motion.button
        onClick={() => setIsOpen((o) => !o)}
        className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md border border-lila-light/40 shadow-lg shadow-lila/10 flex items-center justify-center text-xl hover:bg-white transition-colors duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Cambiar diseño"
      >
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          🎨
        </motion.span>
      </motion.button>

      {/* Panel de opciones */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-14 right-0 bg-white/90 backdrop-blur-xl border border-lila-light/30 rounded-2xl shadow-2xl shadow-lila/15 overflow-hidden min-w-[200px]"
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ duration: 0.25 }}
          >
            <div className="p-2">
              <p className="px-3 py-2 text-[10px] font-body tracking-[0.2em] uppercase text-lila-dark/50">
                Elegir diseño
              </p>
              {themeOptions.map((opt) => (
                <motion.button
                  key={opt.id}
                  onClick={() => {
                    setTheme(opt.id);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all duration-200 ${
                    theme === opt.id
                      ? "bg-lila-pastel/40 text-lila-dark"
                      : "hover:bg-lila-pastel/20 text-lila-dark/70"
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="text-lg">{opt.emoji}</span>
                  <div className="flex-1">
                    <p className="font-body text-sm font-medium">{opt.label}</p>
                  </div>
                  {/* Mini paleta de colores */}
                  <div className="flex gap-0.5">
                    {opt.colors.map((c, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-full border border-white/50"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                  {theme === opt.id && (
                    <motion.span
                      className="text-rosa-oro text-sm ml-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    >
                      ✓
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
