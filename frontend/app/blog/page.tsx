import type { Metadata } from "next";
import { fetchBlogPosts } from "@/lib/data";
import PageHero from "@/components/ui/PageHero";
import BlogList from "@/components/blog/BlogList";
import Container from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Blog & Noticias",
  description:
    "Noticias, avances de obra y tips de construcción de Constructora Cistacruz SRL en Santa Cruz, Bolivia.",
};

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

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
          <BlogList initialPosts={posts} />
        </Container>
      </section>
    </>
  );
}
