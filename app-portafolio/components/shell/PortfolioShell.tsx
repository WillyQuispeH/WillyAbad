"use client";

import type { ReactNode } from "react";
import { CommandPalette } from "@/components/command-palette/CommandPalette";
import { LoadingScreen } from "@/components/loading/LoadingScreen";
import { SoundProvider } from "@/lib/sound/SoundContext";

export function PortfolioShell({ children }: { children: ReactNode }) {
  return (
    <SoundProvider>
      <LoadingScreen />
      <CommandPalette />
      {children}
    </SoundProvider>
  );
}
