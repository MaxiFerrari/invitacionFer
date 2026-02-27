import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Reproductor musical flotante estilizado como linterna mágica.
 * Usa useRef para controlar el elemento <audio>.
 */
export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  // Ocultar el tooltip después de unos segundos
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay bloqueado por el navegador, silenciar error
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      {/* Elemento de audio oculto */}
      <audio ref={audioRef} loop preload="none" src="/music/song.mp3" />

      {/* Botón flotante (FAB) — linterna mágica */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-morado/90 text-white text-sm px-4 py-2 rounded-xl backdrop-blur-sm border border-lila/30 font-body"
            >
              🎵 Toca para la música
              <div className="absolute top-1/2 -translate-y-1/2 -right-1.5 w-3 h-3 bg-morado/90 rotate-45 border-r border-t border-lila/30" />
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={togglePlay}
          className="group relative w-16 h-16 rounded-full flex items-center justify-center cursor-pointer outline-none focus:outline-none"
          aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
        >
          {/* Glow animado */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-500 ${
              isPlaying
                ? "bg-dorado/40 shadow-[0_0_40px_rgba(255,215,0,0.6)] animate-glow"
                : "bg-dorado/20 shadow-[0_0_20px_rgba(255,215,0,0.3)]"
            }`}
          />

          {/* Cuerpo de la linterna */}
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-dorado via-dorado-soft to-dorado-dark flex items-center justify-center border-2 border-dorado/60 transition-transform duration-300 group-hover:scale-110">
            {/* Icono */}
            <span className="text-noche text-2xl transition-transform duration-300">
              {isPlaying ? (
                <svg
                  className="w-7 h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7 ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <polygon points="5,3 19,12 5,21" />
                </svg>
              )}
            </span>
          </div>

          {/* Ondas de sonido cuando reproduce */}
          {isPlaying && (
            <>
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dorado/30"
                animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-dorado/20"
                animate={{ scale: [1, 1.8, 1.8], opacity: [0.3, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </>
          )}
        </button>
      </motion.div>
    </>
  );
}
