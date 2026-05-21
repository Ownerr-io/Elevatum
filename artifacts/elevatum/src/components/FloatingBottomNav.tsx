import { useCallback, useEffect, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", id: "about" },
  { label: "Offers", id: "offers" },
  { label: "Results", id: "results" },
  { label: "Course", id: "course" },
  { label: "Contact", id: "contact" },
] as const;

export function FloatingBottomNav() {
  const [visible, setVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  const updateVisible = useCallback(() => {
    const hero = document.getElementById("hero");
    if (!hero) {
      setVisible(window.scrollY > window.innerHeight * 0.9);
      return;
    }
    const heroEnd = hero.getBoundingClientRect().bottom + window.scrollY;
    setVisible(window.scrollY > heroEnd - 48);
  }, []);

  useEffect(() => {
    updateVisible();
    window.addEventListener("scroll", updateVisible, { passive: true });
    window.addEventListener("resize", updateVisible, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateVisible);
      window.removeEventListener("resize", updateVisible);
    };
  }, [updateVisible]);

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && navLinks.some((l) => l.id === hash)) setActiveId(hash);
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el != null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (intersecting[0]?.target.id) {
          setActiveId(intersecting[0].target.id);
        }
      },
      { rootMargin: "-35% 0px -42% 0px", threshold: [0.08, 0.2, 0.4] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) setMenuOpen(false);
  }, [visible]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = (id: string) =>
    cn("dock-nav-link", activeId === id && "dock-nav-link-active");

  return (
    <>
      <nav
        aria-label="Site"
        className={cn(
          "fixed inset-x-0 bottom-0 z-50 px-4 pb-4 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:px-6 md:pb-5",
          visible
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-full opacity-0",
        )}
      >
        <div className="dock-nav-bar mx-auto flex w-full max-w-[88rem] items-center justify-between gap-3 rounded-md px-4 py-3 md:gap-5 md:px-6 md:py-3.5">
          <a
            href="/"
            className="flex shrink-0 items-center rounded-sm bg-primary-foreground/95 p-1.5 transition-opacity duration-300 hover:opacity-90"
            data-testid="link-logo"
          >
            <img
              src="/Elevatum_Logo.png"
              alt="Elevatum"
              className="h-8 w-auto max-w-[6.5rem] object-contain object-left md:h-9"
            />
          </a>

          <div className="hidden min-w-0 flex-1 items-center justify-center gap-1 md:flex md:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setActiveId(link.id)}
                className={linkClass(link.id)}
                data-testid={`link-nav-${link.id}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex shrink-0 items-center gap-2 md:gap-3">
            <a
              href="#contact"
              className={cn(
                "dock-nav-cta hidden sm:inline-flex",
                activeId === "contact" && "ring-2 ring-foreground/25",
              )}
              onClick={() => setActiveId("contact")}
            >
              Book a call <ArrowUpRight size={12} />
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-1 rounded-sm border border-primary-foreground/30 bg-primary-foreground/15 transition-colors duration-300 hover:bg-primary-foreground/25 md:hidden"
              data-testid="button-menu-open"
              aria-label="Open menu"
            >
              <span className="h-px w-3.5 bg-primary-foreground" />
              <span className="h-px w-3.5 bg-primary-foreground" />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col bg-background px-6 pt-6 pb-28 transition-opacity duration-300">
          <div className="flex items-center justify-between border-b border-border/50 pb-6">
            <img
              src="/Elevatum_Logo.png"
              alt="Elevatum"
              className="h-12 w-auto max-w-[70vw] object-contain object-left"
            />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-sm border border-border/60 transition-colors duration-300 hover:border-primary/40"
              data-testid="button-menu-close"
              aria-label="Close menu"
            >
              <X size={16} />
            </button>
          </div>
          <nav className="mt-12 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setActiveId(link.id);
                  setMenuOpen(false);
                }}
                className={cn(
                  "rounded-sm px-3 py-2 text-xl font-semibold uppercase tracking-[0.06em] transition-colors duration-300",
                  activeId === link.id ? "bg-primary text-primary-foreground" : "text-foreground hover:text-primary",
                )}
                data-testid={`link-mobile-${link.id}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            onClick={() => {
              setActiveId("contact");
              setMenuOpen(false);
            }}
            className="dock-nav-cta mt-auto w-fit"
          >
            Book a call <ArrowUpRight size={18} />
          </a>
        </div>
      )}
    </>
  );
}
