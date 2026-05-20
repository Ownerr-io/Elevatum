import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  element?: React.ElementType;
}

export function TextReveal({ text, className = "", element: Element = "div" }: TextRevealProps) {
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => (
        <span
          className="overflow-hidden inline-flex mr-[0.25em] pb-1"
          key={index}
        >
          <motion.span variants={child}>{word}</motion.span>
        </span>
      ))}
    </motion.div>
  );
}
