"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionShell } from "@/components/ui/section";

const timeline = [
  {
    period: "2026",
    title: "Agentes, MCP e identidad",
    body: "Servidor MCP con OAuth para operar Portalfirma desde agentes, app de escritorio con agente integrado y validación biométrica con firma PAdES.",
  },
  {
    period: "2025 — hoy",
    title: "Video con IA a escala",
    body: "Clipiku: análisis de streams con Whisper y SigLIP en GPU serverless, render en la nube y campañas generadas por agentes.",
  },
  {
    period: "2023 — hoy",
    title: "Plataforma de firma electrónica",
    body: "Portalfirma: de API única a ~34 servicios y apps, con autoridades certificadoras, notarías, pagos e IA sobre documentos.",
  },
  {
    period: "Origen",
    title: "Full stack para clientes",
    body: "Portales de reclamos, gestión de inversiones, herramientas PDF y análisis funcional para empresas en Chile.",
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
            Construyo plataformas donde la validez legal no es opcional: firma
            electrónica, criptografía de documentos e identidad, con IA aplicada
            donde realmente ahorra trabajo. Priorizo contratos claros, seguridad
            desde el diseño y sistemas que el equipo puede mantener sin miedo.
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
