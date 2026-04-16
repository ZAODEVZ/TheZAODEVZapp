import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectsSection from "@/components/ProjectsSection";
import ClientFormSection from "@/components/ClientFormSection";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <ProjectsSection />
        <ClientFormSection />
      </div>
      <Footer />
    </div>
  );
}
