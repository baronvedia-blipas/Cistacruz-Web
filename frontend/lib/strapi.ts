const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN || "";

interface StrapiResponse<T> {
  data: T;
  meta?: { pagination?: { page: number; pageSize: number; pageCount: number; total: number } };
}

async function fetchStrapi<T>(
  path: string,
  params?: Record<string, string>
): Promise<T | null> {
  try {
    const url = new URL(`/api${path}`, STRAPI_URL);
    if (params) {
      Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
    }

    const res = await fetch(url.toString(), {
      headers: {
        ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
      },
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// ── Helpers to normalize Strapi response shape ──

function strapiImage(media: any): string {
  if (!media) return "";
  const url = media?.url || media?.data?.attributes?.url || "";
  if (url.startsWith("http")) return url;
  return `${STRAPI_URL}${url}`;
}

function strapiGallery(media: any): string[] {
  if (!media) return [];
  const items = Array.isArray(media) ? media : media?.data || [];
  return items.map((m: any) => strapiImage(m));
}

// ── Public API ──

export async function getProjects() {
  const res = await fetchStrapi<StrapiResponse<any[]>>("/projects", {
    "populate": "*",
    "sort": "order:asc",
    "pagination[pageSize]": "50",
    "filters[publishedAt][$notNull]": "true",
  });

  if (!res?.data) return null;

  return res.data.map((item: any) => {
    const a = item.attributes || item;
    return {
      id: a.slug || String(item.id),
      title: a.title,
      category: a.category,
      description: a.description || "",
      client: a.client || "",
      location: a.location || "",
      area: a.area || "",
      duration: a.duration || "",
      year: a.year || "",
      status: a.status || "Entregado",
      image: strapiImage(a.featuredImage),
      gallery: strapiGallery(a.gallery),
      features: a.features || [],
    };
  });
}

export async function getProjectBySlug(slug: string) {
  const res = await fetchStrapi<StrapiResponse<any[]>>("/projects", {
    "populate": "*",
    "filters[slug][$eq]": slug,
  });

  if (!res?.data?.[0]) return null;
  const item = res.data[0];
  const a = item.attributes || item;

  return {
    id: a.slug || String(item.id),
    title: a.title,
    category: a.category,
    description: a.description || "",
    client: a.client || "",
    location: a.location || "",
    area: a.area || "",
    duration: a.duration || "",
    year: a.year || "",
    status: a.status || "Entregado",
    image: strapiImage(a.featuredImage),
    gallery: strapiGallery(a.gallery),
    features: a.features || [],
  };
}

export async function getBlogPosts() {
  const res = await fetchStrapi<StrapiResponse<any[]>>("/blog-posts", {
    "populate": "*",
    "sort": "date:desc",
    "pagination[pageSize]": "50",
    "filters[publishedAt][$notNull]": "true",
  });

  if (!res?.data) return null;

  return res.data.map((item: any) => {
    const a = item.attributes || item;
    return {
      id: String(item.id),
      title: a.title,
      slug: a.slug,
      excerpt: a.excerpt,
      content: a.content,
      image: strapiImage(a.featuredImage),
      date: a.date,
      author: a.author || "Equipo Cistacruz",
      category: a.category,
      readTime: a.readTime || "5 min",
    };
  });
}

export async function getBlogPostBySlug(slug: string) {
  const res = await fetchStrapi<StrapiResponse<any[]>>("/blog-posts", {
    "populate": "*",
    "filters[slug][$eq]": slug,
  });

  if (!res?.data?.[0]) return null;
  const item = res.data[0];
  const a = item.attributes || item;

  return {
    id: String(item.id),
    title: a.title,
    slug: a.slug,
    excerpt: a.excerpt,
    content: a.content,
    image: strapiImage(a.featuredImage),
    date: a.date,
    author: a.author || "Equipo Cistacruz",
    category: a.category,
    readTime: a.readTime || "5 min",
  };
}

export async function getServices() {
  const res = await fetchStrapi<StrapiResponse<any[]>>("/services", {
    "populate": "*",
    "sort": "order:asc",
    "pagination[pageSize]": "20",
  });

  if (!res?.data) return null;

  return res.data.map((item: any) => {
    const a = item.attributes || item;
    return {
      id: a.slug || String(item.id),
      title: a.title,
      description: a.description,
      icon: a.icon,
      features: a.features || [],
      image: strapiImage(a.image),
    };
  });
}

export async function getPartners() {
  const res = await fetchStrapi<StrapiResponse<any[]>>("/partners", {
    "populate": "*",
    "sort": "order:asc",
  });

  if (!res?.data) return null;

  return res.data.map((item: any) => {
    const a = item.attributes || item;
    return {
      name: a.name,
      logo: strapiImage(a.logo),
    };
  });
}

export async function getCompanyInfo() {
  const res = await fetchStrapi<StrapiResponse<any>>("/company-info", {
    "populate": "*",
  });

  if (!res?.data) return null;
  const a = res.data.attributes || res.data;

  return {
    name: a.name,
    slogan: a.slogan,
    description: a.description,
    address: a.address,
    phone: a.phone,
    email: a.email,
    whatsapp: a.whatsapp,
    instagram: a.instagram,
    facebook: a.facebook,
    mapEmbed: a.mapEmbed,
  };
}

export async function submitContact(data: {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}) {
  const res = await fetchStrapi<any>("/contact-submissions", {});
  // Use POST directly
  try {
    const response = await fetch(`${STRAPI_URL}/api/contact-submissions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` }),
      },
      body: JSON.stringify({ data }),
    });
    return response.ok;
  } catch {
    return false;
  }
}
