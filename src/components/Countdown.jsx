import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/** Fecha del evento: 15 de Octubre de 2026, 18:00 hrs */
const EVENT_DATE = new Date("2026-10-15T18:00:00");

function calculateTimeLeft() {
  const now = new Date();
  const diff = EVENT_DATE - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, finished: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    finished: false,
  };
}

function TimeUnit({ value, label, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="flex flex-col items-center"
    >
      <div className="relative">
        {/* Glow */}
        <div className="absolute inset-0 bg-dorado/10 rounded-2xl blur-xl" />
        <div className="relative w-20 h-24 md:w-28 md:h-32 flex items-center justify-center rounded-2xl border border-dorado/30 bg-noche/60 backdrop-blur-md shadow-[0_0_20px_rgba(255,215,0,0.1)]">
          <span className="font-elegant text-4xl md:text-5xl font-bold text-dorado tabular-nums">
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="mt-3 text-xs md:text-sm font-body uppercase tracking-[0.2em] text-lila-light/70">
        {label}
      </span>
    </motion.div>
  );
}

/**
 * Cuenta Regresiva al gran día.
 */
export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
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
        {/* Título */}
        <h2 className="font-fairy text-4xl md:text-5xl text-dorado mb-2">
          Faltan
        </h2>
        <p className="font-elegant text-lila-light/60 text-lg mb-10 italic">
          para que se cumpla mi sueño
        </p>

        {/* Timer */}
        {timeLeft.finished ? (
          <motion.p
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="font-fairy text-5xl text-dorado"
          >
            ¡Es hoy! ✨
          </motion.p>
        ) : (
          <div className="flex justify-center gap-3 md:gap-6">
            {units.map((unit, i) => (
              <TimeUnit
                key={unit.label}
                value={unit.value}
                label={unit.label}
                index={i}
              />
            ))}
          </div>
        )}

        {/* Decorador inferior */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="w-48 h-[1px] mx-auto mt-12 bg-gradient-to-r from-transparent via-lila to-transparent"
        />
      </motion.div>
    </section>
  );
}
