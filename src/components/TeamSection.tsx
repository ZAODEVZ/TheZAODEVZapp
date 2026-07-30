import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import globalTeam from "@/assets/global-team.jpg";
import logo from "@/assets/thezao-logo.jpg";

const leaders = [
  {
    name: "The Zao (Founder)",
    role: "Founder & Lead",
    location: "USA",
    links: [
      { label: "X (Twitter)", url: "https://x.com/thezaodao" },
      { label: "Zao DAO", url: "https://www.zaoos.com/members/zaal" },
    ],
  },
  {
    name: "IMan Afrikah",
    role: "Africa Team Lead",
    location: "Africa",
    links: [{ label: "X (Twitter)", url: "https://x.com/Imanafrikah" }],
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #04080f 0%, #060d1a 60%, #04080f 100%)" }}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(234,179,8,0.04) 0%, transparent 65%)", filter: "blur(80px)" }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">Our Team</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
            Global Talent, One Mission
          </h2>
          <p className="mt-4 text-white/40 max-w-md mx-auto text-sm leading-relaxed">
            With teams across the USA and Africa, and LATAM builders joining next, we bring diverse perspectives to every project.
          </p>
        </motion.div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-14"
          style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)" }}
        >
          <img
            src={globalTeam}
            alt="Global team presence"
            loading="lazy"
            width={1200}
            height={600}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, rgba(4,8,15,0.75), rgba(10,20,44,0.65))" }}
          >
            <div className="text-center px-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white tracking-tight">
                Location Doesn't Matter.{" "}
                <span
                  className="text-gradient-gold"
                  style={{ filter: "drop-shadow(0 0 24px rgba(234,179,8,0.3))" }}
                >
                  Talent Does.
                </span>
              </h3>
              <p className="mt-2.5 text-white/55 text-sm">
                Recruiting developers worldwide. USA 🇺🇸 and Africa 🌍
              </p>
            </div>
          </div>
        </motion.div>

        {/* Leadership cards */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 16px 40px rgba(0,0,0,0.35)"
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gold/20 blur-md" />
                  <img
                    src={logo}
                    alt={leader.name}
                    className="relative w-14 h-14 rounded-full"
                    style={{ boxShadow: "0 0 0 2px rgba(234,179,8,0.3), 0 6px 20px rgba(0,0,0,0.4)" }}
                  />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-white">{leader.name}</h4>
                  <p className="text-xs text-white/45 mt-0.5">{leader.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-white/35 mb-4">
                <MapPin size={11} /> {leader.location}
              </div>

              <div className="flex flex-wrap gap-2">
                {leader.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white/60 hover:text-gold transition-colors"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.09)"
                    }}
                  >
                    <ExternalLink size={11} /> {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
