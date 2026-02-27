import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme, S, fonts } from "../context/ThemeContext";

const PHOTOS = [
  { id: 1, src: "https://placehold.co/400x500/C9A0DC/FFFFFF?text=Jazm%C3%ADn+1", alt: "Jazmín - Sesión 1" },
  { id: 2, src: "https://placehold.co/400x300/7B2D8E/FFFFFF?text=Jazm%C3%ADn+2", alt: "Jazmín - Sesión 2" },
  { id: 3, src: "https://placehold.co/400x300/6A0DAD/FFD700?text=Jazm%C3%ADn+3", alt: "Jazmín - Sesión 3" },
  { id: 4, src: "https://placehold.co/400x300/E8D5F5/7B2D8E?text=Jazm%C3%ADn+4", alt: "Jazmín - Sesión 4" },
  { id: 5, src: "https://placehold.co/400x500/1A0A2E/FFD700?text=Jazm%C3%ADn+5", alt: "Jazmín - Sesión 5" },
  { id: 6, src: "https://placehold.co/400x300/2D1B4E/C9A0DC?text=Jazm%C3%ADn+6", alt: "Jazmín - Sesión 6" },
];

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
          <h2 className={`${fonts.title[theme]} text-4xl md:text-5xl mb-2 transition-colors duration-500 ${S.sectionTitle[theme]}`}>
            Momentos Mágicos
          </h2>
          <p className={`${fonts.heading[theme]} text-lg italic transition-colors duration-500 ${S.subtitleMuted[theme]}`}>
            un recorrido por mis mejores momentos
          </p>
          <div className={`w-32 h-[1px] mx-auto mt-4 transition-all duration-500 ${S.decorLine[theme]}`} />
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
              className={`break-inside-avoid group relative cursor-pointer overflow-hidden transition-all duration-500 ${S.galleryCard[theme]}`}
              onClick={() => setSelectedPhoto(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${S.galleryCard[theme]}`}
              />
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${S.galleryOverlay[theme]}`} />
              {/* Border hover */}
              <div className={`absolute inset-0 border-2 transition-all duration-500 ${S.galleryCard[theme]} ${S.galleryBorderHover[theme]}`} />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className={`${fonts.heading[theme]} text-sm drop-shadow-lg ${S.galleryCaptionText[theme]}`}>
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
            className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${S.lightboxBg[theme]}`}
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
                className={`w-full h-full object-contain rounded-2xl ${S.lightboxShadow[theme]}`}
              />
              <button
                onClick={() => setSelectedPhoto(null)}
                className={`absolute -top-3 -right-3 w-10 h-10 rounded-full flex items-center justify-center text-xl cursor-pointer transition-colors border ${S.lightboxClose[theme]}`}
              >
                ✕
              </button>
              <p className={`text-center ${fonts.heading[theme]} mt-4 text-lg ${S.lightboxCaption[theme]}`}>
                {selectedPhoto.alt}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
