import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Code2, Globe, Users } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface FormData {
  fullName: string;
  email: string;
  location: string;
  github: string;
  portfolio: string;
  skills: string;
  experience: string;
  about: string;
}

const initialForm: FormData = {
  fullName: "",
  email: "",
  location: "",
  github: "",
  portfolio: "",
  skills: "",
  experience: "1-2",
  about: "",
};

const perks = [
  { icon: Globe, title: "Work From Anywhere", desc: "100% remote. Join from any country." },
  { icon: Code2, title: "Cutting-Edge Stack", desc: "Web3, AI, React, Solidity and more" },
  { icon: Users, title: "Global Community", desc: "Collaborate with devs across the USA, Africa, LATAM, Europe, and Australia" },
];

export default function JoinSection() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const update = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.skills) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Application received! 🎉", description: "We'll review your profile and get back to you soon." });
  };

  const inputClasses =
    "w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm";

  return (
    <section id="join" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">Careers</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Join ThaZao Devz
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            We're recruiting developers worldwide. Your location doesn't matter, your skills and passion do.
          </p>
        </motion.div>

        {/* Perks */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16 max-w-3xl mx-auto">
          {perks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-secondary/50 border border-border"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold/10 text-gold mb-3">
                <perk.icon size={22} />
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm">{perk.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{perk.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="text-center py-16">
              <CheckCircle className="mx-auto text-gold" size={48} />
              <h3 className="mt-4 text-xl font-heading font-bold text-foreground">Application Submitted!</h3>
              <p className="mt-2 text-muted-foreground">
                Thank you, {form.fullName}. Our team will review your application and reach out soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Location</label>
                  <input
                    type="text"
                    placeholder="City, Country"
                    value={form.location}
                    onChange={(e) => update("location", e.target.value)}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Years of Experience
                  </label>
                  <select
                    value={form.experience}
                    onChange={(e) => update("experience", e.target.value)}
                    className={inputClasses}
                  >
                    <option value="0-1">0–1 years</option>
                    <option value="1-2">1–2 years</option>
                    <option value="3-5">3–5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">GitHub URL</label>
                  <input
                    type="url"
                    placeholder="https://github.com/username"
                    value={form.github}
                    onChange={(e) => update("github", e.target.value)}
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Portfolio URL</label>
                  <input
                    type="url"
                    placeholder="https://yoursite.com"
                    value={form.portfolio}
                    onChange={(e) => update("portfolio", e.target.value)}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Key Skills <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  placeholder="React, TypeScript, Solidity, Node.js..."
                  value={form.skills}
                  onChange={(e) => update("skills", e.target.value)}
                  className={inputClasses}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">About You</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about yourself, what excites you about dev work, and why you want to join ThaZao Devz..."
                  value={form.about}
                  onChange={(e) => update("about", e.target.value)}
                  className={inputClasses + " resize-none"}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gold text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Send size={18} /> Submit Application
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
