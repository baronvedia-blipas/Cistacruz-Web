"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { COMPANY_HISTORY } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";

export default function CompanyHistory() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionTitle
          title="Nuestra Historia"
          subtitle="Un recorrido de crecimiento, compromiso y excelencia en la construcción."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto"
        >
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-brand-blue/20 -translate-x-1/2" />

          {COMPANY_HISTORY.map((event, i) => (
            <motion.div
              key={event.year}
              variants={fadeUp}
              className={`relative flex items-start gap-6 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Dot */}
              <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-brand-blue rounded-full -translate-x-1/2 mt-2 z-10 ring-4 ring-white" />

              {/* Content */}
              <div
                className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                }`}
              >
                <span className="font-serif text-2xl font-bold text-brand-blue">
                  {event.year}
                </span>
                <h3 className="font-sans font-semibold text-brand-navy text-lg mt-1 mb-2">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
