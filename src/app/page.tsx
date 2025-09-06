import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import StatsCounter from "@/components/StatsCounter";
import FeaturesSection from "@/components/FeaturesSection";
import DashboardSection from "@/components/DashboardSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <div className="bg-black">
          <StatsCounter className="bg-black" />
        </div>
        <FeaturesSection />
        <div className="bg-background">
          <DashboardSection />
        </div>
      </main>
      <Footer />
    </>
  );
}