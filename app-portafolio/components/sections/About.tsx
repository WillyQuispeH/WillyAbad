"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionShell } from "@/components/ui/section";

const timeline = [
  {
    period: "2024 — hoy",
    title: "Producto nativo en IA",
    body: "RAG, agentes y UX en un solo hilo: recuperación, streaming y gobernanza listos para carga real.",
  },
  {
    period: "Era documentos",
    title: "Editores y flujos regulados",
    body: "Colaboración, aprobaciones y automatización alrededor de contenido que no admite improvisación.",
  },
  {
    period: "Núcleo",
    title: "Arquitectura bajo presión",
    body: "Colas, cachés y límites de servicio que sobreviven picos y crecimiento de equipo.",
  },
  {
    period: "Origen",
    title: "Full stack de base",
    body: "APIs, modelado de datos e infra como código con DX como requisito, no como adorno.",
  },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <SectionShell
      id="about"
      index="01"
      title="Software que responde con criterio de sistema."
      lead="Diseño y despliego capas inteligentes para equipos que necesitan coherencia entre modelo, datos y experiencia cuando el tráfico y la gobernanza ya no son opcionales."
    >
      <div ref={ref} className="mt-16 lg:grid lg:grid-cols-12 lg:gap-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5"
        >
          <p className="text-base leading-relaxed text-[var(--muted)]">
            Mi trabajo cruza editores asistidos por IA, APIs en streaming y
            recuperación vectorial. Priorizo contratos claros, observabilidad desde
            el primer despliegue y superficies que el equipo puede mantener sin
            miedo.
          </p>
        </motion.div>
        <ol className="mt-12 space-y-0 lg:col-span-7 lg:mt-0">
          {timeline.map((item, i) => (
            <motion.li
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06 * i, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-4 border-t border-[var(--line)] py-8 sm:grid-cols-[7rem_1fr]"
            >
              <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
                {item.period}
              </p>
              <div>
                <h3 className="text-lg font-medium text-[var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {item.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </SectionShell>
  );
}
