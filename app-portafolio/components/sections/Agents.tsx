"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { agentPrinciples, agentSystems } from "@/lib/data/portfolio";
import { SectionShell } from "@/components/ui/section";

const flow = ["Usuario", "Agente", "Herramientas MCP", "Confirmación", "Plataforma"];

export function Agents() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <SectionShell
      id="agentes"
      index="02"
      title="Agentes que operan sistemas reales."
      lead="No chatbots: agentes con herramientas tipadas, permisos delegados y control humano, conectados a plataformas en producción donde cada acción tiene validez legal o costo."
    >
      <div ref={ref} className="mt-16">
        <motion.ol
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-wider text-[var(--muted)]"
          aria-label="Flujo de un agente"
        >
          {flow.map((step, i) => (
            <li key={step} className="flex items-center gap-3">
              <span
                className={
                  i === 1 || i === 2
                    ? "rounded border border-[var(--accent)] px-2 py-1 text-[var(--accent)]"
                    : "rounded border border-[var(--line)] px-2 py-1 text-[var(--foreground)]"
                }
              >
                {step}
              </span>
              {i < flow.length - 1 && <span aria-hidden>→</span>}
            </li>
          ))}
        </motion.ol>

        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          {agentSystems.map((a, i) => (
            <motion.article
              key={a.id}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.06 * i, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col bg-[var(--background)] p-6 sm:p-8 md:last:odd:col-span-2"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-[var(--accent)]">
                {a.kind}
              </p>
              <h3 className="mt-3 text-lg font-semibold tracking-tight text-[var(--foreground)] sm:text-xl">
                {a.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {a.body}
              </p>
              <ul className="mt-5 space-y-2">
                {a.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-3 text-sm text-[var(--foreground)] before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-[var(--accent)] before:content-['']"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <p className="mt-auto pt-6 font-mono text-xs text-[var(--muted)]">
                {a.tags.join(" · ")}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-16">
          <p className="tag">Cómo construyo agentes</p>
          <dl className="mt-6 grid gap-0 border-t border-[var(--line)] sm:grid-cols-2">
            {agentPrinciples.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.2 + i * 0.06 }}
                className="border-b border-[var(--line)] py-6 sm:odd:border-r sm:odd:pr-8 sm:even:pl-8"
              >
                <dt className="font-medium text-[var(--foreground)]">{p.title}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                  {p.body}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </SectionShell>
  );
}
