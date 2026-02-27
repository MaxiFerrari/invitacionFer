import { useMemo } from "react";
import { useTheme } from "../context/ThemeContext";

/**
 * Fondo atmosférico de bosque oscuro — solo visible en tema "bosque".
 * Gradientes oscuros, luciérnagas animadas y capas de neblina.
 * 100 % CSS, sin imágenes externas.
 */
export default function ForestBackground() {
  const { theme } = useTheme();

  const fireflies = useMemo(
    () =>
      Array.from({ length: 28 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: 10 + Math.random() * 80,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 12,
        duration: 6 + Math.random() * 8,
      })),
    [],
  );

  if (theme !== "bosque") return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Gradiente base bosque */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050f05] via-bosque to-[#0a1a0a]" />

      {/* Textura vertical — siluetas de árboles */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 100%),
            repeating-linear-gradient(
              90deg,
              transparent 0px, transparent 60px,
              rgba(13,31,13,0.8) 60px, rgba(13,31,13,0.8) 65px,
              transparent 65px, transparent 140px,
              rgba(20,40,20,0.6) 140px, rgba(20,40,20,0.6) 148px,
              transparent 148px, transparent 220px
            )
          `,
        }}
      />

      {/* Copa de árboles — gradiente superior */}
      <div className="absolute top-0 left-0 right-0 h-[30vh] bg-gradient-to-b from-[#030a03] via-[#081808]/80 to-transparent" />

      {/* Suelo — gradiente inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-[15vh] bg-gradient-to-t from-[#0a0f06] via-[#1a2a10]/60 to-transparent" />

      {/* Neblina capa 1 */}
      <div
        className="absolute left-0 right-0 h-[40vh] bottom-[10%] opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 120% 100% at 50% 100%, rgba(184,197,184,0.35) 0%, transparent 70%)",
          animation: "fog-drift 20s ease-in-out infinite",
        }}
      />

      {/* Neblina capa 2 */}
      <div
        className="absolute left-0 right-0 h-[35vh] bottom-[5%] opacity-15"
        style={{
          background:
            "radial-gradient(ellipse 140% 100% at 40% 100%, rgba(184,197,184,0.3) 0%, transparent 60%)",
          animation: "fog-drift-reverse 25s ease-in-out infinite",
        }}
      />

      {/* Neblina capa 3 — alta */}
      <div
        className="absolute left-0 right-0 h-[25vh] top-[30%] opacity-10"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 60% 50%, rgba(184,197,184,0.25) 0%, transparent 70%)",
          animation: "fog-drift 30s ease-in-out infinite",
        }}
      />

      {/* Luciérnagas */}
      {fireflies.map((f) => (
        <div
          key={f.id}
          className="absolute rounded-full"
          style={{
            left: `${f.left}%`,
            top: `${f.top}%`,
            width: f.size,
            height: f.size,
            background: `radial-gradient(circle, rgba(200,255,100,0.9) 0%, rgba(180,230,60,0.4) 50%, transparent 100%)`,
            boxShadow: `0 0 ${f.size * 3}px rgba(200,255,100,0.5), 0 0 ${f.size * 6}px rgba(180,230,60,0.2)`,
            animation: `firefly ${f.duration}s ease-in-out ${f.delay}s infinite`,
          }}
        />
      ))}

      {/* Vignette overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 0%, rgba(5,15,5,0.5) 100%)",
        }}
      />
    </div>
  );
}
