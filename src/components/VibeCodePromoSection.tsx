import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, HandHelping, LayoutGrid, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Reveal } from "@/components/motion";

const PERKS = [
  { icon: Sparkles, title: "Free, beginner to pro", desc: "Four tiers of hands-on lessons. No coding background needed to start." },
  { icon: HandHelping, title: "ZAO Devz assistance", desc: "Build something cool and our team helps you push it further with real dev support." },
  { icon: LayoutGrid, title: "Featured in the App Store", desc: "Ready apps can get listed in the ZAO App Store for the whole ecosystem to see." },
];

export default function VibeCodePromoSection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, #04080f 0%, #06111f 45%, #04080f 100%)" }}>
      <div className="absolute -top-10 left-1/5 w-[480px] h-[480px] rounded-full pointer-events-none animate-float" style={{ background: "radial-gradient(circle, rgba(34,211,238,0.14) 0%, transparent 70%)", filter: "blur(90px)" }} />
      <div className="absolute bottom-0 right-1/5 w-[460px] h-[460px] rounded-full pointer-events-none animate-pulse-glow" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.14) 0%, transparent 70%)", filter: "blur(90px)" }} />

      <div className="container relative">
        <div
          className="rounded-[2rem] overflow-hidden relative"
          style={{
            background: "linear-gradient(155deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 40px 100px rgba(0,0,0,0.55)",
          }}
        >
          <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #22d3ee, #a855f7, #eab308, #f43f5e)" }} />

          <div className="relative grid lg:grid-cols-[auto_1fr] gap-10 p-8 sm:p-12 items-center">
            <Reveal className="flex justify-center lg:justify-start">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0 rounded-3xl flex items-center justify-center" style={{ background: "linear-gradient(145deg, #22d3ee, #a855f7)", boxShadow: "0 20px 60px rgba(168,85,247,0.35), inset 0 1px 0 rgba(255,255,255,0.3)" }}>
                <div className="absolute inset-0 rounded-3xl animate-pulse-glow" style={{ background: "radial-gradient(circle, rgba(234,179,8,0.35) 0%, transparent 70%)", filter: "blur(30px)" }} />
                <GraduationCap size={64} className="relative text-white" strokeWidth={1.6} />
              </div>
            </Reveal>

            <div>
              <Reveal className="flex items-center flex-wrap gap-2.5 mb-5">
                <span
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1.5"
                  style={{ background: "rgba(34,211,238,0.14)", border: "1px solid rgba(34,211,238,0.3)", color: "#67e8f9", boxShadow: "0 0 18px rgba(34,211,238,0.15)" }}
                >
                  <GraduationCap size={12} /> New: Learn to Build
                </span>
              </Reveal>

              <Reveal delay={0.06}>
                <h2 className="text-4xl sm:text-5xl font-heading font-black leading-[1.05] tracking-tight text-white">
                  Learn to{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg, #22d3ee, #a855f7, #eab308)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      filter: "drop-shadow(0 0 26px rgba(168,85,247,0.25))",
                    }}
                  >
                    Vibe Code
                  </span>
                  , Beginner to Pro
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-5 text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
                  Free, hands-on lessons on building real software with an AI pair-programmer. Ship something cool
                  and the ZAO Devz team will help you push it further, with a shot at getting featured in the{" "}
                  <Link to="/apps" className="text-gold font-semibold hover:underline">ZAO App Store</Link>.
                </p>
              </Reveal>

              <Reveal delay={0.18} className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/vibe-code"
                  className="shimmer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-[hsl(216,50%,10%)] text-base"
                  style={{
                    background: "linear-gradient(135deg, hsl(42 95% 70%), hsl(38 90% 52%))",
                    boxShadow: "0 8px 36px rgba(234,179,8,0.42), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.12)",
                  }}
                >
                  Start Learning <ArrowRight size={18} />
                </Link>
                <Link
                  to="/apps"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-base hover:bg-white/10 transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 20px rgba(0,0,0,0.25)",
                  }}
                >
                  <LayoutGrid size={17} className="text-gold" /> See the App Store
                </Link>
              </Reveal>
            </div>
          </div>

          {/* Perks strip */}
          <div className="relative border-t px-8 sm:px-12 py-8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="grid sm:grid-cols-3 gap-4">
              {PERKS.map((p, i) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="rounded-2xl p-5"
                    style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <span
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "linear-gradient(135deg, #22d3ee, #a855f7)", boxShadow: "0 4px 14px rgba(168,85,247,0.3)" }}
                      >
                        <Icon size={15} className="text-white" />
                      </span>
                      <span className="font-heading font-bold text-white text-sm">{p.title}</span>
                    </div>
                    <p className="text-white/55 text-xs leading-relaxed">{p.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
