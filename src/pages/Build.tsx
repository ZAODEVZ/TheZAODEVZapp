import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, GitBranch, Terminal, GitPullRequest } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/motion";
import { DEV_STACK, BUILD_STEPS, ZABAL_TRACKS, REPOS } from "@/data/zao";

const STACK_GROUPS = ["Protocol", "Chains", "Onchain", "Tooling"];

export default function Build() {
  const [group, setGroup] = useState("Protocol");
  const stack = DEV_STACK.filter((s) => s.group === group);

  return (
    <div className="min-h-screen" style={{ background: "#04080f" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none animate-float-delayed" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", filter: "blur(90px)" }} />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] pointer-events-none animate-float" style={{ background: "radial-gradient(circle, rgba(234,179,8,0.08) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="container relative">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold mb-5">
                <Terminal size={12} /> Build on The ZAO
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.05] tracking-tight">
                This is the <span className="text-gradient-gold" style={{ filter: "drop-shadow(0 0 28px rgba(234,179,8,0.26))" }}>Devz</span> side of the ZAO
              </h1>
              <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">
                An AI-operated, Farcaster-native network with open repos and real on-chain primitives. Bring an idea, prototype it in the lab, ship it in public, and earn Respect for what you build.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="https://github.com/bettercallzaal/ZAOOS" target="_blank" rel="noopener noreferrer" className="shimmer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-[hsl(216,50%,10%)]" style={{ background: "linear-gradient(135deg, hsl(42 95% 70%), hsl(38 90% 52%))", boxShadow: "0 8px 36px rgba(234,179,8,0.42), inset 0 1px 0 rgba(255,255,255,0.3)" }}>
                <GitBranch size={18} /> Clone ZAO OS
              </a>
              <a href="https://zabalgamez.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white hover:bg-white/10 transition-colors" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)" }}>
                Join ZABAL Games <ExternalLink size={16} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Ship roadmap */}
      <section className="py-14">
        <div className="container">
          <Reveal className="mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">The Path to Shipping</span>
            <h2 className="mt-2 font-heading font-black text-white text-2xl sm:text-3xl tracking-tight">From idea to on-chain Respect</h2>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            {BUILD_STEPS.map((step, i) => {
              const Ic = step.icon;
              return (
                <Reveal key={step.num} delay={i * 0.07}>
                  <div className="group h-full rounded-2xl p-6 card-3d-hover relative overflow-hidden flex flex-col" style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 48px rgba(0,0,0,0.4)" }}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(145deg, hsl(42 95% 65%), hsl(38 90% 50%))", boxShadow: "0 8px 24px rgba(234,179,8,0.3)" }}>
                        <Ic size={20} className="text-[hsl(216,50%,10%)]" />
                      </span>
                      <span className="font-heading font-black text-4xl text-white/10 leading-none">{step.num}</span>
                    </div>
                    <h3 className="font-heading font-bold text-white text-base mb-1.5">{step.title}</h3>
                    <p className="text-xs text-white/55 leading-relaxed flex-1">{step.desc}</p>
                    {step.cta && (
                      step.cta.external ? (
                        <a href={step.cta.to} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-gold hover:translate-x-0.5 transition-transform">
                          {step.cta.label} <ExternalLink size={11} />
                        </a>
                      ) : (
                        <Link to={step.cta.to} className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-gold hover:translate-x-0.5 transition-transform">
                          {step.cta.label} <ArrowRight size={12} />
                        </Link>
                      )
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive stack */}
      <section className="py-14">
        <div className="container">
          <Reveal className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">The Stack</span>
            <h2 className="mt-2 font-heading font-black text-white text-2xl sm:text-3xl tracking-tight">What you build with</h2>
          </Reveal>
          <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-none pb-1">
            {STACK_GROUPS.map((g) => (
              <button
                key={g}
                onClick={() => setGroup(g)}
                className="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-bold transition-all"
                style={group === g
                  ? { background: "linear-gradient(135deg, hsl(42 95% 65%), hsl(38 90% 50%))", color: "hsl(216,50%,10%)", boxShadow: "0 4px 16px rgba(234,179,8,0.35)" }
                  : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.55)" }}
              >
                {g}
              </button>
            ))}
          </div>
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {stack.map((s, i) => {
              const Ic = s.icon;
              return (
                <motion.div
                  key={s.name}
                  layout
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-2xl p-6 flex items-start gap-4 card-3d-hover"
                  style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(234,179,8,0.12)", border: "1px solid rgba(234,179,8,0.2)" }}>
                    <Ic size={22} className="text-gold" />
                  </span>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base">{s.name}</h3>
                    <p className="text-xs text-white/55 leading-relaxed mt-1">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ZABAL tracks */}
      <section className="py-14">
        <div className="container">
          <Reveal className="text-center max-w-xl mx-auto mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">ZABAL Games</span>
            <h2 className="mt-2 font-heading font-black text-white text-2xl sm:text-3xl tracking-tight">Pick your track</h2>
            <p className="mt-3 text-white/55 text-sm">A free, 3-month, Farcaster-native build-a-thon. Ship in public with a mentor, earn Respect and USDC.</p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {ZABAL_TRACKS.map((t, i) => {
              const Ic = t.icon;
              return (
                <Reveal key={t.label} delay={i * 0.08}>
                  <div className="h-full rounded-2xl p-7 text-center card-3d-hover" style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(255,255,255,0.08)" }}>
                    <span className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(145deg, hsl(42 95% 65%), hsl(38 90% 50%))", boxShadow: "0 12px 32px rgba(234,179,8,0.3)" }}>
                      <Ic size={26} className="text-[hsl(216,50%,10%)]" />
                    </span>
                    <h3 className="font-heading font-black text-white text-lg">{t.label}</h3>
                    <p className="text-sm text-white/55 mt-2 leading-relaxed">{t.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Repos */}
      <section className="py-14">
        <div className="container">
          <Reveal className="mb-8 flex items-center gap-3">
            <GitPullRequest size={20} className="text-gold" />
            <div>
              <h2 className="font-heading font-black text-white text-2xl tracking-tight">Open repos</h2>
              <p className="text-white/50 text-sm mt-0.5">The AI operator ships by pull request only, never straight to main.</p>
            </div>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {REPOS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.05}>
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl p-5 transition-all card-3d-hover" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-flex items-center gap-2 font-mono text-sm font-bold text-white">
                      <GitBranch size={15} className="text-white/50" /> {r.name}
                    </span>
                    <ExternalLink size={13} className="text-white/30 group-hover:text-gold transition-colors" />
                  </div>
                  <p className="text-xs text-white/50 leading-relaxed">{r.desc}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <Reveal className="max-w-4xl mx-auto rounded-3xl p-9 sm:p-12 text-center relative overflow-hidden" style={{ background: "linear-gradient(145deg, rgba(59,130,246,0.1), rgba(255,255,255,0.02))", border: "1px solid rgba(59,130,246,0.2)", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}>
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.25), transparent 60%)" }} />
            <div className="relative">
              <h2 className="font-heading font-black text-white text-2xl sm:text-4xl tracking-tight">Bring your idea. We'll bring the network.</h2>
              <p className="mt-3 text-white/60 text-sm sm:text-base max-w-lg mx-auto">Every app in the ecosystem started as a prototype in the lab. Yours is next.</p>
              <div className="mt-7 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/apps" className="shimmer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-[hsl(216,50%,10%)]" style={{ background: "linear-gradient(135deg, hsl(42 95% 70%), hsl(38 90% 52%))", boxShadow: "0 8px 36px rgba(234,179,8,0.42)" }}>
                  Explore the App Store <ArrowRight size={18} />
                </Link>
                <Link to="/join" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white hover:bg-white/10 transition-colors" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)" }}>
                  Join the Team
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
