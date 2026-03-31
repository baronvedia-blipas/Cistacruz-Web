"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { PARTNERS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";

export default function Partners() {
  return (
    <section className="py-16 md:py-20 bg-white border-t border-gray-100">
      <Container>
        <SectionTitle
          title="Nuestros Aliados"
          subtitle="Trabajamos con las mejores marcas del sector para garantizar calidad."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center"
        >
          {PARTNERS.map((partner) => (
            <motion.div
              key={partner.name}
              variants={fadeUp}
              className="flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={80}
                className="object-contain h-12 w-auto"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
