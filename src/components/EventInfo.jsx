import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "5215512345678"; // ← Reemplazar con el número real
const WHATSAPP_MESSAGE = encodeURIComponent(
  "¡Hola! 🌸 Confirmo mi asistencia a los XV años de Jazmín. ✨",
);

/**
 * Sección con los datos del evento y botón de confirmación por WhatsApp.
 */
export default function EventInfo() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

  return (
    <section className="relative z-10 py-20 px-4">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        {/* Título */}
        <div className="text-center mb-14">
          <h2 className="font-fairy text-4xl md:text-5xl text-dorado mb-2">
            Te Espero
          </h2>
          <p className="font-elegant text-lila-light/60 text-lg italic">
            será una noche de ensueño
          </p>
          <div className="w-32 h-[1px] mx-auto mt-4 bg-gradient-to-r from-transparent via-dorado to-transparent" />
        </div>

        {/* Cards de información */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Ceremonia */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="group relative p-8 rounded-2xl border border-lila/20 bg-noche/40 backdrop-blur-md hover:border-dorado/40 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-dorado/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="text-4xl mb-4">⛪</div>
              <h3 className="font-elegant text-2xl text-dorado mb-3 font-semibold">
                Ceremonia Religiosa
              </h3>
              <div className="space-y-2 font-body text-lila-light/80 text-sm">
                <p className="flex items-center gap-2">
                  <span className="text-dorado/70">📅</span>
                  23 de Marzo de 2026
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-dorado/70">🕕</span>
                  6:00 PM
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-dorado/70">📍</span>
                  Parroquia de la Asunción
                </p>
              </div>
            </div>
          </motion.div>

          {/* Recepción */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="group relative p-8 rounded-2xl border border-lila/20 bg-noche/40 backdrop-blur-md hover:border-dorado/40 transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-dorado/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="font-elegant text-2xl text-dorado mb-3 font-semibold">
                Recepción
              </h3>
              <div className="space-y-2 font-body text-lila-light/80 text-sm">
                <p className="flex items-center gap-2">
                  <span className="text-dorado/70">📅</span>
                  23 de Marzo de 2026
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-dorado/70">🕗</span>
                  8:00 PM
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-dorado/70">📍</span>
                  Salón Jardín Encantado
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Código de vestimenta */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-elegant text-lila-light/70 text-lg">
            👗 Código de vestimenta:{" "}
            <span className="text-dorado font-semibold">Formal / Elegante</span>
          </p>
          <p className="font-body text-lila-light/50 text-xs mt-2 italic">
            Evitar color lila, reservado para la quinceañera ✨
          </p>
        </motion.div>

        {/* Botón de WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full font-body font-semibold text-lg text-noche overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,215,0,0.4)] hover:scale-105 active:scale-95"
          >
            {/* Fondo gradiente */}
            <div className="absolute inset-0 bg-gradient-to-r from-lila via-dorado to-lila bg-[length:200%_100%] group-hover:animate-gradient transition-all duration-500" />

            {/* Borde brillante */}
            <div className="absolute inset-[1px] rounded-full bg-gradient-to-r from-lila via-dorado to-dorado-soft opacity-90" />

            {/* Contenido */}
            <span className="relative flex items-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Confirmar Asistencia
            </span>
          </a>

          <p className="font-body text-lila-light/40 text-xs mt-4">
            Se abrirá WhatsApp con un mensaje predeterminado
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
