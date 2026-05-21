import {
  GlassPane,
  SectionIntro,
  sectionPadY,
  sectionRule,
  sectionShell,
  sectionStack,
} from "@/components/editorial/SectionChrome";
import { ScrollReveal } from "@/components/editorial/ScrollReveal";

const testimonials = [
  {
    quote: [
      "Elevatum transformed how I think about fundraising.",
      "We closed $800K in 6 weeks.",
    ],
    author: "Marcus T.",
    role: "Series A",
  },
  {
    quote: [
      "The Capital Sprint was the best investment I made before my raise.",
      "4 meetings in the first two weeks.",
    ],
    author: "Priya R.",
    role: "Pre-seed",
  },
  {
    quote: [
      "I walked away with a term sheet and a completely different",
      "understanding of investor psychology.",
    ],
    author: "James K.",
    role: "SaaS",
  },
];

export function TestimonialsSection() {
  return (
    <section className={`${sectionRule()} section-surface`}>
      <div className={`${sectionShell()} ${sectionPadY()} pb-10`}>
        <ScrollReveal>
          <SectionIntro
            index="05"
            tag="Voices"
            title={
              <>
                What founders
                <br />
                say.
              </>
            }
          />
        </ScrollReveal>
      </div>

      <div className={`${sectionShell()} ${sectionStack("gap-6")} pb-24 md:pb-32`}>
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={0.08 + i * 0.08}>
            <GlassPane
              accent={i === 1}
              glow={i === 1}
              className="grid items-end gap-8 p-8 md:grid-cols-[1fr_auto] md:p-10"
            >
              <p className="display-serif max-w-3xl text-2xl leading-snug text-foreground md:text-3xl">
                {t.quote[0]}
                <br />
                {t.quote[1]}
              </p>
              <div className="text-right md:min-w-[140px]">
                <p className="quote-meta-author">{t.author}</p>
                <p className="quote-meta-role mt-1">{t.role}</p>
              </div>
            </GlassPane>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
