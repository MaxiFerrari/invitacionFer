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

function SectionDivider() {
  const { styles: s } = useTheme();
  return (
    <div className="relative py-4">
      <div className={`w-24 h-px mx-auto ${s.dividerColor}`} />
    </div>
  );
}

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
        <SectionDivider />
        <Countdown />
        <SectionDivider />
        <PhotoGallery />
        <SectionDivider />
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
