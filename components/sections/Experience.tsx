"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  experienceMetrics,
  skillPillars,
} from "@/lib/data/portfolio";
import { SectionShell } from "@/components/ui/section";

function parseMetric(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, rest: value };
  return { num: Number(match[1]), rest: match[2] ?? "" };
}

function AnimatedMetric({ value }: { value: string }) {
  const { num, rest } = parseMetric(value);
  const [display, setDisplay] = useState(0);
  const done = useRef(false);

  useEffect(() => {
    if (done.current || num === 0) {
      setDisplay(num);
      return;
    }
    const ctrl = animate(0, num, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1] as const,
      onUpdate: (v) => setDisplay(Math.round(v)),
      onComplete: () => {
        done.current = true;
      },
    });
    return () => ctrl.stop();
  }, [num]);

  return (
    <span className="font-mono text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
      {display}
      {rest}
    </span>
  );
}

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });

  return (
    <SectionShell
      id="experience"
      index="04"
      title="Trayectoria medida en entregas."
      lead="Métricas orientativas y pilares que guían cómo diseño sistemas con IA y full stack."
    >
      <div ref={ref} className="mt-16">
        <dl className="grid gap-0 sm:grid-cols-2">
          {experienceMetrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.05 * i }}
              className="border-t border-[var(--line)] py-8 px-6 sm:odd:border-r sm:odd:pr-10"
            >
              <dt className="font-mono text-xs uppercase tracking-wider text-[var(--muted)]">
                {m.label}
              </dt>
              <dd className="mt-3">
                {inView ? (
                  <>
                    <AnimatedMetric value={m.value} />
                    {m.suffix && (
                      <span className="font-mono text-2xl text-[var(--accent)]">
                        {m.suffix}
                      </span>
                    )}
                  </>
                ) : (
                  <span className="font-mono text-3xl text-[var(--foreground)]">
                    0
                  </span>
                )}
              </dd>
            </motion.div>
          ))}
        </dl>

        <div className="mt-12 border-t border-[var(--line)]">
          {skillPillars.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.15 + i * 0.06 }}
              className="grid gap-3 border-b border-[var(--line)] py-8 sm:grid-cols-[12rem_1fr]"
            >
              <h3 className="font-medium text-[var(--foreground)]">{s.title}</h3>
              <p className="text-sm leading-relaxed text-[var(--muted)]">
                {s.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
