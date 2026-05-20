import { AnimatedCounter } from "./AnimatedCounter";

const stats = [
  { value: 200, prefix: "", suffix: "+", label: "Raised by Sprint Founders" },
  { value: 50, prefix: "", suffix: "+", label: "Founder Strategy Sessions" },
  { value: 30, prefix: "", suffix: "", label: "Days to Investor Momentum" },
  { value: 3, prefix: "", suffix: "+", label: "Avg Meetings Booked in Sprint" },
];

export function StatsStrip() {
  return (
    <section className="py-20 border-y border-white/5 bg-black/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-primary/20">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center px-4 py-6 md:py-0">
              <div className="text-4xl md:text-5xl font-serif text-primary mb-3">
                <AnimatedCounter 
                  value={stat.value} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix} 
                />
              </div>
              <p className="text-sm font-medium text-muted-foreground max-w-[160px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
