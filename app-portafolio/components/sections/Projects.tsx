"use client";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef, useState } from "react";
import { projects, type Project } from "@/lib/data/portfolio";
import { SectionShell } from "@/components/ui/section";
import { cn } from "@/lib/utils";

function ProjectRow({
  project,
  index,
  open,
  onToggle,
}: {
  project: Project;
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <article className="border-t border-[var(--line)]">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="grid w-full gap-4 py-8 text-left transition-colors hover:bg-[var(--surface)] sm:grid-cols-[4rem_1fr_auto] sm:items-start sm:gap-8 sm:py-10"
      >
        <span className="font-mono text-sm text-[var(--accent)]">{num}</span>
        <div>
          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
            <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)] sm:text-2xl">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-[var(--muted)]">
              {project.year}
            </span>
          </div>
          <p className="mt-2 max-w-[52ch] text-sm text-[var(--muted)]">
            {project.tagline}
          </p>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 self-center text-[var(--muted)] transition-transform sm:self-start",
            open && "rotate-180 text-[var(--accent)]",
          )}
          aria-hidden
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-dashed border-[var(--line)] bg-[var(--surface)] px-4 py-8 sm:pl-[calc(4rem+2rem)] sm:pr-10">
              <p className="max-w-[65ch] text-sm leading-relaxed text-[var(--muted)]">
                {project.description}
              </p>
              <ul className="mt-6 space-y-3">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-3 text-sm text-[var(--foreground)] before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-[var(--accent)] before:content-['']"
                  >
                    {h}
                  </li>
                ))}
              </ul>
              <p className="mt-8 font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
                Stack
              </p>
              <p className="mt-2 font-mono text-sm text-[var(--foreground)]">
                {project.stack.join(" · ")}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [openId, setOpenId] = useState<string | null>(projects[0]?.id ?? null);

  return (
    <SectionShell
      id="projects"
      index="03"
      title="Trabajo con peso de producción."
      lead="Cada entrada resume sistemas reales: datos, IA y experiencia en la misma narrativa. Expande para ver alcance y stack."
    >
      <div ref={ref} className="mt-16">
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="border-b border-[var(--line)]"
        >
          {projects.map((p, i) => (
            <ProjectRow
              key={p.id}
              project={p}
              index={i}
              open={openId === p.id}
              onToggle={() =>
                setOpenId((id) => (id === p.id ? null : p.id))
              }
            />
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}
