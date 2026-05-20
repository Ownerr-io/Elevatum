import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { value: 200, suffix: "+", label: "RAISED BY\nSPRINT FOUNDERS" },
  { value: 50, suffix: "+", label: "FOUNDER\nSTRATEGY SESSIONS" },
  { value: 30, suffix: "", label: "DAYS TO\nINVESTOR MOMENTUM" },
  { value: 3, suffix: "+", label: "AVG MEETINGS\nBOOKED PER SPRINT" },
];

export function StatsStrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-t border-white/[0.07]">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`px-8 md:px-12 py-12 md:py-16 ${i < 3 ? "border-r border-white/[0.07]" : ""} ${i >= 2 ? "border-t md:border-t-0 border-white/[0.07]" : ""}`}
          >
            <div
              className="font-semibold text-foreground leading-none mb-3 tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-muted-foreground whitespace-pre-line leading-tight">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
