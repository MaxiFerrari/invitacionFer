import FloatingLanterns from "./components/FloatingLanterns";
import HeroSection from "./components/HeroSection";
import Countdown from "./components/Countdown";
import PhotoGallery from "./components/PhotoGallery";
import MusicPlayer from "./components/MusicPlayer";
import EventInfo from "./components/EventInfo";
import Footer from "./components/Footer";

/**
 * Invitación Digital de XV Años — Temática Rapunzel (Enredados)
 *
 * Componente principal que orquesta todas las secciones de la invitación.
 * Paleta: Lila suave, Morado real, Dorado brillante.
 * Fuentes: Great Vibes (fairy), Cormorant Garamond (elegant), Montserrat (body).
 */
export default function InvitacionXV() {
  return (
    <div className="relative min-h-screen bg-noche text-white overflow-x-hidden">
      {/* Fondo: cielo nocturno + linternas flotantes */}
      <FloatingLanterns count={30} />

      {/* Reproductor de música flotante (FAB) */}
      <MusicPlayer />

      {/* Secciones */}
      <main>
        <HeroSection />

        {/* Separador decorativo */}
        <Separator />

        <Countdown />

        <Separator />

        <PhotoGallery />

        <Separator />

        <EventInfo />
      </main>

      <Footer />
    </div>
  );
}

/** Separador decorativo reutilizable entre secciones */
function Separator() {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent to-dorado/30" />
      <span className="text-dorado/40 text-sm">✦</span>
      <div className="w-16 md:w-24 h-[1px] bg-gradient-to-l from-transparent to-dorado/30" />
    </div>
  );
}
