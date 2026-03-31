"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { BLOG_POSTS, BLOG_CATEGORIES } from "@/lib/constants";
import PageHero from "@/components/ui/PageHero";
import BlogCard from "@/components/blog/BlogCard";
import Container from "@/components/ui/Container";

export default function BlogPage() {
  const [filter, setFilter] = useState("Todos");

  const filtered =
    filter === "Todos"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === filter);

  return (
    <>
      <PageHero
        title="Blog & Noticias"
        breadcrumb={[
          { label: "Inicio", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className="py-20 md:py-28 bg-white">
        <Container>
          {/* Filter */}
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

          {/* Grid */}
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
        </Container>
      </section>
    </>
  );
}
