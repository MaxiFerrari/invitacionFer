import { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * Fondo animado de cielo nocturno con linternas flotantes al estilo Tangled.
 * Cada linterna tiene un delay y duración aleatorios para un efecto orgánico.
 * Solo visible en tema "mágico"; en otros temas se desvanece.
 */
export default function FloatingLanterns({ count = 25 }) {
  const { theme } = useTheme();

  const lanterns = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 12 + Math.random() * 24,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 10,
      opacity: 0.3 + Math.random() * 0.5,
    }));
  }, [count]);

  return (
    <div className={`fixed inset-0 overflow-hidden pointer-events-none z-0 transition-opacity duration-700 ${
      theme === 'magico' ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Cielo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-b from-noche via-noche-light to-morado/40 animate-gradient" />

      {/* Estrellas */}
      {Array.from({ length: 50 }, (_, i) => (
        <div
          key={`star-${i}`}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            width: 1 + Math.random() * 3,
            height: 1 + Math.random() * 3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 60}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Linternas flotantes */}
      {lanterns.map((l) => (
        <div
          key={l.id}
          className="absolute"
          style={{
            left: `${l.left}%`,
            bottom: "-10%",
            animation: `lantern-rise ${l.duration}s ease-in ${l.delay}s infinite`,
          }}
        >
          {/* Cuerpo de la linterna */}
          <div
            className="relative"
            style={{ width: l.size, height: l.size * 1.3 }}
          >
            {/* Glow exterior */}
            <div
              className="absolute inset-0 rounded-full bg-dorado/30 blur-xl animate-glow"
              style={{ transform: "scale(2.5)" }}
            />
            {/* Cuerpo */}
            <div
              className="absolute inset-0 rounded-t-full rounded-b-lg"
              style={{
                background: `radial-gradient(ellipse at center, #FFD700 0%, #F5CC00 40%, #B8860B 100%)`,
                opacity: l.opacity,
              }}
            />
            {/* Llama interior */}
            <div
              className="absolute top-1/4 left-1/4 w-1/2 h-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, #FFFACD 0%, #FFD700 60%, transparent 100%)",
                filter: "blur(2px)",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
