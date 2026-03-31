"use client";

import { motion } from "framer-motion";
import { MessageCircle, Compass, HardHat, Key } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { PROCESS_STEPS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";

const iconMap: Record<string, React.ReactNode> = {
  "message-circle": <MessageCircle size={28} />,
  "drafting-compass": <Compass size={28} />,
  "hard-hat": <HardHat size={28} />,
  key: <Key size={28} />,
};

export default function ProcessTimeline() {
  return (
    <section className="py-20 md:py-28 bg-brand-navy">
      <Container>
        <SectionTitle
          title="Nuestro Proceso"
          subtitle="Un método probado para llevar tu proyecto del concepto a la realidad."
          light
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {PROCESS_STEPS.map((step, i) => (
            <motion.div key={step.number} variants={fadeUp} className="relative text-center">
              {/* Connector line (hidden on mobile and last item) */}
              {i < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t border-dashed border-white/20" />
              )}

              {/* Number */}
              <p className="font-serif text-4xl font-bold text-brand-blue mb-3">
                {String(step.number).padStart(2, "0")}
              </p>

              {/* Icon */}
              <div className="text-white mb-4 flex justify-center">
                {iconMap[step.icon]}
              </div>

              {/* Text */}
              <h3 className="text-white font-sans font-semibold text-lg mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
