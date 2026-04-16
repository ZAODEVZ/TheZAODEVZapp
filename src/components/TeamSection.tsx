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
    <section id="team" className="py-24 bg-secondary/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">Our Team</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Global Talent, One Mission
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            With teams across the USA and Africa, we bring diverse perspectives to every project.
          </p>
        </motion.div>

        {/* World map banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden mb-16"
        >
          <img
            src={globalTeam}
            alt="Global team presence"
            loading="lazy"
            width={1200}
            height={600}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white">
                Location Doesn't Matter.{" "}
                <span className="text-gold">Talent Does.</span>
              </h3>
              <p className="mt-2 text-white/70 text-sm">Recruiting developers worldwide — USA 🇺🇸 & Africa 🌍</p>
            </div>
          </div>
        </motion.div>

        {/* Leadership */}
        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-xl p-6 border border-border hover:border-gold/30 transition-colors"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={logo} alt={leader.name} className="w-14 h-14 rounded-full border-2 border-gold/40" />
                <div>
                  <h4 className="font-heading font-semibold text-card-foreground">{leader.name}</h4>
                  <p className="text-sm text-muted-foreground">{leader.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-4">
                <MapPin size={12} /> {leader.location}
              </div>
              <div className="flex flex-wrap gap-2">
                {leader.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-xs font-medium hover:bg-gold/10 hover:text-gold transition-colors"
                  >
                    <ExternalLink size={12} /> {link.label}
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
