import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  GlassPane,
  SectionIntro,
  sectionPadY,
  sectionRule,
  sectionShell,
} from "@/components/editorial/SectionChrome";
import { ScrollReveal } from "@/components/editorial/ScrollReveal";

const faqs = [
  {
    q: "Who do you work with?",
    a: [
      "Ambitious founders raising pre-seed through Series A",
      "with traction, vision, and institutional ambitions.",
    ],
  },
  {
    q: "What does the process look like?",
    a: [
      "Diagnostic, repositioning, investor list build,",
      "and outreach systems designed to create meetings at scale.",
    ],
  },
  {
    q: "Do you guarantee funding?",
    a: [
      "No advisor can guarantee a close. We guarantee narrative quality,",
      "strategy, and access to the right investors.",
    ],
  },
  {
    q: "How is Elevatum different?",
    a: [
      "Partner-level engagement with venture-grade rigor,",
      "not deck cosmetics or agency throughput.",
    ],
  },
  {
    q: "What is in the Capital Sprint?",
    a: [
      "Narrative rebuild, materials review, investor CRM,",
      "outreach playbooks, and weekly strategy calls for 30 days.",
    ],
  },
];

export function FAQSection() {
  return (
    <section className={sectionRule()}>
      <div className={`${sectionShell()} ${sectionPadY()} pb-10`}>
        <ScrollReveal>
          <SectionIntro
            index="06"
            tag="FAQ"
            title={
              <>
                Questions
                <br />
                answered.
              </>
            }
          />
        </ScrollReveal>
      </div>

      <div className={`${sectionShell()} pb-24 md:pb-32`}>
        <ScrollReveal delay={0.1}>
          <GlassPane className="p-6 md:p-10">
            <Accordion type="single" collapsible className="w-full editorial-soft-divide">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-0">
                  <AccordionTrigger className="py-6 text-left text-sm font-medium uppercase tracking-[0.06em] text-foreground hover:text-primary hover:no-underline md:text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="max-w-2xl pb-6 text-sm leading-snug text-muted-foreground md:text-base">
                    {faq.a[0]}
                    <br />
                    {faq.a[1]}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </GlassPane>
        </ScrollReveal>
      </div>
    </section>
  );
}
