import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-dev.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-navy/85" />
      </div>

      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="px-3 py-1 rounded-full bg-gold/20 text-gold text-xs font-semibold tracking-wider uppercase flex items-center gap-1.5">
              <Globe size={14} /> Recruiting Worldwide
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight"
          >
            <span className="text-[hsl(0,0%,100%)]">We Build </span>
            <span className="text-gradient-gold">World-Class</span>
            <br />
            <span className="text-[hsl(0,0%,100%)]">Software</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-[hsl(0,0%,100%,0.7)] max-w-xl leading-relaxed"
          >
            ThaZao Devs is a global team of elite developers building cutting-edge
            applications across Web3, FinTech, and enterprise platforms. Teams in
            the <strong className="text-gold">USA</strong> and{" "}
            <strong className="text-gold">Africa</strong> — your location doesn't matter, your talent does.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gold text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
            >
              View Our Work <ArrowRight size={18} />
            </Link>
            <Link
              to="/join"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-gold/40 text-gold font-semibold hover:bg-gold/10 transition-colors"
            >
              <Code2 size={18} /> Join the Team
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-md"
          >
            {[
              { num: "50+", label: "Projects Shipped" },
              { num: "20+", label: "Team Members" },
              { num: "2", label: "Continents" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-heading font-bold text-gold">{s.num}</div>
                <div className="text-sm text-[hsl(0,0%,100%,0.5)] mt-1">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
