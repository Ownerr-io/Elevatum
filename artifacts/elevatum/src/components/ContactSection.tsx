import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ArrowUpRight } from "lucide-react";
import {
  GlassPane,
  SectionIntro,
  SectionTag,
  layoutSplit,
  sectionPadY,
  sectionRule,
  sectionShell,
} from "@/components/editorial/SectionChrome";
import {
  editorialInputClass,
  editorialSelectTriggerClass,
  editorialTextareaClass,
} from "@/components/editorial/EditorialForm";
import { ScrollReveal } from "@/components/editorial/ScrollReveal";
import { openInquiryMailto } from "@/lib/inquiry-mailto";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  stage: z.string().min(1, "Please select a stage"),
  message: z.string().min(10, "Please provide more details"),
});

export function ContactSection() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", company: "", stage: "", message: "" },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    openInquiryMailto(`Elevatum contact — ${values.company}`, {
      Name: values.name,
      Email: values.email,
      Company: values.company,
      Stage: values.stage,
      Message: values.message,
    });
  }

  return (
    <section id="contact" className={sectionRule()}>
      <div className={`${sectionShell()} ${sectionPadY()} pb-10`}>
        <ScrollReveal>
          <SectionIntro
            index="07"
            tag="Contact"
            title={
              <>
                Start a
                <br />
                conversation.
              </>
            }
          />
        </ScrollReveal>
      </div>

      <div className={`${sectionShell()} ${layoutSplit()} pb-24 md:pb-32`}>
        <ScrollReveal>
          <GlassPane
            accent
            glow
            className="flex min-h-full h-full flex-col justify-between gap-10 p-8 md:p-12"
          >
            <div className="space-y-5">
              <SectionTag>3 slots per quarter</SectionTag>
              <p className="copy-two-lines text-muted-foreground">
                Serious enquiries only. We respond
                <br />
                within 48 hours.
              </p>
            </div>
            <div>
              <p className="mb-2 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Email
              </p>
              <a href="mailto:hello@elevatum.co" className="editorial-link text-base">
                hello@elevatum.co <ArrowUpRight size={16} />
              </a>
            </div>
          </GlassPane>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <GlassPane className="h-full p-8 md:p-10">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="gap-2">
                        <FormLabel className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Jane Doe"
                            className={editorialInputClass}
                            data-testid="input-contact-name"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem className="gap-2">
                        <FormLabel className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="jane@company.com"
                            className={editorialInputClass}
                            data-testid="input-contact-email"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem className="gap-2">
                        <FormLabel className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                          Company
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Acme Corp"
                            className={editorialInputClass}
                            data-testid="input-contact-company"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="text-xs" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
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
                              data-testid="select-contact-stage"
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
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="gap-2">
                      <FormLabel className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                        Situation
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Raising $2M to scale GTM..."
                          className={editorialTextareaClass}
                          data-testid="textarea-contact-message"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="h-12 w-full rounded-md bg-primary text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground shadow-[0_12px_40px_-16px_hsl(var(--primary)/0.55)] hover:bg-primary/90"
                  data-testid="button-contact-submit"
                >
                  Send message <ArrowUpRight size={16} className="ml-2" />
                </Button>
              </form>
            </Form>
          </GlassPane>
        </ScrollReveal>
      </div>
    </section>
  );
}
