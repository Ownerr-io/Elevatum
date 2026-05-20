import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Button } from "@/components/ui/button";
import { FiCheck } from "react-icons/fi";
import { TextReveal } from "./TextReveal";

export function OffersSection() {
  return (
    <section id="offers" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif">
            Two ways to work together.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Institutional frameworks tailored for your stage and goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Capital Sprint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-10 h-full flex flex-col relative border-white/10" hoverEffect>
              <div className="absolute top-0 right-0 bg-primary/20 text-primary px-4 py-1 rounded-bl-xl text-xs font-bold tracking-wider uppercase border-b border-l border-primary/20">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-2">Capital Sprint</h3>
              <div className="text-3xl font-serif text-primary mb-4">$2,500</div>
              <p className="text-lg font-medium text-foreground mb-4">30 Days to Investor Momentum</p>
              <p className="text-muted-foreground mb-8">
                Tactical fundraising sprint that gets you investor-ready and in meetings within 30 days.
              </p>
              
              <ul className="space-y-4 mb-10 flex-1">
                {["Investor Narrative", "Pitch Materials", "Outreach Systems", "Messaging Support", "Warm Intros"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full h-12 text-base bg-primary text-primary-foreground hover:bg-primary/90">
                Start Your Sprint
              </Button>
            </GlassCard>
          </motion.div>

          {/* Co-Lead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <GlassCard className="p-10 h-full flex flex-col relative border-primary/30 bg-black/40" hoverEffect>
              <div className="absolute top-0 right-0 bg-foreground/10 text-foreground px-4 py-1 rounded-bl-xl text-xs font-bold tracking-wider uppercase border-b border-l border-white/10">
                Premium
              </div>
              <h3 className="text-2xl font-bold mb-2">Co-Lead Fundraising</h3>
              <div className="text-3xl font-serif text-foreground mb-4">Application Only</div>
              <p className="text-lg font-medium text-foreground mb-4">Full-cycle fundraising partnership</p>
              <p className="text-muted-foreground mb-8">
                Deep advisory engagement for founders raising serious capital. Strategy through close.
              </p>
              
              <ul className="space-y-4 mb-10 flex-1">
                {["Full Strategy", "Investor Targeting", "Meeting Generation", "Pitch Coaching", "CRM Systems", "Weekly Support"].map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <FiCheck className="w-5 h-5 text-foreground mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="w-full h-12 text-base border-white/20 hover:bg-white/10">
                Apply Now
              </Button>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
