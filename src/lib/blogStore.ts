export type PostStatus = "Borrador" | "Publicado";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  status: PostStatus;
  date: string;
  readTime: string;
  isStatic?: boolean;
}

const STORAGE_KEY  = "synora-blog-posts";
const VIEWS_KEY    = "synora-blog-views";
const OVERRIDES_KEY = "synora-blog-overrides";

// ─── Static cornerstone posts ────────────────────────────────────────────────
export const STATIC_POSTS: BlogPost[] = [
  {
    id: "static-1",
    title: "Qué es la automatización operativa para pymes y por qué cambia las reglas del juego",
    slug: "que-es-la-automatizacion-operativa-para-pymes",
    excerpt: "La automatización operativa no es instalar un CRM ni usar Excel mejor. Es conectar todas tus herramientas para que los procesos ocurran solos.",
    content: "",
    category: "Guía definitiva",
    status: "Publicado",
    date: "2025-05-01",
    readTime: "8 min",
    isStatic: true,
  },
  {
    id: "static-2",
    title: "Cómo reducir los no-shows en tu clínica dental un 80% con recordatorios automáticos",
    slug: "como-reducir-no-shows-clinica-dental",
    excerpt: "Una clínica dental media pierde entre 1.200€ y 4.000€ al mes por citas no atendidas. Te mostramos el sistema exacto de recordatorios multicapa.",
    content: "",
    category: "Sector Clínicas",
    status: "Publicado",
    date: "2025-05-08",
    readTime: "6 min",
    isStatic: true,
  },
  {
    id: "static-3",
    title: "Cómo automatizar el seguimiento de clientes en una inmobiliaria (sin cambiar de CRM)",
    slug: "automatizar-seguimiento-clientes-inmobiliaria",
    excerpt: "El 70% de los leads inmobiliarios se pierden por falta de seguimiento. Aquí está la solución paso a paso.",
    content: "",
    category: "Sector Inmobiliario",
    status: "Publicado",
    date: "2025-05-12",
    readTime: "9 min",
    isStatic: true,
  },
  {
    id: "static-4",
    title: "7 ejemplos reales de automatización para empresas de reformas (con flujos incluidos)",
    slug: "ejemplos-automatizacion-empresa-reformas",
    excerpt: "Desde el primer WhatsApp del cliente hasta el cobro final. Los 7 procesos que toda empresa de reformas puede automatizar hoy.",
    content: "",
    category: "Sector Servicios",
    status: "Publicado",
    date: "2025-05-15",
    readTime: "7 min",
    isStatic: true,
  },
  {
    id: "static-5",
    title: "¿Cuánto cuesta automatizar una clínica médica privada? Precios reales en 2025",
    slug: "cuanto-cuesta-automatizar-clinica-medica-privada",
    excerpt: "La pregunta que nadie responde con honestidad. Precios reales, sin letra pequeña, con ROI calculado.",
    content: "",
    category: "Precios y ROI",
    status: "Publicado",
    date: "2025-05-19",
    readTime: "5 min",
    isStatic: true,
  },
  {
    id: "static-6",
    title: "Cómo captar propietarios en piloto automático usando IA",
    slug: "como-captar-propietarios-en-piloto-automatico-usando-ia",
    excerpt: "La automatización no reemplaza al agente inmobiliario, sino que le devuelve el tiempo para cerrar ventas. Descubre cómo Synora capta y cualifica propietarios 24/7.",
    content: "",
    category: "Sector Inmobiliario",
    status: "Publicado",
    date: "2026-05-19",
    readTime: "6 min",
    isStatic: true,
  },
  {
    id: "static-7",
    title: "Mejores herramientas de valoración inmobiliaria instantánea con IA",
    slug: "mejores-herramientas-valoracion-inmobiliaria",
    excerpt: "Compara los AVMs (Automated Valuation Models) más precisos del mercado y descubre cómo integrar la valoración instantánea para captar más leads.",
    content: "",
    category: "Sector Inmobiliario",
    status: "Publicado",
    date: "2026-05-19",
    readTime: "7 min",
    isStatic: true,
  },
  {
    id: "static-8",
    title: "Guía Definitiva de Automatización e IA para Agencias Inmobiliarias (2026)",
    slug: "guia-automatizacion-inmobiliarias",
    excerpt: "Descubre cómo las inmobiliarias top están usando la Inteligencia Artificial para multiplicar sus captaciones y automatizar todo el seguimiento de leads.",
    content: "",
    category: "Guía definitiva",
    status: "Publicado",
    date: "2026-05-19",
    readTime: "12 min",
    isStatic: true,
  },
  {
    id: "static-9",
    title: "Property Intelligence: Qué es y cómo ayuda a vender inmuebles más rápido",
    slug: "property-intelligence-que-es",
    excerpt: "El Property Intelligence transforma datos masivos del sector inmobiliario en decisiones estratégicas. Aprende a usarlo para fijar precios precisos y acortar los plazos de venta.",
    content: "",
    category: "Sector Inmobiliario",
    status: "Publicado",
    date: "2026-05-19",
    readTime: "8 min",
    isStatic: true,
  },
];

// ─── Dynamic posts ────────────────────────────────────────────────────────────
function loadPosts(): BlogPost[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as BlogPost[]) : [];
  } catch { return []; }
}
function savePosts(posts: BlogPost[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

// ─── Static post overrides (allows editing published/static posts) ─────────────
function loadOverrides(): Record<string, Partial<BlogPost>> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(OVERRIDES_KEY);
    return raw ? (JSON.parse(raw) as Record<string, Partial<BlogPost>>) : {};
  } catch { return {}; }
}
function saveOverrides(overrides: Record<string, Partial<BlogPost>>): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(OVERRIDES_KEY, JSON.stringify(overrides));
}
function applyOverride(post: BlogPost): BlogPost {
  const overrides = loadOverrides();
  return overrides[post.id] ? { ...post, ...overrides[post.id] } : post;
}

// ─── View counting ─────────────────────────────────────────────────────────────
function loadViews(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(VIEWS_KEY);
    return raw ? (JSON.parse(raw) as Record<string, number>) : {};
  } catch { return {}; }
}
function saveViews(views: Record<string, number>): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(VIEWS_KEY, JSON.stringify(views));
}

export function incrementViews(slug: string): void {
  const views = loadViews();
  views[slug] = (views[slug] || 0) + 1;
  saveViews(views);
}
export function getViewsForSlug(slug: string): number {
  return loadViews()[slug] || 0;
}
export function getTotalViews(): number {
  return Object.values(loadViews()).reduce((sum, v) => sum + v, 0);
}

// ─── CRUD ─────────────────────────────────────────────────────────────────────
export function getAllPosts(): BlogPost[] {
  return [...STATIC_POSTS.map(applyOverride), ...loadPosts()];
}
export function getDynamicPosts(): BlogPost[] {
  return loadPosts();
}
export function getPublishedPosts(): BlogPost[] {
  return getAllPosts().filter((p) => p.status === "Publicado");
}
export function getPostById(id: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.id === id);
}
/** Only dynamic posts — static posts have their own file-based routes */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return getDynamicPosts().find((p) => p.slug === slug);
}

export function createPost(post: Omit<BlogPost, "id">): BlogPost {
  const newPost: BlogPost = { ...post, id: `post-${Date.now()}` };
  savePosts([...loadPosts(), newPost]);
  return newPost;
}

/** Works for both static (saves override) and dynamic posts */
export function updatePost(id: string, updates: Partial<BlogPost>): BlogPost | null {
  const staticPost = STATIC_POSTS.find((p) => p.id === id);
  if (staticPost) {
    const overrides = loadOverrides();
    overrides[id] = { ...(overrides[id] || {}), ...updates };
    saveOverrides(overrides);
    return { ...staticPost, ...overrides[id] };
  }
  const posts = loadPosts();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return null;
  posts[idx] = { ...posts[idx], ...updates };
  savePosts(posts);
  return posts[idx];
}

export function deletePost(id: string): void {
  savePosts(loadPosts().filter((p) => p.id !== id));
}

export function togglePostStatus(id: string): BlogPost | null {
  const post = getPostById(id);
  if (!post) return null;
  const newStatus: PostStatus = post.status === "Publicado" ? "Borrador" : "Publicado";
  return updatePost(id, { status: newStatus });
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}
