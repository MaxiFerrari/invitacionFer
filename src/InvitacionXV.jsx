import { ThemeProvider, useTheme } from "./context/ThemeContext";
import HeroSection from "./components/HeroSection";
import Countdown from "./components/Countdown";
import PhotoGallery from "./components/PhotoGallery";
import EventInfo from "./components/EventInfo";
import Footer from "./components/Footer";
import ThemeSwitcher from "./components/ThemeSwitcher";
import MusicPlayer from "./components/MusicPlayer";
import VineDecoration from "./components/VineDecoration";
import CloudBackground from "./components/CloudBackground";
import ScrollSparkles from "./components/ScrollSparkles";

/* ──────────────────────────────────────────────
   InvitacionXV – Componente orquestador principal
   ────────────────────────────────────────────── */

function InvitacionContent() {
  const { styles } = useTheme();

  return (
    <div
      className={`${styles.pageBg} min-h-screen transition-all duration-1000 relative`}
    >
      {/* ── Fondos condicionales por tema ── */}
      <VineDecoration />
      <CloudBackground />
      <ScrollSparkles />

      {/* ── Contenido principal ── */}
      <div className="relative z-[5]">
        <HeroSection />
        <Countdown />
        <PhotoGallery />
        <EventInfo />
        <Footer />
      </div>

      {/* ── Controles flotantes ── */}
      <ThemeSwitcher />
      <MusicPlayer />
    </div>
  );
}

export default function InvitacionXV() {
  return (
    <ThemeProvider>
      <InvitacionContent />
    </ThemeProvider>
  );
}
