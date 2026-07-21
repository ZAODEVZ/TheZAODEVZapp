import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AudienceSection from "@/components/AudienceSection";
import AppStoreSection from "@/components/AppStoreSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AudienceSection />
      <AppStoreSection />
      <Footer />
    </div>
  );
}
