import { useTheme, THEMES } from "../context/ThemeContext";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   CloudBackground – Nubes / humo lila fotorrealista
   Solo visible en tema "bruma"
   ────────────────────────────────────────────── */

const clouds = [
  {
    top: "5%",
    left: "-10%",
    w: "60vw",
    h: "35vh",
    dur: 25,
    blur: 80,
    opacity: 0.2,
    color: "rgba(212,181,232,0.3)",
  },
  {
    top: "20%",
    left: "30%",
    w: "70vw",
    h: "40vh",
    dur: 30,
    blur: 100,
    opacity: 0.15,
    color: "rgba(201,160,220,0.25)",
  },
  {
    top: "45%",
    left: "-20%",
    w: "80vw",
    h: "30vh",
    dur: 35,
    blur: 90,
    opacity: 0.18,
    color: "rgba(232,213,245,0.3)",
  },
  {
    top: "60%",
    left: "20%",
    w: "65vw",
    h: "35vh",
    dur: 28,
    blur: 110,
    opacity: 0.12,
    color: "rgba(212,181,232,0.2)",
  },
  {
    top: "75%",
    left: "-5%",
    w: "55vw",
    h: "25vh",
    dur: 22,
    blur: 70,
    opacity: 0.2,
    color: "rgba(237,218,247,0.25)",
  },
  {
    top: "85%",
    left: "40%",
    w: "50vw",
    h: "30vh",
    dur: 32,
    blur: 95,
    opacity: 0.14,
    color: "rgba(201,160,220,0.2)",
  },
];

export default function CloudBackground() {
  const { theme } = useTheme();

  if (theme !== THEMES.bruma) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Gradiente base lila/blanco */}
      <div className="absolute inset-0 bg-gradient-to-b from-lila-pastel/30 via-white/60 to-lila-light/20" />

      {/* Nubes / humo */}
      {clouds.map((c, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            top: c.top,
            left: c.left,
            width: c.w,
            height: c.h,
            background: `radial-gradient(ellipse at center, ${c.color}, transparent 70%)`,
            filter: `blur(${c.blur}px)`,
          }}
          animate={{
            x: ["-5%", "5%", "-5%"],
            opacity: [c.opacity, c.opacity + 0.1, c.opacity],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: c.dur,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Capa de brillo suave */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 30%, rgba(255,255,255,0.4) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
