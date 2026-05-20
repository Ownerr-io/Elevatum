import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X, Menu } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeDown = {
  hidden: { opacity: 0, y: -20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease },
  }),
};

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease },
  }),
};

const stats = [
  { value: "+200", label: "RAISED BY\nSPRINT FOUNDERS" },
  { value: "+50", label: "FOUNDER\nSTRATEGY SESSIONS" },
  { value: "+30", label: "DAYS TO\nINVESTOR MOMENTUM" },
];

const navLinks = ["About", "Offers", "Results", "Course", "Contact"];
const headingWords = ["Raise.", "Capital.", "Confidently."];

export function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-x-hidden"
      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.65) 100%)",
          zIndex: 1,
        }}
      />

      {/* Nav */}
      <nav
        className="relative flex items-center justify-between px-5 sm:px-8 md:px-12 pt-5 md:pt-6"
        style={{ zIndex: 10 }}
      >
        {/* Logo */}
        <motion.a
          href="/"
          className="flex items-center gap-2"
          custom={0}
          variants={fadeDown}
          initial="hidden"
          animate="visible"
          data-testid="link-logo"
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ border: "2px solid hsl(42 85% 58%)" }}
          >
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: "hsl(42 85% 58%)" }}
            />
          </div>
          <span
            className="text-sm font-bold tracking-widest uppercase text-white hidden sm:block"
          >
            ELEVATUM
          </span>
        </motion.a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-semibold tracking-widest uppercase text-white/80 hover:text-white transition-colors"
              custom={i + 1}
              variants={fadeDown}
              initial="hidden"
              animate="visible"
              data-testid={`link-nav-${link.toLowerCase()}`}
            >
              {link}
            </motion.a>
          ))}
        </div>

        {/* Hamburger */}
        <motion.button
          onClick={() => setMenuOpen(true)}
          className="w-9 h-9 rounded-full bg-black flex flex-col items-center justify-center gap-1"
          custom={5}
          variants={fadeDown}
          initial="hidden"
          animate="visible"
          data-testid="button-menu-open"
          aria-label="Open menu"
        >
          <span className="w-4 h-0.5 bg-white" />
          <span className="w-4 h-0.5 bg-white" />
          <span className="w-4 h-0.5 bg-white" />
        </motion.button>
      </nav>

      {/* Stats row — flex-1 pushes bottom content down on all sizes */}
      <div
        className="relative flex-1 flex items-center justify-end px-5 sm:px-8 md:px-12 py-6 md:py-0"
        style={{ zIndex: 10 }}
      >
        <div className="flex items-center gap-5 sm:gap-8 md:gap-10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-right"
              custom={i + 2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              data-testid={`stat-${i}`}
            >
              <div
                className="font-semibold text-black leading-none"
                style={{ fontSize: "clamp(1.25rem, 4vw, 3.5rem)" }}
              >
                <span
                  className="font-semibold"
                  style={{ fontSize: "0.5em", color: "hsl(42 85% 58%)" }}
                >
                  +
                </span>
                {stat.value.replace("+", "")}
              </div>
              <div className="text-[9px] sm:text-[10px] md:text-sm font-semibold tracking-widest uppercase text-black whitespace-pre-line leading-tight mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom content */}
      <div
        className="relative px-5 sm:px-8 md:px-12 pb-4 sm:pb-6 md:pb-12 flex flex-col gap-3 sm:gap-4 md:gap-10"
        style={{ zIndex: 10 }}
      >
        {/* Row A: tagline (left, hidden on mobile) + CTA (right) */}
        <div className="flex items-center justify-between gap-4">
          <motion.p
            className="hidden sm:block text-[10px] font-semibold tracking-[0.2em] uppercase text-white/50 leading-tight whitespace-nowrap"
            custom={5}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            Confidential &nbsp;·&nbsp; Founder-First &nbsp;·&nbsp; Results Driven
          </motion.p>

          <motion.a
            href="#contact"
            className="flex items-center gap-1 font-semibold whitespace-nowrap tracking-widest uppercase shrink-0 text-xs sm:text-sm ml-auto"
            style={{ color: "hsl(42 85% 58%)" }}
            custom={6}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            data-testid="link-cta-book"
          >
            Book a Call
            <ArrowUpRight size={14} />
          </motion.a>
        </div>

        {/* Row B: full-width heading */}
        <div className="text-right">
          {headingWords.map((word, i) => (
            <div key={word} className="overflow-hidden">
              <motion.div
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4 + i * 0.14, duration: 0.7, ease }}
              >
                <span
                  className="block font-semibold uppercase text-white leading-[0.88]"
                  style={{ fontSize: "clamp(2.25rem, 5.5vw, 5.5rem)" }}
                >
                  {word}
                </span>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-white flex flex-col px-5 pt-5 pb-8"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <div className="flex items-center justify-between">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ border: "2px solid hsl(42 85% 58%)" }}
            >
              <div
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: "hsl(42 85% 58%)" }}
              />
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-black flex items-center justify-center"
              data-testid="button-menu-close"
              aria-label="Close menu"
            >
              <X size={16} color="white" />
            </button>
          </div>

          <div className="flex flex-col gap-8 mt-16">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="text-3xl font-semibold tracking-widest uppercase text-black hover:opacity-60 transition-opacity"
                data-testid={`link-mobile-${link.toLowerCase()}`}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="mt-auto">
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 text-xl font-semibold tracking-widest uppercase"
              style={{ color: "hsl(42 85% 58%)" }}
            >
              Book a Call <ArrowUpRight size={20} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
}
