import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import CompanyHistory from "@/components/about/CompanyHistory";
import Values from "@/components/about/Values";
import Team from "@/components/about/Team";
import StatsCounter from "@/components/home/StatsCounter";

export const metadata: Metadata = {
  title: "Sobre Nosotros",
  description:
    "Conoce la historia, valores y equipo de Constructora Cistacruz SRL. Más de 10 años construyendo éxito en Santa Cruz, Bolivia.",
};

export default function NosotrosPage() {
  return (
    <>
      <PageHero
        title="Sobre Nosotros"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Nosotros" },
        ]}
      />
      <CompanyHistory />
      <Values />
      <StatsCounter />
      <Team />
    </>
  );
}
