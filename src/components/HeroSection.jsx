import { motion } from "framer-motion";
import { useTheme, S, fonts } from "../context/ThemeContext";

/* ─────────────────────────────────────────────────────────
   SVGs decorativos — solo para Encanto Real
   ───────────────────────────────────────────────────────── */

function RapunzelSun({ className = "" }) {
  return (
    <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        return (
          <line key={i} x1={100 + Math.cos(a) * 55} y1={100 + Math.sin(a) * 55}
            x2={100 + Math.cos(a) * 90} y2={100 + Math.sin(a) * 90}
            stroke="#FFD700" strokeWidth="4" strokeLinecap="round" opacity="0.8" />
        );
      })}
      {Array.from({ length: 8 }, (_, i) => {
        const a = ((i * 45 + 22.5) * Math.PI) / 180;
        return (
          <line key={`s-${i}`} x1={100 + Math.cos(a) * 58} y1={100 + Math.sin(a) * 58}
            x2={100 + Math.cos(a) * 75} y2={100 + Math.sin(a) * 75}
            stroke="#F5CC00" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        );
      })}
      <circle cx="100" cy="100" r="50" fill="url(#sunGrad)" />
      <path d="M100 70 C88 70, 72 82, 72 100 C72 115, 85 128, 100 128 C112 128, 122 118, 122 107 C122 97, 113 89, 104 89 C96 89, 90 95, 90 102 C90 107, 94 111, 100 111"
        stroke="#B8860B" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <defs>
        <radialGradient id="sunGrad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFFACD" /><stop offset="50%" stopColor="#FFD700" /><stop offset="100%" stopColor="#F5CC00" />
        </radialGradient>
      </defs>
    </svg>
  );
}

function TowerSilhouette({ className = "" }) {
  return (
    <svg viewBox="0 0 180 300" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="90,10 40,90 140,90" fill="#7B2D8E" opacity="0.9" />
      <polygon points="90,10 40,90 140,90" fill="url(#towerRoofGrad)" opacity="0.5" />
      <line x1="90" y1="10" x2="90" y2="0" stroke="#FFD700" strokeWidth="2" />
      <polygon points="90,0 110,8 90,16" fill="#FFD700" opacity="0.8" />
      <rect x="50" y="90" width="80" height="200" rx="4" fill="#C9A0DC" opacity="0.85" />
      <rect x="50" y="90" width="80" height="200" rx="4" fill="url(#towerBodyGrad)" opacity="0.3" />
      <rect x="70" y="120" width="40" height="50" rx="20" ry="20" fill="#2D1B4E" />
      <rect x="72" y="122" width="36" height="46" rx="18" ry="18" fill="#1A0A2E" />
      <path d="M90 170 Q85 200, 75 230 Q70 250, 80 270 Q85 280, 78 295" stroke="#FFD700" strokeWidth="4" strokeLinecap="round" fill="none" opacity="0.7" />
      <path d="M90 170 Q95 195, 100 225 Q105 245, 95 265 Q90 278, 98 295" stroke="#F5CC00" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.5" />
      <rect x="65" y="195" width="15" height="20" rx="7" fill="#2D1B4E" opacity="0.6" />
      <rect x="100" y="195" width="15" height="20" rx="7" fill="#2D1B4E" opacity="0.6" />
      <line x1="50" y1="180" x2="130" y2="180" stroke="#7B2D8E" strokeWidth="1" opacity="0.3" />
      <line x1="50" y1="230" x2="130" y2="230" stroke="#7B2D8E" strokeWidth="1" opacity="0.3" />
      <circle cx="55" cy="150" r="4" fill="#E8D5F5" opacity="0.6" />
      <circle cx="125" cy="170" r="3" fill="#FFD700" opacity="0.5" />
      <circle cx="52" cy="210" r="3" fill="#E8D5F5" opacity="0.5" />
      <circle cx="128" cy="240" r="4" fill="#FFD700" opacity="0.4" />
      <defs>
        <linearGradient id="towerRoofGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#FFD700" /><stop offset="100%" stopColor="transparent" /></linearGradient>
        <linearGradient id="towerBodyGrad" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stopColor="#FFD700" stopOpacity="0.2" /><stop offset="100%" stopColor="transparent" /></linearGradient>
      </defs>
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   SVGs decorativos — solo para Bosque
   ───────────────────────────────────────────────────────── */

function VineBorder({ side = "left" }) {
  const flip = side === "right" ? "scaleX(-1)" : "";
  return (
    <svg
      viewBox="0 0 60 400"
      className={`absolute ${side === "left" ? "left-0" : "right-0"} top-0 h-full w-10 md:w-14 opacity-30`}
      style={{ transform: flip, animation: "vine-sway 8s ease-in-out infinite" }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M30 0 C25 40, 10 80, 20 120 C30 160, 15 200, 25 240 C35 280, 20 320, 30 360 L30 400" stroke="#2d4a2d" strokeWidth="3" strokeLinecap="round" fill="none" />
      <path d="M30 60 C20 50, 5 55, 10 70" stroke="#3a5a3a" strokeWidth="2" fill="none" />
      <path d="M30 160 C20 150, 5 155, 10 170" stroke="#3a5a3a" strokeWidth="2" fill="none" />
      <path d="M30 260 C20 250, 5 255, 10 270" stroke="#3a5a3a" strokeWidth="2" fill="none" />
      <circle cx="12" cy="75" r="4" fill="#8b6f47" opacity="0.5" />
      <circle cx="15" cy="175" r="3" fill="#c9a0dc" opacity="0.3" />
      <circle cx="10" cy="275" r="4" fill="#8b6f47" opacity="0.4" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────────────
   Hero Section — 3 diseños radicalmente diferentes
   ───────────────────────────────────────────────────────── */

export default function HeroSection() {
  const { theme } = useTheme();

  if (theme === "bosque") return <HeroBosque />;
  if (theme === "luces") return <HeroLuces />;
  return <HeroEncanto />;
}

/* ── ENCANTO REAL ──────────────────────────────────────── */
function HeroEncanto() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
      {/* Sol decorativo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5 }}
        className="absolute top-6 right-6 md:top-12 md:right-16"
      >
        <RapunzelSun className="w-24 h-24 md:w-36 md:h-36 animate-float-slow drop-shadow-[0_0_30px_rgba(255,215,0,0.3)]" />
      </motion.div>

      {/* Torre */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute left-2 bottom-0 md:left-12 opacity-50"
      >
        <TowerSilhouette className="w-24 h-40 md:w-32 md:h-56" />
      </motion.div>

      {/* Contenido */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10"
      >
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="font-elegant text-lg md:text-2xl tracking-[0.3em] uppercase mb-4 text-purple-600">
          Mis XV Años
        </motion.p>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
          className="w-40 md:w-64 h-[1px] mx-auto mb-6 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

        <motion.h1 initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, type: "spring", stiffness: 100 }}
          className="font-fairy text-7xl md:text-9xl lg:text-[10rem] mb-6 leading-tight text-purple-800">
          Jazmín
        </motion.h1>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.4, duration: 0.8 }}
          className="w-40 md:w-64 h-[1px] mx-auto mb-8 bg-gradient-to-r from-transparent via-amber-300 to-transparent" />

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.8 }}
          className="font-elegant italic text-xl md:text-3xl max-w-lg mx-auto text-purple-600">
          "Mi destino empieza aquí"
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
          className="mt-8 text-4xl">
          ✨🌸✨
        </motion.div>
      </motion.div>

      <ScrollArrow color="text-purple-300" />
    </section>
  );
}

/* ── EL BOSQUE SUSURRANTE ─────────────────────────────── */
function HeroBosque() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Bordes de enredaderas */}
      <VineBorder side="left" />
      <VineBorder side="right" />

      {/* Overlay de neblina superior */}
      <div className="absolute top-0 inset-x-0 h-[30vh] bg-gradient-to-b from-[#050f05]/60 to-transparent pointer-events-none z-[1]" />

      {/* Contenido — ligeramente descentrado */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="relative z-10 text-center md:text-left md:ml-[10%] max-w-xl"
      >
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="font-forest text-base md:text-xl tracking-[0.25em] uppercase mb-6 text-niebla/70">
          Mis XV Años
        </motion.p>

        {/* Línea de rama */}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1, duration: 1 }}
          className="w-32 md:w-48 h-[1px] mb-6 bg-gradient-to-r from-amber-700/60 via-amber-600/30 to-transparent origin-left" />

        <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 1.2, type: "spring", stiffness: 80 }}
          className="font-forest text-6xl md:text-8xl lg:text-9xl mb-6 leading-tight text-amber-200 drop-shadow-[0_0_30px_rgba(255,215,0,0.15)]">
          Jazmín
        </motion.h1>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.4, duration: 1 }}
          className="w-48 md:w-64 h-[1px] mb-8 bg-gradient-to-r from-amber-700/40 to-transparent origin-left" />

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.6, duration: 0.8 }}
          className="font-forest italic text-lg md:text-2xl text-niebla/60 max-w-md">
          "El bosque guarda secretos… y hoy revela uno."
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}
          className="mt-8 text-3xl opacity-60">
          🌿🍃🌿
        </motion.div>
      </motion.div>

      {/* Overlay de neblina inferior */}
      <div className="absolute bottom-0 inset-x-0 h-[25vh] bg-gradient-to-t from-[#0a0f06]/60 to-transparent pointer-events-none z-[1]" />

      <ScrollArrow color="text-amber-600/50" />
    </section>
  );
}

/* ── LA NOCHE DE LAS LUCES ────────────────────────────── */
function HeroLuces() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden">
      {/* Golden glow central */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[60vw] h-[60vw] max-w-[500px] max-h-[500px] rounded-full bg-dorado/5 blur-3xl" />
      </div>

      {/* Contenido — cetrado, etéreo */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="relative z-10"
      >
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="font-elegant text-lg md:text-2xl tracking-[0.3em] uppercase mb-4 text-lila-light/70">
          Mis XV Años
        </motion.p>

        {/* Línea dorada con glow */}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
          className="w-40 md:w-56 h-[1px] mx-auto mb-6 bg-gradient-to-r from-transparent via-dorado/60 to-transparent shadow-[0_0_15px_rgba(255,215,0,0.3)]" />

        <motion.h1 initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.2, type: "spring", stiffness: 80 }}
          className="font-calligraphy text-7xl md:text-9xl lg:text-[10rem] mb-6 leading-tight text-dorado animate-golden-pulse">
          Jazmín
        </motion.h1>

        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 1.4, duration: 0.8 }}
          className="w-40 md:w-56 h-[1px] mx-auto mb-8 bg-gradient-to-r from-transparent via-dorado/60 to-transparent shadow-[0_0_15px_rgba(255,215,0,0.3)]" />

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8, duration: 0.8 }}
          className="font-elegant italic text-xl md:text-3xl max-w-lg mx-auto text-lila-light/80">
          "Y al fin veo la luz…"
        </motion.p>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}
          className="mt-8 text-4xl">
          ✨🏮✨
        </motion.div>
      </motion.div>

      <ScrollArrow color="text-dorado/60" />
    </section>
  );
}

/* ── Flecha scroll-down ───────────────────────────────── */
function ScrollArrow({ color }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3 }}
      className="absolute bottom-8 animate-bounce z-10"
    >
      <svg className={`w-8 h-8 ${color}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </motion.div>
  );
}
