"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { COMPANY_INFO } from "@/lib/constants";
import { formatWhatsAppUrl } from "@/lib/utils";
import type { Service } from "@/types";

interface ServiceDetailProps {
  service: Service;
  reversed?: boolean;
}

export default function ServiceDetail({
  service,
  reversed = false,
}: ServiceDetailProps) {
  return (
    <section className="py-16 md:py-20">
      <Container>
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
            reversed ? "lg:direction-rtl" : ""
          }`}
        >
          {/* Image */}
          <AnimatedSection
            variant={reversed ? "fade-right" : "fade-left"}
            className={reversed ? "lg:order-2" : ""}
          >
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>

          {/* Text */}
          <AnimatedSection
            variant={reversed ? "fade-left" : "fade-right"}
            className={reversed ? "lg:order-1" : ""}
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-4">
              {service.title}
            </h2>
            <div className="w-12 h-1 bg-brand-blue rounded-full mb-6" />
            <p className="text-gray-600 leading-relaxed mb-6">
              {service.description}
            </p>

            <ul className="space-y-3 mb-8">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                    <Check size={12} className="text-brand-blue" />
                  </span>
                  <span className="text-gray-600 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <Button
              href={formatWhatsAppUrl(
                COMPANY_INFO.whatsapp,
                `Hola, me interesa el servicio de ${service.title}. ¿Podrían darme más información?`
              )}
            >
              Solicitar este servicio
            </Button>
          </AnimatedSection>
        </div>
      </Container>
    </section>
  );
}
