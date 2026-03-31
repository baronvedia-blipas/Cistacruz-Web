import {
  getProjects,
  getProjectBySlug,
  getBlogPosts,
  getBlogPostBySlug,
  getServices,
  getPartners,
} from "./strapi";
import {
  PROJECTS,
  BLOG_POSTS,
  SERVICES,
  PARTNERS,
} from "./constants";
import type { Project, BlogPost, Service, Partner } from "@/types";

/**
 * Data layer that tries Strapi first, falls back to constants.
 * This lets the site work standalone (static) or with the CMS.
 */

export async function fetchProjects(): Promise<Project[]> {
  const data = await getProjects();
  return (data as Project[]) || PROJECTS;
}

export async function fetchProject(idOrSlug: string): Promise<Project | null> {
  const data = await getProjectBySlug(idOrSlug);
  if (data) return data as Project;
  return PROJECTS.find((p) => p.id === idOrSlug) || null;
}

export async function fetchBlogPosts(): Promise<BlogPost[]> {
  const data = await getBlogPosts();
  return (data as BlogPost[]) || BLOG_POSTS;
}

export async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  const data = await getBlogPostBySlug(slug);
  if (data) return data as BlogPost;
  return BLOG_POSTS.find((p) => p.slug === slug) || null;
}

export async function fetchServices(): Promise<Service[]> {
  const data = await getServices();
  return (data as Service[]) || SERVICES;
}

export async function fetchPartners(): Promise<Partner[]> {
  const data = await getPartners();
  return (data as Partner[]) || PARTNERS;
}
