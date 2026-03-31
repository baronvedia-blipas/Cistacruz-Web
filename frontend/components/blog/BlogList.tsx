"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { BLOG_CATEGORIES } from "@/lib/constants";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/types";

interface BlogListProps {
  initialPosts: BlogPost[];
}

export default function BlogList({ initialPosts }: BlogListProps) {
  const [filter, setFilter] = useState("Todos");

  const filtered =
    filter === "Todos"
      ? initialPosts
      : initialPosts.filter((p) => p.category === filter);

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {BLOG_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 text-sm font-sans font-medium uppercase tracking-wider rounded-full transition-all duration-300 ${
              filter === cat
                ? "bg-brand-blue text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        key={filter}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filtered.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-400 py-12">
          No hay publicaciones en esta categoría todavía.
        </p>
      )}
    </>
  );
}
