"use client";

import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { socialLinks } from "@/lib/data/portfolio";
import { SectionShell } from "@/components/ui/section";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
    window.setTimeout(() => setSent(false), 4000);
  }

  return (
    <SectionShell
      id="contact"
      index="06"
      title="Siguiente capa inteligente."
      lead="Si exploras flujos con IA, una superficie de documentos o una reescritura de plataforma, escribe con contexto y plazos."
      className="border-b-0"
    >
      <div
        ref={ref}
        className="mt-16 grid gap-14 lg:grid-cols-2 lg:gap-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <a
            href="mailto:contacto@willyabad.dev"
            className="group inline-flex items-center gap-3 border-b border-[var(--accent)] pb-1 font-mono text-lg text-[var(--foreground)] transition hover:text-[var(--accent)]"
          >
            <Mail className="h-5 w-5 text-[var(--accent)]" aria-hidden />
            contacto@willyabad.dev
            <ArrowUpRight className="h-4 w-4 opacity-0 transition group-hover:opacity-100" />
          </a>
          {/* <ul className="mt-10 flex flex-wrap gap-6">
            {socialLinks.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-[var(--muted)] underline-offset-4 transition hover:text-[var(--accent)] hover:underline"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul> */}
        </motion.div>

        {/* <motion.form
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.08 }}
          onSubmit={onSubmit}
          className="space-y-6 border-t border-[var(--line)] pt-10 lg:border-t-0 lg:pt-0"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="tag">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              required
              autoComplete="name"
              className="rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]"
              placeholder="Tu nombre"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="tag">
              Correo
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]"
              placeholder="tu@empresa.com"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="tag">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="resize-none rounded-lg border border-[var(--line)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--accent)]"
              placeholder="Contexto, plazos y cómo definirías el éxito."
            />
          </div>
          <button type="submit" className="btn-primary w-full sm:w-auto">
            Enviar mensaje
          </button>
          {sent && (
            <p className="font-mono text-xs text-[var(--accent)]" role="status">
              Recibido en esta demo. Conecta tu API cuando estés listo para enviar
              correo real.
            </p>
          )}
        </motion.form> */}
      </div>
    </SectionShell>
  );
}
