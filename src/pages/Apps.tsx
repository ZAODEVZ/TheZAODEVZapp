import { useState, useMemo } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Search, Star, Sparkles, ExternalLink, BadgeCheck, ArrowUpDown, Lock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AppIconTile from "@/components/AppIconTile";
import { APPS, CATEGORIES, ECOSYSTEM_STATS, type ZaoApp } from "@/data/apps";
import { useAppVoteStats, useCastVote, blendRating } from "@/hooks/useAppVotes";
import { supabase } from "@/lib/supabase";
import type React from "react";

type SortKey = "featured" | "rating" | "az";
const SORTS: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "rating", label: "Top Rated" },
  { key: "az", label: "A to Z" },
];

function cleanUrl(url: string) {
  return url.replace("https://", "").replace("http://", "").replace("www.", "").replace(/\/$/, "");
}

/**
 * Shows the blended rating (editorial seed + real community votes) and, when Supabase is
 * configured, lets a visitor click a star to cast their own vote. Uses span+role="button"
 * rather than <button> so it can safely sit inside the card's outer <a> without invalid
 * interactive-in-interactive HTML nesting.
 */
function Stars({ app, size = "sm" }: { app: ZaoApp; size?: "sm" | "md" }) {
  const { data: voteStats } = useAppVoteStats();
  const castVote = useCastVote();
  const [hover, setHover] = useState<number | null>(null);
  const votable = !!supabase;

  const { rating, votes } = blendRating(app.rating, voteStats?.[app.id]);
  const display = hover ?? rating;
  const px = size === "md" ? 12 : 9;

  function rate(i: number, e: React.SyntheticEvent) {
    e.preventDefault();
    e.stopPropagation();
    castVote.mutate({ appId: app.id, rating: i });
  }

  return (
    <div
      className="flex items-center gap-0.5"
      aria-label={`Rated ${rating} out of 5${votes ? ` from ${votes} community votes` : ""}`}
      onMouseLeave={() => setHover(null)}
    >
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          role={votable ? "button" : undefined}
          tabIndex={votable ? 0 : undefined}
          aria-label={votable ? `Rate ${app.name} ${i} out of 5` : undefined}
          onClick={votable ? (e) => rate(i, e) : undefined}
          onKeyDown={votable ? (e) => { if (e.key === "Enter" || e.key === " ") rate(i, e); } : undefined}
          onMouseEnter={votable ? () => setHover(i) : undefined}
          className={votable ? "cursor-pointer" : undefined}
        >
          <Star size={px} className={i <= Math.round(display) ? "fill-gold text-gold" : "text-white/15"} />
        </span>
      ))}
      <span className={`ml-1 font-semibold text-white/55 ${size === "md" ? "text-sm" : "text-[10px]"}`}>{rating}</span>
      {votes > 0 && <span className="ml-1 text-white/30 text-[10px]">({votes})</span>}
    </div>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-flex items-center gap-1 text-[10px] font-semibold text-white/60 px-2 py-0.5 rounded-md"
      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}
    >
      {children}
    </span>
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

function VisitButton({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-[hsl(216,50%,10%)] text-xs font-black shimmer"
      style={{ background: "linear-gradient(135deg, hsl(42 95% 68%), hsl(38 90% 50%))", boxShadow: "0 4px 16px rgba(234,179,8,0.35), inset 0 1px 0 rgba(255,255,255,0.28)" }}
    >
      {label} <ExternalLink size={11} />
    </span>
  );
}

function MetaRow({ app }: { app: ZaoApp }) {
  const inhouse = app.access === "inhouse";
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {inhouse ? (
        <Chip>
          <Lock size={10} className="text-slate-300" /> In-House
        </Chip>
      ) : (
        <Chip>
          <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" /> {app.status}
        </Chip>
      )}
      {app.chains.map((c) => (
        <Chip key={c}>{c}</Chip>
      ))}
    </div>
  );
}

/** Large flagship spotlight card (shown at the top when browsing everything). */
function Spotlight({ app }: { app: ZaoApp }) {
  return (
    <motion.a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative block rounded-3xl overflow-hidden mb-8"
      style={{
        background: "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.12), 0 32px 80px rgba(0,0,0,0.5)",
      }}
    >
      <div
        className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 15% 20%, ${app.glow}, transparent 55%)` }}
      />
      <div className="relative p-7 sm:p-9 flex flex-col sm:flex-row gap-7 items-start">
        <AppIconTile icon={app.icon} grad={app.grad} glow={app.glow} name={app.name} size="lg" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-2">
            <span className="text-gold text-[10px] font-black uppercase tracking-[0.16em] px-2.5 py-0.5 rounded-full" style={{ background: "rgba(234,179,8,0.14)", border: "1px solid rgba(234,179,8,0.28)" }}>
              {app.badge ?? "Featured"}
            </span>
            {app.verified && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-sky-300/90">
                <BadgeCheck size={13} /> Official ZAO
              </span>
            )}
          </div>
          <h2 className="font-heading font-black text-white text-2xl sm:text-3xl tracking-tight">{app.name}</h2>
          <p className="text-gold/70 text-sm font-semibold mt-0.5">{app.tagline}</p>
          <p className="mt-3 text-sm text-white/60 leading-relaxed max-w-2xl">{app.description}</p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <MetaRow app={app} />
          </div>
          <div className="mt-5 flex items-center gap-4 flex-wrap">
            <VisitButton label={app.launchLabel} />
            <Stars app={app} size="md" />
            <span className="text-xs text-white/30 font-medium">{cleanUrl(app.url)}</span>
          </div>
        </div>
      </div>
    </motion.a>
  );
}

function AppCard({ app, index }: { app: ZaoApp; index: number }) {
  const inhouse = app.access === "inhouse";

  const body = (
    <>
      <div
        className="absolute inset-0 opacity-[0.07] group-hover:opacity-[0.16] transition-opacity duration-300 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at top left, ${app.glow}, transparent 60%)` }}
      />
      <div className="relative p-6 flex flex-col h-full">
        <div className="flex items-start justify-between mb-5">
          <AppIconTile icon={app.icon} grad={app.grad} glow={app.glow} name={app.name} size="lg" />
          {inhouse ? (
            <span className="inline-flex items-center gap-1 text-slate-200 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full" style={{ background: "rgba(148,163,184,0.14)", border: "1px solid rgba(148,163,184,0.32)" }}>
              <Lock size={10} /> In-House
            </span>
          ) : app.badge ? (
            <span className="text-gold text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full" style={{ background: "rgba(234,179,8,0.12)", border: "1px solid rgba(234,179,8,0.22)" }}>
              {app.badge}
            </span>
          ) : null}
        </div>

        <div className="flex items-center gap-1.5">
          <h3 className="font-heading font-black text-white text-xl">{app.name}</h3>
          {app.verified && <BadgeCheck size={15} className="text-sky-300/90" aria-label="Official ZAO app" />}
        </div>
        <span className="text-[11px] font-semibold text-gold/70">{app.tagline}</span>
        <p className="mt-2.5 text-sm text-white/55 leading-relaxed">{app.description}</p>

        <div className="mt-3 text-[11px] text-white/45 font-medium flex items-center gap-1.5">
          <Sparkles size={11} className="text-gold/70" /> {app.metric}
        </div>

        <div className="mt-3.5">
          <MetaRow app={app} />
        </div>

        {/* footer pinned to bottom so cards align */}
        {inhouse ? (
          <div className="mt-auto pt-5">
            <div className="flex items-center gap-2.5 rounded-xl px-3.5 py-3" style={{ background: "rgba(148,163,184,0.08)", border: "1px solid rgba(148,163,184,0.18)" }}>
              <Lock size={14} className="text-slate-300 flex-shrink-0" />
              <span className="text-[11px] font-semibold text-slate-300/90 leading-snug">
                Internal ZAO tool. Runs inside the network, not publicly launchable.
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="mt-auto pt-5 flex items-center justify-between">
              <Stars app={app} size="md" />
              <VisitButton label={app.launchLabel} />
            </div>
            <div className="mt-4 pt-4 text-[11px] text-white/25 font-medium" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
              {cleanUrl(app.url)}
            </div>
          </>
        )}
      </div>
    </>
  );

  const shared = "group relative block h-full rounded-2xl overflow-hidden transition-all duration-300";
  const cardStyle = {
    background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 24px 56px rgba(0,0,0,0.45)",
  } as const;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25, delay: Math.min(index * 0.05, 0.3) }}
    >
      <TiltCard className="h-full">
        {inhouse ? (
          <div className={`${shared} cursor-default`} style={cardStyle} aria-label={`${app.name} — internal ZAO tool, not publicly launchable`}>
            {body}
          </div>
        ) : (
          <a href={app.url} target="_blank" rel="noopener noreferrer" className={shared} style={cardStyle}>
            {body}
          </a>
        )}
      </TiltCard>
    </motion.div>
  );
}

export default function Apps() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [sort, setSort] = useState<SortKey>("featured");

  const isBrowsingAll = activeCategory === "All" && search.trim() === "";
  const flagship = APPS.find((a) => a.flagship);

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    let list = APPS.filter((app) => {
      const matchCat = activeCategory === "All" || app.category === activeCategory;
      const matchSearch =
        !q ||
        app.name.toLowerCase().includes(q) ||
        app.tagline.toLowerCase().includes(q) ||
        app.description.toLowerCase().includes(q) ||
        app.tags.some((t) => t.toLowerCase().includes(q)) ||
        app.chains.some((c) => c.toLowerCase().includes(q)) ||
        app.category.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });

    list = [...list].sort((a, b) => {
      if (sort === "az") return a.name.localeCompare(b.name);
      if (sort === "rating") return b.rating - a.rating;
      // featured: featured first, then rating
      return Number(b.featured) - Number(a.featured) || b.rating - a.rating;
    });
    return list;
  }, [search, activeCategory, sort]);

  // When browsing everything with default sort, promote the flagship into its
  // own spotlight and keep it out of the grid to avoid duplication.
  const showSpotlight = isBrowsingAll && sort === "featured" && !!flagship;
  const gridApps = showSpotlight ? filtered.filter((a) => !a.flagship) : filtered;

  return (
    <div className="min-h-screen" style={{ background: "#04080f" }}>
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative pt-28 pb-10 overflow-hidden">
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
            <p className="text-white/55 text-base mb-9 max-w-lg mx-auto leading-relaxed">
              Every production lane and app in the ZAO ecosystem, in one place. Profit, data, and IP rights back to artists. Click any app to launch.
            </p>

            {/* Ecosystem stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto mb-9">
              {ECOSYSTEM_STATS.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl py-4 px-3"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)" }}
                >
                  <div className="text-2xl sm:text-3xl font-heading font-black text-gold" style={{ textShadow: "0 0 22px rgba(234,179,8,0.4)" }}>{s.num}</div>
                  <div className="text-[10px] text-white/45 mt-1 font-medium uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="relative max-w-lg mx-auto">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/28 pointer-events-none" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search apps, chains, or categories..."
                aria-label="Search apps"
                className="w-full pl-11 pr-5 py-4 rounded-2xl text-white placeholder:text-white/25 text-sm focus:outline-none transition-all"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 20px rgba(0,0,0,0.3)" }}
                onFocus={(e) => { e.currentTarget.style.borderColor = "rgba(234,179,8,0.35)"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="py-6 pb-28">
        <div className="container">
          {/* Category filters + sort */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-8">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none flex-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="flex-shrink-0 px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200"
                  style={
                    activeCategory === cat
                      ? { background: "linear-gradient(135deg, hsl(42 95% 65%), hsl(38 90% 50%))", color: "hsl(216,50%,10%)", boxShadow: "0 4px 16px rgba(234,179,8,0.35)" }
                      : { background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.55)" }
                  }
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <ArrowUpDown size={14} className="text-white/35" />
              {SORTS.map((s) => (
                <button
                  key={s.key}
                  onClick={() => setSort(s.key)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
                  style={
                    sort === s.key
                      ? { background: "rgba(234,179,8,0.14)", border: "1px solid rgba(234,179,8,0.3)", color: "hsl(42 95% 62%)" }
                      : { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.45)" }
                  }
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          {/* Flagship spotlight */}
          {showSpotlight && flagship && <Spotlight app={flagship} />}

          <div className="flex items-center justify-between gap-3 mb-5">
            <p className="text-xs text-white/35 font-medium">
              {filtered.length} {filtered.length === 1 ? "app" : "apps"}
              {activeCategory !== "All" && <span> in {activeCategory}</span>}
            </p>
            {filtered.some((a) => a.access === "inhouse") && (
              <span className="inline-flex items-center gap-1.5 text-[11px] text-slate-300/70 font-medium">
                <Lock size={11} className="text-slate-300/80" /> In-House = internal, not publicly launchable
              </span>
            )}
          </div>

          <AnimatePresence mode="popLayout">
            {gridApps.length === 0 ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-center py-24 text-white/20 text-sm">
                No apps found. Try another search or category.
              </motion.div>
            ) : (
              <motion.div key="grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" style={{ perspective: "1200px" }}>
                {gridApps.map((app, i) => (
                  <AppCard key={app.id} app={app} index={i} />
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
