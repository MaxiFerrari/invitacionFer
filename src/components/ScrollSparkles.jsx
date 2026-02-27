import { useTheme, THEMES } from "../context/ThemeContext";
import { useEffect, useState } from "react";

/* ──────────────────────────────────────────────
   ScrollSparkles – Destellos dorados / purpurina
   que aparecen al hacer scroll
   Solo visible en tema "editorial"
   ────────────────────────────────────────────── */

function randomBetween(a, b) {
  return Math.random() * (b - a) + a;
}

export default function ScrollSparkles() {
  const { theme } = useTheme();
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    if (theme !== THEMES.editorial) return;

    let ticking = false;
    let sparkleId = 0;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const count = Math.floor(randomBetween(2, 5));
        const newSparkles = Array.from({ length: count }, () => ({
          id: sparkleId++,
          x: randomBetween(5, 95),
          y: randomBetween(0, 100),
          size: randomBetween(2, 6),
          duration: randomBetween(1.5, 3),
          delay: randomBetween(0, 0.5),
          opacity: randomBetween(0.4, 0.9),
        }));

        setSparkles((prev) => {
          const combined = [...prev, ...newSparkles];
          // Máximo 40 partículas activas
          return combined.slice(-40);
        });

        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  // Cleanup: remover sparkles expirados
  useEffect(() => {
    if (sparkles.length === 0) return;
    const timer = setTimeout(() => {
      setSparkles((prev) => prev.slice(Math.floor(prev.length / 3)));
    }, 3500);
    return () => clearTimeout(timer);
  }, [sparkles.length]);

  if (theme !== THEMES.editorial) return null;

  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            opacity: 0,
            background: `radial-gradient(circle, rgba(183,110,121,${s.opacity}) 0%, rgba(212,160,160,0.5) 50%, transparent 100%)`,
            boxShadow: `0 0 ${s.size * 2}px rgba(183,110,121,0.4)`,
            animation: `sparkle-fall ${s.duration}s ${s.delay}s ease-out forwards`,
          }}
        />
      ))}
    </div>
  );
}
