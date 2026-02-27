import { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * Fondo animado de cielo estrellado con faroles flotantes y destellos dorados.
 * Solo visible en tema "luces". Versión mejorada con más partículas.
 */
export default function FloatingLanterns({ count = 30 }) {
  const { theme } = useTheme();

  const lanterns = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 14 + Math.random() * 22,
        delay: Math.random() * 18,
        duration: 14 + Math.random() * 12,
        opacity: 0.35 + Math.random() * 0.45,
      })),
    [count],
  );

  const stars = useMemo(
    () =>
      Array.from({ length: 100 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 70,
        size: 1 + Math.random() * 2.5,
        delay: Math.random() * 5,
        duration: 2 + Math.random() * 3,
      })),
    [],
  );

  const sparkles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 15,
        duration: 8 + Math.random() * 7,
      })),
    [],
  );

  if (theme !== "luces") return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Cielo con gradiente profundo */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06062a] via-cielo to-[#1a1060]/80 animate-gradient" />

      {/* Nebulosa sutil */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 30% 20%, rgba(106,13,173,0.3) 0%, transparent 60%), radial-gradient(ellipse 50% 30% at 70% 60%, rgba(75,0,130,0.2) 0%, transparent 60%)",
        }}
      />

      {/* Estrellas */}
      {stars.map((s) => (
        <div
          key={`star-${s.id}`}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.left}%`,
            top: `${s.top}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        />
      ))}

      {/* Destellos dorados cayendo */}
      {sparkles.map((sp) => (
        <div
          key={`sparkle-${sp.id}`}
          className="absolute"
          style={{
            left: `${sp.left}%`,
            width: sp.size,
            height: sp.size,
            background:
              "radial-gradient(circle, rgba(255,215,0,0.9) 0%, rgba(255,215,0,0.3) 40%, transparent 70%)",
            boxShadow: `0 0 ${sp.size * 2}px rgba(255,215,0,0.5)`,
            animation: `sparkle-fall ${sp.duration}s linear ${sp.delay}s infinite`,
          }}
        />
      ))}

      {/* Faroles flotantes */}
      {lanterns.map((l) => (
        <div
          key={l.id}
          className="absolute"
          style={{
            left: `${l.left}%`,
            bottom: "-12%",
            animation: `lantern-rise ${l.duration}s ease-in ${l.delay}s infinite`,
          }}
        >
          <div
            className="relative"
            style={{ width: l.size, height: l.size * 1.3 }}
          >
            {/* Glow exterior amplio */}
            <div
              className="absolute inset-0 rounded-full bg-dorado/25 blur-2xl animate-glow"
              style={{ transform: "scale(3)" }}
            />
            {/* Halo medio */}
            <div
              className="absolute inset-0 rounded-full bg-dorado/15 blur-xl"
              style={{ transform: "scale(2)" }}
            />
            {/* Cuerpo del farol */}
            <div
              className="absolute inset-0 rounded-t-full rounded-b-lg"
              style={{
                background:
                  "radial-gradient(ellipse at center, #FFD700 0%, #F5CC00 40%, #B8860B 100%)",
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

      {/* Glow ambiental inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-[20vh] bg-gradient-to-t from-[#1a1060]/30 to-transparent" />
    </div>
  );
}
