import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const steps = [
  { num: "01", title: "Diagnose", desc: "Deep-dive audit of your current narrative, materials, and investor readiness. We find every gap before investors do." },
  { num: "02", title: "Position", desc: "Build an investor-grade story and complete pitch materials. The kind of narrative that makes saying no feel like a mistake." },
  { num: "03", title: "Outreach", desc: "Launch a systematic, targeted investor outreach campaign built around precision — not volume. Quality over spray and pray." },
  { num: "04", title: "Meetings", desc: "Generate qualified investor meetings and prepare for every room. You walk in prepared, not hoping." },
  { num: "05", title: "Close", desc: "Navigate term sheets, diligence, and final negotiations. We stay beside you until the wire hits." },
];

export function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-t border-white/[0.07]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 sm:px-8 md:px-16 py-12 md:py-16 border-b border-white/[0.07] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 flex-wrap"
      >
        <div>
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary block mb-5">— Process</span>
          <h2
            className="font-semibold uppercase tracking-tight text-foreground leading-none"
            style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
          >
            How It Works.
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
          A five-stage system that takes you from unclear to unforgettable — in front of the right investors.
        </p>
      </motion.div>

      {/* Steps */}
      <div>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 + 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group border-b border-white/[0.07] hover:bg-white/[0.02] transition-colors cursor-default"
          >
            {/* Mobile: stacked layout */}
            <div className="flex items-start gap-5 px-6 sm:px-8 py-8 md:hidden">
              <span
                className="font-semibold text-primary/50 leading-none shrink-0 mt-0.5"
                style={{ fontSize: "clamp(1rem, 4vw, 1.25rem)" }}
              >
                {step.num}
              </span>
              <div>
                <h3 className="text-base font-bold uppercase tracking-wide text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>

            {/* Desktop: 3-column grid */}
            <div className="hidden md:grid md:grid-cols-[auto_1fr_1fr]">
              <div className="px-12 py-10 border-r border-white/[0.07] flex items-center">
                <span
                  className="font-semibold text-foreground/20 group-hover:text-primary transition-colors leading-none"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                >
                  {step.num}
                </span>
              </div>
              <div className="px-12 py-10 border-r border-white/[0.07] flex items-center">
                <h3
                  className="font-semibold uppercase tracking-wide text-foreground group-hover:text-primary transition-colors"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)" }}
                >
                  {step.title}
                </h3>
              </div>
              <div className="px-12 py-10 flex items-center">
                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{step.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
