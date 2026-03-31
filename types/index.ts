export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export interface Project {
  id: string;
  title: string;
  category: "Construcción" | "Remodelación" | "Comercial";
  image: string;
  year?: string;
  description?: string;
  client?: string;
  location?: string;
  area?: string;
  duration?: string;
  status?: string;
  gallery?: string[];
  features?: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
  category: "Avances" | "Tips" | "Noticias" | "Proyectos";
  readTime: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface CompanyInfo {
  name: string;
  slogan: string;
  description: string;
  address: string;
  phone: string;
  email: string;
  whatsapp: string;
  instagram: string;
  facebook: string;
  mapEmbed: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Value {
  title: string;
  description: string;
  icon: string;
}
