"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { staggerContainer, fadeUp } from "@/lib/animations";
import { PROJECTS } from "@/lib/constants";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function ProjectsPreview() {
  const featured = PROJECTS.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <Container>
        <SectionTitle
          title="Proyectos Destacados"
          subtitle="Conoce algunos de nuestros trabajos más representativos."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
        >
          {featured.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              className="group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/80 transition-all duration-400 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-400 text-center px-4">
                  <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider bg-brand-blue/20 text-brand-blue rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-white font-sans font-bold text-lg mb-3">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="mx-auto text-white" size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center">
          <Button href="/proyectos" variant="ghost">
            Ver Todos los Proyectos &rarr;
          </Button>
        </div>
      </Container>
    </section>
  );
}
