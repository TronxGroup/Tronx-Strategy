// app/layout.tsx

import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "../components/site/navbar";
import Footer from "../components/site/footer";

const siteUrl = "https://www.tronxstrategy.com";
const ogImage = `${siteUrl}/favicon_TronxStrategy.png`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Tronx Strategy — WebOps y sitios corporativos en Next.js",
    template: "%s · Tronx Strategy",
  },

  description:
    "Tronx Strategy es la unidad WebOps de Tronx Group. Diseñamos y desarrollamos sitios corporativos modernos en Next.js con infraestructura GitHub + Vercel + Cloudflare.",

  keywords: [
    "WebOps",
    "sitios web corporativos",
    "desarrollo web Next.js",
    "infraestructura Vercel",
    "Cloudflare",
    "portal institucional",
    "landing page",
    "CRM integración",
    "Tronx Strategy",
    "Tronx Group",
  ],

  alternates: { canonical: "/" },

  openGraph: {
    title: "Tronx Strategy — WebOps corporativo en Next.js",
    description:
      "Sitios web corporativos modernos, medibles y preparados para continuidad mensual.",
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
    title: "Tronx Strategy — WebOps corporativo",
    description:
      "Arquitectura moderna + gobierno digital + continuidad operativa.",
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
    image: `${siteUrl}/favicon_TronxStrategy.png`,
    description:
      "Unidad WebOps de Tronx Group especializada en sitios corporativos modernos en Next.js para empresas, cámaras e instituciones.",

    parentOrganization: {
      "@type": "Organization",
      name: "Tronx Group SpA",
      url: "https://www.tronxgroup.com",
    },

    sameAs: [
      "https://www.instagram.com/tronxstrategy",
      "https://www.linkedin.com/company/tronx-strategy",
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
    <html lang="es" suppressHydrationWarning>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgLdJson),
          }}
        />
      </head>

      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-sky-400/30 selection:text-white">

        {/* ============================= */}
        {/* Google Analytics (GA4) */}
        {/* ============================= */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MZLLPKCM1Q"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MZLLPKCM1Q', {
              anonymize_ip: true,
              send_page_view: true
            });
          `}
        </Script>

        {/* ============================= */}
        {/* Navbar */}
        {/* ============================= */}
        <Navbar />

        {/* ============================= */}
        {/* Main */}
        {/* ============================= */}
        <main className="min-h-[70vh] relative z-10">
          {children}
        </main>

        {/* ============================= */}
        {/* Footer */}
        {/* ============================= */}
        <Footer
          instagram="https://www.instagram.com/tronxstrategy"
          linkedin="https://www.linkedin.com/company/tronx-strategy"
        />

      </body>
    </html>
  );
}
