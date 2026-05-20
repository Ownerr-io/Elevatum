import { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  stage: z.string().min(1, "Please select a stage"),
  message: z.string().min(10, "Please provide more details"),
});

export function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", company: "", stage: "", message: "" },
  });

  function onSubmit(_values: z.infer<typeof formSchema>) {
    // Handle submission
  }

  return (
    <section id="contact" ref={ref} className="border-t border-white/[0.07]">
      <div className="grid md:grid-cols-2">
        {/* Left — editorial heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="px-8 md:px-16 py-20 md:border-r border-white/[0.07] border-b md:border-b-0 flex flex-col justify-between gap-16"
        >
          <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-primary">
            — Contact
          </span>

          <div>
            <h2
              className="font-semibold uppercase tracking-tight text-foreground leading-none mb-8"
              style={{ fontSize: "clamp(2.5rem, 6vw, 6rem)" }}
            >
              Let's Start<br />a Conversation.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Apply to work with Elevatum. Serious enquiries only. Responses within 48 hours.
            </p>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary">
              — Currently accepting 3 new engagements per quarter.
            </p>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-semibold tracking-[0.25em] uppercase text-muted-foreground">
              Reach us directly
            </div>
            <a
              href="mailto:hello@elevatum.co"
              className="inline-flex items-center gap-1.5 text-sm font-semibold tracking-wide text-foreground hover:text-primary transition-colors"
            >
              hello@elevatum.co <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="px-8 md:px-16 py-20"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs tracking-widest uppercase text-muted-foreground">Full Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Jane Doe"
                          className="bg-transparent border-0 border-b border-white/20 rounded-none h-12 px-0 text-foreground placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-primary transition-colors"
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
                    <FormItem>
                      <FormLabel className="text-xs tracking-widest uppercase text-muted-foreground">Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="jane@company.com"
                          className="bg-transparent border-0 border-b border-white/20 rounded-none h-12 px-0 text-foreground placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-primary transition-colors"
                          data-testid="input-contact-email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-xs" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-xs tracking-widest uppercase text-muted-foreground">Company</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Acme Corp"
                          className="bg-transparent border-0 border-b border-white/20 rounded-none h-12 px-0 text-foreground placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-primary transition-colors"
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
                    <FormItem>
                      <FormLabel className="text-xs tracking-widest uppercase text-muted-foreground">Raise Stage</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger
                            className="bg-transparent border-0 border-b border-white/20 rounded-none h-12 px-0 text-foreground focus:ring-0 data-[placeholder]:text-white/20"
                            data-testid="select-contact-stage"
                          >
                            <SelectValue placeholder="Select stage" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-background border-white/10 text-foreground">
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
                  <FormItem>
                    <FormLabel className="text-xs tracking-widest uppercase text-muted-foreground">Your Situation</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="We are raising $2M to scale our GTM motion..."
                        className="bg-transparent border-0 border-b border-white/20 rounded-none px-0 text-foreground placeholder:text-white/20 focus-visible:ring-0 focus-visible:border-primary transition-colors resize-none min-h-[100px]"
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
                className="w-full bg-primary text-background hover:bg-primary/90 h-14 text-xs font-bold tracking-[0.3em] uppercase rounded-none mt-4"
                data-testid="button-contact-submit"
              >
                Send Message <ArrowUpRight size={16} className="ml-2" />
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
