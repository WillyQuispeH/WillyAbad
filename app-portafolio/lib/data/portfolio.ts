export type TechItem = {
  name: string;
  category: "Frontend" | "Backend" | "AI" | "Databases" | "DevOps" | "Cloud";
};

export const techStack: TechItem[] = [
  { name: "Next.js", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "TailwindCSS", category: "Frontend" },
  { name: "Zustand", category: "Frontend" },
  { name: "Electron", category: "Frontend" },
  { name: "GSAP", category: "Frontend" },
  { name: "TipTap", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "FastAPI", category: "Backend" },
  { name: "Socket.IO", category: "Backend" },
  { name: "pyHanko / PAdES", category: "Backend" },
  { name: "OAuth 2.0 / PKCE", category: "Backend" },
  { name: "OpenAI", category: "AI" },
  { name: "Claude Agent SDK", category: "AI" },
  { name: "MCP", category: "AI" },
  { name: "Gemini", category: "AI" },
  { name: "LangChain", category: "AI" },
  { name: "Agentes", category: "AI" },
  { name: "Whisper", category: "AI" },
  { name: "Google Vision / Tesseract", category: "AI" },
  { name: "ElevenLabs", category: "AI" },
  { name: "PostgreSQL", category: "Databases" },
  { name: "pgvector", category: "Databases" },
  { name: "Pinecone", category: "Databases" },
  { name: "Redis", category: "Databases" },
  { name: "Docker", category: "DevOps" },
  { name: "nginx", category: "DevOps" },
  { name: "GitHub Actions", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "AWS S3", category: "Cloud" },
  { name: "Cloudflare R2", category: "Cloud" },
  { name: "Modal (GPU serverless)", category: "Cloud" },
  { name: "Vercel", category: "Cloud" },
  { name: "Linux", category: "Cloud" },
];

export type Project = {
  id: string;
  title: string;
  context?: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  year: string;
};

export const projects: Project[] = [
  {
    id: "portalfirma",
    title: "Portalfirma",
    context: "Firma electrónica · Chile",
    tagline: "Plataforma de firma electrónica, notaría virtual y flujos documentales",
    description:
      "Plataforma en producción para que empresas y personas firmen documentos con firma electrónica simple y avanzada (FES/FEA), los envíen a notaría y gestionen trámites vehiculares e inmobiliarios. Arquitectura de ~20 microservicios y 13 aplicaciones front-end, con más de 1.600 commits desde 2023.",
    highlights: [
      "Servidor MCP remoto (Streamable HTTP + OAuth 2.0 con DCR y PKCE) que expone 13 herramientas a agentes de IA",
      "Integración con autoridades certificadoras CDS y E-Cert, más firma PAdES propia con certificados P12 y pyHanko",
      "Análisis de documentos con IA: OCR + LLM sobre certificados vehiculares y cédulas, RAG con Pinecone y Postgres",
      "API pública para partners con servidor de autorización OAuth 2.0, webhooks y tiempo real con Socket.IO",
      "Pagos con Flow.cl y MercadoPago, notificaciones por WhatsApp Cloud API y correo transaccional",
      "Flujo de firmante con biometría facial, editor de plantillas y constructor visual de procesos",
    ],
    stack: [
      "Next.js",
      "NestJS",
      "Express",
      "FastAPI",
      "PostgreSQL",
      "OpenAI",
      "Gemini",
      "Pinecone",
      "MCP",
      "AWS S3",
      "Docker",
      "nginx",
    ],
    year: "2023 — hoy",
  },
  {
    id: "clipiku",
    title: "Clipiku",
    context: "SaaS · Video con IA",
    tagline: "De stream en vivo a clips virales con IA y render en GPU",
    description:
      "SaaS para streamers (principalmente Kick) que convierte momentos del directo en clips verticales para TikTok, Shorts y Reels: auto-clipping, subtítulos, videos narrativos generados con IA, publicación programada multi-red y campañas de marketing generadas por agentes.",
    highlights: [
      "Análisis de stream completo en Modal: Whisper large-v3-turbo en GPU L4, clasificación de frames con SigLIP y detección de momentos",
      "Orquestador multi-agente que investiga marca, tendencias y competencia y genera planes por red (Instagram, TikTok, X, LinkedIn, YouTube, Bluesky…)",
      "Motores de render compartidos en TypeScript: la vista previa del navegador y el render en la nube producen el mismo MP4",
      "Backend NestJS con ~40 módulos: créditos, wallet, suscripciones, publicación programada y OAuth social",
      "Pagos con Stripe, PayPal y Polar; blog SEO con Ghost CMS headless",
    ],
    stack: [
      "Next.js",
      "NestJS",
      "Express",
      "Python",
      "Modal",
      "OpenAI",
      "Whisper",
      "ElevenLabs",
      "ffmpeg",
      "PostgreSQL",
      "Cloudflare R2",
      "Docker",
    ],
    year: "2025 — hoy",
  },
  {
    id: "matchoncard",
    title: "MatchOnCard",
    context: "Identidad biométrica",
    tagline: "Validación de identidad en 3 pasos desde el teléfono del firmante",
    description:
      "API de verificación biométrica que contrasta huella, rostro y firma manuscrita contra la cédula de identidad chilena, y firma el PDF con evidencia criptográfica. Diseñada con consentimiento explícito, derechos de acceso y eliminación, y auditoría de cada descarga de evidencia.",
    highlights: [
      "Matching en el dispositivo (huella, rostro, OCR del RUN) y regla de decisión 2 de 3 factores",
      "Evidencia cifrada con AES-256-GCM en WebCrypto, subida directa a R2 y llaves por objeto envueltas con KEK rotable",
      "PDF certificado con DocMDP y firmas PAdES incrementales por firmante, con sello visible y hash de evidencia",
      "Webhooks firmados con HMAC-SHA256 y reintentos con backoff exponencial",
    ],
    stack: [
      "NestJS",
      "FastAPI",
      "pyHanko",
      "Next.js",
      "PostgreSQL",
      "Cloudflare R2",
      "Docker",
      "nginx",
    ],
    year: "2026",
  },
  {
    id: "app-studio",
    title: "App Studio",
    context: "Video comercial con IA",
    tagline: "Videos promocionales de apps generados por un agente",
    description:
      "Estudio que toma capturas, logo y clips de una app y produce videos promocionales verticales y cuadrados: Claude reconstruye las pantallas como escenas HTML animadas, añade música, locución y transiciones, y el render corre en la nube.",
    highlights: [
      "Claude Agent SDK con una skill dedicada para componer escenas animadas con GSAP",
      "Locución con ElevenLabs, vista previa en vivo y ciclo de cambios conversacional",
      "Render en Modal, entrega en Cloudflare R2 y copy para redes generado automáticamente",
    ],
    stack: [
      "Claude Agent SDK",
      "Next.js",
      "Express",
      "GSAP",
      "ElevenLabs",
      "Modal",
      "Cloudflare R2",
      "Docker",
    ],
    year: "2026",
  },
  {
    id: "rag-multidoc",
    title: "API RAG multi-documento",
    context: "IA · Recuperación",
    tagline: "Preguntas y resúmenes sobre múltiples PDF con respuestas fundamentadas",
    description:
      "API que divide PDFs por página, genera embeddings y los almacena en pgvector para responder preguntas y resumir sobre varios documentos a la vez, con prompts administrables.",
    highlights: [
      "Cadena LCEL de LangChain con recuperación sobre pgvector",
      "Arquitectura por capas: rutas, servicios, repositorios y modelos",
      "Prompts gestionados desde la propia API",
    ],
    stack: ["Python", "FastAPI", "LangChain", "OpenAI", "PostgreSQL", "pgvector"],
    year: "2025",
  },
  {
    id: "factura-ia",
    title: "Procesador de facturas con IA",
    context: "Automatización",
    tagline: "De PDF a datos estructurados y Excel consolidado",
    description:
      "Servicio que extrae el texto de facturas en PDF, obtiene con un LLM un JSON estructurado (emisor, receptor, ítems, totales) y consolida el historial en Excel.",
    highlights: [
      "Salida estructurada con OpenAI sobre texto extraído con pdfplumber",
      "Consolidación automática con pandas y openpyxl",
    ],
    stack: ["Python", "FastAPI", "OpenAI", "pandas"],
    year: "2025",
  },
  {
    id: "agentes-pymes",
    title: "Agentes IA para pymes",
    context: "Consultoría · Freelance",
    tagline: "Rediseño web + asistente conversacional + auditoría SEO",
    description:
      "Oferta productizada para inmobiliarias y estudios profesionales chilenos: rediseño del sitio, concepto de agente conversacional con IA y auditoría SEO, entregados por cliente.",
    highlights: [
      "Asistentes inmobiliarios con filtros en UF y rentabilidad proyectada",
      "Asistente legal para consultas de familia, civil, laboral y propiedad intelectual",
      "Propuestas de diseño y diagnóstico SEO para cada cliente",
    ],
    stack: ["HTML", "TailwindCSS", "OpenAI", "SEO"],
    year: "2026",
  },
  {
    id: "portal-reclamo",
    title: "Portal de Reclamos",
    context: "Atención al cliente",
    tagline: "Gestión de reclamos con adjuntos, estados y paneles",
    description:
      "Portal público para ingresar reclamos con archivos adjuntos y panel administrativo para gestionarlos por tipo, estado y responsable, con notificaciones por correo.",
    highlights: [
      "Panel con autenticación Clerk y dashboards de seguimiento",
      "Modelo relacional completo de reclamos, personas, archivos y estados",
    ],
    stack: ["Next.js", "Express", "TypeScript", "PostgreSQL", "Cloudinary"],
    year: "2023",
  },
  {
    id: "carguerito",
    title: "Plataforma logística",
    context: "Análisis funcional",
    tagline: "Levantamiento y diseño de una plataforma para una empresa de transportes",
    description:
      "Documento de análisis funcional (~150 páginas) para reemplazar Excel y WhatsApp en una operación de ~50 envíos diarios: procesos, casos de uso, reglas de negocio, modelo de datos y matriz de trazabilidad, más propuesta económica y validación con el cliente.",
    highlights: [
      "95 requerimientos funcionales para el MVP y 12 para la fase 2",
      "Modelo de estados y modelo conceptual y lógico de base de datos",
      "Documentación como código: Markdown → Pandoc + LaTeX",
    ],
    stack: ["Análisis de negocio", "Pandoc", "LaTeX"],
    year: "2026",
  },
];

export type AgentSystem = {
  id: string;
  kind: string;
  title: string;
  body: string;
  points: string[];
  tags: string[];
};

export const agentSystems: AgentSystem[] = [
  {
    id: "mcp-portalfirma",
    kind: "Servidor MCP remoto",
    title: "Portalfirma operable por cualquier agente",
    body: "Expuse la plataforma de firma electrónica como servidor MCP para que asistentes como Claude ingieran documentos, extraigan firmantes, envíen a firmar y consulten operaciones en nombre del usuario.",
    points: [
      "13 herramientas tipadas: ingesta, firmantes, envío a firma, firma masiva, plantillas, wallet y búsqueda RAG",
      "Streamable HTTP con OAuth 2.0, Dynamic Client Registration y PKCE S256",
      "Preparado para el directorio de conectores de Claude",
    ],
    tags: ["MCP", "OAuth 2.0", "NestJS", "RAG"],
  },
  {
    id: "agente-studio",
    kind: "Agente embebido",
    title: "Agente Portalfirma en escritorio",
    body: "Agente dentro de la app de escritorio que usa el servidor MCP como cliente y ejecuta flujos completos, con el usuario siempre en control de lo que tiene consecuencias.",
    points: [
      "Tarjeta de confirmación antes de cualquier acción que cobra, envía o notifica",
      "PIN de certificado y códigos SMS nunca entran al contexto del modelo",
      "Multi-proveedor (OpenAI / Anthropic) con claves cifradas en el llavero del sistema",
    ],
    tags: ["MCP client", "Human-in-the-loop", "Electron"],
  },
  {
    id: "orquestador-campanas",
    kind: "Sistema multi-agente",
    title: "Orquestador de campañas de Clipiku",
    body: "Un orquestador que coordina agentes de investigación y agentes por red social para producir un plan de marketing completo a partir de una marca.",
    points: [
      "5 agentes de investigación: empresa, estilo visual, tendencias, competencia y estrategia",
      "Fan-out en paralelo a 9 agentes de plataforma (Instagram, TikTok, X, LinkedIn, YouTube, Bluesky…)",
      "Salidas validadas con esquemas zod y ejecución asíncrona (202 + polling)",
    ],
    tags: ["Orquestación", "OpenAI", "zod", "Express"],
  },
  {
    id: "agente-video",
    kind: "Agente que produce código",
    title: "App Studio: video comercial por agente",
    body: "Agente construido con el Claude Agent SDK que reconstruye pantallas de una app como escenas HTML animadas, itera con el usuario por conversación y dispara el render en la nube.",
    points: [
      "Skill dedicada que encapsula el oficio de motion design",
      "Herramientas de vista previa en vivo, locución y render",
      "Ciclo de cambios conversacional hasta el MP4 final",
    ],
    tags: ["Claude Agent SDK", "Skills", "GSAP", "Modal"],
  },
  {
    id: "agentes-documentales",
    kind: "Agentes sobre documentos",
    title: "Extracción, RAG y reglas supervisadas",
    body: "Agentes que leen certificados, cédulas, contratos y facturas para convertirlos en datos estructurados y acciones dentro del flujo de firma.",
    points: [
      "OCR + LLM con salidas restringidas por esquema",
      "RAG sobre pgvector y Pinecone con respuestas citables",
      "La IA propone reglas de detección; un humano las aprueba y luego corren sin IA",
    ],
    tags: ["OpenAI", "Gemini", "Google Vision", "LangChain"],
  },
];

export const agentPrinciples = [
  {
    title: "Herramientas como contrato",
    body: "Esquemas tipados, validación de entradas y errores que el modelo puede leer y corregir.",
  },
  {
    title: "Humano donde hay consecuencias",
    body: "Pagos, envíos y notificaciones pasan por confirmación explícita, nunca por inferencia.",
  },
  {
    title: "Secretos fuera del contexto",
    body: "Credenciales, PIN y códigos se resuelven fuera del modelo; el agente solo ve referencias.",
  },
  {
    title: "Autorización estándar",
    body: "OAuth 2.0 con PKCE y registro dinámico: el agente actúa con los permisos del usuario, no con llaves maestras.",
  },
];

export const experienceMetrics = [
  { label: "Agentes especializados orquestados", value: "15", suffix: "" },
  { label: "Herramientas MCP expuestas a agentes", value: "13", suffix: "" },
  { label: "Microservicios y apps desplegables", value: "60", suffix: "+" },
  { label: "Commits en la plataforma Portalfirma", value: "1600", suffix: "+" },
  { label: "Servicios de IA integrados", value: "12", suffix: "+" },
  { label: "Años construyendo full stack", value: "6", suffix: "+" },
];

export const skillPillars = [
  {
    title: "Agentes y MCP",
    body: "Servidores MCP con OAuth 2.0, orquestación multi-agente, agentes con Claude Agent SDK y confirmación humana en cada acción que cobra, envía o notifica.",
  },
  {
    title: "Firma y criptografía",
    body: "PAdES, DocMDP, certificados P12 e integración con autoridades certificadoras (CDS, E-Cert). Evidencia cifrada con AES-256-GCM y llaves rotables.",
  },
  {
    title: "IA sobre documentos y video",
    body: "OCR + LLM para extracción estructurada, RAG con pgvector y Pinecone, transcripción con Whisper y pipelines de render en GPU serverless.",
  },
  {
    title: "Plataforma e integraciones",
    body: "Microservicios NestJS, Express y FastAPI en Docker con contenedores endurecidos; pagos (Flow, MercadoPago, Stripe, PayPal), WhatsApp, webhooks firmados y tiempo real.",
  },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/willyabad" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "X", href: "https://x.com" },
];
