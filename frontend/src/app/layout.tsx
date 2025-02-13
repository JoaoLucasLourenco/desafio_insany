import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header";
const archivo = Archivo({ subsets: ["latin"] });
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
      <body className={archivo.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
