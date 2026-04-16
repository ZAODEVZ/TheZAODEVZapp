import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JoinSection from "@/components/JoinSection";

export default function Join() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <JoinSection />
      </div>
      <Footer />
    </div>
  );
}
