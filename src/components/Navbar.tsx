import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/thezao-logo.jpg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Join Us", href: "/join" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[hsl(0,0%,100%)] backdrop-blur-lg border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="ThaZao Devs" className="w-10 h-10 rounded-full" />
          <span className="font-heading font-extrabold text-xl tracking-tight text-foreground">
            Devs
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.href}
              className={`text-sm font-semibold transition-colors ${
                location.pathname === l.href
                  ? "text-gold-dark"
                  : "text-foreground hover:text-gold-dark"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/join"
            className="px-5 py-2 rounded-lg bg-gold text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-[hsl(0,0%,100%)] border-b border-border"
          >
            <div className="container py-4 flex flex-col gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className={`text-sm font-semibold transition-colors ${
                    location.pathname === l.href
                      ? "text-gold-dark"
                      : "text-foreground hover:text-gold-dark"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/join"
                onClick={() => setOpen(false)}
                className="px-5 py-2 rounded-lg bg-gold text-accent-foreground font-semibold text-sm text-center"
              >
                Apply Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
