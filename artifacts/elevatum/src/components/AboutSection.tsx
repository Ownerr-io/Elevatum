import { GlassCard } from "./GlassCard";
import { FiTarget, FiShield, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about" className="py-32">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pl-8 border-l-2 border-primary/50"
          >
            <h2 className="text-3xl md:text-5xl font-serif leading-tight text-foreground">
              "I don't just advise — I build the system that gets you in the room."
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-muted-foreground"
          >
            <p>
              Raising capital is fundamentally a sales process, yet founders treat it like an exam. 
              Elevatum exists to bridge the gap between a great product and a fundable company.
            </p>
            <p>
              As a strategic fundraising operator, I've helped founders at every stage from pre-seed 
              to Series A refine their narrative, target the right capital, and create undeniable 
              investor momentum.
            </p>
            <p className="font-medium text-foreground">
              We don't do spray and pray. We do precision targeting with unignorable positioning.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {[
            {
              icon: FiShield,
              title: "Investor Philosophy",
              desc: "Understanding how check-writers think, derisk, and deploy."
            },
            {
              icon: FiTarget,
              title: "Strategic Positioning",
              desc: "Framing your venture as the inevitable winner in your category."
            },
            {
              icon: FiTrendingUp,
              title: "Why Founders Choose Us",
              desc: "We bring institutional rigor to early-stage fundraising."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-8 h-full" hoverEffect>
                <item.icon className="w-8 h-8 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-serif text-center mb-12">Milestones</h3>
          <div className="relative border-l border-white/10 md:border-l-0 md:border-t md:flex justify-between pt-8 md:pt-0 ml-4 md:ml-0">
            {[
              { year: "2019", title: "First Angel Deal" },
              { year: "2021", title: "$1M Sprint Milestone" },
              { year: "2023", title: "50 Founders Served" },
              { year: "2024", title: "Elevatum Founded" }
            ].map((milestone, i) => (
              <div key={i} className="relative mb-8 md:mb-0 md:mt-8 pl-8 md:pl-0 text-left md:text-center flex-1">
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 md:-top-[41px] w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-background" />
                <div className="text-xl font-bold text-foreground mb-1">{milestone.year}</div>
                <div className="text-sm text-muted-foreground">{milestone.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
