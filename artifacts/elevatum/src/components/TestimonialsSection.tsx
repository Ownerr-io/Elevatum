import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    quote: "Elevatum transformed how I think about fundraising. We closed $800K in 6 weeks.",
    author: "Marcus T.",
    role: "Series A Founder",
  },
  {
    quote: "The Capital Sprint was the best investment I made before my raise. 4 meetings in the first two weeks.",
    author: "Priya R.",
    role: "Pre-Seed Founder",
  },
  {
    quote: "I walked away with a term sheet and a completely different understanding of investor psychology.",
    author: "James K.",
    role: "SaaS Founder",
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="border-t border-white/[0.07]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="px-8 md:px-16 py-16 border-b border-white/[0.07]"
      >
        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary block mb-5">— Testimonials</span>
        <h2
          className="font-semibold uppercase tracking-tight text-foreground leading-none"
          style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
        >
          What Founders Say.
        </h2>
      </motion.div>

      {/* Testimonials — stacked full-width rows */}
      <div>
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.15 + 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="border-b border-white/[0.07] grid md:grid-cols-[1fr_auto] gap-0 group"
          >
            <div className="px-8 md:px-16 py-14 md:border-r border-white/[0.07]">
              <p
                className="font-serif italic text-foreground leading-[1.35]"
                style={{ fontSize: "clamp(1.25rem, 3vw, 2.25rem)" }}
              >
                "{t.quote}"
              </p>
            </div>
            <div className="px-8 md:px-16 py-8 md:py-14 flex flex-col justify-end gap-1 min-w-[200px] border-t md:border-t-0 border-white/[0.07]">
              <div className="text-sm font-bold tracking-widest uppercase text-foreground">{t.author}</div>
              <div className="text-xs tracking-widest uppercase text-primary">{t.role}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
