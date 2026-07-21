import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ShieldCheck, Vote, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal, Counter, GrowBar } from "@/components/motion";
import { PILLARS, BRAKE_QUOTE } from "@/data/zao";

const STATS = [
  { to: 100, suffix: "+", label: "Weeks Running" },
  { to: 156, suffix: "", label: "Respect Holders" },
  { to: 3, suffix: "", label: "Chains" },
  { to: 990, suffix: "+", label: "Research Docs" },
];

const FIB = [1, 1, 2, 3, 5, 8, 13, 21];

export default function Learn() {
  const [tab, setTab] = useState(0);
  const p = PILLARS[tab];
  const PIcon = p.icon;

  return (
    <div className="min-h-screen" style={{ background: "#04080f" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[820px] h-[480px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(234,179,8,0.08) 0%, transparent 65%)", filter: "blur(80px)" }} />
        <div className="container relative text-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold mb-4">
              Learn The ZAO
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white mb-4 leading-[1.05] tracking-tight">
              Understand the network<br />
              <span className="text-gradient-gold" style={{ filter: "drop-shadow(0 0 28px rgba(234,179,8,0.26))" }}>in ten minutes</span>
            </h1>
            <p className="text-white/60 text-base mb-10 max-w-xl mx-auto leading-relaxed">
              ZTalent Artist Organization: a decentralized impact network returning profit, data, and IP rights to artists. Here is how it actually works.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto">
            {STATS.map((s) => (
              <div key={s.label} className="rounded-2xl py-5 px-3" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}>
                <div className="text-2xl sm:text-3xl font-heading font-black text-gold" style={{ textShadow: "0 0 22px rgba(234,179,8,0.4)" }}>
                  <Counter to={s.to} suffix={s.suffix} />
                </div>
                <div className="text-[10px] text-white/45 mt-1 font-medium uppercase tracking-wide">{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Interactive pillar explorer */}
      <section className="py-10">
        <div className="container">
          <div className="grid lg:grid-cols-[300px_1fr] gap-6">
            {/* Tab rail */}
            <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible scrollbar-none pb-2 lg:pb-0">
              {PILLARS.map((pil, i) => {
                const Ic = pil.icon;
                const on = i === tab;
                return (
                  <button
                    key={pil.key}
                    onClick={() => setTab(i)}
                    className="flex-shrink-0 flex items-center gap-3 px-4 py-3.5 rounded-2xl text-left transition-all duration-200 w-auto lg:w-full"
                    style={
                      on
                        ? { background: "linear-gradient(135deg, rgba(234,179,8,0.16), rgba(234,179,8,0.05))", border: "1px solid rgba(234,179,8,0.3)", boxShadow: "0 8px 24px rgba(234,179,8,0.12)" }
                        : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }
                    }
                  >
                    <span className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: on ? "linear-gradient(145deg, hsl(42 95% 65%), hsl(38 90% 50%))" : "rgba(255,255,255,0.06)" }}>
                      <Ic size={17} className={on ? "text-[hsl(216,50%,10%)]" : "text-white/60"} />
                    </span>
                    <span className={`text-sm font-bold whitespace-nowrap lg:whitespace-normal ${on ? "text-gold" : "text-white/60"}`}>{pil.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Content panel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl p-7 sm:p-9 relative overflow-hidden"
                style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 32px 80px rgba(0,0,0,0.5)" }}
              >
                <div className="absolute inset-0 opacity-15 pointer-events-none" style={{ background: "radial-gradient(ellipse at 90% 0%, rgba(234,179,8,0.4), transparent 55%)" }} />
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5" style={{ background: "linear-gradient(145deg, hsl(42 95% 65%), hsl(38 90% 50%))", boxShadow: "0 12px 32px rgba(234,179,8,0.35), inset 0 1px 0 rgba(255,255,255,0.3)" }}>
                    <PIcon size={26} className="text-[hsl(216,50%,10%)]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">{p.label}</span>
                  <h2 className="mt-2 font-heading font-black text-white text-2xl sm:text-3xl tracking-tight leading-tight">{p.headline}</h2>
                  <p className="mt-4 text-white/60 text-sm sm:text-base leading-relaxed max-w-2xl">{p.body}</p>
                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {p.points.map((pt, i) => (
                      <motion.div
                        key={pt}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.12 + i * 0.06 }}
                        className="flex items-start gap-2.5 rounded-xl p-3.5"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <span className="mt-0.5 w-4 h-4 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                          <Check size={11} className="text-[hsl(216,50%,10%)]" strokeWidth={3} />
                        </span>
                        <span className="text-sm text-white/70 leading-snug">{pt}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Respect: Fibonacci rewards */}
      <section className="py-16">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <Reveal>
              <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">The Respect Game</span>
              <h2 className="mt-2 font-heading font-black text-white text-2xl sm:text-3xl tracking-tight">Rewards follow a Fibonacci curve</h2>
              <p className="mt-4 text-white/60 text-sm leading-relaxed">
                Every week, contributors are ranked and rewarded along a Fibonacci curve, so the people who moved the network furthest earn the most, without winner-take-all. Respect is soulbound and earned, never bought. The game has run without a break since July 30, 2024.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Optimism", "OG ERC-20", "ZOR ERC-1155", "Soulbound"].map((t) => (
                  <span key={t} className="text-[11px] font-semibold text-white/60 px-2.5 py-1 rounded-lg" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}>{t}</span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1} className="rounded-3xl p-7" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="flex items-end justify-between gap-2 sm:gap-3 h-52">
                {FIB.map((f, i) => {
                  const pct = (f / 21) * 100;
                  return (
                    <div key={i} className="flex-1 flex flex-col items-center justify-end h-full gap-2">
                      <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: `${pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full rounded-t-lg rounded-b-sm"
                        style={{ background: `linear-gradient(180deg, hsl(42 95% ${68 - i * 2}%), hsl(38 90% ${50 - i}%))`, boxShadow: "0 0 20px rgba(234,179,8,0.25)" }}
                      />
                      <span className="text-[10px] font-bold text-white/40">{f}</span>
                    </div>
                  );
                })}
              </div>
              <p className="text-center text-[11px] text-white/35 mt-4">Reward weight by contribution rank</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* OREC dual-window */}
      <section className="py-16">
        <div className="container">
          <Reveal className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">OREC Governance</span>
            <h2 className="mt-2 font-heading font-black text-white text-2xl sm:text-3xl tracking-tight">Nothing irreversible ships without a brake</h2>
            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              Decisions move through a dual-window model built for reversibility. First a vote, then a veto, so the community always has a chance to stop something before it lands.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="max-w-3xl mx-auto rounded-3xl p-7 sm:p-9" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Vote, title: "72h Vote", desc: "The community votes the decision up.", color: "hsl(42 95% 60%)" },
                  { icon: ShieldCheck, title: "72h Veto", desc: "A reversal window before anything lands.", color: "hsl(160 70% 50%)" },
                ].map((w, i) => {
                  const WIcon = w.icon;
                  return (
                    <div key={w.title} className="rounded-2xl p-5" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "rgba(255,255,255,0.06)" }}>
                          <WIcon size={17} style={{ color: w.color }} />
                        </span>
                        <span className="font-heading font-black text-white text-lg">{w.title}</span>
                      </div>
                      <p className="text-sm text-white/55 leading-snug">{w.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* animated timeline */}
              <div className="mt-6 relative h-2.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                <GrowBar pct={50} color="linear-gradient(90deg, hsl(42 95% 58%), hsl(42 95% 68%))" />
              </div>
              <div className="flex items-center justify-between mt-2 text-[11px] text-white/40 font-medium">
                <span className="flex items-center gap-1"><Clock size={11} /> Proposal</span>
                <span>Vote closes</span>
                <span>Veto closes → ships</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="max-w-3xl mx-auto mt-8">
            <div className="rounded-2xl p-6 relative" style={{ background: "rgba(46,230,166,0.05)", borderLeft: "3px solid rgba(46,230,166,0.6)" }}>
              <p className="text-white/70 text-sm sm:text-base italic leading-relaxed">{BRAKE_QUOTE}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA to build */}
      <section className="py-20">
        <div className="container">
          <Reveal className="max-w-4xl mx-auto rounded-3xl p-9 sm:p-12 text-center relative overflow-hidden" style={{ background: "linear-gradient(145deg, rgba(234,179,8,0.1), rgba(255,255,255,0.02))", border: "1px solid rgba(234,179,8,0.2)", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}>
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(234,179,8,0.25), transparent 60%)" }} />
            <div className="relative">
              <h2 className="font-heading font-black text-white text-2xl sm:text-4xl tracking-tight">Ready to build on it?</h2>
              <p className="mt-3 text-white/60 text-sm sm:text-base max-w-lg mx-auto">The Devz side is where the network gets built. Here is exactly how to start shipping and earning Respect.</p>
              <Link to="/build" className="shimmer inline-flex items-center gap-2 mt-7 px-8 py-4 rounded-2xl font-bold text-[hsl(216,50%,10%)]" style={{ background: "linear-gradient(135deg, hsl(42 95% 70%), hsl(38 90% 52%))", boxShadow: "0 8px 36px rgba(234,179,8,0.42), inset 0 1px 0 rgba(255,255,255,0.3)" }}>
                Go to Build on the ZAO <ArrowRight size={18} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
