import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   Footer – Pie de página con créditos
   ────────────────────────────────────────────── */

export default function Footer() {
  const { styles: s } = useTheme();

  return (
    <footer
      className={`${s.footerBg} py-16 px-6 text-center transition-all duration-1000`}
    >
      <motion.div
        className={s.layoutClass}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Divider decorativo */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="block w-16 h-px bg-rosa-oro/30" />
          <span className="text-rosa-oro">✦</span>
          <span className="block w-16 h-px bg-rosa-oro/30" />
        </div>

        <h3
          className={`${s.titleFont} text-4xl md:text-5xl ${s.titleColor} mb-4`}
        >
          Jazmín
        </h3>

        <p className={`${s.bodyFont} text-sm ${s.textColor} opacity-60 mb-2`}>
          23 de Marzo, 2026 · 18:00 hrs
        </p>

        <p
          className={`${s.bodyFont} text-xs ${s.textColor} opacity-40 mt-8 tracking-wider uppercase`}
        >
          Con amor, tu familia ♡
        </p>
      </motion.div>
    </footer>
  );
}
