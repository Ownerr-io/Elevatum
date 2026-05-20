import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-1">
          <span className="text-xl font-bold tracking-[0.2em] text-foreground">
            ELEVATUM
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary mb-[-4px] group-hover:scale-150 transition-transform" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#offers" className="hover:text-primary transition-colors">Offers</a>
          <a href="#results" className="hover:text-primary transition-colors">Results</a>
          <Link href="/course" className="hover:text-primary transition-colors">Course</Link>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hidden md:inline-flex">
          Book a Call
        </Button>
      </div>
    </header>
  );
}
