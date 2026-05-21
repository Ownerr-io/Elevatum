import { ArrowUpRight } from "lucide-react";
import {
  GlassPane,
  SectionIntro,
  layoutQuad,
  layoutSplit,
  layoutTrio,
  sectionPadY,
  sectionRule,
  sectionShell,
} from "@/components/editorial/SectionChrome";
import { ScrollReveal } from "@/components/editorial/ScrollReveal";

const milestones = [
  { year: "2019", event: "First angel close" },
  { year: "2021", event: "$1M sprint milestone" },
  { year: "2023", event: "50 founders advised" },
  { year: "2024", event: "Elevatum founded" },
];

export function AboutSection() {
  return (
    <section id="about" className={sectionRule()}>
      <div className={`${sectionShell()} ${sectionPadY()} pb-12 md:pb-16`}>
        <ScrollReveal>
          <SectionIntro
            index="01"
            tag="About"
            title={
              <>
                Built for founders
                <br />
                who raise with intent.
              </>
            }
          />
        </ScrollReveal>
      </div>

      <div className={`${sectionShell()} ${layoutSplit()} pb-16 md:pb-24`}>
        <ScrollReveal delay={0.08} className="quote-rail lg:pr-8">
          <blockquote className="display-serif copy-two-lines max-w-none text-2xl md:text-3xl">
            I do not just advise.
            <br />
            I build the system that gets you in the room.
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={0.14} className="flex flex-col gap-6 lg:pt-1">
          <p className="copy-two-lines text-muted-foreground">
            Raising capital is a sales process. Elevatum bridges the gap
            <br />
            between a strong product and a fundable company.
          </p>
          <p className="copy-two-lines text-muted-foreground">
            From pre-seed to Series A, we refine narrative, target capital,
            <br />
            and build investor momentum.
          </p>
          <p className="copy-two-lines font-medium text-foreground">
            No spray and pray. Precision targeting
            <br />
            and unignorable positioning.
          </p>
          <a href="#offers" className="editorial-link mt-1 w-fit">
            View offers <ArrowUpRight size={16} />
          </a>
        </ScrollReveal>
      </div>

      <div className={`${sectionShell()} ${layoutTrio()} pb-16 md:pb-20`}>
        {[
          {
            label: "01",
            title: ["Investor", "philosophy"],
            desc: ["How check-writers think, derisk,", "and deploy at every stage."],
          },
          {
            label: "02",
            title: ["Strategic", "positioning"],
            desc: ["Frame your company as the inevitable", "category winner before you pitch."],
          },
          {
            label: "03",
            title: ["Why founders", "choose us"],
            desc: ["Institutional rigor for early-stage", "fundraising. No templates."],
          },
        ].map((item, i) => (
          <ScrollReveal key={i} delay={0.1 + i * 0.08}>
            <GlassPane accent={i === 0} glow={i === 0} className="relative h-full overflow-hidden p-8 md:p-10">
              <span className="section-index left-4 right-auto text-accent/[0.12] !text-[4rem] !top-2">
                {item.label}
              </span>
              <div className="relative z-[1]">
                <h3 className="editorial-subhead mb-4">
                  {item.title[0]}
                  <br />
                  {item.title[1]}
                </h3>
                <p className="max-w-[32ch] text-sm leading-snug text-muted-foreground">
                  {item.desc[0]}
                  <br />
                  {item.desc[1]}
                </p>
              </div>
            </GlassPane>
          </ScrollReveal>
        ))}
      </div>

      <div className={`${sectionShell()} ${layoutQuad()} pb-20 md:pb-28`}>
        {milestones.map((m, i) => (
          <ScrollReveal key={i} delay={0.12 + i * 0.06}>
            <div className="glass-stat">
              <div className="stat-giant">{m.year}</div>
              <p className="text-sm font-medium leading-snug text-foreground/80">{m.event}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
