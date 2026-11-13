import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import { PortfolioShell } from "@/components/shell/PortfolioShell";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const site = "https://willyabad.dev";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "Willy Abad — Ingeniero de agentes de IA y full stack",
    template: "%s — Willy Abad",
  },
  description:
    "Portafolio de Willy Abad: plataformas de firma electrónica, identidad biométrica, agentes de IA y MCP, video con IA y arquitectura de microservicios full stack.",
  keywords: [
    "Willy Abad",
    "ingeniero IA",
    "desarrollador full stack",
    "Next.js",
    "TypeScript",
    "LangChain",
    "OpenAI",
    "firma electrónica",
    "PAdES",
    "MCP",
    "agentes de IA",
    "NestJS",
    "automatización",
  ],
  authors: [{ name: "Willy Abad", url: site }],
  creator: "Willy Abad",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: site,
    siteName: "Willy Abad",
    title: "Willy Abad — Ingeniero de agentes de IA y full stack",
    description:
      "Agentes de IA que operan sistemas reales: servidores MCP, orquestación multi-agente y plataformas de firma electrónica en producción.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Willy Abad — Ingeniero de agentes de IA y full stack",
    description:
      "Agentes de IA que operan sistemas reales: servidores MCP, orquestación multi-agente y plataformas de firma electrónica en producción.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#12100e",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Willy Abad",
    url: site,
    jobTitle: "Ingeniero de agentes de IA / Desarrollador full stack",
    description:
      "Ingeniero de agentes de IA: servidores MCP, orquestación multi-agente, Claude Agent SDK, RAG y plataformas full stack de firma electrónica.",
    email: "mailto:contacto@willyabad.dev",
    knowsAbout: [
      "Agentes de IA",
      "Model Context Protocol (MCP)",
      "Sistemas multi-agente",
      "Claude Agent SDK",
      "Inteligencia artificial",
      "Firma electrónica",
      "Desarrollo full stack",
      "Next.js",
      "TypeScript",
      "RAG",
      "LangChain",
    ],
    sameAs: ["https://github.com/willyabad"],
  };

  return (
    <html
      lang="es"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--background)] font-sans text-[var(--foreground)]">
        <PortfolioShell>
          {children}
          <Script
            id="json-ld-person"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </PortfolioShell>
      </body>
    </html>
  );
}
