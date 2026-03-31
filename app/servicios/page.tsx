import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import ServiceDetail from "@/components/services/ServiceDetail";
import CTASection from "@/components/home/CTASection";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Nuestros Servicios",
  description:
    "Diseño arquitectónico, construcción, supervisión de obras y administración de condominios. Servicios integrales de Constructora Cistacruz SRL.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHero
        title="Nuestros Servicios"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Servicios" },
        ]}
      />
      {SERVICES.map((service, i) => (
        <div
          key={service.id}
          className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}
        >
          <ServiceDetail service={service} reversed={i % 2 !== 0} />
        </div>
      ))}
      <CTASection />
    </>
  );
}
