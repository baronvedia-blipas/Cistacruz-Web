"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      <h2
        className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
          light ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      <div
        className={`w-20 h-[2px] bg-brand-blue ${
          centered ? "mx-auto" : ""
        } mb-4`}
      />
      {subtitle && (
        <p
          className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
