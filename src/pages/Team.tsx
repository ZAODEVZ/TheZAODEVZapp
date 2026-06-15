import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TeamSection from "@/components/TeamSection";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <TeamSection />
        {/* CTA */}
        <section className="py-20 bg-background">
          <div className="container text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                Want to be part of our team?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
                We're always looking for talented developers worldwide. Your location doesn't matter, your skills do.
              </p>
              <Link
                to="/join"
                className="mt-8 inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gold text-accent-foreground font-bold text-lg hover:opacity-90 transition-opacity"
              >
                Join the Team <ArrowRight size={20} />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
