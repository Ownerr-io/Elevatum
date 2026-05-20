import { FiTwitter, FiLinkedin } from "react-icons/fi";

const links = [
  { label: "About", href: "#about" },
  { label: "Offers", href: "#offers" },
  { label: "Results", href: "#results" },
  { label: "Course", href: "#course" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.07]">
      <div className="grid md:grid-cols-3 border-b border-white/[0.07]">
        {/* Logo */}
        <div className="px-8 md:px-16 py-12 md:border-r border-white/[0.07] border-b md:border-b-0 flex items-center">
          <a href="/" className="flex items-center gap-2 group">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
              style={{ border: "2px solid hsl(42 85% 58%)" }}
            >
              <div className="w-2 h-2 rounded-full" style={{ background: "hsl(42 85% 58%)" }} />
            </div>
            <span className="text-sm font-bold tracking-[0.25em] uppercase text-foreground group-hover:text-primary transition-colors">
              ELEVATUM
            </span>
          </a>
        </div>

        {/* Nav */}
        <div className="px-8 md:px-16 py-12 md:border-r border-white/[0.07] border-b md:border-b-0">
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Social */}
        <div className="px-8 md:px-16 py-12 flex items-center gap-5">
          <a
            href="#"
            aria-label="Twitter"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FiTwitter size={18} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <FiLinkedin size={18} />
          </a>
        </div>
      </div>

      <div className="px-8 md:px-16 py-6 flex items-center justify-between gap-4 flex-wrap">
        <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/20">
          &copy; {new Date().getFullYear()} Elevatum. All rights reserved.
        </p>
        <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-white/20">
          Confidential. Founder-First.
        </p>
      </div>
    </footer>
  );
}
