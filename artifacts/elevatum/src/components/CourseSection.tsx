import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowUpRight } from "lucide-react";

const modules = [
  { num: "01", title: "Investor Narrative", desc: "Structuring a compelling, inevitable story investors can't ignore." },
  { num: "02", title: "Pitch Deck Architecture", desc: "Building the visual asset that drives the meeting — and the deal." },
  { num: "03", title: "Valuation & Economics", desc: "Pricing your round without killing momentum or diluting vision." },
  { num: "04", title: "Outreach Strategy", desc: "Cold and warm systems to book qualified meetings at scale." },
  { num: "05", title: "The Pitch Meeting", desc: "Controlling the room and answering the hardest questions." },
  { num: "06", title: "Follow-Up Systems", desc: "Running a tight post-meeting process to manufacture urgency." },
  { num: "Bonus", title: "Term Sheets & Closing", desc: "Navigating diligence, negotiation, and getting the wire sent." },
];

export function CourseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="course" ref={ref} className="border-t border-white/[0.07]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="px-8 md:px-16 py-16 border-b border-white/[0.07] flex items-end justify-between gap-8 flex-wrap"
      >
        <div>
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary block mb-5">
            — Cohort 04 — Applications Open
          </span>
          <h2
            className="font-semibold uppercase tracking-tight text-foreground leading-none"
            style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
          >
            Master the Art<br />of Fundraising.
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
          A 6-week program giving founders the knowledge, tools, and confidence to raise institutional capital. Limited to 20 founders per cohort.
        </p>
      </motion.div>

      {/* Pillars */}
      <div className="grid md:grid-cols-3 border-b border-white/[0.07]">
        {[
          { num: "I", title: "Learn", desc: "Understand the psychological frameworks investors use to deploy capital." },
          { num: "II", title: "Apply", desc: "Build institutional-grade materials and a targeted CRM live during the course." },
          { num: "III", title: "Succeed", desc: "Launch your fundraise with an undeniable narrative and strategic momentum." },
        ].map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: i * 0.1 + 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`px-8 md:px-12 py-12 ${i < 2 ? "border-b md:border-b-0 md:border-r border-white/[0.07]" : ""}`}
          >
            <span
              className="font-serif italic text-primary leading-none block mb-6"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              {p.num}
            </span>
            <h3 className="text-lg font-bold uppercase tracking-wide text-foreground mb-3">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Curriculum — list style */}
      <div className="border-b border-white/[0.07]">
        <div className="px-8 md:px-16 py-10 border-b border-white/[0.07]">
          <h3 className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground">Curriculum</h3>
        </div>
        {modules.map((mod, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: i * 0.08 + 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="group border-b border-white/[0.07] hover:bg-white/[0.02] transition-colors cursor-default last:border-b-0"
          >
            {/* Mobile layout */}
            <div className="flex items-start gap-5 px-8 py-6 md:hidden">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/60 shrink-0 mt-0.5 group-hover:text-primary transition-colors">
                {mod.num}
              </span>
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wide text-foreground mb-1">{mod.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{mod.desc}</p>
              </div>
            </div>
            {/* Desktop layout */}
            <div className="hidden md:grid md:grid-cols-[auto_1fr_1fr]">
              <div className="px-12 py-7 border-r border-white/[0.07] flex items-center min-w-[80px]">
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/60 group-hover:text-primary transition-colors">
                  {mod.num}
                </span>
              </div>
              <div className="px-12 py-7 border-r border-white/[0.07] flex items-center">
                <h4 className="text-sm font-bold uppercase tracking-wide text-foreground">{mod.title}</h4>
              </div>
              <div className="px-12 py-7 flex items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{mod.desc}</p>
                <ArrowUpRight size={14} className="text-primary/0 group-hover:text-primary/60 transition-all shrink-0" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Waitlist form */}
      <div className="grid md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="px-8 md:px-16 py-16 md:border-r border-white/[0.07] border-b md:border-b-0 flex flex-col justify-between gap-12"
        >
          <div>
            <h3
              className="font-semibold uppercase tracking-tight text-foreground leading-none mb-6"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
            >
              Join the Next Cohort.
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Next cohort: Q3 2025 — Limited to 20 founders. Applications reviewed on a rolling basis.
            </p>
          </div>
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
            — 20 Founders Max Per Cohort
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="px-8 md:px-16 py-16"
        >
          <form className="space-y-7">
            <div className="space-y-1">
              <label className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground">Name</label>
              <Input
                className="bg-transparent border-0 border-b border-white/20 rounded-none h-12 px-0 text-foreground placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-primary transition-colors"
                placeholder="Jane Doe"
                data-testid="input-course-name"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground">Email</label>
              <Input
                type="email"
                className="bg-transparent border-0 border-b border-white/20 rounded-none h-12 px-0 text-foreground placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-primary transition-colors"
                placeholder="jane@company.com"
                data-testid="input-course-email"
              />
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-semibold tracking-[0.25em] uppercase text-muted-foreground">Current Stage</label>
              <Select>
                <SelectTrigger
                  className="bg-transparent border-0 border-b border-white/20 rounded-none h-12 px-0 text-foreground focus:ring-0 data-[placeholder]:text-white/20"
                  data-testid="select-course-stage"
                >
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent className="bg-background border-white/10 text-foreground">
                  <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                  <SelectItem value="seed">Seed</SelectItem>
                  <SelectItem value="series-a">Series A</SelectItem>
                  <SelectItem value="series-b">Series B+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              type="submit"
              className="w-full bg-primary text-background hover:bg-primary/90 h-14 text-xs font-bold tracking-[0.3em] uppercase rounded-none mt-2"
              data-testid="button-course-waitlist"
            >
              Join the Waitlist <ArrowUpRight size={16} className="ml-2" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
