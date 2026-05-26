"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type Action = {
  id: string;
  label: string;
  href: string;
};

const actions: Action[] = [
  { id: "hero", label: "Inicio", href: "#hero" },
  { id: "about", label: "Sobre mí", href: "#about" },
  { id: "stack", label: "Stack", href: "#stack" },
  { id: "projects", label: "Proyectos", href: "#projects" },
  { id: "experience", label: "Trayectoria", href: "#experience" },
  { id: "metodo", label: "Método", href: "#metodo" },
  { id: "contact", label: "Contacto", href: "#contact" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter(
      (a) =>
        a.label.toLowerCase().includes(q) || a.id.toLowerCase().includes(q),
    );
  }, [query]);

  const go = useCallback((href: string) => {
    setOpen(false);
    setQuery("");
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => {
          if (!prev) setActive(0);
          return !prev;
        });
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onNav = (e: KeyboardEvent) => {
      if (filtered.length === 0) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((i) => (i + 1) % filtered.length);
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((i) => (i - 1 + filtered.length) % filtered.length);
      }
      if (e.key === "Enter" && filtered[active]) {
        e.preventDefault();
        go(filtered[active].href);
      }
    };
    window.addEventListener("keydown", onNav);
    return () => window.removeEventListener("keydown", onNav);
  }, [open, filtered, active, go]);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setActive(0);
          setOpen(true);
        }}
        className="fixed bottom-6 right-6 z-[9990] border border-[var(--line)] bg-[var(--surface)] px-4 py-2.5 font-mono text-xs text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)] max-md:bottom-4 max-md:right-4"
        aria-label="Abrir paleta de navegación"
      >
        <span className="hidden sm:inline">Ir a</span>{" "}
        <kbd className="rounded border border-[var(--line)] px-1.5 py-0.5 text-[10px]">
          ⌘K
        </kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[10001] flex items-start justify-center bg-[color-mix(in_oklab,var(--background)_75%,transparent)] p-4 pt-[14vh]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={() => setOpen(false)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Navegación rápida"
              className="w-full max-w-md overflow-hidden border border-[var(--line)] bg-[var(--surface)] shadow-[0_24px_80px_rgba(0,0,0,0.45)]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <div className="border-b border-[var(--line)] px-4 py-3">
                <input
                  autoFocus
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setActive(0);
                  }}
                  placeholder="Buscar sección…"
                  className="w-full bg-transparent font-mono text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)]"
                />
              </div>
              <ul className="max-h-[min(50vh,320px)] overflow-auto p-2">
                {filtered.map((a, i) => (
                  <li key={a.id}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onClick={() => go(a.href)}
                      className={cn(
                        "flex w-full items-center justify-between px-3 py-2.5 text-left font-mono text-sm transition",
                        i === active
                          ? "bg-[var(--accent-soft)] text-[var(--foreground)]"
                          : "text-[var(--muted)] hover:text-[var(--foreground)]",
                      )}
                    >
                      {a.label}
                      <span className="text-[10px] uppercase tracking-wider opacity-60">
                        ↵
                      </span>
                    </button>
                  </li>
                ))}
                {filtered.length === 0 && (
                  <li className="px-3 py-6 text-center font-mono text-xs text-[var(--muted)]">
                    Sin resultados
                  </li>
                )}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
