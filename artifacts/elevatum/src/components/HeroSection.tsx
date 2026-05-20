import { motion } from "framer-motion";
import { TextReveal } from "./TextReveal";
import { GlassCard } from "./GlassCard";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "./AnimatedCounter";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[150px] mix-blend-screen opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              Confidential. Founder-First. Results-Driven.
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
            <TextReveal text="Fundraising" />
            <div className="flex">
              <TextReveal text="Advisory" className="font-serif italic text-primary" />
              <span className="ml-4"><TextReveal text="for" /></span>
            </div>
            <TextReveal text="Founders" />
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed"
          >
            We help founders raise capital with clarity & confidence. Institutional-grade strategy for the pre-seed to Series A journey.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-8 text-base">
              Explore Offers
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5 h-14 px-8 text-base">
              See Results
            </Button>
          </motion.div>
        </div>

        <div className="relative h-[600px] hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.4, duration: 1, type: "spring" }}
            className="absolute top-10 right-20 z-20"
          >
            <GlassCard className="p-6 w-64 shadow-2xl">
              <p className="text-sm text-muted-foreground mb-2">Total Capital Raised</p>
              <h3 className="text-4xl font-serif text-foreground mb-1">
                <AnimatedCounter value={2.4} prefix="$" suffix="M" duration={2} />
              </h3>
              <p className="text-xs text-primary font-medium tracking-wide">Last 12 Months</p>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 1, type: "spring" }}
            className="absolute top-1/2 left-0 z-10"
          >
            <GlassCard className="p-6 w-56 shadow-2xl backdrop-blur-xl bg-black/40">
              <p className="text-sm text-muted-foreground mb-2">Founders Served</p>
              <h3 className="text-3xl font-bold text-foreground mb-1">
                <AnimatedCounter value={47} duration={2} />
              </h3>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-6 h-6 rounded-full border border-background bg-muted" />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">Pre-Seed to Series A</span>
              </div>
            </GlassCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, type: "spring" }}
            className="absolute bottom-20 right-10 z-30"
          >
            <GlassCard className="p-5 w-60 border-primary/30 shadow-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <p className="text-sm font-medium text-foreground">Capital Sprint</p>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">30 Days</h3>
              <p className="text-xs text-muted-foreground">To Investor Momentum</p>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
