// app/layout.tsx
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "../components/site/navbar";
import Footer from "../components/site/footer";

const siteUrl = "https://www.tronxstrategy.com";
const ogImage = `${siteUrl}/favicon_TronxStrategy.png`; // 👈 usar favicon para compartir (como pediste)

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020617", // slate-950
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tronx Strategy — Sitios web corporativos en Next.js",
    template: "%s · Tronx Strategy",
  },
  description:
    "Estudio web de Tronx Group. Diseñamos y desarrollamos sitios corporativos modernos en Next.js, con infraestructura GitHub + Vercel + Cloudflare para empresas, cámaras e instituciones.",
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
  alternates: { canonical: "/" },

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
        url: ogImage,
        width: 512,
        height: 512,
        alt: "Tronx Strategy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tronx Strategy — Sitios web corporativos modernos",
    description:
      "Estudio digital que construye sitios web corporativos en Next.js para empresas, cámaras e instituciones.",
    images: [ogImage],
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgLdJson = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tronx Strategy",
    url: siteUrl,
    logo: `${siteUrl}/favicon_TronxStrategy.png`,
    image: `${siteUrl}/favicon_TronxStrategy.png`, // 👈 refuerzo para sharing
    description:
      "Estudio web de Tronx Group especializado en sitios corporativos modernos en Next.js para empresas, cámaras e instituciones.",
    parentOrganization: {
      "@type": "Organization",
      name: "Tronx Group SpA",
      url: "https://www.tronxgroup.com",
    },
    sameAs: [
      "https://www.instagram.com/tronxstrategy",
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
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLdJson) }}
        />
      </head>

      {/* ⚠️ Importante: evita bg-transparent si tu navbar tiene overlays;
          usa un fondo base para contraste y para que el icono se vea. */}
      <body className="bg-slate-950 text-slate-100 antialiased">
        {/* Google Analytics (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MZLLPKCM1Q"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MZLLPKCM1Q');
          `}
        </Script>

        <Navbar />
        <main className="min-h-[60vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
