import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/thezao-logo.jpg";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Build", href: "/build" },
  { label: "Vibe Code", href: "/vibe-code", dot: true },
  { label: "Apps", href: "/apps", dot: true },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  const bg = scrolled || open
    ? "bg-[#04080f]/85 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
    : "bg-[#04080f]/55 backdrop-blur-xl";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-white/[0.07] transition-all duration-300 ${bg}`}>
      <div className="container flex items-center justify-between h-16">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gold/25 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src={logo}
              alt="ThaZao Devz"
              className="relative w-9 h-9 rounded-full"
              style={{ boxShadow: "0 0 0 2px rgba(234,179,8,0.25), 0 4px 16px rgba(0,0,0,0.4)" }}
            />
          </div>
          <span className="font-heading font-extrabold text-lg tracking-tight text-white group-hover:text-gold transition-colors duration-200">
            Devz
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((l) => {
            const active = location.pathname === l.href;
            return (
              <Link key={l.label} to={l.href} className="relative group pb-1">
                <span className={`text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5 ${
                  active ? "text-gold" : "text-white/60 group-hover:text-white"
                }`}>
                  {l.label}
                  {l.dot && (
                    <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-glow" />
                  )}
                </span>
                {active && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-px"
                    style={{ background: "linear-gradient(90deg, transparent, hsl(42 95% 58%), transparent)" }}
                  />
                )}
              </Link>
            );
          })}

          <Link
            to="/join"
            className="shimmer px-5 py-2.5 rounded-xl font-bold text-sm text-[hsl(216,50%,10%)]"
            style={{
              background: "linear-gradient(135deg, hsl(42 95% 68%), hsl(38 90% 50%))",
              boxShadow: "0 4px 20px rgba(234,179,8,0.38), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.1)"
            }}
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-white transition-colors"
          style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-white/[0.07]"
          >
            <div className="container py-4 flex flex-col gap-1">
              {navLinks.map((l) => {
                const active = location.pathname === l.href;
                return (
                  <Link
                    key={l.label}
                    to={l.href}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
                      active
                        ? "text-gold"
                        : "text-white/55 hover:text-white"
                    }`}
                    style={active ? { background: "rgba(234,179,8,0.1)", border: "1px solid rgba(234,179,8,0.2)" } : {}}
                  >
                    {l.label}
                    {l.dot && <span className="w-1.5 h-1.5 rounded-full bg-gold" />}
                  </Link>
                );
              })}
              <Link
                to="/join"
                className="mt-2 px-4 py-3 rounded-xl text-sm font-bold text-center text-[hsl(216,50%,10%)]"
                style={{
                  background: "linear-gradient(135deg, hsl(42 95% 68%), hsl(38 90% 50%))",
                  boxShadow: "0 4px 16px rgba(234,179,8,0.35)"
                }}
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
