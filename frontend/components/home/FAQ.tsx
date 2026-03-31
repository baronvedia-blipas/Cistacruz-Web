"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionTitle from "@/components/ui/SectionTitle";
import Container from "@/components/ui/Container";

const faqs = [
  {
    q: { es: "¿Cuánto cuesta construir una casa en Santa Cruz?", en: "How much does it cost to build a house in Santa Cruz?" },
    a: { es: "Los costos varían según el tipo de proyecto: económico ($350-500/m²), medio ($500-800/m²) y premium ($800-1,200+/m²). El precio final depende de la ubicación, diseño, materiales y acabados. Ofrecemos presupuestos personalizados y transparentes.", en: "Costs vary by project type: economy ($350-500/m²), mid-range ($500-800/m²), and premium ($800-1,200+/m²). The final price depends on location, design, materials, and finishes. We offer personalized and transparent budgets." },
  },
  {
    q: { es: "¿Cuánto tiempo toma construir una vivienda?", en: "How long does it take to build a home?" },
    a: { es: "El tiempo depende del tamaño y complejidad del proyecto. Una vivienda estándar toma entre 8-14 meses. Proyectos comerciales pueden tomar 4-8 meses. Siempre entregamos un cronograma detallado antes de iniciar.", en: "The timeline depends on the size and complexity of the project. A standard home takes 8-14 months. Commercial projects can take 4-8 months. We always provide a detailed schedule before starting." },
  },
  {
    q: { es: "¿Ofrecen financiamiento o facilidades de pago?", en: "Do you offer financing or payment plans?" },
    a: { es: "Trabajamos con un sistema de pagos por avance de obra, lo que permite distribuir la inversión a lo largo del proyecto. Consultá con nuestro equipo las opciones disponibles para tu caso específico.", en: "We work with a progress-based payment system, allowing you to spread the investment throughout the project. Consult our team for the options available for your specific case." },
  },
  {
    q: { es: "¿Qué garantía ofrecen en sus construcciones?", en: "What warranty do you offer on your constructions?" },
    a: { es: "Ofrecemos garantía estructural y de acabados según las normativas bolivianas vigentes. Cada proyecto incluye documentación técnica completa y seguimiento post-entrega.", en: "We offer structural and finishing warranties in accordance with current Bolivian regulations. Each project includes complete technical documentation and post-delivery follow-up." },
  },
  {
    q: { es: "¿Pueden trabajar con un diseño que ya tengo?", en: "Can you work with a design I already have?" },
    a: { es: "Sí, podemos trabajar con planos existentes o diseñar desde cero. Nuestro equipo de arquitectos puede revisar y optimizar tu diseño, o crear uno completamente nuevo según tus necesidades.", en: "Yes, we can work with existing plans or design from scratch. Our team of architects can review and optimize your design, or create a completely new one according to your needs." },
  },
  {
    q: { es: "¿En qué zonas de Santa Cruz trabajan?", en: "In which areas of Santa Cruz do you work?" },
    a: { es: "Trabajamos en toda Santa Cruz de la Sierra y alrededores, incluyendo Urubó, Porongo, Warnes y otras localidades del departamento. Consulta disponibilidad para tu zona específica.", en: "We work throughout Santa Cruz de la Sierra and surrounding areas, including Urubó, Porongo, Warnes, and other locations in the department. Check availability for your specific area." },
  },
];

function AccordionItem({ q, a, isOpen, onToggle }: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className="font-sans font-semibold text-brand-navy pr-8 group-hover:text-brand-blue transition-colors">
          {q}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-brand-blue"
        >
          <ChevronDown size={20} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-sm leading-relaxed pb-5">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { locale, t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <Container>
        <SectionTitle
          title={t("faq.title")}
          subtitle={t("faq.subtitle")}
        />
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              q={faq.q[locale]}
              a={faq.a[locale]}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
