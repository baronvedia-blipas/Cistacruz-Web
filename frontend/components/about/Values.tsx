"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Handshake, Lightbulb, Award } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { COMPANY_VALUES } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";

const iconMap: Record<string, React.ReactNode> = {
  "shield-check": <ShieldCheck size={32} />,
  handshake: <Handshake size={32} />,
  lightbulb: <Lightbulb size={32} />,
  award: <Award size={32} />,
};

export default function Values() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <Container>
        <SectionTitle
          title="Nuestros Valores"
          subtitle="Los principios que guían cada proyecto que emprendemos."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {COMPANY_VALUES.map((value) => (
            <motion.div
              key={value.title}
              variants={fadeUp}
              className="bg-white p-6 rounded-sm text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue">
                {iconMap[value.icon]}
              </div>
              <h3 className="font-sans font-bold text-brand-navy text-lg mb-2">
                {value.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
