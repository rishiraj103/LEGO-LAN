import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PhilosophySection from "@/components/PhilosophySection";
import FragranceAnatomy from "@/components/FragranceAnatomy";
import Collection from "@/components/Collection";
import LifestyleSection from "@/components/LifestyleSection";
import ScentBuilder from "@/components/ScentBuilder";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScentAura from "@/components/three/ScentAura";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ScentAura />
      <Navbar />
      <main>
        <Hero />
        <PhilosophySection />
        <FragranceAnatomy />
        <Collection />
        <LifestyleSection />
        <ScentBuilder />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
