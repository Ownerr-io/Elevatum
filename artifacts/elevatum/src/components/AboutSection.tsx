import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const milestones = [
  { year: "2019", event: "First Angel Deal Closed" },
  { year: "2021", event: "$1M Sprint Milestone Reached" },
  { year: "2023", event: "50 Founders Advised" },
  { year: "2024", event: "Elevatum Founded" },
];

export function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="border-t border-white/[0.07]">
      {/* Main editorial block */}
      <div className="grid md:grid-cols-2">
        {/* Left — label + quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="px-8 md:px-16 py-20 md:py-28 border-b md:border-b-0 md:border-r border-white/[0.07] flex flex-col justify-between gap-16"
        >
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
            — About
          </span>
          <blockquote
            className="font-serif italic leading-[1.1] text-foreground"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3.25rem)" }}
          >
            "I don't just advise — I build the system that gets you in the room."
          </blockquote>
        </motion.div>

        {/* Right — body */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="px-8 md:px-16 py-20 md:py-28 flex flex-col justify-end gap-8"
        >
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Raising capital is fundamentally a sales process, yet founders treat it like an exam.
            Elevatum exists to bridge the gap between a great product and a fundable company.
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            As a strategic fundraising operator, we've helped founders at every stage — from pre-seed
            to Series A — refine their narrative, target the right capital, and create undeniable investor momentum.
          </p>
          <p className="text-base md:text-lg font-semibold text-foreground leading-relaxed">
            We don't do spray and pray. We do precision targeting with unignorable positioning.
          </p>
          <a
            href="#offers"
            className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-widest uppercase text-primary mt-4"
          >
            See Our Offers <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>

      {/* Pillars row */}
      <div className="border-t border-white/[0.07] grid md:grid-cols-3">
        {[
          { label: "01", title: "Investor Philosophy", desc: "Understanding how check-writers think, derisk, and deploy capital at each stage." },
          { label: "02", title: "Strategic Positioning", desc: "Framing your venture as the inevitable winner in your category before you pitch." },
          { label: "03", title: "Why Founders Choose Us", desc: "We bring institutional rigor to early-stage fundraising — no fluff, no templates." },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 + 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`px-8 md:px-12 py-12 ${i < 2 ? "border-b md:border-b-0 md:border-r border-white/[0.07]" : ""}`}
          >
            <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary block mb-6">{item.label}</span>
            <h3 className="text-lg font-bold uppercase tracking-wide text-foreground mb-4">{item.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Milestones */}
      <div className="border-t border-white/[0.07] grid grid-cols-2 md:grid-cols-4">
        {milestones.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.08 + 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`px-8 md:px-12 py-10 ${i < 3 ? "border-r border-white/[0.07]" : ""} ${i >= 2 ? "border-t md:border-t-0 border-white/[0.07]" : ""}`}
          >
            <div className="text-2xl md:text-3xl font-semibold text-foreground mb-2">{m.year}</div>
            <div className="text-xs font-semibold tracking-widest uppercase text-muted-foreground">{m.event}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
