import type { Component } from "#/lib/utils/component";
import type { PropsWithChildren } from "react";
import { SocketProvider } from "#/lib/providers/socket";
import { ThemeProvider } from "#/lib/providers/theme";

export const Provider: Component<PropsWithChildren> = ({ children }) => {
  return (
    <SocketProvider url="ws://localhost:4000">
      <ThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </ThemeProvider>
    </SocketProvider>
  );
};