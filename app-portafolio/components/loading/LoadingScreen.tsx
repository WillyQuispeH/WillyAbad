"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const pathname = usePathname();
  const isStreamer = pathname?.startsWith("/streamer");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (isStreamer) return;
    const t = window.setTimeout(() => setDone(true), 600);
    return () => window.clearTimeout(t);
  }, [isStreamer]);

  if (isStreamer) return null;

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[var(--background)]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-hidden
        >
          <p className="font-mono text-sm tracking-[0.35em] text-[var(--muted)]">
            WA
          </p>
          <div className="mt-8 h-px w-32 overflow-hidden bg-[var(--line)]">
            <motion.div
              className="h-full bg-[var(--accent)]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
