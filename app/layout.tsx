// app/layout.tsx
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "../components/site/navbar";
import Footer from "../components/site/footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020617", // slate-950
};

export const metadata: Metadata = {
  title: {
    default: "Tronx Strategy — Sitios web corporativos en Next.js",
    template: "%s · Tronx Strategy",
  },
  description:
    "Estudio digital de Tronx Group. Diseñamos y desarrollamos sitios web corporativos modernos en Next.js, con infraestructura GitHub + Vercel + Cloudflare para empresas, cámaras e instituciones.",
  metadataBase: new URL("https://www.tronxstrategy.com"),
  keywords: [
    "sitios web corporativos",
    "diseño web",
    "desarrollo web Next.js",
    "Vercel",
    "Cloudflare",
    "sitio institucional",
    "landing page",
    "portal web",
    "Tronx Strategy",
    "Tronx Group",
  ],
  alternates: {
    canonical: "/", // URL canónica del home
  },
  openGraph: {
    title: "Tronx Strategy — Sitios web corporativos modernos en Next.js",
    description:
      "Sitios web modernos, rápidos y seguros para empresas que quieren crecer. Infraestructura GitHub + Vercel + Cloudflare.",
    url: "https://www.tronxstrategy.com",
    siteName: "Tronx Strategy",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: "/og_tronxstrategy.jpg", // súbelo a /public
        width: 1200,
        height: 630,
        alt: "Tronx Strategy — Estudio digital de Tronx Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx Strategy — Sitios web corporativos modernos",
    description:
      "Estudio digital que construye sitios web corporativos en Next.js para empresas, cámaras e instituciones.",
    images: ["/og_tronxstrategy.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // 👇 claves con guion, como string literal
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon_TronxStrategy.png",
    shortcut: "/favicon_TronxStrategy.png",
    apple: "/favicon_TronxStrategy.png",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgLdJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tronx Strategy",
    url: "https://www.tronxstrategy.com",
    logo: "https://www.tronxstrategy.com/favicon_TronxStrategy.png",
    description:
      "Estudio web de Tronx Group especializado en sitios corporativos modernos en Next.js para empresas, cámaras e instituciones.",
    parentOrganization: {
      "@type": "Organization",
      name: "Tronx Group SpA",
      url: "https://www.tronxgroup.com",
    },
    sameAs: [
      "https://www.instagram.com/tronxstrategy",
    ],
  };

  return (
    <html lang="es">
      <head>
        {/* JSON-LD para SEO */}
        <Script
          id="ld-json-organization"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLdJson) }}
        />
      </head>
      <body className="bg-slate-950 text-slate-100">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
