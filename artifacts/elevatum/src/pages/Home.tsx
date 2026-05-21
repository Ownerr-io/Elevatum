import { HeroSection } from "@/components/HeroSection";
import { FloatingBottomNav } from "@/components/FloatingBottomNav";
import { AboutSection } from "@/components/AboutSection";
import { ClientMarquee } from "@/components/ClientMarquee";
import { OffersSection } from "@/components/OffersSection";
import { ResultsSection } from "@/components/ResultsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { CourseSection } from "@/components/CourseSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="page-grain relative min-h-screen w-full bg-background text-foreground">
      <HeroSection />
      <FloatingBottomNav />
      <div className="relative z-0 bg-background pb-28 md:pb-32">
      <AboutSection />
      <ClientMarquee />
      <OffersSection />
      <ResultsSection />
      <ProcessSection />
      <CourseSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      </div>
    </main>
  );
}
