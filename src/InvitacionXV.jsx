import FloatingLanterns from "./components/FloatingLanterns";
import HeroSection from "./components/HeroSection";
import Countdown from "./components/Countdown";
import PhotoGallery from "./components/PhotoGallery";
import MusicPlayer from "./components/MusicPlayer";
import EventInfo from "./components/EventInfo";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeProvider, useTheme, themeStyles } from "./context/ThemeContext";

/**
 * Invitación Digital de XV Años — Temática Rapunzel (Enredados)
 *
 * Componente principal que orquesta todas las secciones de la invitación.
 * Soporta 3 temas: Mágico, Castillo Real, Amanecer en Corona.
 */
export default function InvitacionXV() {
  return (
    <ThemeProvider>
      <InvitacionContent />
    </ThemeProvider>
  );
}

function InvitacionContent() {
  const { theme } = useTheme();

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden transition-all duration-500 ${themeStyles.root[theme]}`}
    >
      {/* Fondo: cielo nocturno + linternas (solo en tema mágico) */}
      <FloatingLanterns count={30} />

      {/* Reproductor de música flotante (FAB) — esquina derecha */}
      <MusicPlayer />

      {/* Selector de tema visual (FAB) — esquina izquierda */}
      <ThemeSwitcher />

      {/* Secciones */}
      <main>
        <HeroSection />
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
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center gap-4 py-4 transition-all duration-500">
      <div
        className={`w-16 md:w-24 h-[1px] ${themeStyles.separatorLine[theme]}`}
      />
      <span className={`text-sm ${themeStyles.separatorStar[theme]}`}>✦</span>
      <div
        className={`w-16 md:w-24 h-[1px] ${themeStyles.separatorLineReverse[theme]}`}
      />
    </div>
  );
}
