import { useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Search, Star, Sparkles, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type React from "react";
import zaoLogo from "@/assets/thezao-logo.jpg";

const CATEGORIES = ["All", "Productivity", "Gaming", "Music", "Web3"];


const apps = [
  {
    id: 1,
    name: "The ZAO Co-Works",
    url: "https://thezao.xyz",
    category: "Productivity",
    description: "One board for every ZAO ecosystem brand. Manage tasks across brands, filter by owner, and sync with Telegram for real-time team coordination.",
    icon: zaoLogo,
    iconBg: "#04080f",
    glowColor: "rgba(59,130,246,0.55)",
    rating: 4.9,
    featured: true,
    tags: ["Productivity", "Team", "Tools"],
    badge: "Official",
  },
  {
    id: 2,
    name: "ZABAL Gamez",
    url: "https://zabalgamez.com/",
    category: "Gaming",
    description: "Ship for a community 100+ weeks strong and keep earning from what you build. A three-month build competition with real ongoing revenue cuts and a $500 USDC pool.",
    icon: "https://zabalgamez.com/assets/logo-gamez.png",
    iconBg: "#04080f",
    glowColor: "rgba(139,92,246,0.55)",
    rating: 4.8,
    featured: true,
    tags: ["Gaming", "Build", "Community"],
    badge: "Live Now",
  },
  {
    id: 3,
    name: "SongChainn",
    url: "https://www.songchainn.xyz",
    category: "Music",
    description: "$ONGCHAINN. Music on the blockchain from the ZAO ecosystem.",
    icon: "https://songchainn.xyz/assets/splash.png",
    iconBg: "#04080f",
    glowColor: "rgba(59,130,246,0.6)",
    rating: 4.7,
    featured: true,
    tags: ["Music", "Web3", "Chain"],
    badge: "New",
  },
  {
    id: 4,
    name: "BetterCallZaal",
    url: "https://bettercallzaal.com",
    category: "Web3",
    description: "Zaal's personal hub. Builder operating across The ZAO, Farcaster, and the broader Web3 ecosystem.",
    icon: "https://bettercallzaal.com/assets/icon.png",
    iconBg: "#04080f",
    glowColor: "rgba(220,38,38,0.55)",
    rating: 4.9,
    featured: false,
    tags: ["Web3", "Portfolio", "Builder"],
    badge: null,
  },
];

function Stars({ rating, size = "sm" }: { rating: number; size?: "sm" | "md" }) {
  const px = size === "md" ? 12 : 9;
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={px} className={i <= Math.round(rating) ? "fill-gold text-gold" : "text-white/15"} />
      ))}
      <span className={`ml-1 font-semibold text-white/45 ${size === "md" ? "text-sm" : "text-[10px]"}`}>{rating}</span>
    </div>
  );
}

function AppIcon3D({ icon, glowColor, name, iconBg, size = "md" }: {
  icon: string; glowColor: string; name: string; iconBg: string; size?: "sm" | "md" | "lg";
}) {
  const dims =
    size === "lg" ? { box: "w-20 h-20", radius: "rounded-[22px]" }
    : size === "md" ? { box: "w-[62px] h-[62px]", radius: "rounded-[18px]" }
    : { box: "w-14 h-14", radius: "rounded-2xl" };

  return (
    <div className="relative flex-shrink-0">
      <div className={`absolute inset-0 ${dims.radius} blur-md opacity-60 scale-90`} style={{ background: glowColor }} />
      <div
        className={`icon-3d relative ${dims.box} ${dims.radius} overflow-hidden`}
        style={{ background: iconBg, boxShadow: `0 12px 36px ${glowColor}, 0 2px 8px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.18)` }}
      >
        <img src={icon} alt={name} className="w-full h-full object-cover" style={{ position: "relative", zIndex: 0 }} />
      </div>
    </div>
  );
}

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 260, damping: 22 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 260, damping: 22 });
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  }
  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Apps() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    return apps.filter((app) => {
      const matchCat = activeCategory === "All" || app.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        app.name.toLowerCase().includes(q) ||
        app.description.toLowerCase().includes(q) ||
        app.tags.some((t) => t.toLowerCase().includes(q)) ||
        app.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <div className="min-h-screen" style={{ background: "#04080f" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-14 overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(234,179,8,0.07) 0%, transparent 65%)", filter: "blur(80px)" }}
        />
        <div className="container relative text-center">
          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold mb-4">
              <Sparkles size={11} /> ZAO Ecosystem
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-white mb-4 leading-tight tracking-tight">
              The <span className="text-gradient-gold" style={{ filter: "drop-shadow(0 0 28px rgba(234,179,8,0.28))" }}>ZAO</span> App Store
            </h1>
            <p className="text-white/38 text-base mb-10 max-w-md mx-auto leading-relaxed">
              Real apps built by The ZAO ecosystem. Click any app to launch.
            </p>
            <div className="relative max-w-lg mx-auto">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/28 pointer-events-none" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search apps..."
                className="w-full pl-11 pr-5 py-4 rounded-2xl text-white placeholder:text-white/22 text-sm focus:outline-none transition-all"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 20px rgba(0,0,0,0.3)" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(234,179,8,0.35)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="py-8 pb-28">
        <div className="container">
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200"
                style={
                  activeCategory === cat
                    ? { background: "linear-gradient(135deg, hsl(42 95% 65%), hsl(38 90% 50%))", color: "hsl(216,50%,10%)", boxShadow: "0 4px 16px rgba(234,179,8,0.35)" }
                    : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.5)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="popLayout">
            {filtered.length === 0 ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-24 text-white/20 text-sm">
                No apps found.
              </motion.div>
            ) : (
              <motion.div key="grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" style={{ perspective: "1200px" }}>
                {filtered.map((app, i) => (
                  <motion.div
                    key={app.id}
                    layout
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.25, delay: i * 0.06 }}
                  >
                    <TiltCard className="h-full">
                      <a
                        href={app.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative block h-full rounded-2xl overflow-hidden transition-all duration-300"
                        style={{
                          background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 24px 56px rgba(0,0,0,0.45)"
                        }}
                      >
                        <div
                          className="absolute inset-0 opacity-[0.07] group-hover:opacity-[0.14] transition-opacity duration-300 pointer-events-none"
                          style={{ background: `radial-gradient(ellipse at top left, ${app.glowColor}, transparent 60%)` }}
                        />
                        <div className="relative p-6">
                          <div className="flex items-start justify-between mb-5">
                            <AppIcon3D icon={app.icon} glowColor={app.glowColor} name={app.name} iconBg={app.iconBg} size="lg" />
                            {app.badge && (
                              <span className="text-gold text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full" style={{ background: "rgba(234,179,8,0.12)", border: "1px solid rgba(234,179,8,0.22)" }}>
                                {app.badge}
                              </span>
                            )}
                          </div>
                          <h3 className="font-heading font-black text-white text-xl mb-0.5">{app.name}</h3>
                          <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold/60">{app.category}</span>
                          <p className="mt-2.5 text-sm text-white/42 leading-relaxed">{app.description}</p>
                          <div className="mt-5 flex items-center justify-between">
                            <Stars rating={app.rating} size="md" />
                            <span
                              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[hsl(216,50%,10%)] text-xs font-black shimmer"
                              style={{ background: "linear-gradient(135deg, hsl(42 95% 68%), hsl(38 90% 50%))", boxShadow: "0 4px 16px rgba(234,179,8,0.35), inset 0 1px 0 rgba(255,255,255,0.28)" }}
                            >
                              Visit <ExternalLink size={11} />
                            </span>
                          </div>
                          <div className="mt-4 pt-4 text-[11px] text-white/22 font-medium" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                            {app.url.replace("https://", "").replace("www.", "")}
                          </div>
                        </div>
                      </a>
                    </TiltCard>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </div>
  );
}
