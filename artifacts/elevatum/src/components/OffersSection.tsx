import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const features = {
  sprint: ["Investor Narrative", "Pitch Materials", "Outreach Systems", "Messaging Support", "Warm Intros"],
  colead: ["Full Strategy", "Investor Targeting", "Meeting Generation", "Pitch Coaching", "CRM Systems", "Weekly Support"],
};

export function OffersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="offers" ref={ref} className="border-t border-white/[0.07]">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="px-8 md:px-16 py-16 border-b border-white/[0.07] flex items-end justify-between gap-8 flex-wrap"
      >
        <div>
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary block mb-5">— Offers</span>
          <h2
            className="font-semibold uppercase tracking-tight text-foreground leading-none"
            style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
          >
            Two Ways<br />to Work Together.
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
          Institutional frameworks tailored for your stage and goals. One sprint. One partnership.
        </p>
      </motion.div>

      {/* Offer A — Capital Sprint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="border-b border-white/[0.07] grid md:grid-cols-[1fr_auto] gap-0"
      >
        <div className="px-8 md:px-16 py-14 md:border-r border-white/[0.07]">
          <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary block mb-3">01 — Most Popular</span>
              <h3
                className="font-semibold uppercase tracking-tight text-foreground"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
              >
                Capital Sprint
              </h3>
              <p className="text-sm text-muted-foreground mt-2 tracking-wide">30 Days to Investor Momentum</p>
            </div>
            <div className="text-right">
              <div
                className="font-semibold text-foreground"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                $2,500
              </div>
              <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">One-time</p>
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
            Tactical fundraising sprint that gets you investor-ready and in meetings within 30 days. Built for founders who need momentum now.
          </p>
        </div>

        <div className="px-8 md:px-16 py-14 flex flex-col justify-between gap-10 min-w-[280px]">
          <ul className="space-y-4">
            {features.sprint.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80 tracking-wide">
                <span className="w-5 h-px bg-primary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-bold tracking-[0.2em] uppercase text-primary hover:opacity-70 transition-opacity"
            data-testid="link-offer-sprint"
          >
            Start Your Sprint <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>

      {/* Offer B — Co-Lead */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.25, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid md:grid-cols-[1fr_auto] gap-0"
      >
        <div className="px-8 md:px-16 py-14 md:border-r border-white/[0.07]">
          <div className="flex items-start justify-between gap-4 mb-6 flex-wrap">
            <div>
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-primary block mb-3">02 — Premium</span>
              <h3
                className="font-semibold uppercase tracking-tight text-foreground"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
              >
                Co-Lead Fundraising
              </h3>
              <p className="text-sm text-muted-foreground mt-2 tracking-wide">Full-cycle Fundraising Partnership</p>
            </div>
            <div className="text-right">
              <div
                className="font-semibold text-foreground"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
              >
                Application
              </div>
              <p className="text-xs text-muted-foreground tracking-widest uppercase mt-1">Only</p>
            </div>
          </div>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
            Deep advisory engagement for founders raising serious capital. We work alongside you from strategy through close — investor selection, meeting generation, term sheet navigation.
          </p>
        </div>

        <div className="px-8 md:px-16 py-14 flex flex-col justify-between gap-10 min-w-[280px]">
          <ul className="space-y-4">
            {features.colead.map((f, i) => (
              <li key={i} className="flex items-center gap-3 text-sm font-medium text-foreground/80 tracking-wide">
                <span className="w-5 h-px bg-primary shrink-0" />
                {f}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-bold tracking-[0.2em] uppercase text-primary hover:opacity-70 transition-opacity"
            data-testid="link-offer-colead"
          >
            Apply Now <ArrowUpRight size={16} />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
