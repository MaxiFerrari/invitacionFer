import { motion } from "framer-motion";
import { useTheme, S, fonts } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  const quotes = {
    encanto: "Y al fin veo la luz, y es como si la niebla se hubiera levantado.",
    bosque: "Cada rama cuenta una historia, y esta noche… es la mía.",
    luces: "Y al fin veo la luz, y es como si el cielo me hubiera esperado.",
  };

  const emojis = {
    encanto: "🌟",
    bosque: "🌿",
    luces: "🏮",
  };

  return (
    <footer className={`relative z-10 py-16 px-4 border-t transition-all duration-500 ${S.footerBorder[theme]}`}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl mx-auto text-center"
      >
        <p className={`${fonts.heading[theme]} italic text-lg mb-6 transition-colors duration-500 ${S.footerQuote[theme]}`}>
          "{quotes[theme]}"
        </p>

        <div className={`flex items-center justify-center gap-3 mb-6 ${S.footerDecorStar[theme]}`}>
          <div className={`w-12 h-[1px] ${S.footerDecorLine[theme]}`} />
          <span className="text-xl">{emojis[theme]}</span>
          <div className={`w-12 h-[1px] ${S.footerDecorLine[theme]}`} />
        </div>

        <p className={`${fonts.title[theme]} text-3xl mb-2 transition-colors duration-500 ${S.footerName[theme]}`}>
          Jazmín
        </p>
        <p className={`font-body text-xs tracking-[0.3em] uppercase transition-colors duration-500 ${S.footerYear[theme]}`}>
          XV Años — 2026
        </p>
      </motion.div>
    </footer>
  );
}
