"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type SoundHooks = {
  /** Reserved for future UI sounds; no-op today. */
  play: (id: string) => void;
  enabled: boolean;
  setEnabled: (v: boolean) => void;
};

const SoundContext = createContext<SoundHooks | null>(null);

export function SoundProvider({ children }: { children: ReactNode }) {
  const [enabled, setEnabled] = useState(false);

  const play = useCallback((id: string) => {
    void id;
    if (!enabled) return;
    // Hook for future Audio() — keeps bundle silent until assets exist.
  }, [enabled]);

  const value = useMemo(
    () => ({ play, enabled, setEnabled }),
    [play, enabled],
  );

  return (
    <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
  );
}

export function useSound() {
  const ctx = useContext(SoundContext);
  if (!ctx) {
    return {
      play: () => {},
      enabled: false,
      setEnabled: () => {},
    } satisfies SoundHooks;
  }
  return ctx;
}
