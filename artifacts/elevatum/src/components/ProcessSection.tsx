import {
  SectionIntro,
  sectionPadY,
  sectionRule,
  sectionShell,
  sectionStack,
} from "@/components/editorial/SectionChrome";
import { ScrollReveal } from "@/components/editorial/ScrollReveal";

const steps = [
  {
    num: "01",
    title: ["Diagnose", "readiness"],
    desc: ["Audit narrative, materials, and readiness.", "Find gaps before investors do."],
  },
  {
    num: "02",
    title: ["Position", "narrative"],
    desc: ["Build an investor-grade story and pitch assets.", "Make saying no feel like a mistake."],
  },
  {
    num: "03",
    title: ["Outreach", "systems"],
    desc: ["Targeted outreach systems.", "Precision over volume."],
  },
  {
    num: "04",
    title: ["Meetings", "prep"],
    desc: ["Qualified meetings and room prep.", "You arrive ready."],
  },
  {
    num: "05",
    title: ["Close", "round"],
    desc: ["Term sheets, diligence, and negotiation.", "Until the wire lands."],
  },
];

export function ProcessSection() {
  return (
    <section className={sectionRule()}>
      <div className={`${sectionShell()} ${sectionPadY()} pb-10`}>
        <ScrollReveal>
          <SectionIntro
            index="04"
            tag="Process"
            title={
              <>
                How it
                <br />
                works.
              </>
            }
            aside={
              <>
                Five stages from unclear to unforgettable
                <br />
                in front of the right investors.
              </>
            }
          />
        </ScrollReveal>
      </div>

      <div className={`${sectionShell()} ${sectionStack("gap-5")} pb-24 md:pb-32`}>
        {steps.map((step, i) => (
          <ScrollReveal key={i} delay={0.06 + i * 0.06}>
            <div className="glass-row group transition-shadow duration-500 hover:shadow-[0_0_60px_-24px_hsl(var(--primary)/0.25)]">
              <span className="text-3xl font-medium text-primary/35 transition-colors group-hover:text-primary md:text-4xl">
                {step.num}
              </span>
              <h3 className="editorial-subhead text-xl md:text-2xl">
                {step.title[0]}
                <br />
                {step.title[1]}
              </h3>
              <p className="max-w-[36ch] text-sm leading-snug text-muted-foreground md:max-w-[38ch] md:justify-self-end md:text-right md:text-base">
                {step.desc[0]}
                <br />
                {step.desc[1]}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
