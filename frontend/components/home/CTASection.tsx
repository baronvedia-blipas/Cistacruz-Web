"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { scaleIn } from "@/lib/animations";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { COMPANY_INFO } from "@/lib/constants";
import { formatWhatsAppUrl } from "@/lib/utils";

export default function CTASection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: bgY,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-brand-navy/85" />

      <Container className="relative z-10">
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Contáctanos y hagamos realidad tu visión. Nuestro equipo está listo
            para asesorarte en cada paso del camino.
          </p>
          <Button
            href={formatWhatsAppUrl(
              COMPANY_INFO.whatsapp,
              "Hola, tengo un proyecto en mente y me gustaría solicitar una cotización."
            )}
            size="lg"
          >
            Solicitar Cotización
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
