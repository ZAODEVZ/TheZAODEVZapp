import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Gamepad2, Rocket, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion";
import zabalLogo from "@/assets/zabal-gamez-logo.jpg";

const STEPS = [
  { n: "1", title: "Send", desc: "Use the web form or email. A link, attachment, or clear description is enough to start." },
  { n: "2", title: "Review", desc: "The ZAO checks the project, requests missing info when needed, and keeps private details private." },
  { n: "3", title: "Publish", desc: "Approved projects get a permanent page and can appear in the gallery, standings, and live coverage." },
];

export default function ZabalGamezSection() {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "linear-gradient(180deg, #04080f 0%, #0a0620 45%, #04080f 100%)" }}>
      {/* Neon glow orbs, matching the arcade palette */}
      <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] rounded-full pointer-events-none animate-pulse-glow" style={{ background: "radial-gradient(circle, rgba(255,45,85,0.16) 0%, transparent 70%)", filter: "blur(90px)" }} />
      <div className="absolute bottom-0 right-1/4 w-[450px] h-[450px] rounded-full pointer-events-none animate-float" style={{ background: "radial-gradient(circle, rgba(56,189,248,0.14) 0%, transparent 70%)", filter: "blur(90px)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none" style={{ background: "radial-gradient(ellipse, rgba(234,179,8,0.08) 0%, transparent 70%)", filter: "blur(80px)" }} />

      <div className="container relative">
        <div
          className="rounded-[2rem] overflow-hidden relative"
          style={{
            background: "linear-gradient(155deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 40px 100px rgba(0,0,0,0.55)",
          }}
        >
          {/* Arcade scanline accent bar */}
          <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg, #ff2d55, #eab308, #22d3ee, #a855f7, #ff2d55)" }} />

          <div className="relative grid lg:grid-cols-[auto_1fr] gap-10 p-8 sm:p-12 items-center">
            {/* Logo */}
            <Reveal className="flex justify-center lg:justify-start">
              <div className="relative w-40 h-40 sm:w-52 sm:h-52 flex-shrink-0">
                <div className="absolute inset-0 rounded-3xl animate-pulse-glow" style={{ background: "radial-gradient(circle, rgba(234,179,8,0.35) 0%, transparent 70%)", filter: "blur(30px)" }} />
                <img
                  src={zabalLogo}
                  alt="ZABAL GAMEZ"
                  className="relative w-full h-full object-contain drop-shadow-2xl"
                />
              </div>
            </Reveal>

            {/* Content */}
            <div>
              <Reveal className="flex items-center flex-wrap gap-2.5 mb-5">
                <span
                  className="px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase flex items-center gap-1.5"
                  style={{ background: "rgba(255,45,85,0.14)", border: "1px solid rgba(255,45,85,0.3)", color: "#ff6b8b", boxShadow: "0 0 18px rgba(255,45,85,0.15)" }}
                >
                  <Gamepad2 size={12} /> Season 1 &middot; Live Now
                </span>
                <span
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 text-white/65"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <Sparkles size={11} className="text-gold" /> A ZAO Ecosystem Event
                </span>
              </Reveal>

              <Reveal delay={0.06}>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black leading-[1.05] tracking-tight text-white">
                  Join{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg, #ff2d55, #eab308, #22d3ee, #a855f7)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                      filter: "drop-shadow(0 0 28px rgba(234,179,8,0.25))",
                    }}
                  >
                    ZABAL GAMEZ
                  </span>
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                <p className="mt-5 text-white/60 text-base sm:text-lg max-w-2xl leading-relaxed">
                  The ZAO's 3-month Build-A-Thon is here. June workshops, July open build, August Finals.
                  Free, open to every developer. <strong className="text-white font-semibold">Anyone can submit</strong>{" "}
                  an app, prototype, repository, song, visual, video, article, event, or even an unfinished idea.
                  No wallet, Farcaster, GitHub, or prior registration required.
                </p>
              </Reveal>

              <Reveal delay={0.18} className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://zabalgamez.com/submit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-[hsl(216,50%,10%)] text-base"
                  style={{
                    background: "linear-gradient(135deg, hsl(42 95% 70%), hsl(38 90% 52%))",
                    boxShadow: "0 8px 36px rgba(234,179,8,0.42), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.12)",
                  }}
                >
                  <Rocket size={18} /> Submit Your Project <ArrowRight size={18} />
                </a>
                <a
                  href="https://zabalgamez.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-base hover:bg-white/10 transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 4px 20px rgba(0,0,0,0.25)",
                  }}
                >
                  Visit ZABAL GAMEZ <ExternalLink size={16} />
                </a>
              </Reveal>
            </div>
          </div>

          {/* Steps strip */}
          <div className="relative border-t px-8 sm:px-12 py-8" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            <div className="grid sm:grid-cols-3 gap-4">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="rounded-2xl p-5"
                  style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-black text-white"
                      style={{ background: "linear-gradient(135deg, #ff2d55, #eab308)", boxShadow: "0 4px 14px rgba(234,179,8,0.3)" }}
                    >
                      {s.n}
                    </span>
                    <span className="font-heading font-bold text-white text-sm">{s.title}</span>
                  </div>
                  <p className="text-white/55 text-xs leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
