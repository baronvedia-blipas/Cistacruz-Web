/**
 * Seed script for Strapi — run with: npm run seed
 * Requires Strapi to be running: npm run develop (in another terminal)
 *
 * Creates an admin user and populates all content types with initial data.
 */

const STRAPI_URL = "http://localhost:1337";

async function apiCall(path, method = "GET", body = null, token = null) {
  const opts = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };
  if (body) opts.body = JSON.stringify(body);
  const res = await fetch(`${STRAPI_URL}${path}`, opts);
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`${method} ${path} failed (${res.status}): ${text}`);
  }
  return res.json();
}

async function getAdminToken() {
  try {
    const res = await apiCall("/admin/login", "POST", {
      email: "admin@cistacruz.com",
      password: "Admin2025!",
    });
    return res.data.token;
  } catch {
    // Register admin if first run
    const res = await apiCall("/admin/register-admin", "POST", {
      email: "admin@cistacruz.com",
      password: "Admin2025!",
      firstname: "Admin",
      lastname: "Cistacruz",
    });
    return res.data.token;
  }
}

// ── Data ──

const companyInfo = {
  name: "Constructora Cistacruz SRL",
  slogan: "Construimos tu éxito",
  description: "Somos una empresa constructora con sede en Santa Cruz de la Sierra, Bolivia, dedicada al diseño, construcción y supervisión de obras civiles y comerciales.",
  address: "3er Anillo Interno, Av. Roque Aguilera, Edificio Albicor, Oficina 410, Santa Cruz de la Sierra, Bolivia",
  phone: "+591 78000000",
  email: "info@cistacruz.com",
  whatsapp: "59178000000",
  instagram: "https://www.instagram.com/constructora_cistacruzsrl",
  facebook: "https://www.facebook.com/constructoracistacruz",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.0!2d-63.18!3d-17.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSanta+Cruz+de+la+Sierra!5e0!3m2!1ses!2sbo!4v1",
};

const services = [
  { title: "Diseño Arquitectónico", slug: "diseno-arquitectonico", description: "Creamos espacios funcionales y estéticamente innovadores que reflejan la visión de nuestros clientes, combinando creatividad con soluciones técnicas de vanguardia.", icon: "pencil-ruler", features: ["Diseño de planos arquitectónicos", "Modelado 3D y renderización", "Diseño de interiores", "Planificación de espacios", "Asesoría en materiales y acabados"], order: 1 },
  { title: "Construcción", slug: "construccion", description: "Ejecutamos proyectos con los más altos estándares de calidad, utilizando materiales de primera y tecnología moderna para garantizar resultados excepcionales.", icon: "building-2", features: ["Construcción de viviendas unifamiliares", "Edificios residenciales y comerciales", "Obras civiles e industriales", "Acabados de alta calidad", "Cumplimiento de normativas vigentes"], order: 2 },
  { title: "Supervisión de Obras", slug: "supervision-obras", description: "Garantizamos el cumplimiento de plazos, presupuestos y normativas técnicas en cada etapa del proyecto, asegurando la calidad y eficiencia de la ejecución.", icon: "clipboard-check", features: ["Control de calidad de materiales", "Seguimiento de cronograma", "Fiscalización de presupuesto", "Informes técnicos periódicos", "Coordinación de subcontratistas"], order: 3 },
  { title: "Supervisión de Condominios", slug: "supervision-condominios", description: "Administración técnica integral de condominios, garantizando el mantenimiento adecuado de las instalaciones y áreas comunes.", icon: "home", features: ["Administración técnica de áreas comunes", "Planificación de mantenimiento preventivo", "Gestión de proveedores y contratistas", "Informes de estado de infraestructura", "Asesoría en mejoras y ampliaciones"], order: 4 },
];

const projects = [
  { title: "The Master (TMS)", slug: "the-master-tms", category: "Construcción", description: "Proyecto residencial de alta gama que combina diseño moderno con funcionalidad.", client: "Grupo TMS", location: "Zona Norte, Santa Cruz", area: "450 m²", duration: "14 meses", status: "Entregado", features: ["Estructura antisísmica", "Acabados de porcelanato importado", "Sistema de domótica", "Piscina con sistema de filtrado"], order: 1 },
  { title: "REM - GR (Ampliación y Remodelación)", slug: "rem-gr", category: "Remodelación", description: "Ampliación y remodelación completa de residencia existente.", client: "Familia GR", location: "Equipetrol, Santa Cruz", area: "320 m²", duration: "8 meses", status: "Entregado", features: ["Ampliación de segundo nivel", "Remodelación de fachada", "Nuevas instalaciones eléctricas"], order: 2 },
  { title: "Rossytex", slug: "rossytex", category: "Comercial", description: "Construcción de local comercial para la marca Rossytex.", client: "Rossytex SRL", location: "Av. Santos Dumont, Santa Cruz", area: "280 m²", duration: "6 meses", status: "Entregado", features: ["Fachada de vidrio templado", "Iluminación LED de diseño", "Sistema de aire acondicionado centralizado"], order: 3 },
  { title: "Fisiobel", slug: "fisiobel", category: "Comercial", description: "Adecuación de centro de fisioterapia y estética.", client: "Fisiobel", location: "2do Anillo, Santa Cruz", area: "180 m²", duration: "4 meses", status: "Entregado", features: ["Diseño sanitario especializado", "Iluminación cálida terapéutica", "Pisos antibacteriales"], order: 4 },
  { title: "Proyecto RB", slug: "proyecto-rb", category: "Construcción", description: "Residencia unifamiliar con diseño contemporáneo.", client: "Familia RB", location: "Las Palmas, Santa Cruz", area: "380 m²", duration: "12 meses", status: "Entregado", features: ["Diseño contemporáneo con doble altura", "Ventanales panorámicos", "Garage para 3 vehículos"], order: 5 },
  { title: "Proyecto Sahonero", slug: "proyecto-sahonero", category: "Construcción", description: "Vivienda residencial en barrio privado con eficiencia energética.", client: "Familia Sahonero", location: "Urubó, Santa Cruz", area: "420 m²", duration: "10 meses", status: "Entregado", features: ["Paneles solares integrados", "Diseño bioclimático", "Jardín vertical en fachada"], order: 6 },
  { title: "Churrasquera Mendizabal", slug: "churrasquera-mendizabal", category: "Comercial", description: "Restaurante tipo churrasquería con diseño rústico-moderno.", client: "Familia Mendizabal", location: "4to Anillo, Santa Cruz", area: "350 m²", duration: "5 meses", year: "2020", status: "Entregado", features: ["Cocina industrial profesional", "Sistema de extracción de humos", "Terraza techada exterior"], order: 7 },
];

const blogPosts = [
  { title: "5 Tendencias en Construcción Sostenible para 2025", slug: "tendencias-construccion-sostenible-2025", excerpt: "Descubre las principales tendencias en construcción sostenible que están transformando el sector en Bolivia.", content: "La construcción sostenible ya no es una opción, es una necesidad. En Constructora Cistacruz SRL venimos incorporando prácticas que reducen el impacto ambiental sin sacrificar calidad ni estética.", date: "2025-03-15", category: "Tips", readTime: "5 min" },
  { title: "Avance de Obra: The Master (TMS) al 100%", slug: "avance-the-master-tms-completado", excerpt: "Celebramos la finalización exitosa del proyecto The Master.", content: "Nos llena de orgullo anunciar la entrega exitosa del proyecto The Master (TMS), una de nuestras obras más ambiciosas hasta la fecha.", date: "2025-02-20", category: "Proyectos", readTime: "4 min" },
  { title: "¿Cuánto Cuesta Construir una Casa en Santa Cruz?", slug: "cuanto-cuesta-construir-casa-santa-cruz", excerpt: "Guía actualizada de costos de construcción en Santa Cruz de la Sierra.", content: "Una de las preguntas más frecuentes que recibimos es: ¿cuánto cuesta construir una casa en Santa Cruz? La respuesta depende de varios factores.", date: "2025-01-10", category: "Tips", readTime: "6 min" },
  { title: "Cistacruz Incorpora Supervisión de Condominios", slug: "cistacruz-supervision-condominios", excerpt: "Ampliamos nuestra cartera de servicios con la administración técnica integral de condominios.", content: "En respuesta a la creciente demanda del sector inmobiliario en Santa Cruz, anunciamos la incorporación del servicio de Supervisión de Condominios.", date: "2024-11-05", category: "Noticias", readTime: "3 min" },
];

const partners = [
  { name: "Fierro Bolivia", order: 1 },
  { name: "Cerámica Coboce", order: 2 },
  { name: "Incerpaz", order: 3 },
  { name: "Plastiforte", order: 4 },
  { name: "Tigre Bolivia", order: 5 },
  { name: "Sika Bolivia", order: 6 },
];

// ── Seed runner ──

async function seed() {
  console.log("Connecting to Strapi...");
  const token = await getAdminToken();
  console.log("Authenticated as admin.");

  // Seed Company Info (single type)
  console.log("Seeding company info...");
  try {
    await apiCall("/api/company-info", "PUT", { data: companyInfo }, token);
  } catch {
    console.log("  (company-info may not support PUT yet, skipping)");
  }

  // Seed Services
  console.log("Seeding services...");
  for (const s of services) {
    try {
      await apiCall("/api/services", "POST", { data: s }, token);
      console.log(`  + ${s.title}`);
    } catch (e) {
      console.log(`  ~ ${s.title} (may already exist)`);
    }
  }

  // Seed Projects
  console.log("Seeding projects...");
  for (const p of projects) {
    try {
      await apiCall("/api/projects", "POST", { data: p }, token);
      console.log(`  + ${p.title}`);
    } catch (e) {
      console.log(`  ~ ${p.title} (may already exist)`);
    }
  }

  // Seed Blog Posts
  console.log("Seeding blog posts...");
  for (const b of blogPosts) {
    try {
      await apiCall("/api/blog-posts", "POST", { data: { ...b, author: "Equipo Cistacruz" } }, token);
      console.log(`  + ${b.title}`);
    } catch (e) {
      console.log(`  ~ ${b.title} (may already exist)`);
    }
  }

  // Seed Partners
  console.log("Seeding partners...");
  for (const p of partners) {
    try {
      await apiCall("/api/partners", "POST", { data: p }, token);
      console.log(`  + ${p.name}`);
    } catch (e) {
      console.log(`  ~ ${p.name} (may already exist)`);
    }
  }

  console.log("\nSeed complete!");
}

seed().catch(console.error);
