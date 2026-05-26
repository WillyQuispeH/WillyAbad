import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  index: string;
  title: string;
  lead?: string;
  className?: string;
};

export function SectionHeader({
  id,
  index,
  title,
  lead,
  className,
}: SectionHeaderProps & { id?: string }) {
  return (
    <header className={cn("max-w-[42rem]", className)}>
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[var(--muted)]">
        <span className="text-[var(--accent)]">{index}</span>
      </p>
      <h2
        id={id}
        className="mt-4 text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-tight text-[var(--foreground)]"
      >
        {title}
      </h2>
      {lead && (
        <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-[var(--muted)]">
          {lead}
        </p>
      )}
    </header>
  );
}

export function SectionShell({
  id,
  index,
  title,
  lead,
  children,
  className,
}: SectionHeaderProps & {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={cn(
        "section-pad scroll-mt-28 border-b border-[var(--line)]",
        className,
      )}
    >
      <div className="page-wrap">
        <SectionHeader
          id={`${id}-heading`}
          index={index}
          title={title}
          lead={lead}
        />
        {children}
      </div>
    </section>
  );
}
