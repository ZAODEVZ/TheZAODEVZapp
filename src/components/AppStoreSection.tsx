import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Star, ExternalLink } from "lucide-react";
import type React from "react";
import zaoLogo from "@/assets/thezao-logo.jpg";

const featuredApps = [
  {
    id: 1,
    name: "The ZAO Co-Works",
    url: "https://thezao.xyz",
    category: "Productivity",
    description: "One board for every ZAO ecosystem brand. Manage tasks, filter by owner, and sync with Telegram for real-time team coordination.",
    icon: zaoLogo,
    iconBg: "#04080f",
    glowColor: "rgba(59,130,246,0.55)",
    rating: 4.9,
    badge: "Official",
  },
  {
    id: 2,
    name: "ZABAL Gamez",
    url: "https://zabalgamez.com/",
    category: "Gaming",
    description: "Ship for a community 100+ weeks strong and keep earning from what you build. A build competition with real ongoing revenue cuts.",
    icon: "https://zabalgamez.com/assets/logo-gamez.png",
    iconBg: "#04080f",
    glowColor: "rgba(139,92,246,0.55)",
    rating: 4.8,
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
    badge: "New",
  },
];

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 280, damping: 24 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 280, damping: 24 });
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

function AppIcon({ icon, glowColor, name, iconBg }: { icon: string; glowColor: string; name: string; iconBg: string }) {
  return (
    <div className="relative flex-shrink-0">
      <div className="absolute inset-0 rounded-[18px] blur-md opacity-60 scale-90" style={{ background: glowColor }} />
      <div
        className="icon-3d relative w-[62px] h-[62px] rounded-[18px] overflow-hidden"
        style={{ background: iconBg, boxShadow: `0 10px 32px ${glowColor}, 0 2px 8px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.18)` }}
      >
        <img src={icon} alt={name} className="w-full h-full object-cover" style={{ position: "relative", zIndex: 0 }} />
      </div>
    </div>
  );
}

function MiniStars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={9} className={i <= Math.round(rating) ? "fill-gold text-gold" : "text-white/18"} />
      ))}
      <span className="ml-1 text-[10px] font-semibold text-white/45">{rating}</span>
    </div>
  );
}

export default function AppStoreSection() {
  return (
    <section className="py-28 relative overflow-hidden" style={{ background: "linear-gradient(180deg, #04080f 0%, #060d1a 50%, #04080f 100%)" }}>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(234,179,8,0.05) 0%, transparent 65%)", filter: "blur(60px)" }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-14 gap-6"
        >
          <div>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-gold mb-4">
              <Sparkles size={11} /> ZAO App Store
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white leading-tight tracking-tight">
              Apps Built by<br />
              <span className="text-gradient-gold">The ZAO</span>
            </h2>
            <p className="mt-3.5 text-white/42 text-sm max-w-xs leading-relaxed">
              Real apps from the ZAO ecosystem. Click any to launch.
            </p>
          </div>
          <Link
            to="/apps"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-gold text-sm font-bold whitespace-nowrap transition-colors hover:bg-gold/10"
            style={{ border: "1px solid rgba(234,179,8,0.25)" }}
          >
            Browse All <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" style={{ perspective: "1200px" }}>
          {featuredApps.map((app, i) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <TiltCard className="h-full">
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full rounded-2xl p-5 transition-all duration-300"
                  style={{
                    background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 20px 48px rgba(0,0,0,0.4)"
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <AppIcon icon={app.icon} glowColor={app.glowColor} name={app.name} iconBg={app.iconBg} />
                    {app.badge && (
                      <span className="text-gold text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full" style={{ background: "rgba(234,179,8,0.12)", border: "1px solid rgba(234,179,8,0.22)" }}>
                        {app.badge}
                      </span>
                    )}
                  </div>
                  <div className="mb-0.5 font-heading font-bold text-white text-base">{app.name}</div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-gold/65">{app.category}</span>
                  <p className="mt-2 text-xs text-white/42 leading-relaxed line-clamp-3">{app.description}</p>
                  <div className="mt-4"><MiniStars rating={app.rating} /></div>
                  <div className="mt-3.5 pt-3.5 flex items-center justify-between" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <span className="text-xs text-white/28">{app.url.replace("https://", "").replace("www.", "")}</span>
                    <span className="text-xs font-bold text-gold group-hover:translate-x-0.5 transition-transform inline-flex items-center gap-1">
                      Visit <ExternalLink size={10} />
                    </span>
                  </div>
                </a>
              </TiltCard>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-10 rounded-2xl px-7 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.06)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)" }}
        >
          <div className="text-center sm:text-left">
            <p className="text-white font-semibold text-sm">4 apps in the ecosystem</p>
            <p className="text-white/35 text-xs mt-0.5">The ZAO keeps shipping</p>
          </div>
          <Link
            to="/apps"
            className="shimmer inline-flex items-center gap-2 px-7 py-2.5 rounded-xl font-bold text-sm text-[hsl(216,50%,10%)]"
            style={{ background: "linear-gradient(135deg, hsl(42 95% 68%), hsl(38 90% 50%))", boxShadow: "0 4px 20px rgba(234,179,8,0.38), inset 0 1px 0 rgba(255,255,255,0.28)" }}
          >
            Open App Store <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
