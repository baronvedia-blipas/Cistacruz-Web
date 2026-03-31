"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import type { Project } from "@/types";
import ProjectFilter from "./ProjectFilter";
import ProjectCard from "./ProjectCard";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

interface ProjectGridProps {
  initialProjects: Project[];
}

export default function ProjectGrid({ initialProjects }: ProjectGridProps) {
  const [filter, setFilter] = useState("Todos");

  const filtered =
    filter === "Todos"
      ? initialProjects
      : initialProjects.filter((p) => p.category === filter);

  return (
    <section className="py-20 md:py-28 bg-white">
      <Container>
        <SectionTitle
          title="Nuestro Portafolio"
          subtitle="Explora los proyectos que hemos llevado a cabo con excelencia."
        />

        <ProjectFilter active={filter} onFilter={setFilter} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}
