import type { Metadata, Viewport } from "next";
import { Fira_Code } from "next/font/google";
import Script from "next/script";
import { PortfolioShell } from "@/components/shell/PortfolioShell";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const site = "https://willyabad.dev";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "Willy Abad — Ingeniero de IA y desarrollador full stack",
    template: "%s — Willy Abad",
  },
  description:
    "Portafolio de Willy Abad: sistemas de IA, editores de documentos inteligentes, automatización, arquitectura escalable y entrega full stack.",
  keywords: [
    "Willy Abad",
    "ingeniero IA",
    "desarrollador full stack",
    "Next.js",
    "TypeScript",
    "LangChain",
    "OpenAI",
    "editor de documentos",
    "automatización",
  ],
  authors: [{ name: "Willy Abad", url: site }],
  creator: "Willy Abad",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: site,
    siteName: "Willy Abad",
    title: "Willy Abad — Ingeniero de IA y desarrollador full stack",
    description:
      "Sistemas de IA, automatización y software escalable con Next.js, TypeScript e infraestructura moderna.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Willy Abad — Ingeniero de IA y desarrollador full stack",
    description:
      "Sistemas de IA, automatización y software escalable con Next.js, TypeScript e infraestructura moderna.",
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
    jobTitle: "Ingeniero de IA / Desarrollador full stack",
    description:
      "Portafolio profesional: sistemas de IA, RAG, editores de documentos, automatización y arquitectura full stack con Next.js y TypeScript.",
    email: "mailto:contacto@willyabad.dev",
    knowsAbout: [
      "Inteligencia artificial",
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
      className={`${firaCode.variable} h-full antialiased`}
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
