import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, themeStyles } from "../context/ThemeContext";

/** Array de imágenes de ejemplo (placeholder) */
const PHOTOS = [
  {
    id: 1,
    src: "https://placehold.co/400x500/C9A0DC/FFFFFF?text=Sof%C3%ADa+1",
    alt: "Jazmín - Sesión 1",
    span: "row-span-2",
  },
  {
    id: 2,
    src: "https://placehold.co/400x300/7B2D8E/FFFFFF?text=Sof%C3%ADa+2",
    alt: "Jazmín - Sesión 2",
    span: "",
  },
  {
    id: 3,
    src: "https://placehold.co/400x300/6A0DAD/FFD700?text=Sof%C3%ADa+3",
    alt: "Jazmín - Sesión 3",
    span: "",
  },
  {
    id: 4,
    src: "https://placehold.co/400x300/E8D5F5/7B2D8E?text=Sof%C3%ADa+4",
    alt: "Jazmín - Sesión 4",
    span: "",
  },
  {
    id: 5,
    src: "https://placehold.co/400x500/1A0A2E/FFD700?text=Sof%C3%ADa+5",
    alt: "Jazmín - Sesión 5",
    span: "row-span-2",
  },
  {
    id: 6,
    src: "https://placehold.co/400x300/2D1B4E/C9A0DC?text=Sof%C3%ADa+6",
    alt: "Jazmín - Sesión 6",
    span: "",
  },
];

/**
 * Galería de fotos estilo Masonry con hover dorado.
 */
export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const { theme } = useTheme();

  return (
    <section className="relative z-10 py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        {/* Título */}
        <div className="text-center mb-14">
          <h2
            className={`font-fairy text-4xl md:text-5xl mb-2 transition-colors duration-500 ${themeStyles.sectionTitle[theme]}`}
          >
            Momentos Mágicos
          </h2>
          <p
            className={`font-elegant text-lg italic transition-colors duration-500 ${themeStyles.subtitleMuted[theme]}`}
          >
            un recorrido por mis mejores momentos
          </p>
          <div
            className={`w-32 h-[1px] mx-auto mt-4 transition-all duration-500 ${themeStyles.decorLine[theme]}`}
          />
        </div>

        {/* Grid Masonry */}
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {PHOTOS.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`break-inside-avoid group relative cursor-pointer overflow-hidden transition-all duration-500 ${themeStyles.galleryCard[theme]}`}
              onClick={() => setSelectedPhoto(photo)}
            >
              {/* Imagen */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${themeStyles.galleryCard[theme]}`}
              />

              {/* Overlay en hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${themeStyles.galleryCard[theme]} ${themeStyles.galleryOverlay[theme]}`}
              />

              {/* Borde en hover */}
              <div
                className={`absolute inset-0 border-2 transition-all duration-500 ${themeStyles.galleryCard[theme]} ${themeStyles.galleryBorderHover[theme]}`}
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p
                  className={`font-elegant text-sm drop-shadow-lg ${theme === "magico" || theme === "terciopelo" ? "text-white" : theme === "porcelana" ? "text-violet-900" : "text-purple-900"}`}
                >
                  {photo.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 ${themeStyles.lightboxBg[theme]}`}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="relative max-w-3xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className={`w-full h-full object-contain rounded-2xl ${
                  theme === "magico"
                    ? "shadow-[0_0_60px_rgba(255,215,0,0.2)]"
                    : theme === "jardin"
                      ? "shadow-xl"
                      : "shadow-2xl"
                }`}
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className={`absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-xl cursor-pointer transition-colors border ${
                  theme === "magico"
                    ? "bg-morado text-white hover:bg-dorado hover:text-noche border-dorado/40"
                    : theme === "castillo"
                      ? "bg-purple-600 text-white hover:bg-amber-400 hover:text-purple-900 border-amber-300"
                      : theme === "jardin"
                        ? "bg-purple-400 text-white hover:bg-purple-300 border-purple-200"
                        : theme === "porcelana"
                          ? "bg-violet-600 text-white hover:bg-violet-400 border-violet-300"
                          : theme === "terciopelo"
                            ? "bg-pink-600 text-white hover:bg-pink-400 border-pink-300"
                            : theme === "ensueno"
                              ? "bg-purple-600 text-white hover:bg-purple-400 border-purple-300"
                              : "bg-rose-400 text-white hover:bg-rose-300 border-rose-200"
                }`}
              >
                ✕
              </button>
              <p
                className={`text-center font-elegant mt-4 text-lg transition-colors duration-500 ${
                  theme === "magico" || theme === "terciopelo" ? "text-lila-light" : theme === "jardin" ? "text-stone-700" : theme === "ensueno" ? "text-purple-800" : "text-white"
                }`}
              >
                {selectedPhoto.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
