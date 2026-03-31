"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";
import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";

const teamMembers = [
  {
    name: "Director General",
    role: "Gerencia General",
    image: "https://placehold.co/400x500/0c1f3a/ffffff?text=Director",
  },
  {
    name: "Arquitecto Principal",
    role: "Diseño Arquitectónico",
    image: "https://placehold.co/400x500/0c1f3a/ffffff?text=Arquitecto",
  },
  {
    name: "Ingeniero Civil",
    role: "Supervisión de Obras",
    image: "https://placehold.co/400x500/0c1f3a/ffffff?text=Ingeniero",
  },
  {
    name: "Coordinador de Proyectos",
    role: "Gestión de Proyectos",
    image: "https://placehold.co/400x500/0c1f3a/ffffff?text=Coordinador",
  },
];

export default function Team() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionTitle
          title="Nuestro Equipo"
          subtitle="Profesionales comprometidos con la excelencia en cada proyecto."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              className="group text-center"
            >
              <div className="relative aspect-[4/5] rounded-sm overflow-hidden mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="font-sans font-semibold text-brand-navy">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
