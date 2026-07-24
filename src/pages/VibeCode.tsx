import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Sparkles, Trophy, ExternalLink, GraduationCap } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/motion";
import { VIBE_TIERS, VIBE_BUILDS } from "@/data/vibecode";

const SUBMIT_EMAIL = "info@thezao.com";
const SUBMIT_SUBJECT = "Vibe Code Showcase Submission";
const SUBMIT_BODY = `Project name:
What tier/lesson inspired it:
Link or repo:
Your name or handle (for credit):
Anything else we should know:`;
const mailtoHref = `mailto:${SUBMIT_EMAIL}?subject=${encodeURIComponent(SUBMIT_SUBJECT)}&body=${encodeURIComponent(SUBMIT_BODY)}`;

export default function VibeCode() {
  const [tab, setTab] = useState(0);
  const tier = VIBE_TIERS[tab];
  const TierIcon = tier.icon;

  return (
    <div className="min-h-screen" style={{ background: "#04080f" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none animate-float-delayed" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)", filter: "blur(90px)" }} />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] pointer-events-none animate-float" style={{ background: "radial-gradient(circle, rgba(34,211,238,0.1) 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="container relative text-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold mb-5">
              <GraduationCap size={12} /> Learn With The ZAO
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white mb-4 leading-[1.05] tracking-tight">
              Learn to <span className="text-gradient-gold" style={{ filter: "drop-shadow(0 0 28px rgba(234,179,8,0.26))" }}>Vibe Code</span>
              <br />Beginner to Pro
            </h1>
            <p className="text-white/60 text-base mb-10 max-w-xl mx-auto leading-relaxed">
              Four tiers of short, hands-on lessons on building real software with an AI pair-programmer.
              No prior coding experience required to start. Build something, then show it off.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#curriculum" className="shimmer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-[hsl(216,50%,10%)]" style={{ background: "linear-gradient(135deg, hsl(42 95% 70%), hsl(38 90% 52%))", boxShadow: "0 8px 36px rgba(234,179,8,0.42), inset 0 1px 0 rgba(255,255,255,0.3)" }}>
              Start With Tier 1 <ArrowRight size={18} />
            </a>
            <a href="#submit" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white hover:bg-white/10 transition-colors" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)" }}>
              <Trophy size={17} className="text-gold" /> Share Your Build
            </a>
          </Reveal>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="py-14 scroll-mt-20">
        <div className="container">
          <Reveal className="mb-10 text-center max-w-xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">The Curriculum</span>
            <h2 className="mt-2 font-heading font-black text-white text-2xl sm:text-3xl tracking-tight">Four tiers, five lessons each</h2>
            <p className="mt-3 text-white/55 text-sm leading-relaxed">Work through them in order, or jump to the tier that matches where you're at.</p>
          </Reveal>

          {/* Tier pills */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {VIBE_TIERS.map((t, i) => {
              const Ic = t.icon;
              const on = i === tab;
              return (
                <button
                  key={t.key}
                  onClick={() => setTab(i)}
                  className="group relative flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold transition-all duration-200"
                  style={
                    on
                      ? { background: `linear-gradient(135deg, ${t.grad[0]}, ${t.grad[1]})`, color: "#fff", boxShadow: `0 8px 26px ${t.glow}` }
                      : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }
                  }
                >
                  <Ic size={15} />
                  {t.level}: {t.label}
                </button>
              );
            })}
          </div>

          {/* Active tier panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={tier.key}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative"
              style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 32px 80px rgba(0,0,0,0.5)" }}
            >
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: `radial-gradient(ellipse at 12% 0%, ${tier.glow}, transparent 55%)` }} />
              <div className="relative p-7 sm:p-9">
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `linear-gradient(145deg, ${tier.grad[0]}, ${tier.grad[1]})`, boxShadow: `0 12px 32px ${tier.glow}, inset 0 1px 0 rgba(255,255,255,0.28)` }}>
                    <TierIcon size={26} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-white text-2xl leading-none">{tier.level}: {tier.label}</h3>
                    <p className="text-gold/75 text-sm font-semibold mt-1">{tier.tagline}</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-2xl">{tier.blurb}</p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {tier.lessons.map((l, i) => {
                    const LIcon = l.icon;
                    return (
                      <motion.div
                        key={l.title}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.08 + i * 0.06 }}
                        className="flex items-start gap-3 rounded-xl p-4"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)" }}
                      >
                        <span className="mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: `linear-gradient(135deg, ${tier.grad[0]}, ${tier.grad[1]})` }}>
                          <LIcon size={15} className="text-white" />
                        </span>
                        <div>
                          <span className="text-sm font-bold text-white leading-snug">{i + 1}. {l.title}</span>
                          <p className="text-xs text-white/55 leading-relaxed mt-1">{l.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Showcase */}
      <section className="py-20">
        <div className="container">
          <Reveal className="mb-10 text-center max-w-xl mx-auto">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">Built From These Lessons</span>
            <h2 className="mt-2 font-heading font-black text-white text-2xl sm:text-3xl tracking-tight">The showcase</h2>
            <p className="mt-3 text-white/55 text-sm leading-relaxed">Apps, prototypes, and experiments made by builders working through the curriculum.</p>
          </Reveal>

          {VIBE_BUILDS.length === 0 ? (
            <Reveal delay={0.05} className="max-w-lg mx-auto rounded-3xl p-9 text-center" style={{ background: "rgba(255,255,255,0.03)", border: "1px dashed rgba(255,255,255,0.15)" }}>
              <div className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-4" style={{ background: "rgba(234,179,8,0.12)", border: "1px solid rgba(234,179,8,0.22)" }}>
                <Sparkles size={24} className="text-gold" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg">Nothing here yet</h3>
              <p className="text-white/55 text-sm mt-2 leading-relaxed">Be the first to share what you built from these lessons. It'll show up right here.</p>
              <a href="#submit" className="mt-5 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-gold" style={{ background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.25)" }}>
                Submit Your Build <ArrowRight size={14} />
              </a>
            </Reveal>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {VIBE_BUILDS.map((b) => (
                <a key={b.name} href={b.url} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl p-5" style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(255,255,255,0.09)" }}>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gold">{b.tier}</span>
                  <h3 className="font-heading font-bold text-white text-base mt-1">{b.name}</h3>
                  <p className="text-xs text-white/55 mt-1.5 leading-relaxed">{b.description}</p>
                  <div className="mt-4 pt-3 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-xs text-white/40">by {b.creator}</span>
                    <span className="text-xs font-bold text-gold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                      View <ExternalLink size={10} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Submit */}
      <section id="submit" className="py-16 scroll-mt-20">
        <div className="container">
          <Reveal className="max-w-2xl mx-auto rounded-3xl p-8 sm:p-10 relative overflow-hidden" style={{ background: "linear-gradient(145deg, rgba(234,179,8,0.1), rgba(255,255,255,0.02))", border: "1px solid rgba(234,179,8,0.2)", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}>
            <div className="absolute inset-0 opacity-25 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(234,179,8,0.25), transparent 60%)" }} />
            <div className="relative text-center">
              <h2 className="font-heading font-black text-white text-2xl sm:text-3xl tracking-tight">Share what you built</h2>
              <p className="mt-3 text-white/60 text-sm leading-relaxed max-w-lg mx-auto">
                Finished a lesson or shipped something with vibe coding? Send it over. We review submissions,
                add approved builds to the showcase above, and cool ones get hands-on dev assistance from the
                ZAO Devz team plus a shot at getting listed in the{" "}
                <Link to="/apps" className="text-gold font-semibold hover:underline">ZAO App Store</Link>.
              </p>
              <ul className="mt-6 text-left max-w-md mx-auto space-y-2 text-sm text-white/60">
                <li>&middot; Include the project name and what you made</li>
                <li>&middot; Add a link, repo, or attachment we can look at</li>
                <li>&middot; Tell us which tier or lesson it came from</li>
                <li>&middot; Your name or handle, for credit on the showcase</li>
                <li>&middot; Say if you'd like dev help or want to be considered for the App Store</li>
              </ul>
              <a
                href={mailtoHref}
                className="mt-7 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-[hsl(216,50%,10%)] text-base"
                style={{ background: "linear-gradient(135deg, hsl(42 95% 70%), hsl(38 90% 52%))", boxShadow: "0 8px 36px rgba(234,179,8,0.42), inset 0 1px 0 rgba(255,255,255,0.3)" }}
              >
                <Mail size={18} /> Email {SUBMIT_EMAIL}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA to ZABAL GAMEZ */}
      <section className="py-16">
        <div className="container">
          <Reveal className="max-w-4xl mx-auto rounded-3xl p-9 sm:p-12 text-center relative overflow-hidden" style={{ background: "linear-gradient(145deg, rgba(168,85,247,0.1), rgba(255,255,255,0.02))", border: "1px solid rgba(168,85,247,0.2)", boxShadow: "0 32px 80px rgba(0,0,0,0.5)" }}>
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.25), transparent 60%)" }} />
            <div className="relative">
              <h2 className="font-heading font-black text-white text-2xl sm:text-4xl tracking-tight">Ready for a bigger stage?</h2>
              <p className="mt-3 text-white/60 text-sm sm:text-base max-w-lg mx-auto">Take what you learned here into ZABAL GAMEZ, The ZAO's 3-month Build-A-Thon. Free, open to anyone.</p>
              <a href="https://zabalgamez.com/submit" target="_blank" rel="noopener noreferrer" className="shimmer inline-flex items-center gap-2 mt-7 px-8 py-4 rounded-2xl font-bold text-[hsl(216,50%,10%)]" style={{ background: "linear-gradient(135deg, hsl(42 95% 70%), hsl(38 90% 52%))", boxShadow: "0 8px 36px rgba(234,179,8,0.42), inset 0 1px 0 rgba(255,255,255,0.3)" }}>
                Submit to ZABAL GAMEZ <ExternalLink size={17} />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
