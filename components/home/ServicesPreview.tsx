"use client";

import { motion } from "framer-motion";
import {
  PencilRuler,
  Building2,
  ClipboardCheck,
  Home,
} from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const iconMap: Record<string, React.ReactNode> = {
  "pencil-ruler": <PencilRuler size={36} />,
  "building-2": <Building2 size={36} />,
  "clipboard-check": <ClipboardCheck size={36} />,
  home: <Home size={36} />,
};

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionTitle
          title="Nuestros Servicios"
          subtitle="Ofrecemos soluciones integrales en diseño, construcción y supervisión de obras."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.id}
              variants={fadeUp}
              className="group relative bg-white border border-gray-100 rounded-sm p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-400"
            >
              <div className="text-brand-blue mb-4">{iconMap[service.icon]}</div>
              <h3 className="font-sans font-bold text-brand-navy text-lg mb-2">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                {service.description}
              </p>
              {/* Bottom line */}
              <div className="absolute bottom-0 left-0 h-0.5 bg-brand-blue w-0 group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button href="/servicios" variant="ghost">
            Ver Todos los Servicios &rarr;
          </Button>
        </div>
      </Container>
    </section>
  );
}
