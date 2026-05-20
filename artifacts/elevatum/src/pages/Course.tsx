import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { GlassCard } from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FiBookOpen, FiActivity, FiAward, FiFileText, FiLayout, FiTarget, FiDollarSign, FiMessageSquare, FiLayers, FiBriefcase } from "react-icons/fi";
import { TextReveal } from "@/components/TextReveal";
import { motion } from "framer-motion";

export default function Course() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.05)_0%,transparent_50%)] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl pt-16">
          <div className="inline-block border border-primary/20 bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8">
            Cohort 04 Applications Open
          </div>
          <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
            <TextReveal text="Master the Art of Fundraising" />
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            A comprehensive 6-week program designed to give founders the knowledge, tools, and confidence to successfully raise institutional capital.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FiBookOpen, title: "Learn", desc: "Understand the psychological frameworks investors use to deploy capital." },
              { icon: FiActivity, title: "Apply", desc: "Build institutional-grade materials and a targeted CRM live during the course." },
              { icon: FiAward, title: "Succeed", desc: "Launch your fundraise with an undeniable narrative and strategic momentum." }
            ].map((pillar, i) => (
              <GlassCard key={i} className="p-8 text-center" hoverEffect>
                <pillar.icon className="w-8 h-8 text-primary mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-32 bg-black/20 border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-serif text-center mb-16">Curriculum</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: FiFileText, title: "Investor Narrative", desc: "Structuring a compelling, inevitable story.", badge: "Module 1" },
              { icon: FiLayout, title: "Pitch Deck Architecture", desc: "Building the visual asset that drives the meeting.", badge: "Module 2" },
              { icon: FiDollarSign, title: "Valuation & Economics", desc: "Pricing your round without killing momentum.", badge: "Module 3" },
              { icon: FiTarget, title: "Outreach Strategy", desc: "Cold and warm systems to book qualified meetings.", badge: "Module 4" },
              { icon: FiMessageSquare, title: "The Pitch Meeting", desc: "Controlling the room and answering hard questions.", badge: "Module 5" },
              { icon: FiLayers, title: "Follow-Up Systems", desc: "Running a tight process to drive urgency.", badge: "Module 6" },
              { icon: FiBriefcase, title: "Term Sheets & Closing", desc: "Navigating diligence and signing the wire.", badge: "Bonus" }
            ].map((mod, i) => (
              <GlassCard key={i} className="p-8" hoverEffect>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                    <mod.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-xs font-bold text-muted-foreground bg-white/5 px-3 py-1 rounded-full">
                    {mod.badge}
                  </span>
                </div>
                <h4 className="text-lg font-bold mb-2">{mod.title}</h4>
                <p className="text-sm text-muted-foreground">{mod.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Signup Form */}
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-xl text-center">
          <h2 className="text-3xl font-serif mb-4">Join the Next Cohort</h2>
          <p className="text-muted-foreground mb-8">Next cohort: Q3 2025 — Limited to 20 founders.</p>
          
          <GlassCard className="p-8 text-left border-primary/20">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Name</label>
                  <Input className="bg-white/5 border-white/10" placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input className="bg-white/5 border-white/10" type="email" placeholder="jane@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Company</label>
                <Input className="bg-white/5 border-white/10" placeholder="Acme Corp" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Current Stage</label>
                <Select>
                  <SelectTrigger className="bg-white/5 border-white/10">
                    <SelectValue placeholder="Select Stage" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                    <SelectItem value="seed">Seed</SelectItem>
                    <SelectItem value="series-a">Series A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary/90 h-12 text-base font-bold">
                Join the Waitlist
              </Button>
            </form>
          </GlassCard>
        </div>
      </section>

      <Footer />
    </main>
  );
}
