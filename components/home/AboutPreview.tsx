"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const highlights = [
  "Más de 10 años de experiencia comprobada",
  "Equipo de 25+ profesionales especializados",
  "Compromiso con plazos y presupuestos",
  "Diseño, construcción y supervisión integral",
];

export default function AboutPreview() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimatedSection variant="fade-left">
            <div className="relative">
              <div className="aspect-[4/5] rounded-tl-[80px] rounded-br-[80px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80"
                  alt="Equipo de Constructora Cistacruz"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Accent block */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-blue/10 rounded-br-[40px] -z-10" />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection variant="fade-right">
            <SectionTitle
              title="Sobre Nosotros"
              subtitle="Somos una empresa constructora líder en Santa Cruz de la Sierra, dedicada a transformar ideas en espacios que inspiran."
              centered={false}
            />

            <ul className="space-y-3 mb-8">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-brand-blue" />
                  </span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>

            <Button href="/nosotros" variant="ghost">
              Conocer Más &rarr;
            </Button>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
