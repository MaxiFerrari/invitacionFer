import { motion } from "framer-motion";
import { useTheme, themeStyles } from "../context/ThemeContext";

/**
 * Footer con cita de Rapunzel y créditos.
 */
export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      className={`relative z-10 py-16 px-4 border-t transition-all duration-500 ${themeStyles.footerBorder[theme]}`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Cita de Rapunzel */}
        <p
          className={`font-elegant italic text-lg mb-6 transition-colors duration-500 ${themeStyles.footerQuote[theme]}`}
        >
          "Y al fin veo la luz, y es como si la niebla se hubiera levantado."
        </p>

        {/* Decorador */}
        <div
          className={`flex items-center justify-center gap-3 mb-6 transition-colors duration-500 ${themeStyles.footerDecorStar[theme]}`}
        >
          <div
            className={`w-12 h-[1px] transition-colors duration-500 ${themeStyles.footerDecorLine[theme]}`}
          />
          <span className="text-xl">🌟</span>
          <div
            className={`w-12 h-[1px] transition-colors duration-500 ${themeStyles.footerDecorLine[theme]}`}
          />
        </div>

        {/* Nombre + año */}
        <p
          className={`font-fairy text-3xl mb-2 transition-colors duration-500 ${themeStyles.footerName[theme]}`}
        >
          Jazmín
        </p>
        <p
          className={`font-body text-xs tracking-[0.3em] uppercase transition-colors duration-500 ${themeStyles.footerYear[theme]}`}
        >
          XV Años — 2026
        </p>
      </motion.div>
    </footer>
  );
}
