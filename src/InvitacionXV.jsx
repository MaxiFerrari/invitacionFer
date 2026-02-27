import FloatingLanterns from "./components/FloatingLanterns";
import ForestBackground from "./components/ForestBackground";
import HeroSection from "./components/HeroSection";
import Countdown from "./components/Countdown";
import PhotoGallery from "./components/PhotoGallery";
import MusicPlayer from "./components/MusicPlayer";
import EventInfo from "./components/EventInfo";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeProvider, useTheme, S } from "./context/ThemeContext";

/**
 * Invitación Digital de XV Años — Temática Rapunzel (Enredados)
 *
 * 3 diseños radicalmente diferentes:
 *   • Encanto Real  — Moderno, limpio, sol dorado y lila
 *   • El Bosque Susurrante — Bosque nocturno, neblina, luciérnagas
 *   • La Noche de las Luces — Cielo estrellado, faroles, glassmorphism
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
      className={`relative min-h-screen overflow-x-hidden transition-all duration-700 ${S.root[theme]}`}
    >
      {/* Fondos temáticos */}
      <ForestBackground />
      <FloatingLanterns count={30} />

      {/* Controles flotantes */}
      <MusicPlayer />
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

/** Separador decorativo — cambia icono por tema */
function Separator() {
  const { theme } = useTheme();

  return (
    <div className="flex items-center justify-center gap-4 py-4 transition-all duration-500">
      <div
        className={`w-16 md:w-24 h-[1px] ${S.separatorLine[theme]}`}
      />
      <span className={`text-sm ${S.separatorStar[theme]}`}>
        {S.separatorIcon[theme]}
      </span>
      <div
        className={`w-16 md:w-24 h-[1px] ${S.separatorLineReverse[theme]}`}
      />
    </div>
  );
}
