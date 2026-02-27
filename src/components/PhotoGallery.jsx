import { useTheme, THEMES } from "../context/ThemeContext";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   PhotoGallery – 3 estilos de galería
   flores:     Marcos circulares con borde lila
   editorial:  Rectangulares grandes con sombras profundas
   bruma:      Polaroid flotando con inclinaciones
   ────────────────────────────────────────────── */

const photos = [
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=400&fit=crop",
    alt: "Momentos especiales",
    caption: "Soñando despierta",
  },
  {
    src: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=400&h=400&fit=crop",
    alt: "Preparativos",
    caption: "Cada detalle cuenta",
  },
  {
    src: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=400&h=400&fit=crop",
    alt: "Celebración",
    caption: "La magia comienza",
  },
  {
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=400&h=400&fit=crop",
    alt: "Flores y alegría",
    caption: "Flores de ensueño",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

/* ━━━━ Galería Flores: circular ━━━━ */
function GalleryFlores({ s }) {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      {photos.map((p, i) => (
        <motion.div
          key={i}
          className="flex flex-col items-center gap-3"
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.div
            className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-lila-light shadow-lg shadow-lila-light/20"
            whileHover={{ scale: 1.08, boxShadow: "0 8px 30px rgba(201,160,220,0.3)" }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={p.src}
              alt={p.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
          <p className={`${s.bodyFont} text-xs tracking-wider ${s.textColor} uppercase`}>
            {p.caption}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

/* ━━━━ Galería Editorial: rectangular grande ━━━━ */
function GalleryEditorial({ s }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {photos.map((p, i) => (
        <motion.div
          key={i}
          className={`relative group overflow-hidden rounded-lg ${i % 2 === 1 ? "md:mt-12" : ""}`}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <motion.div
            className="aspect-[4/5] overflow-hidden rounded-lg shadow-2xl shadow-black/15"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          >
            <img
              src={p.src}
              alt={p.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          </motion.div>
          {/* Caption overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white font-body text-sm tracking-wider">
              {p.caption}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ━━━━ Galería Bruma: polaroid flotante ━━━━ */
function GalleryBruma({ s }) {
  const rotations = [-3, 2, -2, 4];

  return (
    <div className="flex flex-wrap justify-center gap-6 md:gap-8">
      {photos.map((p, i) => (
        <motion.div
          key={i}
          className="bg-white/80 backdrop-blur-md p-2 pb-10 rounded-sm shadow-xl shadow-lila/15"
          style={{ "--rot": `${rotations[i]}deg` }}
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          animate={{
            y: [0, -8, 0],
            rotate: [rotations[i], rotations[i] + 1, rotations[i]],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
          whileHover={{
            rotate: 0,
            scale: 1.08,
            transition: { duration: 0.3 },
          }}
        >
          <div className="w-32 h-40 md:w-40 md:h-52 overflow-hidden">
            <img
              src={p.src}
              alt={p.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <p className="text-center font-calligraphy text-sm text-lila-dark/70 mt-2 px-1">
            {p.caption}
          </p>
        </motion.div>
      ))}
    </div>
  );
}

/* ── Componente principal ── */
export default function PhotoGallery() {
  const { theme, styles: s } = useTheme();

  return (
    <motion.section
      className={`${s.sectionBg} py-24 md:py-32 px-6 md:px-10 transition-all duration-1000`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className={`${s.layoutClass} px-2 md:px-4`}>
        <motion.h2
          className={`${s.headingFont} text-3xl md:text-4xl ${s.headingColor} mb-2 text-center`}
          variants={fadeUp}
          custom={0}
        >
          Momentos Mágicos
        </motion.h2>
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="block w-10 h-px bg-rosa-oro/30" />
          <span className="text-rosa-oro text-sm">✦</span>
          <span className="block w-10 h-px bg-rosa-oro/30" />
        </div>

        {theme === THEMES.flores && <GalleryFlores s={s} />}
        {theme === THEMES.editorial && <GalleryEditorial s={s} />}
        {theme === THEMES.bruma && <GalleryBruma s={s} />}
      </div>
    </motion.section>
  );
}
