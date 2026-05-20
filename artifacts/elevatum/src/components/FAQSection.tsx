import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Who do you work with?",
    a: "We work primarily with ambitious founders raising Pre-Seed to Series A rounds. Our clients typically have early traction, a strong product vision, and are looking to raise institutional capital.",
  },
  {
    q: "What does the process look like?",
    a: "We start with a deep-dive diagnostic of your current narrative and materials. From there, we rebuild your positioning, create your investor hit list, and set up the outreach systems needed to generate meetings at scale.",
  },
  {
    q: "Do you guarantee funding?",
    a: "No professional advisor can guarantee funding — that depends on your business metrics and the market. We guarantee that you will have an institutional-grade narrative, a precise strategy, and the tools to get in front of the right investors.",
  },
  {
    q: "How is Elevatum different from other advisors?",
    a: "Elevatum is not an agency. It's a high-touch, partner-level engagement. We bring the rigor of a venture partner to your side of the table, focusing on deep strategic positioning rather than just making your pitch deck look pretty.",
  },
  {
    q: "What's included in the Capital Sprint?",
    a: "The Capital Sprint is a 30-day intensive program that includes a complete teardown and rebuild of your investor narrative, pitch materials review, creation of a targeted investor CRM, outreach messaging playbooks, and strategic weekly advisory calls.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-t border-white/[0.07]">
      <div className="grid md:grid-cols-[1fr_2fr]">
        {/* Left label col */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="px-8 md:px-16 py-16 md:border-r border-white/[0.07] border-b md:border-b-0"
        >
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary block mb-5">— FAQ</span>
          <h2
            className="font-semibold uppercase tracking-tight text-foreground leading-none"
            style={{ fontSize: "clamp(2rem, 4vw, 4rem)" }}
          >
            Questions<br />Answered.
          </h2>
        </motion.div>

        {/* Right accordion col */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="px-8 md:px-16 py-12"
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-white/[0.07]"
              >
                <AccordionTrigger className="text-sm md:text-base font-semibold tracking-wide text-foreground uppercase hover:text-primary hover:no-underline transition-colors py-6 text-left">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-6 pr-8">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
