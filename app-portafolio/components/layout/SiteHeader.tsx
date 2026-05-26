"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "Sobre mí" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Proyectos" },
  { href: "#experience", label: "Trayectoria" },
  { href: "#metodo", label: "Método" },
  { href: "#contact", label: "Contacto" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-[9980] transition-[background,border] duration-300",
        scrolled
          ? "border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--background)_92%,transparent)]"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="page-wrap flex h-14 items-center justify-between gap-6 sm:h-16">
        <Link
          href="#hero"
          className="font-mono text-sm tracking-tight text-[var(--foreground)]"
        >
          <span className="hidden text-[var(--muted)] sm:inline"> WillyAbad.dev</span>
        </Link>
        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Secciones principales"
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 font-mono text-[11px] text-[var(--muted)] transition hover:text-[var(--accent)]"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href="#contact" className="btn-primary shrink-0 !px-4 !py-2 text-xs">
          Contacto
        </Link>
      </div>
    </motion.header>
  );
}
