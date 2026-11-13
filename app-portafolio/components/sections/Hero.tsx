"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const navIndex = [
  { n: "01", href: "#about", label: "Sobre mí" },
  { n: "02", href: "#agentes", label: "Agentes de IA" },
  { n: "03", href: "#stack", label: "Stack" },
  { n: "04", href: "#projects", label: "Proyectos" },
  { n: "05", href: "#experience", label: "Trayectoria" },
  { n: "06", href: "#metodo", label: "Método" },
  { n: "07", href: "#contact", label: "Contacto" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const firstNameLetters = ["W", "i", "l", "l", "y"] as const;
const lastNameLetters = ["A", "b", "a", "d"] as const;

const letterEntrances = [
  { x: 0, y: -72 },
  { x: 0, y: 72 },
  { x: 72, y: 0 },
  { x: -72, y: 0 },
] as const;

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const letters = titleRef.current?.querySelectorAll<HTMLElement>("[data-letter]");
      if (!letters?.length) return;

      gsap.fromTo(
        letters,
        {
          opacity: 0,
          x: (i) => letterEntrances[i % letterEntrances.length].x,
          y: (i) => letterEntrances[i % letterEntrances.length].y,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.09,
          delay: 0.2,
        }
      );
    },
    { scope: titleRef }
  );

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center border-b border-[var(--line)]"
    >
      <div className="page-wrap w-full py-20 sm:py-24">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
          <motion.div
            // initial={{ opacity: 0, y: 28 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.7, ease }}
            className="flex flex-col"
          >
            <p className="tag text-[var(--accent)]">Ingeniero de agentes de IA · Full stack</p>

            <h1
              ref={titleRef}
              className="mt-6 whitespace-nowrap text-[clamp(3rem,9vw,6.5rem)] font-semibold leading-[0.92] tracking-tighter text-[var(--foreground)]"
              aria-label="Willy Abad"
            >
              {firstNameLetters.map((letter, i) => (
                <span key={`first-${i}`} data-letter className="inline-block">
                  {letter}
                </span>
              ))}
              <span className="inline-block w-[0.3em]" aria-hidden />
              {lastNameLetters.map((letter, i) => (
                <span key={`last-${i}`} data-letter className="inline-block">
                  {letter}
                </span>
              ))}
            </h1>

            <p className="mt-8 max-w-[38ch] text-lg leading-relaxed text-[var(--muted)] sm:text-xl">
              Construyo agentes de IA que operan sistemas reales: servidores MCP,
              orquestación multi-agente y control humano sobre plataformas en
              producción.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="#contact" className="btn-primary">
                Iniciar conversación
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link href="#agentes" className="btn-ghost">
                Ver agentes
              </Link>
            </div>
            <p className="mt-14 max-w-[52ch] text-xs leading-relaxed text-[var(--muted)]">
              MCP con OAuth 2.0, Claude Agent SDK, sistemas multi-agente, RAG y
              firma electrónica con validez legal.
            </p>
          </motion.div>

          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="flex flex-col justify-center border-t border-[var(--line)] pt-10 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0"
            aria-label="Índice del sitio"
          >
            <div>
              <p className="tag">Índice</p>
              <ol className="mt-6 divide-y divide-[var(--line)]">
                {navIndex.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-baseline justify-between gap-4 py-4 transition-colors hover:text-[var(--accent)]"
                    >
                      <span className="text-xs text-[var(--muted)] group-hover:text-[var(--accent)]">
                        {item.n}
                      </span>
                      <span className="flex-1 text-right text-base font-medium text-[var(--foreground)] group-hover:text-[var(--accent)] sm:text-lg">
                        {item.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>
            <div className="mt-12 border-t border-[var(--line)] pt-8">
              <p className="tag">Disponibilidad</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                Abierto a colaboraciones selectas en producto, plataforma y capas de
                IA con criterio de entrega.
              </p>
              <p className="mt-4 text-sm text-[var(--foreground)]">
                contacto@willyabad.dev
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
