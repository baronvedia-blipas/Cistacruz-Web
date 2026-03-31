import type { MetadataRoute } from "next";
import { PROJECTS, BLOG_POSTS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://cistacruz.com";

  const staticPages = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: `${baseUrl}/nosotros`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/servicios`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/proyectos`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/contacto`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.7 },
  ];

  const projectPages = PROJECTS.map((p) => ({
    url: `${baseUrl}/proyectos/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const blogPages = BLOG_POSTS.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...projectPages, ...blogPages];
}
