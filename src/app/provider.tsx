"use client";

import type { Component } from "#/lib/utils/component";
import type { PropsWithChildren } from "react";
import { GameProvider } from "#/lib/providers/game";
import { ThemeProvider } from "#/lib/providers/theme";
import { Toaster } from "#/lib/components/toaster";

export const Provider: Component<PropsWithChildren> = ({ children }) => {
  return (
    <GameProvider url="ws://localhost:4000">
      <ThemeProvider attribute="class" defaultTheme="dark">
        <Toaster />

        {children}
      </ThemeProvider>
    </GameProvider>
  );
};