import { useTheme, THEMES } from "../context/ThemeContext";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   VineDecoration – Enredaderas laterales fijas
   con flores lilas y destellos
   Solo visible en tema "flores"
   ────────────────────────────────────────────── */

const sparkles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  top: `${8 + i * 7.5}%`,
  left: i % 2 === 0 ? "12px" : "auto",
  right: i % 2 === 0 ? "auto" : "12px",
  delay: i * 0.4,
  size: 3 + (i % 3),
}));

function FlowerSVG({ className = "", style = {} }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`w-6 h-6 md:w-8 md:h-8 ${className}`}
      style={style}
      fill="none"
    >
      {/* Petalos lilas */}
      {[0, 72, 144, 216, 288].map((angle) => (
        <ellipse
          key={angle}
          cx="20"
          cy="10"
          rx="6"
          ry="10"
          fill="#d4b5e8"
          opacity="0.85"
          transform={`rotate(${angle} 20 20)`}
        />
      ))}
      {/* Centro rosa-oro */}
      <circle cx="20" cy="20" r="5" fill="#b76e79" />
      <circle cx="20" cy="20" r="3" fill="#e8c4c4" opacity="0.7" />
    </svg>
  );
}

function VineSVG({ side = "left" }) {
  const isLeft = side === "left";
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 60 800"
      preserveAspectRatio="none"
      fill="none"
    >
      {/* Tallo principal */}
      <path
        d={
          isLeft
            ? "M5,0 C20,100 8,200 25,300 C10,400 22,500 15,600 C25,700 10,800 5,800"
            : "M55,0 C40,100 52,200 35,300 C50,400 38,500 45,600 C35,700 50,800 55,800"
        }
        stroke="#c9a0dc"
        strokeWidth="2.5"
        opacity="0.5"
        fill="none"
      />
      {/* Ramitas */}
      {[100, 250, 400, 550, 700].map((y, i) => (
        <path
          key={i}
          d={
            isLeft
              ? `M${10 + i * 2},${y} Q${30 + i * 3},${y - 15} ${40 + i * 2},${y - 5}`
              : `M${50 - i * 2},${y} Q${30 - i * 3},${y - 15} ${20 - i * 2},${y - 5}`
          }
          stroke="#d4b5e8"
          strokeWidth="1.5"
          opacity="0.4"
          fill="none"
        />
      ))}
      {/* Hojitas */}
      {[80, 180, 320, 460, 600, 740].map((y, i) => (
        <ellipse
          key={`leaf-${i}`}
          cx={isLeft ? 18 + (i % 3) * 5 : 42 - (i % 3) * 5}
          cy={y}
          rx="5"
          ry="9"
          fill="#d4b5e8"
          opacity="0.25"
          transform={`rotate(${isLeft ? 20 + i * 10 : -20 - i * 10} ${isLeft ? 18 + (i % 3) * 5 : 42 - (i % 3) * 5} ${y})`}
        />
      ))}
    </svg>
  );
}

export default function VineDecoration() {
  const { theme } = useTheme();

  if (theme !== THEMES.flores) return null;

  const flowerPositions = [
    { top: "8%", offset: "6px" },
    { top: "22%", offset: "10px" },
    { top: "38%", offset: "4px" },
    { top: "52%", offset: "14px" },
    { top: "68%", offset: "8px" },
    { top: "82%", offset: "12px" },
  ];

  return (
    <>
      {/* ── Enredadera IZQUIERDA ── */}
      <motion.div
        className="fixed left-0 inset-y-0 w-12 md:w-16 z-10 pointer-events-none"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ animation: "vine-sway 8s ease-in-out infinite" }}
      >
        <VineSVG side="left" />
        {flowerPositions.map((pos, i) => (
          <motion.div
            key={`lf-${i}`}
            className="absolute"
            style={{ top: pos.top, left: pos.offset }}
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.6, type: "spring" }}
          >
            <FlowerSVG />
          </motion.div>
        ))}
      </motion.div>

      {/* ── Enredadera DERECHA ── */}
      <motion.div
        className="fixed right-0 inset-y-0 w-12 md:w-16 z-10 pointer-events-none"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{ animation: "vine-sway 8s ease-in-out infinite reverse" }}
      >
        <VineSVG side="right" />
        {flowerPositions.map((pos, i) => (
          <motion.div
            key={`rf-${i}`}
            className="absolute"
            style={{ top: pos.top, right: pos.offset }}
            initial={{ scale: 0, rotate: 20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.7 + i * 0.2, duration: 0.6, type: "spring" }}
          >
            <FlowerSVG />
          </motion.div>
        ))}
      </motion.div>

      {/* ── Destellos flotantes ── */}
      {sparkles.map((s) => (
        <motion.div
          key={`sparkle-${s.id}`}
          className="fixed z-10 pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            right: s.right,
            width: s.size,
            height: s.size,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 2.5,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div
            className="w-full h-full rounded-full bg-rosa-oro-glow"
            style={{ boxShadow: "0 0 6px 2px rgba(183,110,121,0.4)" }}
          />
        </motion.div>
      ))}
    </>
  );
}
