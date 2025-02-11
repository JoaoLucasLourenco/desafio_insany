import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Smart Money",
  description: "Landing Page (LP) para um banco digital chamado Smart Money",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
