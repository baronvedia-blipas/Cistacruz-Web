import type { Metadata } from "next";
import { fetchProjects } from "@/lib/data";
import PageHero from "@/components/ui/PageHero";
import ProjectGrid from "@/components/projects/ProjectGrid";
import ProjectMap from "@/components/projects/ProjectMap";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Nuestros Proyectos",
  description:
    "Portafolio de proyectos de Constructora Cistacruz SRL. Construcciones residenciales, comerciales y remodelaciones en Santa Cruz, Bolivia.",
};

export default async function ProyectosPage() {
  const projects = await fetchProjects();

  return (
    <>
      <PageHero
        title="Nuestros Proyectos"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Proyectos" },
        ]}
      />
      <ProjectGrid initialProjects={projects} />
      <ProjectMap />
      <CTASection />
    </>
  );
}
