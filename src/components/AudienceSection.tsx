import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { AUDIENCES, type Audience } from "@/data/zao";
import { Reveal } from "@/components/motion";

function Cta({ cta }: { cta: Audience["ctas"][number] }) {
  const cls =
    "inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl font-bold text-sm transition-transform hover:translate-y-[-1px]";
  if (cta.external) {
    return (
      <a
        href={cta.to}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cls} text-white`}
        style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)" }}
      >
        {cta.label} <ExternalLink size={13} />
      </a>
    );
  }
  return (
    <Link
      to={cta.to}
      className={`${cls} shimmer text-[hsl(216,50%,10%)]`}
      style={{ background: "linear-gradient(135deg, hsl(42 95% 68%), hsl(38 90% 50%))", boxShadow: "0 4px 20px rgba(234,179,8,0.35)" }}
    >
      {cta.label} <ArrowRight size={14} />
    </Link>
  );
}

export default function AudienceSection() {
  const [active, setActive] = useState(0);
  const a = AUDIENCES[active];
  const Icon = a.icon;

  return (
    <section id="audiences" className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #04080f 0%, #060d1a 55%, #04080f 100%)" }}>
      <div className="absolute inset-0 grid-overlay opacity-[0.5] pointer-events-none" />
      <div
        className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none animate-float"
        style={{ background: `radial-gradient(circle, ${a.glow} 0%, transparent 70%)`, filter: "blur(90px)", opacity: 0.5, transition: "background 0.6s ease" }}
      />

      <div className="container relative">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold mb-4">
            Find Your Lane
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white leading-tight tracking-tight">
            One network,<br className="sm:hidden" /> <span className="text-gradient-gold">every kind of builder</span>
          </h2>
          <p className="mt-4 text-white/55 text-sm sm:text-base leading-relaxed">
            The ZAO returns profit, data, and IP rights to the people who make things. Pick who you are and see your way in. This is the Devz side, so builders get the deep end.
          </p>
        </Reveal>

        {/* Persona pills */}
        <Reveal delay={0.05} className="flex flex-wrap justify-center gap-2.5 mb-10">
          {AUDIENCES.map((aud, i) => {
            const AIcon = aud.icon;
            const on = i === active;
            return (
              <button
                key={aud.key}
                onClick={() => setActive(i)}
                className="group relative flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-bold transition-all duration-200"
                style={
                  on
                    ? { background: `linear-gradient(135deg, ${aud.grad[0]}, ${aud.grad[1]})`, color: "#fff", boxShadow: `0 8px 26px ${aud.glow}` }
                    : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.6)" }
                }
              >
                <AIcon size={15} />
                {aud.label}
                {aud.dev && (
                  <span className="text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full" style={on ? { background: "rgba(0,0,0,0.2)" } : { background: "rgba(234,179,8,0.16)", color: "hsl(42 95% 62%)" }}>
                    You
                  </span>
                )}
              </button>
            );
          })}
        </Reveal>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={a.key}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative"
            style={{ background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 32px 80px rgba(0,0,0,0.5)" }}
          >
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: `radial-gradient(ellipse at 12% 0%, ${a.glow}, transparent 55%)` }} />
            <div className="relative grid md:grid-cols-[1.1fr_1fr] gap-8 p-7 sm:p-9">
              {/* Left: intro + gains */}
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: `linear-gradient(145deg, ${a.grad[0]}, ${a.grad[1]})`, boxShadow: `0 12px 32px ${a.glow}, inset 0 1px 0 rgba(255,255,255,0.28)` }}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-white text-2xl leading-none">{a.label}</h3>
                    <p className="text-gold/75 text-sm font-semibold mt-1">{a.tagline}</p>
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{a.blurb}</p>
                <div className="space-y-2.5">
                  {a.gains.map((g) => (
                    <div key={g} className="flex items-start gap-2.5">
                      <span className="mt-0.5 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: a.glow }}>
                        <Check size={11} className="text-white" strokeWidth={3} />
                      </span>
                      <span className="text-sm text-white/70 leading-snug">{g}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-7 flex flex-wrap gap-3">
                  {a.ctas.map((c) => <Cta key={c.label} cta={c} />)}
                </div>
              </div>

              {/* Right: numbered path */}
              <div className="rounded-2xl p-6" style={{ background: "rgba(0,0,0,0.28)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/40 mb-4">Your path in</p>
                <ol className="space-y-4">
                  {a.steps.map((s, i) => (
                    <motion.li
                      key={s}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08 }}
                      className="flex items-start gap-3.5"
                    >
                      <span className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-black text-white" style={{ background: `linear-gradient(145deg, ${a.grad[0]}, ${a.grad[1]})`, boxShadow: `0 4px 14px ${a.glow}` }}>
                        {i + 1}
                      </span>
                      <span className="text-sm text-white/75 leading-snug pt-1">{s}</span>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
