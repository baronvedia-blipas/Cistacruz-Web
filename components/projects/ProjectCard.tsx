"use client";

import ImageSkeleton from "@/components/ui/ImageSkeleton";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
    >
    <Link href={`/proyectos/${project.id}`} className="group relative aspect-[4/3] rounded-sm overflow-hidden cursor-pointer block">
      <ImageSkeleton
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
          <h3 className="text-white font-sans font-bold text-lg mb-1">
            {project.title}
          </h3>
          {project.year && (
            <p className="text-gray-400 text-sm mb-3">{project.year}</p>
          )}
          <ArrowUpRight className="mx-auto text-white" size={24} />
        </div>
      </div>
    </Link>
    </motion.div>
  );
}
