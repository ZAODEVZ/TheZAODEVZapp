import { motion } from "framer-motion";
import { ArrowRight, Code2, Globe, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-dev.jpg";

const stats = [
  { num: "50+", label: "Projects Shipped" },
  { num: "20+", label: "Team Members" },
  { num: "2", label: "Continents" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0" style={{
          background: "linear-gradient(170deg, rgba(4,8,15,0.88) 0%, rgba(10,20,44,0.88) 50%, rgba(4,8,15,0.95) 100%)"
        }} />
      </div>

      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full pointer-events-none animate-pulse-glow"
        style={{ background: "radial-gradient(circle, rgba(234,179,8,0.09) 0%, transparent 70%)", filter: "blur(80px)" }}
      />
      <div
        className="absolute bottom-1/4 left-1/5 w-[400px] h-[400px] rounded-full pointer-events-none animate-float-delayed"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)", filter: "blur(90px)" }}
      />
      <div
        className="absolute top-1/2 right-10 w-[280px] h-[280px] rounded-full pointer-events-none animate-float"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)", filter: "blur(70px)" }}
      />

      {/* Content */}
      <div className="container relative z-10 pt-24 pb-16">
        <div className="max-w-3xl">

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="flex items-center flex-wrap gap-2.5 mb-8"
          >
            <Link
              to="/apps"
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 text-white/65 hover:text-white transition-colors"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <Sparkles size={11} className="text-gold" />
              ZAO App Store is live
              <ArrowRight size={10} />
            </Link>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-heading font-black leading-[1.04] tracking-tight"
          >
            <span className="text-white">We Build </span>
            <span
              className="text-gradient-gold"
              style={{ filter: "drop-shadow(0 0 32px rgba(234,179,8,0.28))" }}
            >
              World-Class
            </span>
            <br />
            <span className="text-white">Software</span>
          </motion.h1>

          {/* Sub */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-6 max-w-xl"
          >
            <span
              className="mb-3 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 text-gold"
              style={{ background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.22)", boxShadow: "0 0 18px rgba(234,179,8,0.1)" }}
            >
              <Globe size={12} /> Recruiting Worldwide
            </span>
            <p className="text-lg text-white/55 leading-relaxed">
              ThaZao Devz is a global team of elite developers building cutting-edge
              applications across Web3, FinTech, and enterprise platforms. Teams in the{" "}
              <strong className="text-gold font-semibold">USA</strong> and{" "}
              <strong className="text-gold font-semibold">Africa</strong>, with{" "}
              <strong className="text-gold font-semibold">LATAM</strong>,{" "}
              <strong className="text-gold font-semibold">Europe</strong>, and{" "}
              <strong className="text-gold font-semibold">Australia</strong> next.
            </p>
            <Link
              to="/join"
              className="mt-2.5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold hover:translate-x-0.5 transition-transform"
            >
              Building anywhere in the world? Join the network <ArrowRight size={13} />
            </Link>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/projects"
              className="shimmer inline-flex items-center justify-center gap-2 px-9 py-4 rounded-2xl font-bold text-[hsl(216,50%,10%)] text-base"
              style={{
                background: "linear-gradient(135deg, hsl(42 95% 70%), hsl(38 90% 52%))",
                boxShadow: "0 8px 36px rgba(234,179,8,0.42), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.12)"
              }}
            >
              View Our Work <ArrowRight size={18} />
            </Link>
            <Link
              to="/join"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-2xl font-bold text-white text-base hover:bg-white/10 transition-colors"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.14)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 20px rgba(0,0,0,0.25)"
              }}
            >
              <Code2 size={18} className="text-gold" /> Join the Team
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-16 grid grid-cols-3 gap-3 max-w-xs"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl p-4 text-center"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 24px rgba(0,0,0,0.3)"
                }}
              >
                <div
                  className="text-3xl font-heading font-black text-gold"
                  style={{ textShadow: "0 0 24px rgba(234,179,8,0.45)" }}
                >
                  {s.num}
                </div>
                <div className="text-[10px] text-white/60 mt-1 font-medium leading-tight">{s.label}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
