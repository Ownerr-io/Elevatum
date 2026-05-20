import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const companies = [
  "Meridian", "Archetype", "Vanta Protocol", "Nexus Labs",
  "Forge Capital", "Stratum", "Axiom", "Crest", "Luminary", "Harbour"
];

export function ClientMarquee() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="border-t border-white/[0.07] overflow-hidden py-14">
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted-foreground text-center mb-10"
      >
        Founders from leading companies trust Elevatum
      </motion.p>

      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee flex items-center gap-12 whitespace-nowrap">
          {[...companies, ...companies, ...companies].map((company, i) => (
            <span
              key={i}
              className="text-sm font-semibold tracking-[0.2em] uppercase text-foreground/30 hover:text-foreground/70 transition-colors cursor-default"
            >
              {company}
              <span className="inline-block mx-6 w-1 h-1 rounded-full bg-primary/40 align-middle" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
