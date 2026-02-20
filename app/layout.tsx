// app/layout.tsx

import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { Navbar } from "../components/site/navbar";
import Footer from "../components/site/footer";

export const metadata: Metadata = {
  title: "Tronx Strategy",
  description:
    "Unidad WebOps de Tronx Group. Sitios corporativos modernos en Next.js.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100 antialiased">

        {/* NAVBAR */}
        <Navbar />

        {/* CONTENIDO */}
        <main className="min-h-[70vh]">
          {children}
        </main>

        {/* FOOTER */}
        <Footer
          instagram="https://www.instagram.com/tronxstrategy"
          linkedin="https://www.linkedin.com/company/tronx-strategy"
        />

      </body>
    </html>
  );
}
