import { ArrowUpRight } from "lucide-react";
import {
  GlassPane,
  SectionIntro,
  SectionTag,
  layoutOffer,
  sectionPadY,
  sectionRule,
  sectionShell,
  sectionStack,
} from "@/components/editorial/SectionChrome";
import { ScrollReveal } from "@/components/editorial/ScrollReveal";
import { cn } from "@/lib/utils";

const features = {
  sprint: [
    "Investor Narrative",
    "Pitch Materials",
    "Outreach Systems",
    "Messaging Support",
    "Warm Intros",
  ],
  colead: [
    "Full Strategy",
    "Investor Targeting",
    "Meeting Generation",
    "Pitch Coaching",
    "CRM Systems",
    "Weekly Support",
  ],
};

export function OffersSection() {
  return (
    <section id="offers" className={sectionRule()}>
      <div className={`${sectionShell()} ${sectionPadY()} pb-10`}>
        <ScrollReveal>
          <SectionIntro
            index="02"
            tag="Offers"
            title={
              <>
                Two ways
                <br />
                to work together.
              </>
            }
            aside={
              <>
                One sprint for momentum.
                <br />
                One partnership through close.
              </>
            }
          />
        </ScrollReveal>
      </div>

      <div className={`${sectionShell()} ${sectionStack()} pb-24 md:pb-32`}>
        <ScrollReveal delay={0.08} className={cn(layoutOffer(), "min-w-0 w-full")}>
          <GlassPane accent glow className="relative h-full overflow-hidden p-8 md:p-12 lg:p-14">
            <span className="section-index left-6 right-auto !text-[5rem]">01</span>
            <div className="relative z-[1] min-w-0 max-w-full space-y-5">
              <SectionTag>Popular</SectionTag>
              <h3 className="editorial-headline">
                Capital
                <br />
                Sprint
              </h3>
              <p className="text-sm font-medium leading-snug text-primary">30 days to investor momentum</p>
              <p className="copy-two-lines text-muted-foreground">
                Tactical sprint that gets you investor-ready and in meetings within 30 days.
                <br />
                Built for founders who need momentum now.
              </p>
              <div className="flex flex-nowrap items-baseline gap-x-3 pt-2">
                <span className="stat-giant shrink-0 leading-none">$2,500</span>
                <span className="shrink-0 whitespace-nowrap text-xs font-medium uppercase leading-none tracking-[0.14em] text-muted-foreground">
                  One time
                </span>
              </div>
            </div>
          </GlassPane>

          <GlassPane className="flex h-full flex-col justify-between gap-10 p-8 md:p-12">
            <ul className="space-y-4">
              {features.sprint.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="editorial-link" data-testid="link-offer-sprint">
              Start sprint <ArrowUpRight size={16} />
            </a>
          </GlassPane>
        </ScrollReveal>

        <ScrollReveal delay={0.14} className={cn(layoutOffer(), "min-w-0 w-full")}>
          <GlassPane className="relative h-full overflow-hidden p-8 md:p-12 lg:p-14">
            <span className="section-index left-6 right-auto text-accent/[0.1] !text-[5rem]">02</span>
            <div className="relative z-[1] min-w-0 max-w-full space-y-5">
              <SectionTag tone="accent">Partnership</SectionTag>
              <h3 className="editorial-headline">
                Co-Lead
                <br />
                Fundraising
              </h3>
              <p className="text-sm font-medium text-muted-foreground">Full cycle advisory</p>
              <p className="copy-two-lines max-w-full text-muted-foreground">
                Deep advisory for founders raising serious capital. We work alongside you
                <br />
                from strategy through close: selection, meetings, and term sheets.
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                Application only
              </p>
            </div>
          </GlassPane>

          <GlassPane className="flex h-full flex-col justify-between gap-10 p-8 md:p-12">
            <ul className="space-y-4">
              {features.colead.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm font-medium text-foreground">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#contact" className="editorial-link" data-testid="link-offer-colead">
              Apply now <ArrowUpRight size={16} />
            </a>
          </GlassPane>
        </ScrollReveal>
      </div>
    </section>
  );
}
