import "#/lib/styles/tailwind.css";
import type { Component } from "#/lib/utils/component";
import type { PropsWithChildren } from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "#/lib/utils/tailwind";
import { Provider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "r/place",
  description: "Collaborative canvas - Unite to create art in this exciting game inspired by r/place. Work together and leave your mark!",
  icons: "/logo.png"
};

const RootLayout: Component<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={cn(inter.className, "bg-zinc-950")}>
      <Provider>{children}</Provider>
    </body>
  </html>
);

export default RootLayout;