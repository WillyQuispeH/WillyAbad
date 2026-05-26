"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";
import { techStack } from "@/lib/data/portfolio";
import { SectionShell } from "@/components/ui/section";

const categoryLabels: Record<string, string> = {
  Frontend: "Front-end",
  Backend: "Backend",
  AI: "IA",
  Databases: "Bases de datos",
  DevOps: "DevOps",
  Cloud: "Nube",
};

export function TechStack() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  const grouped = useMemo(() => {
    const map = new Map<string, typeof techStack>();
    for (const t of techStack) {
      const list = map.get(t.category) ?? [];
      list.push(t);
      map.set(t.category, list);
    }
    return Array.from(map.entries());
  }, []);

  return (
    <SectionShell
      id="stack"
      index="02"
      title="Herramientas elegidas por palanca."
      lead="Un stack afinado para interfaces tipadas, servicios fiables y cargas de IA que merecen estar en producción."
    >
      <div ref={ref} className="mt-16 divide-y divide-[var(--line)]">
        {grouped.map(([category, items], gi) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.05 * gi, duration: 0.4 }}
            className="grid gap-4 py-8 sm:grid-cols-[10rem_1fr] sm:items-baseline sm:gap-10"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--accent)]">
              {categoryLabels[category] ?? category}
            </p>
            <p className="font-mono text-sm leading-loose text-[var(--foreground)]">
              {items.map((t) => t.name).join("  ·  ")}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
