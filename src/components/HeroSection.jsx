import { useTheme, THEMES } from "../context/ThemeContext";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   HeroSection – 3 layouts radicalmente distintos
   ────────────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

function Divider({ className = "" }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
      <span className="block w-12 h-px bg-rosa-oro/40" />
      <span className="text-rosa-oro text-lg">✦</span>
      <span className="block w-12 h-px bg-rosa-oro/40" />
    </div>
  );
}

/* ━━━━ FLORES: centralizado, mucho aire ━━━━ */
function HeroFlores({ styles: s }) {
  return (
    <section
      className={`${s.heroBg} min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden transition-all duration-1000`}
    >
      {/* Brillo decorativo sutil */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-lila-pastel/15 rounded-full blur-3xl" />

      <motion.div
        className="text-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <motion.p
          className={`${s.bodyFont} text-sm tracking-[0.3em] uppercase ${s.subtitleColor} mb-4`}
          custom={0}
          variants={fadeUp}
        >
          Mis XV Años
        </motion.p>

        <motion.h1
          className={`${s.titleFont} ${s.titleSize} ${s.titleColor} mb-2 leading-tight`}
          custom={1}
          variants={fadeUp}
        >
          Jazmín
        </motion.h1>

        <Divider />

        <motion.p
          className={`${s.bodyFont} text-lg ${s.textColor} mt-4 max-w-md mx-auto`}
          custom={3}
          variants={fadeUp}
        >
          Te invito a celebrar conmigo este día tan especial
        </motion.p>

        <motion.p
          className={`${s.headingFont} text-2xl md:text-3xl ${s.accentColor} mt-8 italic`}
          custom={4}
          variants={fadeUp}
        >
          23 de Marzo, 2026
        </motion.p>
      </motion.div>

      {/* Indicador de scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg className="w-6 h-6 text-rosa-oro/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}

/* ━━━━ EDITORIAL: asimétrico, tipografía enorme ━━━━ */
function HeroEditorial({ styles: s }) {
  return (
    <section
      className={`${s.heroBg} min-h-screen relative overflow-hidden transition-all duration-1000`}
    >
      {/* Decoración: línea diagonal de diseño */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-lila-pastel/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-px bg-gradient-to-r from-rosa-oro/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 md:px-12 min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center w-full">
          {/* Columna izquierda: nombre enorme */}
          <motion.div
            className="md:col-span-8"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <motion.p
              className={`${s.bodyFont} text-xs tracking-[0.5em] uppercase ${s.subtitleColor} mb-6`}
              custom={0}
              variants={fadeUp}
            >
              Una celebración
            </motion.p>

            <motion.h1
              className={`${s.titleFont} ${s.titleSize} ${s.titleColor} leading-none animate-gold-shimmer`}
              custom={1}
              variants={fadeUp}
            >
              Jazmín
            </motion.h1>

            <motion.div
              className="w-24 h-0.5 bg-rosa-oro/50 mt-6 mb-4"
              custom={2}
              variants={fadeUp}
            />

            <motion.p
              className={`${s.headingFont} text-xl md:text-2xl ${s.textColor} max-w-lg italic`}
              custom={3}
              variants={fadeUp}
            >
              Quince años de luz, sueños y magia
            </motion.p>
          </motion.div>

          {/* Columna derecha: fecha estilizada */}
          <motion.div
            className="md:col-span-4 text-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            <p className={`${s.headingFont} text-6xl md:text-7xl font-light ${s.accentColor}`}>
              23
            </p>
            <p className={`${s.bodyFont} text-xs tracking-[0.4em] uppercase ${s.textColor} mt-2`}>
              Marzo · 2026
            </p>
            <p className={`${s.bodyFont} text-xs tracking-[0.3em] uppercase ${s.subtitleColor} mt-1`}>
              18:00 hrs
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-12"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <p className={`${s.bodyFont} text-xs tracking-[0.3em] uppercase ${s.textColor} rotate-90 origin-left`}>
          scroll
        </p>
      </motion.div>
    </section>
  );
}

/* ━━━━ BRUMA: pantalla completa, flotante ━━━━ */
function HeroBruma({ styles: s }) {
  return (
    <section
      className={`${s.heroBg} min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden transition-all duration-1000`}
    >
      {/* Resplandor central */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-lila/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rosa-oro-soft/10 rounded-full blur-[100px]" />

      <motion.div
        className="text-center relative z-10"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        {/* Glassmorphism card */}
        <motion.div
          className="bg-white/15 backdrop-blur-2xl border border-white/30 rounded-3xl px-10 py-16 md:px-20 md:py-20 shadow-2xl shadow-lila/10"
          custom={0}
          variants={fadeUp}
        >
          <motion.p
            className={`${s.bodyFont} text-xs tracking-[0.5em] uppercase text-lila-dark/60 mb-6`}
            custom={1}
            variants={fadeUp}
          >
            ✧ Mis XV Años ✧
          </motion.p>

          <motion.h1
            className={`${s.titleFont} ${s.titleSize} ${s.titleColor} mb-4 leading-tight`}
            custom={2}
            variants={fadeUp}
            animate={{
              textShadow: [
                "0 0 20px rgba(212,181,232,0.3)",
                "0 0 40px rgba(212,181,232,0.5)",
                "0 0 20px rgba(212,181,232,0.3)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Jazmín
          </motion.h1>

          <div className="flex items-center justify-center gap-4 my-6">
            <span className="block w-16 h-px bg-white/40" />
            <span className="text-rosa-oro-light text-sm">❀</span>
            <span className="block w-16 h-px bg-white/40" />
          </div>

          <motion.p
            className={`${s.bodyFont} text-base ${s.textColor} max-w-sm mx-auto`}
            custom={3}
            variants={fadeUp}
          >
            Te invito a soñar conmigo en una noche mágica
          </motion.p>

          <motion.p
            className={`${s.headingFont} text-2xl md:text-3xl ${s.accentColor} mt-8`}
            custom={4}
            variants={fadeUp}
          >
            23 · Marzo · 2026
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Partículas flotantes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-lila-light/40"
          style={{
            top: `${15 + i * 14}%`,
            left: `${10 + i * 15}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.7, 0.2],
          }}
          transition={{
            duration: 4 + i,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
}

/* ── Componente principal ── */
export default function HeroSection() {
  const { theme, styles } = useTheme();

  switch (theme) {
    case THEMES.flores:
      return <HeroFlores styles={styles} />;
    case THEMES.editorial:
      return <HeroEditorial styles={styles} />;
    case THEMES.bruma:
      return <HeroBruma styles={styles} />;
    default:
      return <HeroFlores styles={styles} />;
  }
}
