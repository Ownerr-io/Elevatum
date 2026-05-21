import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { editorialEase } from "@/lib/motion";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative z-20 flex h-[100svh] min-h-[100svh] shrink-0 flex-col overflow-hidden isolate"
    >
      {/* 3D video — left column on desktop; shifted down, full scale */}
      <div
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden lg:inset-x-auto lg:bottom-6 lg:left-0 lg:top-4 lg:flex lg:w-[min(56%,40rem)] lg:items-center lg:justify-center"
        aria-hidden
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full min-h-[105%] min-w-full object-cover scale-[1.08] object-[50%_32%] sm:object-[48%_42%] lg:min-h-[118%] lg:scale-[1.2] lg:object-[36%_48%] lg:translate-y-[10%]"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260517_222138_3e3205be-3364-417b-a64a-bfe087acbec4.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-background/82 via-background/50 to-background/96"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-background/25 to-background/75 lg:via-background/15 lg:to-background/88"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_0%,hsl(var(--glow)/0.12),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-[min(62%,28rem)] bg-gradient-to-t from-background from-35% via-background/92 to-transparent lg:h-28 lg:from-background lg:via-background/80"
        aria-hidden
      />

      <div className="relative z-10 flex min-h-0 flex-1 flex-col">
        <div className="mx-auto mt-auto w-full max-w-[88rem] px-6 pb-10 pt-4 md:px-10 md:pb-14 lg:mt-0 lg:flex lg:h-full lg:min-h-0 lg:flex-1 lg:flex-col lg:px-10 lg:pb-10 lg:pt-8 xl:pb-12 xl:pt-10">
          <div className="w-full lg:grid lg:min-h-0 lg:flex-1 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-6">
            <div className="hidden min-h-0 lg:block" aria-hidden />

            <div className="hero-copy flex w-full min-w-0 max-w-[20rem] flex-col items-start gap-7 text-left sm:max-w-md sm:gap-8 md:gap-9 lg:ml-auto lg:max-w-[34rem] lg:items-end lg:gap-10 lg:text-right xl:max-w-[38rem] xl:gap-11">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: editorialEase }}
                className="section-label w-full text-foreground/55"
              >
                Fundraising advisory · Founder-first
              </motion.p>

              <div className="flex w-full flex-col items-start gap-1.5 overflow-hidden sm:gap-2 lg:items-end lg:gap-2.5">
                {["Raise capital", "with editorial", "precision."].map((line, i) => (
                  <div key={line} className="w-full overflow-hidden lg:w-auto">
                    <motion.h1
                      initial={{ y: "108%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.15 + i * 0.1, duration: 0.85, ease: editorialEase }}
                      className={
                        i === 1
                          ? "display-serif block text-left text-primary/95 not-italic font-normal lg:text-right"
                          : "display-title block text-left lg:ml-auto lg:text-right"
                      }
                      style={i === 1 ? { fontSize: "clamp(2rem, 5vw, 4.5rem)" } : undefined}
                    >
                      {line}
                    </motion.h1>
                  </div>
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.75, ease: editorialEase }}
                className="w-full max-w-[30ch] text-sm leading-relaxed text-muted-foreground md:max-w-md md:text-base lg:ml-auto lg:max-w-[32ch]"
              >
                Institutional positioning and investor systems for founders who refuse
                spray-and-pray fundraising.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.8, ease: editorialEase }}
                className="w-full lg:flex lg:justify-end"
              >
                <a
                  href="#contact"
                  className="editorial-link"
                  data-testid="link-cta-book"
                >
                  Start a conversation <ArrowUpRight size={14} />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
