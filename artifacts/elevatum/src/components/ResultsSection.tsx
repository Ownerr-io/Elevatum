import { AnimatedCounter } from "./AnimatedCounter";
import {
  GlassPane,
  SectionIntro,
  layoutQuad,
  layoutSplit,
  sectionPadY,
  sectionRule,
  sectionShell,
} from "@/components/editorial/SectionChrome";
import { ScrollReveal } from "@/components/editorial/ScrollReveal";

const metrics = [
  { value: 25, prefix: "$", suffix: "K", label: "Angel check", sub: "First sprint" },
  { value: 2, prefix: "", suffix: "", label: "Investor meetings", sub: "In one week" },
  { value: 1, prefix: "$", suffix: "M+", label: "Commitments", sub: "One engagement" },
  { value: 425, prefix: "$", suffix: "K", label: "Raised", sub: "From $45K presell" },
];

const quotes = [
  {
    text: [
      "The level of strategic clarity Elevatum brought to our narrative was the difference",
      "between polite passes and a signed term sheet.",
    ],
    author: "Sarah M.",
    role: "Series A",
  },
  {
    text: [
      "We were stuck in diligence hell. Elevatum stepped in, rebuilt our data room logic,",
      "and we closed the round in 14 days.",
    ],
    author: "David Chen",
    role: "Seed",
  },
];

export function ResultsSection() {
  return (
    <section id="results" className={`${sectionRule()} section-surface`}>
      <div className={`${sectionShell()} ${sectionPadY()} pb-10`}>
        <ScrollReveal>
          <SectionIntro
            index="03"
            tag="Results"
            title={
              <>
                Real outcomes.
                <br />
                Not promises.
              </>
            }
          />
        </ScrollReveal>
      </div>

      <div className={`${sectionShell()} ${layoutQuad()} pb-16 md:pb-20`}>
        {metrics.map((m, i) => (
          <ScrollReveal key={i} delay={0.06 + i * 0.06}>
            <div className="glass-stat">
              <div className="stat-giant">
                <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} />
              </div>
              <div>
                <p className="text-sm font-medium leading-snug text-foreground">{m.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{m.sub}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <div className={`${sectionShell()} ${layoutSplit()} pb-24 md:pb-32`}>
        {quotes.map((q, i) => (
          <ScrollReveal key={i} delay={0.1 + i * 0.08} className="h-full">
            <GlassPane
              accent={i === 0}
              className="flex h-full min-h-[16rem] flex-col p-8 md:min-h-[18rem] md:p-10"
            >
              <p className="display-serif min-w-0 flex-1 text-xl leading-relaxed text-foreground md:text-2xl">
                {q.text[0]}
                <br />
                {q.text[1]}
              </p>
              <div className="mt-10 flex shrink-0 items-baseline justify-between gap-4 border-t border-white/40 pt-6">
                <span className="quote-meta-author">{q.author}</span>
                <span className="quote-meta-role">{q.role}</span>
              </div>
            </GlassPane>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
