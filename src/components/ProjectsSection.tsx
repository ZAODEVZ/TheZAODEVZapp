import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import projectFintech from "@/assets/project-fintech.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectWeb3 from "@/assets/project-web3.jpg";

const projects = [
  {
    title: "ZaoFi: DeFi Analytics Dashboard",
    description:
      "Real-time decentralized finance analytics platform with wallet tracking, portfolio management, and yield farming insights across 12 chains.",
    tags: ["React", "Web3", "GraphQL", "Solidity"],
    image: projectWeb3,
    accent: "rgba(139,92,246,0.6)",
  },
  {
    title: "TradeFlow: Fintech Payment Suite",
    description:
      "Enterprise payment processing platform handling $2M+ monthly transactions with multi-currency support and real-time reconciliation.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    image: projectFintech,
    accent: "rgba(16,185,129,0.6)",
  },
  {
    title: "Kurato: Mobile Commerce Platform",
    description:
      "Cross-platform e-commerce app serving 50K+ users across Africa with offline-first architecture and mobile money integration.",
    tags: ["React Native", "Firebase", "TypeScript"],
    image: projectEcommerce,
    accent: "rgba(249,115,22,0.6)",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48 } },
};

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-28 relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #060d1a 0%, #04080f 100%)" }}
    >
      {/* Ambient */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(234,179,8,0.04) 0%, transparent 65%)", filter: "blur(80px)" }}
      />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold">Portfolio</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
            Our Recent Projects
          </h2>
          <p className="mt-4 text-white/40 max-w-md mx-auto text-sm leading-relaxed">
            From Web3 protocols to enterprise platforms, we ship products that matter.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-5"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="group rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer"
              style={{
                background: "linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 20px 48px rgba(0,0,0,0.4)"
              }}
              whileHover={{
                y: -4,
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.1), 0 28px 64px rgba(0,0,0,0.5), 0 0 32px ${p.accent.replace("0.6", "0.12")}`
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04080f]/80 via-transparent to-transparent" />
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ background: "rgba(4,8,15,0.5)" }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(234,179,8,0.15)", border: "1px solid rgba(234,179,8,0.4)", boxShadow: "0 0 20px rgba(234,179,8,0.3)" }}
                  >
                    <ExternalLink className="text-gold" size={18} />
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-base text-white">{p.title}</h3>
                <p className="mt-2 text-xs text-white/40 leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-bold tracking-wide text-white/55"
                      style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
