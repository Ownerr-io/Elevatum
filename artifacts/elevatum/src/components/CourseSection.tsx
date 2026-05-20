import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GlassCard } from "./GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FiBookOpen, FiActivity, FiAward, FiFileText, FiLayout, FiTarget, FiDollarSign, FiMessageSquare, FiLayers, FiBriefcase } from "react-icons/fi";

const pillars = [
  { icon: FiBookOpen, title: "Learn", desc: "Understand the psychological frameworks investors use to deploy capital." },
  { icon: FiActivity, title: "Apply", desc: "Build institutional-grade materials and a targeted CRM live during the course." },
  { icon: FiAward, title: "Succeed", desc: "Launch your fundraise with an undeniable narrative and strategic momentum." },
];

const modules = [
  { icon: FiFileText, title: "Investor Narrative", desc: "Structuring a compelling, inevitable story.", badge: "Module 1" },
  { icon: FiLayout, title: "Pitch Deck Architecture", desc: "Building the visual asset that drives the meeting.", badge: "Module 2" },
  { icon: FiDollarSign, title: "Valuation & Economics", desc: "Pricing your round without killing momentum.", badge: "Module 3" },
  { icon: FiTarget, title: "Outreach Strategy", desc: "Cold and warm systems to book qualified meetings.", badge: "Module 4" },
  { icon: FiMessageSquare, title: "The Pitch Meeting", desc: "Controlling the room and answering hard questions.", badge: "Module 5" },
  { icon: FiLayers, title: "Follow-Up Systems", desc: "Running a tight process to drive urgency.", badge: "Module 6" },
  { icon: FiBriefcase, title: "Term Sheets & Closing", desc: "Navigating diligence and signing the wire.", badge: "Bonus" },
];

export function CourseSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="course" ref={ref} className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-block border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
            Cohort 04 — Applications Open
          </div>
          <h2 className="text-5xl md:text-7xl font-serif italic mb-6 leading-tight">
            Master the Art<br />of Fundraising
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A comprehensive 6-week program designed to give founders the knowledge, tools, and confidence to successfully raise institutional capital.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-6 mb-24">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1 + 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <GlassCard className="p-8 text-center h-full" hoverEffect>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <pillar.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Curriculum */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-3xl font-serif text-center mb-12">Curriculum</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {modules.map((mod, i) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.07 + 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <GlassCard className="p-7" hoverEffect>
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                      <mod.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs font-bold text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                      {mod.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold mb-2">{mod.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{mod.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Cohort Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl mx-auto text-center"
        >
          <h3 className="text-3xl font-serif mb-2">Join the Next Cohort</h3>
          <p className="text-muted-foreground mb-8">Next cohort: Q3 2025 — Limited to 20 founders.</p>

          <GlassCard className="p-8 text-left border-primary/20">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input className="bg-white/5 border-white/10" placeholder="Jane Doe" data-testid="input-course-name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input className="bg-white/5 border-white/10" type="email" placeholder="jane@company.com" data-testid="input-course-email" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Company</label>
                <Input className="bg-white/5 border-white/10" placeholder="Acme Corp" data-testid="input-course-company" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Current Stage</label>
                <Select>
                  <SelectTrigger className="bg-white/5 border-white/10" data-testid="select-course-stage">
                    <SelectValue placeholder="Select Stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                    <SelectItem value="seed">Seed</SelectItem>
                    <SelectItem value="series-a">Series A</SelectItem>
                    <SelectItem value="series-b">Series B+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                type="submit"
                className="w-full mt-2 bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-bold tracking-wide"
                data-testid="button-course-waitlist"
              >
                Join the Waitlist
              </Button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
