// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://tronxstrategy.com"),
  title:
    "Tronx Strategy – Crecimiento B2B con estrategia, tecnología y contenido",
  description:
    "Onboarding, performance, CRM y automatizaciones. Retainers y Programa Socios (Revenue Share).",
  keywords: [
    "growth",
    "B2B",
    "CRM",
    "Zoho",
    "automatizaciones",
    "embudos de venta",
    "performance marketing",
    "Tronx Cloud Suite",
    "Revenue Share",
  ],
  authors: [{ name: "Tronx Strategy" }],
  creator: "Tronx Strategy",
  publisher: "Tronx Group SpA",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://tronxstrategy.com",
    siteName: "Tronx Strategy",
    title: "Tronx Strategy – Crecimiento B2B con estrategia y tecnología",
    description:
      "Implementamos y operamos tu embudo completo: sitios/landings, Ads, CRM y automatizaciones.",
    images: [
      {
        url: "/og-image.png", // coloca un OG en /public/og-image.png (1200x630)
        width: 1200,
        height: 630,
        alt: "Tronx Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx Strategy – Growth B2B en semanas",
    description:
      "Onboarding, performance, CRM y automatizaciones. Retainers y Programa Socios.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "business",
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "any" }, // usa tu logo renombrado
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    shortcut: ["/favicon.png"],
  },
  manifest: "/site.webmanifest", // opcional: agrega si lo usas
  themeColor: "#0EA5E9", // azul-emerald según tu branding
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#0EA5E9",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-slate-900`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
