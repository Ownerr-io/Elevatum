import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export function GlassCard({ children, className = "", hoverEffect = false }: GlassCardProps) {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative overflow-hidden bg-white/5 backdrop-blur-md border border-white/10 rounded-xl ${
        hoverEffect ? "hover:border-primary/50 hover:shadow-[0_8px_32px_rgba(212,175,55,0.1)] transition-colors duration-300" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
