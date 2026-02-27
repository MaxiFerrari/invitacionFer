import { motion } from "framer-motion";
import { useTheme, themeStyles } from "../context/ThemeContext";

/** SVG decorativo de un sol de Rapunzel */
function RapunzelSun({ className = "" }) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Rayos */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 100 + Math.cos(angle) * 55;
        const y1 = 100 + Math.sin(angle) * 55;
        const x2 = 100 + Math.cos(angle) * 90;
        const y2 = 100 + Math.sin(angle) * 90;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#FFD700"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.8"
          />
        );
      })}
      {/* Rayos cortos intermedios */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = ((i * 45 + 22.5) * Math.PI) / 180;
        const x1 = 100 + Math.cos(angle) * 58;
        const y1 = 100 + Math.sin(angle) * 58;
        const x2 = 100 + Math.cos(angle) * 75;
        const y2 = 100 + Math.sin(angle) * 75;
        return (
          <line
            key={`s-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#F5CC00"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.6"
          />
        );
      })}
      {/* Círculo principal */}
      <circle cx="100" cy="100" r="50" fill="url(#sunGrad)" />
      {/* Espiral interior (emblema de Corona) */}
      <path
        d="M100 70 C88 70, 72 82, 72 100 C72 115, 85 128, 100 128 C112 128, 122 118, 122 107 C122 97, 113 89, 104 89 C96 89, 90 95, 90 102 C90 107, 94 111, 100 111"
        stroke="#B8860B"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
      <defs>
        <radialGradient id="sunGrad" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#FFFACD" />
          <stop offset="50%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#F5CC00" />
        </radialGradient>
      </defs>
    </svg>
  );
}

/** SVG de una torre estilizada */
function TowerSilhouette({ className = "" }) {
  return (
    <svg
      viewBox="0 0 180 300"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Techo cónico */}
      <polygon points="90,10 40,90 140,90" fill="#7B2D8E" opacity="0.9" />
      <polygon
        points="90,10 40,90 140,90"
        fill="url(#towerRoofGrad)"
        opacity="0.5"
      />
      {/* Banderín */}
      <line x1="90" y1="10" x2="90" y2="0" stroke="#FFD700" strokeWidth="2" />
      <polygon points="90,0 110,8 90,16" fill="#FFD700" opacity="0.8" />
      {/* Cuerpo de la torre */}
      <rect
        x="50"
        y="90"
        width="80"
        height="200"
        rx="4"
        fill="#C9A0DC"
        opacity="0.85"
      />
      <rect
        x="50"
        y="90"
        width="80"
        height="200"
        rx="4"
        fill="url(#towerBodyGrad)"
        opacity="0.3"
      />
      {/* Ventana principal (con cabello) */}
      <rect
        x="70"
        y="120"
        width="40"
        height="50"
        rx="20"
        ry="20"
        fill="#2D1B4E"
      />
      <rect
        x="72"
        y="122"
        width="36"
        height="46"
        rx="18"
        ry="18"
        fill="#1A0A2E"
      />
      {/* Cabello dorado cayendo */}
      <path
        d="M90 170 Q85 200, 75 230 Q70 250, 80 270 Q85 280, 78 295"
        stroke="#FFD700"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M90 170 Q95 195, 100 225 Q105 245, 95 265 Q90 278, 98 295"
        stroke="#F5CC00"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
      />
      {/* Ventanas pequeñas */}
      <rect
        x="65"
        y="195"
        width="15"
        height="20"
        rx="7"
        fill="#2D1B4E"
        opacity="0.6"
      />
      <rect
        x="100"
        y="195"
        width="15"
        height="20"
        rx="7"
        fill="#2D1B4E"
        opacity="0.6"
      />
      {/* Ladrillos decorativos */}
      <line
        x1="50"
        y1="180"
        x2="130"
        y2="180"
        stroke="#7B2D8E"
        strokeWidth="1"
        opacity="0.3"
      />
      <line
        x1="50"
        y1="230"
        x2="130"
        y2="230"
        stroke="#7B2D8E"
        strokeWidth="1"
        opacity="0.3"
      />
      {/* Hiedra/flores */}
      <circle cx="55" cy="150" r="4" fill="#E8D5F5" opacity="0.6" />
      <circle cx="125" cy="170" r="3" fill="#FFD700" opacity="0.5" />
      <circle cx="52" cy="210" r="3" fill="#E8D5F5" opacity="0.5" />
      <circle cx="128" cy="240" r="4" fill="#FFD700" opacity="0.4" />
      <defs>
        <linearGradient id="towerRoofGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
        <linearGradient id="towerBodyGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/**
 * Hero Section — Nombre de la quinceañera con torre y sol de Rapunzel.
 */
export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 py-20 overflow-hidden transition-all duration-500">
      {/* Sol decorativo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-6 right-6 md:top-12 md:right-16"
      >
        <RapunzelSun
          className={`w-24 h-24 md:w-36 md:h-36 animate-float-slow ${
            theme === "magico"
              ? "drop-shadow-[0_0_30px_rgba(255,215,0,0.4)]"
              : theme === "castillo"
                ? "drop-shadow-[0_0_20px_rgba(180,130,0,0.2)] opacity-70"
                : theme === "jardin"
                  ? "drop-shadow-[0_0_15px_rgba(168,85,247,0.15)] opacity-60"
                  : theme === "porcelana"
                    ? "drop-shadow-[0_0_10px_rgba(139,92,246,0.15)] opacity-50"
                    : "drop-shadow-[0_0_20px_rgba(244,114,182,0.3)] opacity-80"
          }`}
        />
      </motion.div>

      {/* Torre */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className={`absolute left-2 bottom-0 md:left-12 transition-opacity duration-500 ${
          theme === "castillo" || theme === "porcelana" ? "opacity-40" : theme === "jardin" ? "opacity-30" : "opacity-60"
        }`}
      >
        <TowerSilhouette className="w-24 h-40 md:w-32 md:h-56" />
      </motion.div>

      {/* Contenido principal */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10"
      >
        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className={`font-elegant text-lg md:text-2xl tracking-[0.3em] uppercase mb-4 transition-colors duration-500 ${themeStyles.subtitle[theme]}`}
        >
          Mis XV Años
        </motion.p>

        {/* Línea decorativa superior */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className={`w-40 md:w-64 h-[1px] mx-auto mb-6 transition-all duration-500 ${themeStyles.decorLine[theme]}`}
        />

        {/* Nombre */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.8,
            duration: 1,
            type: "spring",
            stiffness: 100,
          }}
          className={`font-fairy text-7xl md:text-9xl lg:text-[10rem] mb-6 leading-tight transition-all duration-500 ${themeStyles.titleFairy[theme]}`}
        >
          Jazmín
        </motion.h1>

        {/* Línea decorativa inferior */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className={`w-40 md:w-64 h-[1px] mx-auto mb-8 transition-all duration-500 ${themeStyles.decorLine[theme]}`}
        />

        {/* Frase */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className={`font-elegant italic text-xl md:text-3xl max-w-lg mx-auto transition-colors duration-500 ${themeStyles.subtitle[theme]}`}
        >
          "Mi destino empieza aquí"
        </motion.p>

        {/* Flor de decoración */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-8 text-4xl"
        >
          ✨🌸✨
        </motion.div>
      </motion.div>

      {/* Flecha scroll-down */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 animate-bounce"
      >
        <svg
          className={`w-8 h-8 transition-colors duration-500 ${themeStyles.scrollArrow[theme]}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
}
