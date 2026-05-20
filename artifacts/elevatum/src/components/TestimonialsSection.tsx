import { GlassCard } from "./GlassCard";
import { motion } from "framer-motion";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

const testimonials = [
  {
    quote: "Elevatum transformed how I think about fundraising. We closed $800K in 6 weeks.",
    author: "Marcus T.",
    role: "Series A Founder"
  },
  {
    quote: "The Capital Sprint was the best investment I made before my raise. 4 meetings in the first two weeks.",
    author: "Priya R.",
    role: "Pre-Seed Founder"
  },
  {
    quote: "I walked away with a term sheet and a completely different understanding of investor psychology.",
    author: "James K.",
    role: "SaaS Founder"
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-32 bg-background border-y border-white/5 relative">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(212,175,55,0.03)_0%,transparent_50%)]" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <GlassCard className="p-10 h-full flex flex-col bg-black/20" hoverEffect>
                <BiSolidQuoteAltLeft className="w-8 h-8 text-primary/40 mb-6" />
                <p className="text-lg text-foreground font-serif leading-relaxed mb-8 flex-1">
                  "{test.quote}"
                </p>
                <div>
                  <div className="font-bold text-foreground">{test.author}</div>
                  <div className="text-sm text-primary">{test.role}</div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
