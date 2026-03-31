"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import Container from "./Container";

interface PageHeroProps {
  title: string;
  breadcrumb: { label: string; href?: string }[];
}

export default function PageHero({ title, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-brand-navy overflow-hidden">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container className="relative z-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            {title}
          </h1>

          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-1 text-sm text-gray-400">
            {breadcrumb.map((item, i) => (
              <span key={item.label} className="flex items-center gap-1">
                {i > 0 && <ChevronRight size={14} />}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-brand-blue transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-brand-blue">{item.label}</span>
                )}
              </span>
            ))}
          </nav>
        </motion.div>
      </Container>
    </section>
  );
}
