import { SiteHeader } from "@/components/layout/SiteHeader";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CreativeLab } from "@/components/sections/CreativeLab";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";

export default function Home() {
  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10003] focus:m-0 focus:h-auto focus:w-auto focus:overflow-visible focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#1a1208] focus:[clip:auto]"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <CreativeLab />
        <Contact />
      </main>
      <footer className="border-t border-[var(--line)] py-12">
        <div className="page-wrap flex flex-col gap-4 font-mono text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Willy Abad</p>
          <p>
            Ingeniero de IA y desarrollador full stack ·{" "}
            <a
              href="mailto:contacto@willyabad.dev"
              className="text-[var(--foreground)] underline-offset-2 hover:text-[var(--accent)] hover:underline"
            >
              contacto@willyabad.dev
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
