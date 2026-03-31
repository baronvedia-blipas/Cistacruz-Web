"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";
import { fadeUp } from "@/lib/animations";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-brand-navy mb-4">
            Artículo no encontrado
          </h1>
          <Button href="/blog">Volver al Blog</Button>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.date).toLocaleDateString("es-BO", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // Simple markdown-ish rendering for ## headings and paragraphs
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="font-serif text-2xl font-bold text-brand-navy mt-8 mb-4"
          >
            {block.replace("## ", "")}
          </h2>
        );
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((l) => l.startsWith("- "));
        return (
          <ul key={i} className="list-disc list-inside space-y-1 text-gray-600 mb-4">
            {items.map((item, j) => (
              <li key={j}>{item.replace("- ", "")}</li>
            ))}
          </ul>
        );
      }
      return (
        <p key={i} className="text-gray-600 leading-relaxed mb-4">
          {block}
        </p>
      );
    });
  };

  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-0 md:pt-40 bg-brand-navy">
        <Container>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowLeft size={16} /> Volver al Blog
          </Link>
          <motion.div variants={fadeUp} initial="hidden" animate="visible" className="pb-12">
            <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider bg-brand-blue/20 text-brand-blue rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-6 max-w-3xl">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
              <span className="flex items-center gap-1.5">
                <User size={14} /> {post.author}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={14} /> {formattedDate}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} /> {post.readTime} de lectura
              </span>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Featured Image */}
      <div className="relative h-64 md:h-96 -mt-1">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Content */}
      <section className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <motion.div variants={fadeUp} initial="hidden" animate="visible">
              {renderContent(post.content)}
            </motion.div>

            {/* Share / CTA */}
            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
              <p className="text-gray-500 mb-4">
                ¿Te interesa un proyecto similar?
              </p>
              <Button href="/contacto">Contáctanos</Button>
            </div>
          </div>

          {/* Related posts */}
          {otherPosts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-gray-100">
              <h3 className="font-serif text-2xl font-bold text-brand-navy mb-8 text-center">
                También te puede interesar
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {otherPosts.map((p) => (
                  <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex gap-4">
                    <div className="relative w-24 h-24 rounded-sm overflow-hidden shrink-0">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="96px"
                      />
                    </div>
                    <div>
                      <span className="text-brand-blue text-xs uppercase tracking-wider">
                        {p.category}
                      </span>
                      <h4 className="font-sans font-semibold text-brand-navy text-sm group-hover:text-brand-blue transition-colors line-clamp-2 mt-1">
                        {p.title}
                      </h4>
                      <p className="text-gray-400 text-xs mt-1">{p.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
