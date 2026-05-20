export function ClientMarquee() {
  const companies = [
    "Meridian", "Archetype", "Vanta Protocol", "Nexus Labs", 
    "Forge Capital", "Stratum", "Axiom", "Crest"
  ];

  return (
    <section className="py-20 bg-background overflow-hidden border-y border-white/5">
      <div className="container mx-auto px-6 mb-12 text-center">
        <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
          Founders from leading companies trust Elevatum
        </p>
      </div>
      
      <div className="relative flex overflow-x-hidden group">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8 px-4">
          {[...companies, ...companies, ...companies].map((company, i) => (
            <div 
              key={i} 
              className="flex items-center justify-center px-8 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-foreground/70 font-semibold tracking-wide"
            >
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
