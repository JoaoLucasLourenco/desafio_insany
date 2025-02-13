import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Header";

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
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
