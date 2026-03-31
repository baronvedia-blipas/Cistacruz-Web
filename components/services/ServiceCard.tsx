"use client";

import { PencilRuler, Building2, ClipboardCheck, Home } from "lucide-react";
import type { Service } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
  "pencil-ruler": <PencilRuler size={36} />,
  "building-2": <Building2 size={36} />,
  "clipboard-check": <ClipboardCheck size={36} />,
  home: <Home size={36} />,
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative bg-white border border-gray-100 rounded-sm p-6 hover:-translate-y-2 hover:shadow-xl transition-all duration-400">
      <div className="text-brand-blue mb-4">{iconMap[service.icon]}</div>
      <h3 className="font-sans font-bold text-brand-navy text-lg mb-2">
        {service.title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">
        {service.description}
      </p>
      <div className="absolute bottom-0 left-0 h-0.5 bg-brand-blue w-0 group-hover:w-full transition-all duration-500" />
    </div>
  );
}
