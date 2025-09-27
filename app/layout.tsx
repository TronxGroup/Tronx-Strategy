
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tronx Strategy – Crecimiento B2B con estrategia, tecnología y contenido",
  description: "Onboarding, performance, CRM y automatizaciones. Retainers y Programa Socios (Revenue Share).",
  openGraph: { title: "Tronx Strategy", description: "Crecimiento B2B con estrategia, tecnología y contenido.", type: "website" },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
