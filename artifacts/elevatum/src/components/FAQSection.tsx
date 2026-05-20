import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who do you work with?",
    a: "We work primarily with ambitious founders raising Pre-Seed to Series A rounds. Our clients typically have early traction, a strong product vision, and are looking to raise institutional capital."
  },
  {
    q: "What does the process look like?",
    a: "We start with a deep-dive diagnostic of your current narrative and materials. From there, we rebuild your positioning, create your investor hit list, and set up the outreach systems needed to generate meetings at scale."
  },
  {
    q: "Do you guarantee funding?",
    a: "No professional advisor can guarantee funding — that depends on your business metrics and the market. We guarantee that you will have an institutional-grade narrative, a precise strategy, and the tools to get in front of the right investors."
  },
  {
    q: "How is Elevatum different from other advisors?",
    a: "Elevatum is not an agency. It's a high-touch, partner-level engagement. We bring the rigor of a venture partner to your side of the table, focusing on deep strategic positioning rather than just making your pitch deck look pretty."
  },
  {
    q: "What's included in the Capital Sprint?",
    a: "The Capital Sprint is a 30-day intensive program that includes a complete teardown and rebuild of your investor narrative, pitch materials review, creation of a targeted investor CRM, outreach messaging playbooks, and strategic weekly advisory calls."
  }
];

export function FAQSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-serif text-center mb-16">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full text-left">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-white/10">
              <AccordionTrigger className="text-lg font-medium hover:text-primary transition-colors text-left">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
