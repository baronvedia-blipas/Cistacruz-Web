"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Ruler, User, Clock, Check, Camera } from "lucide-react";
import { PROJECTS, COMPANY_INFO } from "@/lib/constants";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { formatWhatsAppUrl } from "@/lib/utils";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Lightbox from "@/components/ui/Lightbox";

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find((p) => p.id === id);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-navy mb-4">
            Proyecto no encontrado
          </h1>
          <Button href="/proyectos">Volver a Proyectos</Button>
        </div>
      </div>
    );
  }

  const gallery = project.gallery || [project.image];
  const specs = [
    { icon: <User size={18} />, label: "Cliente", value: project.client },
    { icon: <MapPin size={18} />, label: "Ubicación", value: project.location },
    { icon: <Ruler size={18} />, label: "Área", value: project.area },
    { icon: <Calendar size={18} />, label: "Duración", value: project.duration },
    { icon: <Clock size={18} />, label: "Estado", value: project.status },
  ].filter((s) => s.value);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 bg-brand-navy">
        <Container>
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Volver a Proyectos
          </Link>
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider bg-brand-blue/20 text-brand-blue rounded-full mb-4">
              {project.category}
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              {project.title}
            </h1>
            {project.year && (
              <p className="text-gray-400 text-sm">{project.year}</p>
            )}
          </motion.div>
        </Container>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative cursor-pointer group overflow-hidden rounded-sm ${
                  i === 0 ? "col-span-2 row-span-2 aspect-[4/3]" : "aspect-[4/3]"
                }`}
                onClick={() => { setLightboxIndex(i); setLightboxOpen(true); }}
              >
                <Image
                  src={img}
                  alt={`${project.title} - ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={i === 0 ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 50vw, 33vw"}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={24} />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Project Info */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h2 className="font-serif text-3xl font-bold text-brand-navy mb-6">
                  Sobre el Proyecto
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  {project.description}
                </p>

                {project.features && project.features.length > 0 && (
                  <>
                    <h3 className="font-sans font-semibold text-brand-navy text-lg mb-4">
                      Características Destacadas
                    </h3>
                    <ul className="space-y-3 mb-8">
                      {project.features.map((f) => (
                        <li key={f} className="flex items-start gap-3">
                          <span className="mt-1 w-5 h-5 rounded-full bg-brand-blue/10 flex items-center justify-center shrink-0">
                            <Check size={12} className="text-brand-blue" />
                          </span>
                          <span className="text-gray-600">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </motion.div>
            </div>

            {/* Specs Sidebar */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-slate-50 p-6 rounded-sm">
                <h3 className="font-sans font-semibold text-brand-navy text-lg mb-5">
                  Ficha Técnica
                </h3>
                <div className="space-y-4">
                  {specs.map((spec) => (
                    <motion.div
                      key={spec.label}
                      variants={fadeUp}
                      className="flex items-start gap-3"
                    >
                      <div className="w-9 h-9 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                        {spec.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wider">
                          {spec.label}
                        </p>
                        <p className="font-sans font-medium text-brand-navy text-sm">
                          {spec.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <Button
                    href={formatWhatsAppUrl(
                      COMPANY_INFO.whatsapp,
                      `Hola, me interesa un proyecto similar a "${project.title}". ¿Podrían darme más información?`
                    )}
                    className="w-full"
                  >
                    Proyecto Similar
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={gallery}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
