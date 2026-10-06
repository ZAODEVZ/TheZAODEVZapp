import { ArrowRight, ArrowUpRight, Globe, Bot, Tent, Mail, Check, Phone, FileText, Code2, Rocket } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/motion";

const MAILTO = "mailto:info@thezao.com?subject=" + encodeURIComponent("ZAO DEVZ project");

const PACKAGES = [
  {
    icon: Globe,
    title: "Event site",
    line: "A site for your festival, show or tour.",
    bestFor: "Festivals, venues, touring artists",
    items: ["Lineup, artist pages and the schedule", "Tickets and donations by card", "A live page that carries your stream", "Partners and press pages, built mobile first"],
  },
  {
    icon: Bot,
    title: "Community bots",
    line: "Bots that do the work your team keeps forgetting.",
    bestFor: "DAOs, collectives, online communities",
    items: ["Telegram or Discord: questions in, answers and tasks out", "A morning digest of what moved and what is stuck", "Updates sent where your people already are"],
  },
  {
    icon: Tent,
    title: "Festival kit",
    line: "Everything for the day itself.",
    bestFor: "Organisers running the day",
    items: ["A crew board: who is where, when, doing what", "The run sheet, by the minute", "Social posts written ahead, with clips during the show"],
  },
];

const BUILT = [
  { name: "ZAOstock crew board", desc: "Run of show and crew roles for a one-day street festival.", url: "https://zaostock.com/ops", host: "zaostock.com/ops" },
  { name: "ZAO Cowork", desc: "The board the ZAO core team runs its work on.", url: "https://thezao.xyz", host: "thezao.xyz" },
  { name: "ZABAL Gamez", desc: "A builder competition with its own site and leaderboard.", url: "https://zabalgamez.com", host: "zabalgamez.com" },
  { name: "ZAOscout", desc: "Reads Reddit, X and Farcaster with no API keys.", url: "https://za-oscout.vercel.app", host: "za-oscout.vercel.app" },
];

const STEPS = [
  { icon: Phone, title: "Tell us what you need", desc: "One call, 30 minutes. What you are building and by when." },
  { icon: FileText, title: "Get a plan and a price", desc: "One page: what we build, a fixed price and a date." },
  { icon: Code2, title: "We build in the open", desc: "You see every step as it ships, and the code is yours." },
  { icon: Rocket, title: "We launch with you", desc: "And we stay on for the day it matters most." },
];

const panel = {
  background: "linear-gradient(160deg, rgba(255,255,255,0.075) 0%, rgba(255,255,255,0.025) 100%)",
  border: "1px solid rgba(255,255,255,0.09)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 24px 60px rgba(0,0,0,0.45)",
};

const goldButton = {
  background: "linear-gradient(135deg, hsl(42 95% 70%), hsl(38 90% 52%))",
  boxShadow: "0 10px 36px rgba(234,179,8,0.35), inset 0 1px 0 rgba(255,255,255,0.35)",
};

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <Reveal className="mb-10 max-w-2xl">
      <span className="text-xs font-bold uppercase tracking-[0.16em] text-gold">{eyebrow}</span>
      <h2 className="mt-3 font-heading font-black text-white text-3xl sm:text-4xl tracking-tight leading-tight">{title}</h2>
      {sub && <p className="mt-3 text-base text-white/70 leading-relaxed">{sub}</p>}
    </Reveal>
  );
}

export default function Work() {
  return (
    <div className="min-h-screen text-white" style={{ background: "#04080f" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
        <div className="absolute -top-20 right-[-10%] w-[640px] h-[520px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(234,179,8,0.14) 0%, transparent 70%)", filter: "blur(90px)" }} />
        <div className="absolute bottom-0 left-[-10%] w-[480px] h-[420px] pointer-events-none" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.10) 0%, transparent 70%)", filter: "blur(90px)" }} />
        <div className="container relative grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-gold" style={{ background: "rgba(234,179,8,0.08)", border: "1px solid rgba(234,179,8,0.25)" }}>
                <span className="w-1.5 h-1.5 rounded-full bg-gold" /> Taking new projects
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.05] tracking-tight">
                We build the software behind <span className="text-gradient-gold">music events</span> and online communities.
              </h1>
              <p className="mt-6 text-lg text-white/75 max-w-xl leading-relaxed">
                Event sites, ticket pages, bots and the tools your team runs the day on. Built by ZAO DEVZ, the developer team of The ZAO.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-9 flex flex-col sm:flex-row gap-4">
              <a href={MAILTO} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-[hsl(216,50%,10%)] hover:-translate-y-0.5 transition-transform" style={goldButton}>
                Start a project <ArrowRight size={18} />
              </a>
              <a href="#built" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white hover:bg-white/10 transition-colors" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.16)" }}>
                See what we built
              </a>
            </Reveal>
          </div>

          {/* Proof panel */}
          <Reveal delay={0.15}>
            <div className="rounded-3xl p-6 sm:p-7" style={panel}>
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-bold text-white">Live right now</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                  <span className="relative flex w-2 h-2"><span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-60 animate-ping" /><span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" /></span>
                  {BUILT.length} sites
                </span>
              </div>
              <ul className="divide-y divide-white/10">
                {BUILT.map((b) => (
                  <li key={b.name}>
                    <a href={b.url} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between py-3">
                      <div>
                        <p className="text-sm font-semibold text-white group-hover:text-gold transition-colors">{b.name}</p>
                        <p className="text-xs text-white/55">{b.host}</p>
                      </div>
                      <ArrowUpRight size={16} className="text-white/40 group-hover:text-gold transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="container">
          <SectionHead eyebrow="What we build" title="Three ways to work with us" sub="Each one is a fixed price, quoted after a short call." />
          <div className="grid md:grid-cols-3 gap-5">
            {PACKAGES.map((p, i) => {
              const Ic = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.07}>
                  <div className="relative h-full rounded-3xl p-7 flex flex-col" style={p.featured ? { ...panel, border: "1px solid rgba(234,179,8,0.35)" } : panel}>
                    {p.featured && (
                      <span className="absolute -top-3 left-7 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[hsl(216,50%,10%)]" style={goldButton}>Most asked for</span>
                    )}
                    <span className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: "linear-gradient(145deg, hsl(42 95% 65%), hsl(38 90% 50%))" }}>
                      <Ic size={22} className="text-[hsl(216,50%,10%)]" />
                    </span>
                    <h3 className="font-heading font-bold text-white text-xl">{p.title}</h3>
                    <p className="mt-1.5 text-sm text-white/75">{p.line}</p>
                    <p className="mt-4 text-xs text-white/55"><span className="font-semibold text-white/80">Best for:</span> {p.bestFor}</p>
                    <ul className="mt-5 space-y-3 flex-1">
                      {p.items.map((it) => (
                        <li key={it} className="flex gap-2.5 text-sm text-white/80 leading-snug">
                          <Check size={16} className="text-gold flex-shrink-0 mt-0.5" /> {it}
                        </li>
                      ))}
                    </ul>
                    <a href={MAILTO} className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)" }}>
                      Ask about this <ArrowRight size={15} />
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Built by us */}
      <section id="built" className="py-20 scroll-mt-24">
        <div className="container">
          <SectionHead eyebrow="Our work" title="Built by us, live now" sub="Every one of these is a real site. Open it and look around." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {BUILT.map((b, i) => (
              <Reveal key={b.name} delay={i * 0.05}>
                <a href={b.url} target="_blank" rel="noopener noreferrer" className="group h-full flex flex-col rounded-3xl p-6 hover:-translate-y-1 transition-transform" style={panel}>
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-heading font-bold text-white text-lg">{b.name}</h3>
                    <ArrowUpRight size={18} className="text-white/40 group-hover:text-gold transition-colors flex-shrink-0" />
                  </div>
                  <p className="mt-2 text-sm text-white/70 leading-relaxed flex-1">{b.desc}</p>
                  <p className="mt-5 text-xs font-semibold text-gold/90">{b.host}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20">
        <div className="container">
          <SectionHead eyebrow="How it works" title="Four steps, no surprises" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {STEPS.map((s, i) => {
              const Ic = s.icon;
              return (
                <Reveal key={s.title} delay={i * 0.07}>
                  <div className="h-full rounded-3xl p-6" style={panel}>
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(234,179,8,0.12)", border: "1px solid rgba(234,179,8,0.25)" }}>
                        <Ic size={18} className="text-gold" />
                      </span>
                      <span className="font-heading font-black text-sm text-white/40">0{i + 1}</span>
                    </div>
                    <h3 className="mt-5 font-heading font-bold text-white text-lg">{s.title}</h3>
                    <p className="mt-2 text-sm text-white/70 leading-relaxed">{s.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] px-8 py-14 sm:px-14 text-center" style={{ ...panel, border: "1px solid rgba(234,179,8,0.25)" }}>
              <div className="absolute inset-x-0 -top-24 h-64 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(234,179,8,0.18) 0%, transparent 70%)", filter: "blur(40px)" }} />
              <h2 className="relative font-heading font-black text-white text-3xl sm:text-5xl tracking-tight">Have something to build?</h2>
              <p className="relative mt-4 text-lg text-white/75 max-w-xl mx-auto">
                Tell us what it is and when you need it. We reply with a time for the call.
              </p>
              <div className="relative mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={MAILTO} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-[hsl(216,50%,10%)] hover:-translate-y-0.5 transition-transform" style={goldButton}>
                  <Mail size={18} /> Start a project
                </a>
                <span className="text-sm text-white/60">or email <a href={MAILTO} className="font-semibold text-white hover:text-gold transition-colors">info@thezao.com</a></span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
