import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

const metrics = [
  { value: 25, prefix: "$", suffix: "K", label: "ANGEL CHECK\nCLOSED IN FIRST SPRINT" },
  { value: 2, prefix: "", suffix: "", label: "INVESTOR MEETINGS\nBOOKED IN 1 WEEK" },
  { value: 1, prefix: "$", suffix: "M+", label: "IN COMMITMENTS\nSINGLE ENGAGEMENT" },
  { value: 425, prefix: "$", suffix: "K", label: "RAISED FROM\n$45K PRESELL" },
];

const quotes = [
  {
    text: "The level of strategic clarity Elevatum brought to our narrative was the difference between polite passes and a signed term sheet.",
    author: "Sarah M.", role: "Series A Founder"
  },
  {
    text: "We were stuck in diligence hell. Elevatum stepped in, rebuilt our data room logic, and we closed the round in 14 days.",
    author: "David Chen", role: "Seed Founder"
  },
];

export function ResultsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="results" ref={ref} className="border-t border-white/[0.07] bg-black/30">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="px-8 md:px-16 py-16 border-b border-white/[0.07]"
      >
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary block mb-5">— Results</span>
        <h2
          className="font-semibold uppercase tracking-tight text-foreground leading-none"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          Real Outcomes.<br />Not Promises.
        </h2>
      </motion.div>

      {/* Metric numbers — 4-column grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-b border-white/[0.07]">
        {metrics.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 + 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`px-8 md:px-12 py-14 ${i < 3 ? "border-r border-white/[0.07]" : ""} ${i >= 2 ? "border-t md:border-t-0 border-white/[0.07]" : ""}`}
          >
            <div
              className="font-semibold text-foreground leading-none mb-4 tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} />
            </div>
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground whitespace-pre-line leading-tight">
              {m.label}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Pull quotes */}
      <div className="grid md:grid-cols-2">
        {quotes.map((q, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 + 0.4, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`px-8 md:px-16 py-16 ${i === 0 ? "border-b md:border-b-0 md:border-r border-white/[0.07]" : ""}`}
          >
            <p
              className="font-serif italic text-foreground/90 leading-relaxed mb-8"
              style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)" }}
            >
              "{q.text}"
            </p>
            <div>
              <div className="text-sm font-bold tracking-widest uppercase text-foreground">{q.author}</div>
              <div className="text-xs tracking-widest uppercase text-primary mt-1">{q.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
