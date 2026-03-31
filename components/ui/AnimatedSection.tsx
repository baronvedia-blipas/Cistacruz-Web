"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeLeft, fadeRight, scaleIn, fadeDown } from "@/lib/animations";

const variantMap = {
  "fade-up": fadeUp,
  "fade-down": fadeDown,
  "fade-left": fadeLeft,
  "fade-right": fadeRight,
  "scale-in": scaleIn,
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  variant?: keyof typeof variantMap;
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  variant = "fade-up",
  delay = 0,
  className = "",
}: AnimatedSectionProps) {
  const variants = variantMap[variant];

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
