import { ArrowRight, ExternalLink, Globe, Bot, Tent, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Reveal } from "@/components/motion";

const MAILTO = "mailto:info@thezao.com?subject=" + encodeURIComponent("ZAO DEVZ project");

const PACKAGES = [
  {
    icon: Globe,
    title: "Event site",
    line: "A site for your festival, show or tour.",
    items: ["Lineup, artist pages and the schedule", "Tickets and donations by card", "A live page that carries your stream", "Partners and press pages, mobile first"],
  },
  {
    icon: Bot,
    title: "Community bots",
    line: "Bots that do the work your team keeps forgetting.",
    items: ["Telegram or Discord: questions in, answers and tasks out", "A morning digest of what moved and what is stuck", "Updates sent where your people already are"],
  },
  {
    icon: Tent,
    title: "Festival kit",
    line: "Everything for the day itself.",
    items: ["A crew board: who is where, when, doing what", "The run sheet, by the minute", "Social posts written ahead, with clips during the show"],
  },
];

const BUILT = [
  { name: "ZAOstock crew board", url: "https://zaostock.com/ops", host: "zaostock.com/ops" },
  { name: "ZAO Cowork", url: "https://thezao.xyz", host: "thezao.xyz" },
  { name: "ZABAL Gamez", url: "https://zabalgamez.com", host: "zabalgamez.com" },
  { name: "ZAO on Artizen", url: "https://za-oartizen.vercel.app", host: "za-oartizen.vercel.app" },
  { name: "ZAOscout", url: "https://za-oscout.vercel.app", host: "za-oscout.vercel.app" },
];

const STEPS = [
  { num: "01", title: "Tell us what you need", desc: "One call, 30 minutes." },
  { num: "02", title: "Get a plan and a price", desc: "One page, a fixed price, a date." },
  { num: "03", title: "We build in the open", desc: "You see every step, and the code is yours." },
  { num: "04", title: "We launch with you", desc: "And stay for the day it matters." },
];

const card = {
  background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
  border: "1px solid rgba(255,255,255,0.08)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 48px rgba(0,0,0,0.4)",
};

const goldButton = {
  background: "linear-gradient(135deg, hsl(42 95% 70%), hsl(38 90% 52%))",
  boxShadow: "0 8px 36px rgba(234,179,8,0.42), inset 0 1px 0 rgba(255,255,255,0.3)",
};

export default function Work() {
  return (
    <div className="min-h-screen" style={{ background: "#04080f" }}>
      <Navbar />

      {/* Hero */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] pointer-events-none animate-float-delayed" style={{ background: "radial-gradient(circle, rgba(234,179,8,0.1) 0%, transparent 70%)", filter: "blur(90px)" }} />
        <div className="container relative">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold mb-5">
                Work with ZAO DEVZ
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white leading-[1.05] tracking-tight">
                We build the software behind <span className="text-gradient-gold">music events</span> and online communities
              </h1>
              <p className="mt-6 text-lg text-white/60 max-w-2xl leading-relaxed">
                Event sites, ticket pages, bots and the tools your team runs the day on. Built by ZAO DEVZ, the developer team of The ZAO.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href={MAILTO} className="shimmer inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-[hsl(216,50%,10%)]" style={goldButton}>
                <Mail size={18} /> Start a project
              </a>
              <a href="#built" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-white hover:bg-white/10 transition-colors" style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.14)" }}>
                See what we built <ArrowRight size={16} />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-14">
        <div className="container">
          <Reveal className="mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">Three ways to work with us</span>
            <h2 className="mt-2 font-heading font-black text-white text-2xl sm:text-3xl tracking-tight">Pick what you need</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-4">
            {PACKAGES.map((p, i) => {
              const Ic = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.07}>
                  <div className="h-full rounded-2xl p-6 flex flex-col" style={card}>
                    <span className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: "linear-gradient(145deg, hsl(42 95% 65%), hsl(38 90% 50%))" }}>
                      <Ic size={20} className="text-[hsl(216,50%,10%)]" />
                    </span>
                    <h3 className="font-heading font-bold text-white text-lg mb-1">{p.title}</h3>
                    <p className="text-sm text-white/60 mb-4">{p.line}</p>
                    <ul className="space-y-2 flex-1">
                      {p.items.map((it) => (
                        <li key={it} className="text-xs text-white/55 leading-relaxed flex gap-2">
                          <span className="text-gold">•</span> {it}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-5 text-xs font-bold text-gold">Fixed price, quoted after the call</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Built by us */}
      <section id="built" className="py-14 scroll-mt-24">
        <div className="container">
          <Reveal className="mb-8">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">Built by us, live now</span>
            <h2 className="mt-2 font-heading font-black text-white text-2xl sm:text-3xl tracking-tight">Open any of these right now</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {BUILT.map((b, i) => (
              <Reveal key={b.name} delay={i * 0.05}>
                <a href={b.url} target="_blank" rel="noopener noreferrer" className="group block rounded-2xl p-5 card-3d-hover" style={card}>
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading font-bold text-white text-base">{b.name}</h3>
                    <ExternalLink size={14} className="text-white/40 group-hover:text-gold transition-colors" />
                  </div>
                  <p className="mt-1 text-xs text-white/45">{b.host}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-14">
        <div className="container">
          <Reveal className="mb-10">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-gold">How it works</span>
            <h2 className="mt-2 font-heading font-black text-white text-2xl sm:text-3xl tracking-tight">Four steps, no surprises</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {STEPS.map((s, i) => (
              <Reveal key={s.num} delay={i * 0.07}>
                <div className="h-full rounded-2xl p-6" style={card}>
                  <span className="font-heading font-black text-4xl text-white/10 leading-none">{s.num}</span>
                  <h3 className="mt-3 font-heading font-bold text-white text-base mb-1.5">{s.title}</h3>
                  <p className="text-xs text-white/55 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20">
        <div className="container">
          <Reveal>
            <div className="rounded-3xl p-8 sm:p-12 text-center" style={card}>
              <h2 className="font-heading font-black text-white text-3xl sm:text-4xl tracking-tight">Start a project</h2>
              <p className="mt-4 text-white/60 max-w-xl mx-auto">
                Tell us what you are building and when you need it. We reply with a time for the call.
              </p>
              <a href={MAILTO} className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-[hsl(216,50%,10%)]" style={goldButton}>
                <Mail size={18} /> info@thezao.com
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
