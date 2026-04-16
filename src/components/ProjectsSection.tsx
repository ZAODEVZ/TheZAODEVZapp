import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import projectFintech from "@/assets/project-fintech.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectWeb3 from "@/assets/project-web3.jpg";

const projects = [
  {
    title: "ZaoFi — DeFi Analytics Dashboard",
    description:
      "Real-time decentralized finance analytics platform with wallet tracking, portfolio management, and yield farming insights across 12 chains.",
    tags: ["React", "Web3", "GraphQL", "Solidity"],
    image: projectWeb3,
  },
  {
    title: "TradeFlow — Fintech Payment Suite",
    description:
      "Enterprise payment processing platform handling $2M+ monthly transactions with multi-currency support and real-time reconciliation.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    image: projectFintech,
  },
  {
    title: "Kurato — Mobile Commerce Platform",
    description:
      "Cross-platform e-commerce app serving 50K+ users across Africa with offline-first architecture and mobile money integration.",
    tags: ["React Native", "Firebase", "TypeScript"],
    image: projectEcommerce,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">Portfolio</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Our Recent Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            From Web3 protocols to enterprise platforms — we ship products that matter.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={item}
              className="group rounded-xl overflow-hidden border border-border bg-card hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <ExternalLink className="text-gold" size={28} />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg text-card-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-xs font-medium"
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
