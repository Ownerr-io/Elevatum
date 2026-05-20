import { Link } from "wouter";
import { FiTwitter, FiLinkedin } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="bg-background py-12 border-t border-white/5">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-[0.2em] text-foreground">
            ELEVATUM
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-primary mb-[-4px]" />
        </div>

        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/course" className="hover:text-primary transition-colors">Course</Link>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">
            <FiTwitter className="w-5 h-5" />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <FiLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="text-center text-xs text-white/20 mt-8">
        &copy; {new Date().getFullYear()} Elevatum. All rights reserved.
      </div>
    </footer>
  );
}
