export type TechItem = {
  name: string;
  category: "Frontend" | "Backend" | "AI" | "Databases" | "DevOps" | "Cloud";
};

export const techStack: TechItem[] = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "OpenAI", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "Agentes", category: "AI" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "Redis", category: "Databases" },
  { name: "Docker", category: "DevOps" },
  { name: "GitHub", category: "DevOps" },
  { name: "Vercel", category: "Cloud" },
  { name: "AWS", category: "Cloud" },
  { name: "Linux", category: "Cloud" },
  { name: "Kubernetes", category: "DevOps" },
];

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  year: string;
};

export const projects: Project[] = [
  {
    id: "ai-doc-editor",
    title: "Editor de documentos con IA",
    tagline: "Inteligencia colaborativa para contenido estructurado",
    description:
      "Superficie de documentos lista para producción: redacción asistida por IA, diffs semánticos y colaboración en tiempo real, pensada para equipos que tratan el contenido como infraestructura.",
    highlights: [
      "Transformaciones operacionales + completions en streaming",
      "Sugerencias de IA con roles y trazas de auditoría",
      "Modelo de plugins extensible para flujos enterprise",
    ],
    stack: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "Redis"],
    year: "2024",
  },
  {
    id: "chatpdf",
    title: "Sistema ChatPDF",
    tagline: "RAG sobre grandes corpora con respuestas citables",
    description:
      "Stack de recuperación de extremo a extremo para dominios con mucho PDF: fragmentación, embeddings, búsqueda híbrida y respuestas fundamentadas con citas en línea.",
    highlights: [
      "Recuperación híbrida vectorial + palabras clave",
      "UX en streaming con tarjetas de fuentes",
      "Aislamiento por tenant y medición de uso",
    ],
    stack: ["Python", "LangChain", "PostgreSQL", "OpenAI"],
    year: "2024",
  },
  {
    id: "smart-home-ai",
    title: "Asistente de hogar inteligente con IA",
    tagline: "Control en lenguaje natural con barandillas de seguridad",
    description:
      "Capa de orquestación voice-first que mapea intención a grafos de dispositivos, con fallbacks deterministas y enrutamiento local que preserva la privacidad.",
    highlights: [
      "Clasificación de intención + máquinas de estados de dispositivos",
      "Caché en el edge para reacciones en menos de 100 ms",
      "DAGs de automatización observables",
    ],
    stack: ["Node.js", "NestJS", "Redis", "Docker"],
    year: "2023",
  },
  {
    id: "whatsapp-automation",
    title: "Automatización de WhatsApp",
    tagline: "Mensajería fiable a escala",
    description:
      "Colas duraderas, webhooks idempotentes y gobernanza de plantillas para engagement de alto volumen sin sacrificar entregabilidad.",
    highlights: [
      "Workers conscientes de la contrapresión",
      "Versionado de plantillas + aprobaciones",
      "Analítica completa de entregas",
    ],
    stack: ["Node.js", "PostgreSQL", "Redis", "Docker"],
    year: "2023",
  },
  {
    id: "ai-legal-docs",
    title: "Generador legal de documentos con IA",
    tagline: "Bibliotecas de cláusulas + generación controlada",
    description:
      "Generación estructurada desde bancos de cláusulas con pipelines de validación, revisión human-in-the-loop y exportación a formatos estándar del despacho.",
    highlights: [
      "Salidas restringidas por esquema",
      "UI de revisión consciente del diff",
      "Registros de generación inmutables",
    ],
    stack: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL"],
    year: "2024",
  },
  {
    id: "video-automation",
    title: "Plataforma de automatización de vídeo",
    tagline: "Pipelines de render como código",
    description:
      "Jobs componibles para ingestión, transcodificación, enriquecimiento con IA y distribución, con scheduling consciente del coste y observabilidad desde el fotograma cero.",
    highlights: [
      "Orquestación de jobs en DAG",
      "Scheduling consciente de GPU",
      "Linaje por activo y atribución de coste",
    ],
    stack: ["Python", "Docker", "Cloud", "Redis"],
    year: "2025",
  },
];

export const experienceMetrics = [
  { label: "Sistemas en producción entregados", value: "20+", suffix: "" },
  { label: "APIs diseñadas y endurecidas", value: "30+", suffix: "" },
  { label: "Integraciones de IA en el mundo real", value: "15+", suffix: "" },
  { label: "Años construyendo full stack", value: "6", suffix: "+" },
];

export const skillPillars = [
  {
    title: "Arquitectura",
    body: "Servicios orientados a eventos, monolitos modulares y límites claros: diseñados para el cambio, no para la ceremonia.",
  },
  {
    title: "Integraciones de IA",
    body: "RAG, agentes, herramientas, evals y guardrails: modelos donde aportan palanca, no pasivo.",
  },
  {
    title: "Streaming y tiempo real",
    body: "SSE/WebSockets, UIs optimistas y workers conscientes de la contrapresión para superficies nítidas.",
  },
  {
    title: "Datos y vectores",
    body: "Postgres como fuente de verdad, Redis para caminos calientes y almacenes vectoriales afinados para recall a escala.",
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/willyabad" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
];
