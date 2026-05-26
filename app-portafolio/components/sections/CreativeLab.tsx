"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionShell } from "@/components/ui/section";

const principles = [
  {
    title: "Contrato antes que demo",
    body: "Cada integración de modelo define entradas, salidas, límites y fallbacks. Lo que no está especificado no entra a producción.",
  },
  {
    title: "Observabilidad como feature",
    body: "Trazas, métricas y coste por request desde el primer despliegue. Sin eso, la IA es una caja negra cara.",
  },
  {
    title: "UX que aguanta carga",
    body: "Streaming, estados optimistas y workers con contrapresión: la interfaz se mantiene nítida cuando el sistema trabaja duro.",
  },
];

const focusLine =
  "APIs · streaming · vectores · evals · entrega con métricas desde el día uno";

export function CreativeLab() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <SectionShell
      id="metodo"
      index="05"
      title="Cómo trabajo cuando el sistema importa."
      lead="Sin efectos decorativos: criterios explícitos para producto, datos y modelos en el mismo plano."
    >
      <div ref={ref} className="mt-16 lg:grid lg:grid-cols-2 lg:gap-16">
        <motion.blockquote
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-[clamp(1.35rem,3vw,2rem)] font-medium leading-snug tracking-tight text-[var(--foreground)]"
        >
          El portafolio no es un PDF con animaciones. Es la misma disciplina que
          aplico en producto: claridad, límites y entrega medible.
        </motion.blockquote>
        <ul className="mt-12 space-y-0 lg:mt-0">
          {principles.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, x: 12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.08 * i }}
              className="border-t border-[var(--line)] py-7"
            >
              <h3 className="text-base font-semibold text-[var(--foreground)]">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {p.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="mt-14 border-t border-[var(--line)] pt-8 font-mono text-xs uppercase tracking-[0.2em] text-[var(--muted)]"
      >
        <span className="text-[var(--accent)]">Foco</span>
        <span className="mx-3 text-[var(--line)]" aria-hidden>
          —
        </span>
        {focusLine}
      </motion.p>
    </SectionShell>
  );
}
