import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
          <h2 className="font-fairy text-4xl md:text-5xl text-dorado mb-2">
            Momentos Mágicos
          </h2>
          <p className="font-elegant text-lila-light/60 text-lg italic">
            un recorrido por mis mejores momentos
          </p>
          <div className="w-32 h-[1px] mx-auto mt-4 bg-gradient-to-r from-transparent via-dorado to-transparent" />
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
              className="break-inside-avoid group relative cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedPhoto(photo)}
            >
              {/* Imagen */}
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full object-cover rounded-xl transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay dorado en hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-dorado/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

              {/* Borde dorado en hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-dorado/0 group-hover:border-dorado/60 transition-all duration-500 shadow-[inset_0_0_0_0_rgba(255,215,0,0)] group-hover:shadow-[inset_0_0_30px_rgba(255,215,0,0.15)]" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-elegant text-white text-sm drop-shadow-lg">
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-noche/90 backdrop-blur-md p-4"
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
                className="w-full h-full object-contain rounded-2xl shadow-[0_0_60px_rgba(255,215,0,0.2)]"
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute -top-3 -right-3 w-10 h-10 bg-morado rounded-full flex items-center justify-center text-white text-xl hover:bg-dorado hover:text-noche transition-colors cursor-pointer border border-dorado/40"
              >
                ✕
              </button>
              <p className="text-center font-elegant text-lila-light mt-4 text-lg">
                {selectedPhoto.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
