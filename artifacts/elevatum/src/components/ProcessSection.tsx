import { FiSearch, FiLayout, FiSend, FiUsers, FiAward } from "react-icons/fi";
import { motion } from "framer-motion";

const steps = [
  { icon: FiSearch, title: "Diagnose", desc: "Assess your current narrative and investor readiness" },
  { icon: FiLayout, title: "Position", desc: "Build an investor-grade story and materials" },
  { icon: FiSend, title: "Outreach", desc: "Launch a systematic investor outreach campaign" },
  { icon: FiUsers, title: "Meetings", desc: "Generate and prep for qualified investor meetings" },
  { icon: FiAward, title: "Close", desc: "Navigate term sheets and close your round" },
];

export function ProcessSection() {
  return (
    <section className="py-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif mb-24 text-center">How it works.</h2>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-8 left-[10%] right-[10%] h-[2px] bg-white/10 hidden md:block" />
          <motion.div 
            className="absolute top-8 left-[10%] h-[2px] bg-primary hidden md:block"
            initial={{ width: "0%" }}
            whileInView={{ width: "80%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 rounded-full bg-background border-2 border-white/10 flex items-center justify-center mb-6 relative z-10 group-hover:border-primary group-hover:scale-110 transition-all duration-300">
                  <step.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="text-xs font-bold text-primary tracking-widest mb-2 uppercase">Step 0{i + 1}</div>
                <h4 className="text-lg font-bold mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
