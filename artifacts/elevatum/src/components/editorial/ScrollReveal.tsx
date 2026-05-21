import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { editorialEase } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 20,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08, margin: "0px 0px -12% 0px" }}
      transition={{ delay, duration: 0.65, ease: editorialEase }}
      className={cn("min-w-0 max-w-full", className)}
    >
      {children}
    </motion.div>
  );
}
