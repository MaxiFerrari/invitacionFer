import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme, S, fonts } from "../context/ThemeContext";

const EVENT_DATE = new Date("2026-03-23T18:00:00");

function calculateTimeLeft() {
  const diff = EVENT_DATE - new Date();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    finished: false,
  };
}

function TimeUnit({ value, label, index, theme }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        <div className={`absolute inset-0 rounded-2xl blur-xl transition-colors duration-500 ${S.countdownGlow[theme]}`} />
        <div className={`relative w-20 h-24 md:w-28 md:h-32 flex items-center justify-center border transition-all duration-500 ${S.countdownUnit[theme]}`}>
          <span className={`${fonts.heading[theme]} text-4xl md:text-5xl font-bold tabular-nums transition-colors duration-500 ${S.countdownValue[theme]}`}>
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className={`mt-3 text-xs md:text-sm font-body uppercase tracking-[0.2em] transition-colors duration-500 ${S.countdownLabel[theme]}`}>
        {label}
      </span>
    </motion.div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const units = [
    { value: timeLeft.days, label: "Días" },
    { value: timeLeft.hours, label: "Horas" },
    { value: timeLeft.minutes, label: "Minutos" },
    { value: timeLeft.seconds, label: "Segundos" },
  ];

  return (
    <section className="relative z-10 py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className={`${fonts.title[theme]} text-4xl md:text-5xl mb-2 transition-colors duration-500 ${S.sectionTitle[theme]}`}>
          Faltan
        </h2>
        <p className={`${fonts.heading[theme]} text-lg mb-10 italic transition-colors duration-500 ${S.subtitleMuted[theme]}`}>
          para que se cumpla mi sueño
        </p>

        {timeLeft.finished ? (
          <motion.p initial={{ scale: 0 }} animate={{ scale: 1 }}
            className={`${fonts.title[theme]} text-5xl transition-colors duration-500 ${S.sectionTitle[theme]}`}>
            ¡Es hoy! ✨
          </motion.p>
        ) : (
          <div className="flex justify-center gap-3 md:gap-6">
            {units.map((u, i) => (
              <TimeUnit key={u.label} value={u.value} label={u.label} index={i} theme={theme} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className={`w-48 h-[1px] mx-auto mt-12 transition-all duration-500 ${S.decorLineLila[theme]}`}
        />
      </motion.div>
    </section>
  );
}
