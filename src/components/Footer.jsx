import { motion } from "framer-motion";

/**
 * Footer con cita de Rapunzel y créditos.
 */
export default function Footer() {
  return (
    <footer className="relative z-10 py-16 px-4 border-t border-lila/10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Cita de Rapunzel */}
        <p className="font-elegant italic text-lila-light/50 text-lg mb-6">
          "Y al fin veo la luz, y es como si la niebla se hubiera levantado."
        </p>

        {/* Decorador */}
        <div className="flex items-center justify-center gap-3 mb-6 text-dorado/40">
          <div className="w-12 h-[1px] bg-dorado/30" />
          <span className="text-xl">🌟</span>
          <div className="w-12 h-[1px] bg-dorado/30" />
        </div>

        {/* Nombre + año */}
        <p className="font-fairy text-3xl text-dorado/60 mb-2">Jazmín</p>
        <p className="font-body text-lila-light/30 text-xs tracking-[0.3em] uppercase">
          XV Años — 2026
        </p>
      </motion.div>
    </footer>
  );
}
