import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { AnimatedCounter } from "./AnimatedCounter";

const metrics = [
  { value: 25, prefix: "$", suffix: "K", label: "Angel check closed in first sprint" },
  { value: 2, prefix: "", suffix: "x", label: "Investor meetings booked in 1 week" },
  { value: 1, prefix: "$", suffix: "M+", label: "In commitments, single engagement" },
  { value: 425, prefix: "$", suffix: "K", label: "Raised from $45K presell" },
];

export function ResultsSection() {
  return (
    <section id="results" className="py-32 bg-black/40 border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-6xl font-serif mb-6 text-foreground">
            Real outcomes. Not promises.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our frameworks have helped founders secure millions in venture backing.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="p-8 text-center h-full border-white/5">
                <div className="text-4xl font-serif text-primary mb-4">
                  <AnimatedCounter value={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
                </div>
                <p className="text-sm text-muted-foreground font-medium">{metric.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <GlassCard className="p-8 italic text-muted-foreground">
            "The level of strategic clarity Elevatum brought to our narrative was the difference between polite passes and a signed term sheet."
            <div className="mt-4 text-sm font-sans not-italic font-medium text-foreground">— Sarah M., Series A Founder</div>
          </GlassCard>
          <GlassCard className="p-8 italic text-muted-foreground">
            "We were stuck in diligence hell. Elevatum stepped in, rebuilt our data room logic, and we closed the round in 14 days."
            <div className="mt-4 text-sm font-sans not-italic font-medium text-foreground">— David Chen, Seed Founder</div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
