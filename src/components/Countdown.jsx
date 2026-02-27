import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

/* ──────────────────────────────────────────────
   Countdown – Cuenta regresiva al 23 de Marzo 2026
   ────────────────────────────────────────────── */

const TARGET = new Date("2026-03-23T18:00:00-06:00").getTime();

function calcTimeLeft() {
  const now = Date.now();
  const diff = TARGET - now;
  if (diff <= 0) return { dias: 0, horas: 0, minutos: 0, segundos: 0 };
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  };
}

const labels = { dias: "Días", horas: "Horas", minutos: "Min", segundos: "Seg" };

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function Countdown() {
  const { styles: s } = useTheme();
  const [time, setTime] = useState(calcTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.section
      className={`${s.sectionBg} py-24 md:py-32 px-6 md:px-10 transition-all duration-1000`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <div className={`${s.layoutClass} px-2 md:px-4`}>
        <h2
          className={`${s.headingFont} text-3xl md:text-4xl ${s.headingColor} mb-2 text-center`}
        >
          Faltan
        </h2>
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="block w-10 h-px bg-rosa-oro/30" />
          <span className="text-rosa-oro text-sm">✦</span>
          <span className="block w-10 h-px bg-rosa-oro/30" />
        </div>

        <div className="flex justify-center gap-5 md:gap-8 flex-wrap">
          {Object.entries(time).map(([key, val]) => (
            <motion.div
              key={key}
              className={`${s.countdownBg} ${s.cardRounded} px-6 py-8 md:px-10 md:py-10 min-w-[80px] md:min-w-[100px] text-center transition-all duration-1000`}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className={`block ${s.headingFont} text-3xl md:text-5xl font-light ${s.countdownNum}`}
                key={val}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {String(val).padStart(2, "0")}
              </motion.span>
              <span
                className={`block ${s.bodyFont} text-[10px] md:text-xs uppercase tracking-widest mt-2 ${s.countdownLabel}`}
              >
                {labels[key]}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
