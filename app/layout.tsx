import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/config/brand";

export const metadata: Metadata = {
  title: `${brand.name} — Brand Codex`,
  description: `Official brand guidelines and design system for ${brand.name}.`,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zrw2efx.css" />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
