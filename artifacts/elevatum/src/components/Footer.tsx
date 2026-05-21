import { FiTwitter, FiLinkedin, FiArrowUpRight } from "react-icons/fi";
import {
  SectionTag,
  sectionRule,
  sectionShell,
} from "@/components/editorial/SectionChrome";
import { ScrollReveal } from "@/components/editorial/ScrollReveal";

const links = [
  { label: "About", href: "#about" },
  { label: "Offers", href: "#offers" },
  { label: "Results", href: "#results" },
  { label: "Course", href: "#course" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className={`${sectionRule()} footer-surface`}>
      <div className={`${sectionShell()} py-16 md:py-20 lg:py-24`}>
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)_minmax(0,0.85fr)] lg:items-start lg:gap-16">
          <ScrollReveal className="flex flex-col gap-8">
            <a href="/" className="group inline-flex w-fit">
              <img
                src="/Elevatum_Logo.png"
                alt="Elevatum"
                className="h-20 w-auto max-w-[min(90vw,18rem)] object-contain object-left transition-transform duration-500 group-hover:scale-[1.02] sm:h-24 md:h-[6.5rem]"
              />
            </a>
            <p className="copy-two-lines max-w-[32ch] text-muted-foreground">
              Fundraising advisory for founders
              <br />
              raising with editorial precision.
            </p>
            <a href="mailto:hello@elevatum.co" className="editorial-link w-fit text-sm">
              hello@elevatum.co <FiArrowUpRight size={14} />
            </a>
          </ScrollReveal>

          <ScrollReveal delay={0.08} className="lg:pt-2">
            <SectionTag className="mb-6">Explore</SectionTag>
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm font-medium uppercase tracking-[0.14em] text-foreground/70 transition-colors duration-300 hover:text-primary"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </ScrollReveal>

          <ScrollReveal delay={0.14} className="flex flex-col gap-8 lg:pt-2">
            <div>
              <SectionTag className="mb-6">Connect</SectionTag>
              <p className="copy-two-lines mb-6 text-muted-foreground">
                Serious founder enquiries.
                <br />
                We reply within 48 hours.
              </p>
              <a href="#contact" className="editorial-link">
                Book a call <FiArrowUpRight size={14} />
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" aria-label="Twitter" className="footer-social">
                <FiTwitter size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="footer-social">
                <FiLinkedin size={18} />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="footer-bottom">
        <div
          className={`${sectionShell()} flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center md:py-7`}
        >
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/50">
            &copy; {new Date().getFullYear()} Elevatum. All rights reserved.
          </p>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/50">
            Confidential · Founder-first
          </p>
        </div>
      </div>
    </footer>
  );
}
