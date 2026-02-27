import { useTheme, THEMES } from "../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

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
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 6000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      {/* Tooltip de ayuda */}
      <AnimatePresence>
        {showHint && !isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-lila-dark/90 text-white text-sm px-4 py-2 rounded-xl backdrop-blur-sm border border-lila/30 font-body shadow-lg"
          >
            Cambia el diseño ✨
            <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-lila-dark/90 rotate-45 border-r border-t border-lila/30" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón FAB principal — siempre visible */}
      <button
        onClick={() => { setIsOpen((o) => !o); setShowHint(false); }}
        className="relative w-14 h-14 rounded-full border-2 border-white/50 shadow-xl flex items-center justify-center text-xl text-white hover:shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
        style={{
          background: "linear-gradient(135deg, #7b2d8e 0%, #b76e79 100%)",
          boxShadow: "0 4px 20px rgba(123,45,142,0.4)",
        }}
        aria-label="Cambiar diseño"
      >
        {/* Anillo pulsante para llamar atención */}
        {showHint && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-lila-light"
            animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        )}
        <span className={`inline-block transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}>
          🎨
        </span>
      </button>

      {/* Panel de opciones */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-16 right-0 bg-white/95 backdrop-blur-xl border border-lila-light/30 rounded-2xl shadow-2xl overflow-hidden min-w-[220px]"
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
