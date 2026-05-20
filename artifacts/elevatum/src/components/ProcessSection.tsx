import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
        className="px-8 md:px-16 py-16 border-b border-white/[0.07] flex items-end justify-between gap-6 flex-wrap"
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

      {/* Steps — each is a full-width row */}
      <div>
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.1 + 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group grid md:grid-cols-[auto_1fr_1fr] gap-0 border-b border-white/[0.07] hover:bg-white/[0.02] transition-colors cursor-default"
          >
            {/* Number */}
            <div className="px-8 md:px-12 py-10 md:border-r border-white/[0.07] flex items-center">
              <span
                className="font-semibold text-foreground/20 group-hover:text-primary transition-colors leading-none"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                {step.num}
              </span>
            </div>
            {/* Title */}
            <div className="px-8 md:px-12 py-10 md:border-r border-white/[0.07] flex items-center">
              <h3
                className="font-semibold uppercase tracking-wide text-foreground group-hover:text-primary transition-colors"
                style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)" }}
              >
                {step.title}
              </h3>
            </div>
            {/* Description */}
            <div className="px-8 md:px-12 py-10 flex items-center justify-between gap-4">
              <p className="text-sm text-muted-foreground leading-relaxed max-w-md">{step.desc}</p>
              <ArrowUpRight
                size={18}
                className="text-primary/0 group-hover:text-primary/60 transition-all shrink-0"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
