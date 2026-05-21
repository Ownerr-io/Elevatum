import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ArrowUpRight } from "lucide-react";
import { openInquiryMailto } from "@/lib/inquiry-mailto";
import {
  GlassPane,
  SectionIntro,
  SectionTag,
  layoutSplit,
  layoutTrio,
  sectionPadY,
  sectionRule,
  sectionShell,
} from "@/components/editorial/SectionChrome";
import {
  editorialInputClass,
  editorialSelectTriggerClass,
} from "@/components/editorial/EditorialForm";
import { ScrollReveal } from "@/components/editorial/ScrollReveal";

const waitlistSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  stage: z.string().min(1, "Please select a stage"),
});

const modules = [
  { num: "01", title: ["Investor", "Narrative"], desc: ["Structuring a compelling, inevitable story", "investors can't ignore."] },
  { num: "02", title: ["Pitch Deck", "Architecture"], desc: ["Build the visual asset that drives", "the meeting and the deal."] },
  { num: "03", title: ["Valuation &", "Economics"], desc: ["Pricing your round without killing", "momentum or diluting vision."] },
  { num: "04", title: ["Outreach", "Strategy"], desc: ["Cold and warm systems to book", "qualified meetings at scale."] },
  { num: "05", title: ["Pitch", "Meeting"], desc: ["Controlling the room and answering", "the hardest questions."] },
  { num: "06", title: ["Follow-Up", "Systems"], desc: ["Running a tight post-meeting process", "to manufacture urgency."] },
  { num: "Bonus", title: ["Term Sheets", "& Closing"], desc: ["Navigating diligence, negotiation,", "and getting the wire sent."] },
];

export function CourseSection() {
  const waitlistForm = useForm<z.infer<typeof waitlistSchema>>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: { name: "", email: "", stage: "" },
  });

  function onWaitlistSubmit(values: z.infer<typeof waitlistSchema>) {
    openInquiryMailto("Elevatum course — waitlist", {
      Name: values.name,
      Email: values.email,
      Stage: values.stage,
      Enquiry: "Course cohort waitlist",
    });
  }

  return (
    <section id="course" className={sectionRule()}>
      <div className={`${sectionShell()} ${sectionPadY()} pb-10`}>
        <ScrollReveal>
          <SectionIntro
            index="08"
            tag="Course"
            title={
              <>
                Master the art
                <br />
                of fundraising.
              </>
            }
            aside={
              <>
                6 weeks. 20 founders per cohort.
                <br />
                Applications open.
              </>
            }
          />
        </ScrollReveal>
      </div>

      <div className={`${sectionShell()} ${layoutTrio()} pb-16 pt-4`}>
        {[
          {
            num: "I",
            title: ["Learn", "frameworks"],
            desc: ["Understand the psychological frameworks", "investors use to deploy capital."],
          },
          {
            num: "II",
            title: ["Apply", "live"],
            desc: ["Build institutional-grade materials", "and a targeted CRM during the course."],
          },
          {
            num: "III",
            title: ["Succeed", "raising"],
            desc: ["Launch your fundraise with narrative", "clarity and strategic momentum."],
          },
        ].map((p, i) => (
          <ScrollReveal key={i} delay={0.08 + i * 0.06}>
            <GlassPane accent={i === 1} className="h-full p-8 md:p-10">
              <span
                className="mb-6 block font-serif italic leading-none text-primary"
                style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
              >
                {p.num}
              </span>
              <h3 className="editorial-subhead mb-3">
                {p.title[0]}
                <br />
                {p.title[1]}
              </h3>
              <p className="text-sm leading-snug text-muted-foreground">
                {p.desc[0]}
                <br />
                {p.desc[1]}
              </p>
            </GlassPane>
          </ScrollReveal>
        ))}
      </div>

      <div className={`${sectionShell()} pb-8`}>
        <ScrollReveal>
          <SectionTag tone="muted" className="mb-8">
            Curriculum
          </SectionTag>
        </ScrollReveal>
        <GlassPane className="overflow-hidden p-0">
          <div className="editorial-soft-divide">
            {modules.map((mod, i) => (
              <ScrollReveal key={i} delay={0.05 + i * 0.04}>
                <div className="group grid items-center gap-6 px-6 py-6 transition-colors duration-500 hover:bg-white/25 md:grid-cols-[minmax(0,5rem)_minmax(0,11rem)_1fr] md:gap-8 md:px-8 md:py-7">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary/70 group-hover:text-primary">
                    {mod.num}
                  </span>
                  <h4 className="editorial-subhead text-base">
                    {mod.title[0]}
                    <br />
                    {mod.title[1]}
                  </h4>
                  <p className="max-w-[36ch] text-sm leading-snug text-muted-foreground md:max-w-[38ch] md:justify-self-end md:text-right">
                    {mod.desc[0]}
                    <br />
                    {mod.desc[1]}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </GlassPane>
      </div>

      <div className={`${sectionShell()} ${layoutSplit()} items-stretch pb-24 pt-8 md:pb-32`}>
        <ScrollReveal>
          <GlassPane accent glow className="flex h-full flex-col justify-between gap-10 p-8 md:p-12">
            <div>
              <h3 className="editorial-headline mb-6">
                Join the
                <br />
                next cohort.
              </h3>
              <p className="copy-two-lines text-muted-foreground">
                Q3 2025 cohort. Rolling applications.
                <br />
                Limited to 20 founders.
              </p>
            </div>
            <SectionTag>Cohort 04</SectionTag>
          </GlassPane>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <GlassPane className="h-full p-8 md:p-10">
            <Form {...waitlistForm}>
              <form
                onSubmit={waitlistForm.handleSubmit(onWaitlistSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={waitlistForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="gap-2">
                      <FormLabel className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          className={editorialInputClass}
                          placeholder="Jane Doe"
                          data-testid="input-course-name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={waitlistForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="gap-2">
                      <FormLabel className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className={editorialInputClass}
                          placeholder="jane@company.com"
                          data-testid="input-course-email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={waitlistForm.control}
                  name="stage"
                  render={({ field }) => (
                    <FormItem className="gap-2">
                      <FormLabel className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Stage
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger
                            className={editorialSelectTriggerClass}
                            data-testid="select-course-stage"
                          >
                            <SelectValue placeholder="Select stage" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="pre-seed">Pre-Seed</SelectItem>
                          <SelectItem value="seed">Seed</SelectItem>
                          <SelectItem value="series-a">Series A</SelectItem>
                          <SelectItem value="series-b">Series B+</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="mt-2 h-12 w-full rounded-md bg-primary text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[0_12px_40px_-16px_hsl(var(--primary)/0.55)] hover:bg-primary/90"
                  data-testid="button-course-waitlist"
                >
                  Join waitlist <ArrowUpRight size={16} className="ml-2" />
                </Button>
              </form>
            </Form>
          </GlassPane>
        </ScrollReveal>
      </div>
    </section>
  );
}
