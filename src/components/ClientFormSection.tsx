import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ClientForm {
  name: string;
  email: string;
  company: string;
  budget: string;
  projectType: string;
  timeline: string;
  description: string;
}

const initialForm: ClientForm = {
  name: "",
  email: "",
  company: "",
  budget: "",
  projectType: "web-app",
  timeline: "1-3-months",
  description: "",
};

const inputClasses =
  "w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm";

export default function ClientFormSection() {
  const [form, setForm] = useState<ClientForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const update = (field: keyof ClientForm, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.description) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Request received! 🎉", description: "We'll review your project and get back to you soon." });
  };

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">Work With Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Start Your Project
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Tell us about your project and we'll get back to you with a tailored proposal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="text-center py-16">
              <CheckCircle className="mx-auto text-gold" size={48} />
              <h3 className="mt-4 text-xl font-heading font-bold text-foreground">Request Submitted!</h3>
              <p className="mt-2 text-muted-foreground">
                Thank you, {form.name}. Our team will review your project details and reach out soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Your Name <span className="text-destructive">*</span>
                  </label>
                  <input type="text" placeholder="Jane Smith" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input type="email" placeholder="jane@company.com" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClasses} />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Company</label>
                  <input type="text" placeholder="Acme Inc." value={form.company} onChange={(e) => update("company", e.target.value)} className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Budget Range</label>
                  <select value={form.budget} onChange={(e) => update("budget", e.target.value)} className={inputClasses}>
                    <option value="">Select budget</option>
                    <option value="5k-10k">$5K – $10K</option>
                    <option value="10k-25k">$10K – $25K</option>
                    <option value="25k-50k">$25K – $50K</option>
                    <option value="50k+">$50K+</option>
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Project Type</label>
                  <select value={form.projectType} onChange={(e) => update("projectType", e.target.value)} className={inputClasses}>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="web3">Web3 / DeFi</option>
                    <option value="enterprise">Enterprise Platform</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Timeline</label>
                  <select value={form.timeline} onChange={(e) => update("timeline", e.target.value)} className={inputClasses}>
                    <option value="asap">ASAP</option>
                    <option value="1-3-months">1–3 Months</option>
                    <option value="3-6-months">3–6 Months</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Project Description <span className="text-destructive">*</span>
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project, goals, and any specific requirements..."
                  value={form.description}
                  onChange={(e) => update("description", e.target.value)}
                  className={inputClasses + " resize-none"}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gold text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Send size={18} /> Submit Request
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
