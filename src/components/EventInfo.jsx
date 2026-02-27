import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

/* ──────────────────────────────────────────────
   EventInfo – Información del evento + WhatsApp
   ────────────────────────────────────────────── */

const WHATSAPP_NUMBER = "5215512345678";
const WHATSAPP_MSG = encodeURIComponent(
  "¡Hola! Confirmo mi asistencia a los XV de Jazmín 🌸"
);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const events = [
  {
    icon: "⛪",
    title: "Ceremonia Religiosa",
    time: "18:00 hrs",
    place: "Parroquia de San José",
    address: "Av. Principal #123, Col. Centro",
  },
  {
    icon: "🎉",
    title: "Recepción",
    time: "20:00 hrs",
    place: "Salón de Eventos La Estrella",
    address: "Blvd. de la Luz #456",
  },
];

export default function EventInfo() {
  const { styles: s } = useTheme();

  return (
    <motion.section
      className={`${s.sectionBg} py-24 md:py-32 px-6 md:px-10 transition-all duration-1000`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className={`${s.layoutClass} px-2 md:px-4`}>
        <motion.h2
          className={`${s.headingFont} text-3xl md:text-4xl ${s.headingColor} mb-2 text-center`}
          custom={0}
          variants={fadeUp}
        >
          Detalles del Evento
        </motion.h2>
        <div className="flex items-center justify-center gap-3 mb-12">
          <span className="block w-10 h-px bg-rosa-oro/30" />
          <span className="text-rosa-oro text-sm">✦</span>
          <span className="block w-10 h-px bg-rosa-oro/30" />
        </div>

        {/* Tarjetas de evento */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {events.map((evt, i) => (
            <motion.div
              key={i}
              className={`${s.cardBg} ${s.cardRounded} p-8 md:p-10 text-center transition-all duration-1000`}
              custom={i + 1}
              variants={fadeUp}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
            >
              <span className="text-4xl mb-4 block">{evt.icon}</span>
              <h3
                className={`${s.headingFont} text-xl md:text-2xl ${s.headingColor} mb-3`}
              >
                {evt.title}
              </h3>
              <p
                className={`${s.bodyFont} text-sm ${s.accentColor} font-medium mb-2`}
              >
                {evt.time}
              </p>
              <p className={`${s.bodyFont} text-base ${s.textColor} font-medium`}>
                {evt.place}
              </p>
              <p className={`${s.bodyFont} text-sm ${s.textColor} opacity-70 mt-1`}>
                {evt.address}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Código de vestimenta */}
        <motion.div
          className={`${s.cardBg} ${s.cardRounded} p-8 md:p-10 text-center mb-14 max-w-lg mx-auto transition-all duration-1000`}
          custom={3}
          variants={fadeUp}
        >
          <span className="text-3xl mb-3 block">👗</span>
          <h3
            className={`${s.headingFont} text-xl ${s.headingColor} mb-2`}
          >
            Código de Vestimenta
          </h3>
          <p className={`${s.bodyFont} text-base ${s.textColor}`}>
            Formal / Elegante
          </p>
          <p className={`${s.bodyFont} text-sm ${s.textColor} opacity-60 mt-1`}>
            Sugerencia de colores: tonos pastel o neutros
          </p>
        </motion.div>

        {/* Botón WhatsApp */}
        <motion.div className="text-center" custom={4} variants={fadeUp}>
          <motion.a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`${s.buttonBg} ${s.bodyFont} inline-flex items-center gap-3 px-8 py-4 ${s.cardRounded} text-base font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Confirmar Asistencia
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
