import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Mail, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const initialForm: ContactForm = {
  name: "",
  email: "",
  subject: "general",
  message: "",
};

const inputClasses =
  "w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring text-sm";

const topics = [
  { icon: MessageSquare, title: "General Inquiry", desc: "Have a question? We'd love to hear from you." },
  { icon: Mail, title: "Partnership", desc: "Interested in collaborating? Let's talk." },
];

export default function ContactFormSection() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const update = (field: keyof ContactForm, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Missing fields", description: "Please fill in all required fields.", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Message sent! 📬", description: "We'll get back to you as soon as possible." });
  };

  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold tracking-wider uppercase">Get In Touch</span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-heading font-bold text-foreground">
            Questions? We're Here to Help
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Whether you have a question about our services, need more info, or want to explore a partnership, reach out.
          </p>
        </motion.div>

        {/* Topic cards */}
        <div className="grid sm:grid-cols-2 gap-6 mb-16 max-w-xl mx-auto">
          {topics.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-secondary/50 border border-border"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gold/10 text-gold mb-3">
                <t.icon size={22} />
              </div>
              <h4 className="font-heading font-semibold text-foreground text-sm">{t.title}</h4>
              <p className="text-xs text-muted-foreground mt-1">{t.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {submitted ? (
            <div className="text-center py-16">
              <CheckCircle className="mx-auto text-gold" size={48} />
              <h3 className="mt-4 text-xl font-heading font-bold text-foreground">Message Sent!</h3>
              <p className="mt-2 text-muted-foreground">
                Thank you, {form.name}. We'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Your Name <span className="text-destructive">*</span>
                  </label>
                  <input type="text" placeholder="John Doe" value={form.name} onChange={(e) => update("name", e.target.value)} className={inputClasses} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <input type="email" placeholder="john@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClasses} />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Subject</label>
                <select value={form.subject} onChange={(e) => update("subject", e.target.value)} className={inputClasses}>
                  <option value="general">General Inquiry</option>
                  <option value="services">Services & Pricing</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  Your Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  rows={6}
                  placeholder="Tell us what you need help with, any questions you have, or how we can assist you..."
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={inputClasses + " resize-none"}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gold text-accent-foreground font-semibold hover:opacity-90 transition-opacity"
              >
                <Send size={18} /> Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
