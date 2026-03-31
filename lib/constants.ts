import type {
  CompanyInfo,
  NavLink,
  SocialLink,
  Service,
  Project,
  ProcessStep,
  Stat,
  TimelineEvent,
  Value,
  BlogPost,
  Partner,
} from "@/types";

export const COMPANY_INFO: CompanyInfo = {
  name: "Constructora Cistacruz SRL",
  slogan: "Construimos tu éxito",
  description:
    "Somos una empresa constructora con sede en Santa Cruz de la Sierra, Bolivia, dedicada al diseño, construcción y supervisión de obras civiles y comerciales. Con más de una década de experiencia, transformamos ideas en espacios que inspiran.",
  address:
    "3er Anillo Interno, Av. Roque Aguilera, Edificio Albicor, Oficina 410, Santa Cruz de la Sierra, Bolivia",
  phone: "+591 78000000",
  email: "info@cistacruz.com",
  whatsapp: "59178000000",
  instagram: "https://www.instagram.com/constructora_cistacruzsrl",
  facebook: "https://www.facebook.com/constructoracistacruz",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.0!2d-63.18!3d-17.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSanta+Cruz+de+la+Sierra!5e0!3m2!1ses!2sbo!4v1",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proyectos", href: "/proyectos" },
  { label: "Blog", href: "/blog" },
  { label: "Contacto", href: "/contacto" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: "Instagram", href: COMPANY_INFO.instagram, icon: "instagram" },
  { name: "Facebook", href: COMPANY_INFO.facebook, icon: "facebook" },
  {
    name: "WhatsApp",
    href: `https://wa.me/${COMPANY_INFO.whatsapp}`,
    icon: "whatsapp",
  },
];

export const SERVICES: Service[] = [
  {
    id: "diseno-arquitectonico",
    title: "Diseño Arquitectónico",
    description:
      "Creamos espacios funcionales y estéticamente innovadores que reflejan la visión de nuestros clientes, combinando creatividad con soluciones técnicas de vanguardia.",
    icon: "pencil-ruler",
    features: [
      "Diseño de planos arquitectónicos",
      "Modelado 3D y renderización",
      "Diseño de interiores",
      "Planificación de espacios",
      "Asesoría en materiales y acabados",
    ],
    image: "https://placehold.co/800x600/0c1f3a/2c7be5?text=Diseño+Arquitectónico",
  },
  {
    id: "construccion",
    title: "Construcción",
    description:
      "Ejecutamos proyectos con los más altos estándares de calidad, utilizando materiales de primera y tecnología moderna para garantizar resultados excepcionales.",
    icon: "building-2",
    features: [
      "Construcción de viviendas unifamiliares",
      "Edificios residenciales y comerciales",
      "Obras civiles e industriales",
      "Acabados de alta calidad",
      "Cumplimiento de normativas vigentes",
    ],
    image: "https://placehold.co/800x600/0c1f3a/2c7be5?text=Construcción",
  },
  {
    id: "supervision-obras",
    title: "Supervisión de Obras",
    description:
      "Garantizamos el cumplimiento de plazos, presupuestos y normativas técnicas en cada etapa del proyecto, asegurando la calidad y eficiencia de la ejecución.",
    icon: "clipboard-check",
    features: [
      "Control de calidad de materiales",
      "Seguimiento de cronograma",
      "Fiscalización de presupuesto",
      "Informes técnicos periódicos",
      "Coordinación de subcontratistas",
    ],
    image: "https://placehold.co/800x600/0c1f3a/2c7be5?text=Supervisión+de+Obras",
  },
  {
    id: "supervision-condominios",
    title: "Supervisión de Condominios",
    description:
      "Administración técnica integral de condominios, garantizando el mantenimiento adecuado de las instalaciones y áreas comunes.",
    icon: "home",
    features: [
      "Administración técnica de áreas comunes",
      "Planificación de mantenimiento preventivo",
      "Gestión de proveedores y contratistas",
      "Informes de estado de infraestructura",
      "Asesoría en mejoras y ampliaciones",
    ],
    image: "https://placehold.co/800x600/0c1f3a/2c7be5?text=Supervisión+Condominios",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "the-master-tms",
    title: "The Master (TMS)",
    category: "Construcción",
    image: "https://placehold.co/800x600/1a3a5c/ffffff?text=The+Master+TMS",
    description:
      "Proyecto residencial de alta gama que combina diseño moderno con funcionalidad. Construcción integral desde cimientos hasta acabados premium, incluyendo áreas sociales, piscina y paisajismo.",
    client: "Grupo TMS",
    location: "Zona Norte, Santa Cruz",
    area: "450 m²",
    duration: "14 meses",
    status: "Entregado",
    gallery: [
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=TMS+Fachada",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=TMS+Interior",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=TMS+Piscina",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=TMS+Cocina",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=TMS+Proceso",
    ],
    features: [
      "Estructura antisísmica",
      "Acabados de porcelanato importado",
      "Sistema de domótica",
      "Piscina con sistema de filtrado",
      "Jardines con riego automatizado",
    ],
  },
  {
    id: "rem-gr",
    title: "REM - GR (Ampliación y Remodelación)",
    category: "Remodelación",
    image: "https://placehold.co/800x600/1a3a5c/ffffff?text=REM+GR",
    description:
      "Ampliación y remodelación completa de residencia existente. Se añadió un segundo nivel, se modernizó la fachada y se rediseñaron los espacios interiores manteniendo la estructura original.",
    client: "Familia GR",
    location: "Equipetrol, Santa Cruz",
    area: "320 m²",
    duration: "8 meses",
    status: "Entregado",
    gallery: [
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=REM+Antes",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=REM+Proceso",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=REM+Después",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=REM+Interior",
    ],
    features: [
      "Ampliación de segundo nivel",
      "Remodelación de fachada",
      "Nuevas instalaciones eléctricas",
      "Rediseño de interiores",
    ],
  },
  {
    id: "rossytex",
    title: "Rossytex",
    category: "Comercial",
    image: "https://placehold.co/800x600/1a3a5c/ffffff?text=Rossytex",
    description:
      "Construcción de local comercial para la marca Rossytex. Diseño moderno con amplios espacios de exhibición, iluminación LED especializada y sistema de climatización eficiente.",
    client: "Rossytex SRL",
    location: "Av. Santos Dumont, Santa Cruz",
    area: "280 m²",
    duration: "6 meses",
    status: "Entregado",
    gallery: [
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=Rossytex+Fachada",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=Rossytex+Interior",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=Rossytex+Exhibición",
    ],
    features: [
      "Fachada de vidrio templado",
      "Iluminación LED de diseño",
      "Sistema de aire acondicionado centralizado",
      "Pisos de porcelanato comercial",
    ],
  },
  {
    id: "fisiobel",
    title: "Fisiobel",
    category: "Comercial",
    image: "https://placehold.co/800x600/1a3a5c/ffffff?text=Fisiobel",
    description:
      "Adecuación de centro de fisioterapia y estética. Espacios diseñados para el confort del paciente con materiales de alto estándar sanitario y acabados premium.",
    client: "Fisiobel",
    location: "2do Anillo, Santa Cruz",
    area: "180 m²",
    duration: "4 meses",
    status: "Entregado",
    gallery: [
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=Fisiobel+Recepción",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=Fisiobel+Consultorio",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=Fisiobel+Sala",
    ],
    features: [
      "Diseño sanitario especializado",
      "Iluminación cálida terapéutica",
      "Pisos antibacteriales",
      "Divisiones acústicas",
    ],
  },
  {
    id: "proyecto-rb",
    title: "Proyecto RB",
    category: "Construcción",
    image: "https://placehold.co/800x600/1a3a5c/ffffff?text=Proyecto+RB",
    description:
      "Residencia unifamiliar con diseño contemporáneo. Amplios ventanales, doble altura en sala, garage para 3 vehículos y jardín con BBQ integrado.",
    client: "Familia RB",
    location: "Las Palmas, Santa Cruz",
    area: "380 m²",
    duration: "12 meses",
    status: "Entregado",
    gallery: [
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=RB+Fachada",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=RB+Sala",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=RB+Cocina",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=RB+Jardín",
    ],
    features: [
      "Diseño contemporáneo con doble altura",
      "Ventanales panorámicos",
      "Garage para 3 vehículos",
      "BBQ y áreas exteriores",
    ],
  },
  {
    id: "proyecto-sahonero",
    title: "Proyecto Sahonero",
    category: "Construcción",
    image: "https://placehold.co/800x600/1a3a5c/ffffff?text=Proyecto+Sahonero",
    description:
      "Vivienda residencial en barrio privado con enfoque en eficiencia energética y espacios abiertos. Integración de áreas verdes y sistema de paneles solares.",
    client: "Familia Sahonero",
    location: "Urubó, Santa Cruz",
    area: "420 m²",
    duration: "10 meses",
    status: "Entregado",
    gallery: [
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=Sahonero+Exterior",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=Sahonero+Living",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=Sahonero+Paneles",
    ],
    features: [
      "Paneles solares integrados",
      "Diseño bioclimático",
      "Jardín vertical en fachada",
      "Piscina ecológica",
    ],
  },
  {
    id: "churrasquera-mendizabal",
    title: "Churrasquera Mendizabal",
    category: "Comercial",
    year: "2020",
    image: "https://placehold.co/800x600/1a3a5c/ffffff?text=Churrasquera+Mendizabal",
    description:
      "Restaurante tipo churrasquería con diseño rústico-moderno. Cocina industrial, sistema de extracción de humos, barra de atención y terraza exterior techada.",
    client: "Familia Mendizabal",
    location: "4to Anillo, Santa Cruz",
    area: "350 m²",
    duration: "5 meses",
    status: "Entregado",
    gallery: [
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=Mendizabal+Fachada",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=Mendizabal+Interior",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=Mendizabal+Terraza",
      "https://placehold.co/1200x800/1a3a5c/ffffff?text=Mendizabal+Cocina",
    ],
    features: [
      "Cocina industrial profesional",
      "Sistema de extracción de humos",
      "Terraza techada exterior",
      "Diseño rústico-moderno",
    ],
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: 1,
    title: "Consulta Inicial",
    description:
      "Nos reunimos contigo para entender tu visión, necesidades y presupuesto del proyecto.",
    icon: "message-circle",
  },
  {
    number: 2,
    title: "Diseño y Planificación",
    description:
      "Elaboramos los planos, presupuestos y cronogramas detallados para tu aprobación.",
    icon: "drafting-compass",
  },
  {
    number: 3,
    title: "Ejecución",
    description:
      "Construimos con los más altos estándares, supervisando cada etapa del proceso.",
    icon: "hard-hat",
  },
  {
    number: 4,
    title: "Entrega",
    description:
      "Realizamos la entrega final con garantía de calidad y satisfacción total.",
    icon: "key",
  },
];

export const STATS: Stat[] = [
  { value: 50, suffix: "+", label: "Proyectos Completados" },
  { value: 10, suffix: "+", label: "Años de Experiencia" },
  { value: 100, suffix: "+", label: "Clientes Satisfechos" },
  { value: 25, suffix: "+", label: "Profesionales" },
];

export const COMPANY_HISTORY: TimelineEvent[] = [
  {
    year: "2014",
    title: "Fundación",
    description:
      "Nace Constructora Cistacruz SRL en Santa Cruz de la Sierra con la visión de transformar el sector de la construcción en Bolivia.",
  },
  {
    year: "2016",
    title: "Primeros Proyectos Comerciales",
    description:
      "Expandimos nuestros servicios al sector comercial, ejecutando proyectos de remodelación y construcción para empresas locales.",
  },
  {
    year: "2019",
    title: "Crecimiento y Consolidación",
    description:
      "Alcanzamos más de 30 proyectos completados y consolidamos nuestro equipo de profesionales especializados.",
  },
  {
    year: "2022",
    title: "Supervisión de Condominios",
    description:
      "Incorporamos la administración técnica de condominios a nuestra cartera de servicios.",
  },
  {
    year: "2024",
    title: "Líderes en el Sector",
    description:
      "Superamos los 50 proyectos completados y más de 100 clientes satisfechos en toda Bolivia.",
  },
];

export const COMPANY_VALUES: Value[] = [
  {
    title: "Calidad",
    description:
      "Utilizamos materiales de primera y técnicas constructivas de vanguardia para garantizar resultados excepcionales.",
    icon: "shield-check",
  },
  {
    title: "Compromiso",
    description:
      "Cumplimos con los plazos y presupuestos acordados, manteniendo una comunicación transparente en todo momento.",
    icon: "handshake",
  },
  {
    title: "Innovación",
    description:
      "Incorporamos tecnología y métodos modernos para optimizar cada fase del proceso constructivo.",
    icon: "lightbulb",
  },
  {
    title: "Experiencia",
    description:
      "Más de una década de trayectoria nos respalda con un equipo de profesionales altamente capacitados.",
    icon: "award",
  },
];

export const PROJECT_CATEGORIES = [
  "Todos",
  "Construcción",
  "Remodelación",
  "Comercial",
] as const;

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "5 Tendencias en Construcción Sostenible para 2025",
    slug: "tendencias-construccion-sostenible-2025",
    excerpt:
      "Descubre las principales tendencias en construcción sostenible que están transformando el sector en Bolivia y el mundo.",
    content: `La construcción sostenible ya no es una opción, es una necesidad. En Constructora Cistacruz SRL venimos incorporando prácticas que reducen el impacto ambiental sin sacrificar calidad ni estética.

## 1. Materiales Reciclados y Locales
El uso de materiales reciclados y de origen local reduce la huella de carbono del transporte y apoya la economía regional. En Santa Cruz contamos con excelentes proveedores de ladrillo ecológico y madera certificada.

## 2. Paneles Solares Integrados
Ya no se trata de paneles como un añadido, sino como parte integral del diseño arquitectónico. Nuestro Proyecto Sahonero incorporó esta tecnología desde la fase de diseño.

## 3. Diseño Bioclimático
Orientación estratégica de ventanas, ventilación cruzada natural y techos verdes. Estas técnicas reducen hasta un 40% el consumo energético.

## 4. Sistemas de Captación de Agua
En una región donde el agua es preciada, los sistemas de captación pluvial para riego y sanitarios son cada vez más demandados.

## 5. Certificaciones Verdes
Las certificaciones EDGE y LEED están ganando terreno en Bolivia, agregando valor a las propiedades y demostrando compromiso ambiental.`,
    image: "https://placehold.co/1200x600/0c1f3a/2c7be5?text=Construcción+Sostenible",
    date: "2025-03-15",
    author: "Equipo Cistacruz",
    category: "Tips",
    readTime: "5 min",
  },
  {
    id: "2",
    title: "Avance de Obra: The Master (TMS) al 100%",
    slug: "avance-the-master-tms-completado",
    excerpt:
      "Celebramos la finalización exitosa del proyecto The Master, una residencia de alta gama en la zona norte de Santa Cruz.",
    content: `Nos llena de orgullo anunciar la entrega exitosa del proyecto The Master (TMS), una de nuestras obras más ambiciosas hasta la fecha.

## El Proyecto
The Master es una residencia de 450 m² ubicada en la exclusiva zona norte de Santa Cruz. El proyecto incluyó construcción integral desde cimientos hasta acabados premium.

## Desafíos Superados
- Terreno con nivel freático alto que requirió sistema de drenaje especial
- Instalación de sistema domótico completo
- Acabados importados con tiempos de entrega ajustados

## Resultado Final
El resultado es una vivienda que combina elegancia contemporánea con la calidez del hogar. El cliente expresó su total satisfacción con cada detalle del proyecto.

Agradecemos la confianza del Grupo TMS y a todo nuestro equipo que hizo posible este logro.`,
    image: "https://placehold.co/1200x600/0c1f3a/2c7be5?text=The+Master+Completado",
    date: "2025-02-20",
    author: "Equipo Cistacruz",
    category: "Proyectos",
    readTime: "4 min",
  },
  {
    id: "3",
    title: "¿Cuánto Cuesta Construir una Casa en Santa Cruz?",
    slug: "cuanto-cuesta-construir-casa-santa-cruz",
    excerpt:
      "Guía actualizada de costos de construcción en Santa Cruz de la Sierra. Factores que influyen en el presupuesto de tu proyecto.",
    content: `Una de las preguntas más frecuentes que recibimos es: ¿cuánto cuesta construir una casa en Santa Cruz? La respuesta depende de varios factores.

## Rangos de Precio por m²
- **Económico:** $350 - $500 USD/m² — Acabados básicos, diseño estándar
- **Medio:** $500 - $800 USD/m² — Buenos acabados, diseño personalizado
- **Premium:** $800 - $1,200+ USD/m² — Acabados de lujo, domótica, piscina

## Factores que Influyen
1. **Ubicación del terreno** — La zona define costos de transporte y servicios
2. **Tipo de suelo** — Suelos inestables requieren cimentaciones especiales
3. **Diseño arquitectónico** — A mayor complejidad, mayor costo
4. **Materiales** — Nacionales vs. importados
5. **Plazos** — Obras aceleradas tienen sobrecosto

## Nuestro Consejo
Lo más importante es planificar bien. Un buen diseño arquitectónico previo puede ahorrarte hasta un 20% en costos de construcción al optimizar espacios y materiales.

En Cistacruz ofrecemos presupuestos detallados y transparentes. Contáctanos para una evaluación gratuita de tu proyecto.`,
    image: "https://placehold.co/1200x600/0c1f3a/2c7be5?text=Costos+Construcción",
    date: "2025-01-10",
    author: "Equipo Cistacruz",
    category: "Tips",
    readTime: "6 min",
  },
  {
    id: "4",
    title: "Cistacruz Incorpora Supervisión de Condominios",
    slug: "cistacruz-supervision-condominios",
    excerpt:
      "Ampliamos nuestra cartera de servicios con la administración técnica integral de condominios en Santa Cruz.",
    content: `En respuesta a la creciente demanda del sector inmobiliario en Santa Cruz, Constructora Cistacruz SRL anuncia la incorporación del servicio de Supervisión de Condominios.

## ¿Qué Incluye?
- Administración técnica de áreas comunes
- Planificación de mantenimiento preventivo
- Gestión de proveedores y contratistas
- Informes periódicos de estado de infraestructura
- Asesoría en mejoras y ampliaciones

## ¿Por Qué es Importante?
Muchos condominios en Santa Cruz carecen de supervisión técnica profesional, lo que lleva a deterioro prematuro de instalaciones y costos elevados de reparación.

Con nuestro servicio, los propietarios pueden estar tranquilos sabiendo que su inversión está en manos de profesionales con más de 10 años de experiencia en construcción.`,
    image: "https://placehold.co/1200x600/0c1f3a/2c7be5?text=Supervisión+Condominios",
    date: "2024-11-05",
    author: "Equipo Cistacruz",
    category: "Noticias",
    readTime: "3 min",
  },
];

export const BLOG_CATEGORIES = [
  "Todos",
  "Avances",
  "Tips",
  "Noticias",
  "Proyectos",
] as const;

export const PARTNERS: Partner[] = [
  { name: "Fierro Bolivia", logo: "https://placehold.co/200x80/f1f5f9/1a3a5c?text=Fierro+Bolivia" },
  { name: "Cerámica Coboce", logo: "https://placehold.co/200x80/f1f5f9/1a3a5c?text=Coboce" },
  { name: "Incerpaz", logo: "https://placehold.co/200x80/f1f5f9/1a3a5c?text=Incerpaz" },
  { name: "Plastiforte", logo: "https://placehold.co/200x80/f1f5f9/1a3a5c?text=Plastiforte" },
  { name: "Tigre Bolivia", logo: "https://placehold.co/200x80/f1f5f9/1a3a5c?text=Tigre" },
  { name: "Sika Bolivia", logo: "https://placehold.co/200x80/f1f5f9/1a3a5c?text=Sika" },
];
