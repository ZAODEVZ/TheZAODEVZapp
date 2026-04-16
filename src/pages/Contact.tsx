import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <ContactFormSection />
      </div>
      <Footer />
    </div>
  );
}
