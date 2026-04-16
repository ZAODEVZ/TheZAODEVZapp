import { Link } from "react-router-dom";
import logo from "@/assets/thezao-logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-navy py-16">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="ThaZao Devs" className="w-10 h-10 rounded-full" />
              <span className="font-heading font-extrabold text-xl tracking-tight text-[hsl(0,0%,100%)]">
                Devs
              </span>
            </div>
            <p className="text-sm text-[hsl(0,0%,100%,0.5)] leading-relaxed">
              Building world-class software with global teams. Part of the Zao DAO ecosystem.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-[hsl(0,0%,100%)] mb-4 text-sm">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Projects", href: "/projects" },
                { label: "Team", href: "/team" },
                { label: "Join Us", href: "/join" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <Link key={l.label} to={l.href} className="text-sm text-[hsl(0,0%,100%,0.5)] hover:text-gold transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-[hsl(0,0%,100%)] mb-4 text-sm">Connect</h4>
            <div className="flex flex-col gap-2">
              <a href="https://x.com/thezaodao" target="_blank" rel="noopener noreferrer" className="text-sm text-[hsl(0,0%,100%,0.5)] hover:text-gold transition-colors">
                X (Twitter) — @thezaodao
              </a>
              <a href="https://www.zaoos.com/members/zaal" target="_blank" rel="noopener noreferrer" className="text-sm text-[hsl(0,0%,100%,0.5)] hover:text-gold transition-colors">
                Zao DAO — zaoos.com
              </a>
              <a href="https://x.com/Imanafrikah" target="_blank" rel="noopener noreferrer" className="text-sm text-[hsl(0,0%,100%,0.5)] hover:text-gold transition-colors">
                IMan Afrikah — Africa Lead
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[hsl(0,0%,100%,0.1)] text-center text-xs text-[hsl(0,0%,100%,0.3)]">
          © {new Date().getFullYear()} ThaZao Devs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
