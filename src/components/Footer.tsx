import { Link } from "react-router-dom";
import logo from "@/assets/thezao-logo.jpg";

const quickLinks = [
  { label: "Projects", href: "/projects" },
  { label: "ZAO App Store", href: "/apps" },
  { label: "Team", href: "/team" },
  { label: "Join Us", href: "/join" },
  { label: "Contact", href: "/contact" },
];

const connect = [
  { label: "X (Twitter) @thezaodao", url: "https://x.com/thezaodao" },
  { label: "Zao DAO zaoos.com", url: "https://www.zaoos.com/members/zaal" },
  { label: "IMan Afrikah, Africa Lead", url: "https://x.com/Imanafrikah" },
];

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(180deg, #04080f 0%, #020509 100%)" }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(234,179,8,0.35), transparent)" }}
      />

      {/* Ambient orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(234,179,8,0.04) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="container relative py-16">
        <div className="grid sm:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gold/20 blur-md" />
                <img
                  src={logo}
                  alt="ThaZao Devz"
                  className="relative w-10 h-10 rounded-full"
                  style={{ boxShadow: "0 0 0 2px rgba(234,179,8,0.2), 0 4px 16px rgba(0,0,0,0.5)" }}
                />
              </div>
              <span className="font-heading font-extrabold text-xl tracking-tight text-white">Devz</span>
            </div>
            <p className="text-sm text-white/38 leading-relaxed">
              Building world-class software with global teams. Part of the Zao DAO ecosystem.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-5 uppercase tracking-widest">Quick Links</h4>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.href}
                  className="text-sm text-white/38 hover:text-gold transition-colors duration-200"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading font-bold text-white text-sm mb-5 uppercase tracking-widest">Connect</h4>
            <div className="flex flex-col gap-2.5">
              {connect.map((c) => (
                <a
                  key={c.label}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/38 hover:text-gold transition-colors duration-200"
                >
                  {c.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div
          className="mt-14 pt-8 text-center text-xs text-white/22"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          © {new Date().getFullYear()} ThaZao Devz. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
