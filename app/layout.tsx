// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "../components/site/navbar";
import Footer from "../components/site/footer";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020617", // slate-950
};

const siteUrl = "https://www.tronxstrategy.com";

export const metadata: Metadata = {
  title: {
    default: "Tronx Strategy — Sitios web corporativos en Next.js",
    template: "%s · Tronx Strategy",
  },
  description:
    "Estudio web de Tronx Group. Diseñamos y desarrollamos sitios corporativos modernos en Next.js, con infraestructura GitHub + Vercel + Cloudflare para empresas, cámaras e instituciones.",
  metadataBase: new URL(siteUrl),
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
    canonical: "/", // canónica del home, las demás rutas pueden definir la suya
  },
  openGraph: {
    title: "Tronx Strategy — Sitios web corporativos modernos en Next.js",
    description:
      "Sitios web modernos, rápidos y seguros para empresas que quieren crecer. Infraestructura GitHub + Vercel + Cloudflare.",
    url: siteUrl,
    siteName: "Tronx Strategy",
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: "/og_tronxstrategy.jpg", // asegúrate de subirla a /public
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
    url: siteUrl,
    logo: `${siteUrl}/favicon_TronxStrategy.png`,
    description:
      "Estudio web de Tronx Group especializado en sitios corporativos modernos en Next.js para empresas, cámaras e instituciones.",
    parentOrganization: {
      "@type": "Organization",
      name: "Tronx Group SpA",
      url: "https://www.tronxgroup.com",
    },
    sameAs: [
      "https://www.instagram.com/tronxstrategy",
      // agrega LinkedIn cuando lo tengas:
      // "https://www.linkedin.com/company/tronx-strategy",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "CL",
      addressLocality: "Santiago",
      addressRegion: "Región Metropolitana",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: "+56-9-2008-0031",
        areaServed: "CL",
        availableLanguage: ["es"],
      },
    ],
  };

  return (
    <html lang="es">
      <head>
        {/* JSON-LD para SEO (inline, sin hidratar) */}
        <script
          type="application/ld+json"
          // evita warnings de hidratación si Next reordena nodos
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLdJson) }}
        />

        {/* Aquí podrías añadir preconnect o analytics si quieres más adelante */}
        {/* <link rel="preconnect" href="https://www.googletagmanager.com" /> */}
      </head>
      <body className="bg-transparent text-slate-100">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
