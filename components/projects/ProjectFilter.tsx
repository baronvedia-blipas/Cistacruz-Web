"use client";

import { PROJECT_CATEGORIES } from "@/lib/constants";

interface ProjectFilterProps {
  active: string;
  onFilter: (category: string) => void;
}

export default function ProjectFilter({ active, onFilter }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-10">
      {PROJECT_CATEGORIES.map((cat) => (
        <button
          key={cat}
          onClick={() => onFilter(cat)}
          className={`px-5 py-2 text-sm font-sans font-medium uppercase tracking-wider rounded-full transition-all duration-300 ${
            active === cat
              ? "bg-brand-blue text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
