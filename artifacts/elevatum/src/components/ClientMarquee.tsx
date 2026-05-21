import { SectionTag, sectionRule, sectionShell } from "@/components/editorial/SectionChrome";
import { ScrollReveal } from "@/components/editorial/ScrollReveal";

const companies = [
  "Meridian",
  "Archetype",
  "Vanta Protocol",
  "Nexus Labs",
  "Forge Capital",
  "Stratum",
  "Axiom",
  "Crest",
  "Luminary",
  "Harbour",
];

export function ClientMarquee() {
  return (
    <section className={`${sectionRule()} overflow-hidden py-14 md:py-20`}>
      <ScrollReveal className={`${sectionShell()} mb-10 flex justify-center`}>
        <SectionTag tone="muted">Clients</SectionTag>
      </ScrollReveal>

      <ScrollReveal delay={0.08}>
        <div className="relative flex overflow-x-hidden mask-[linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
          <div className="animate-marquee flex items-center gap-20 whitespace-nowrap">
            {[...companies, ...companies, ...companies].map((company, i) => (
              <span
                key={i}
                className="text-sm font-medium uppercase tracking-[0.22em] text-foreground/25 transition-colors duration-500 hover:text-primary md:text-base"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
