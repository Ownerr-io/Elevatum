import { AnimatedCounter } from "./AnimatedCounter";
import { layoutQuad, sectionRule, sectionShell } from "@/components/editorial/SectionChrome";
import { ScrollReveal } from "@/components/editorial/ScrollReveal";

const stats = [
  { value: 200, suffix: "+", label: "Sprint founders", sub: "Capital raised" },
  { value: 50, suffix: "+", label: "Strategy sessions", sub: "Founder hours" },
  { value: 30, suffix: "", label: "Day sprint", sub: "Investor momentum" },
  { value: 3, suffix: "+", label: "Meetings", sub: "Avg per sprint" },
];

/** Below the fold only, not in the hero. */
export function StatsStrip() {
  return (
    <section className={sectionRule()}>
      <div className={`${sectionShell()} ${layoutQuad()} py-16 md:py-20`}>
        {stats.map((stat, i) => (
          <ScrollReveal key={i} delay={i * 0.08}>
            <div className="glass-stat">
              <div className="stat-giant">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div>
                <p className="text-sm font-medium leading-snug text-foreground">{stat.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{stat.sub}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
