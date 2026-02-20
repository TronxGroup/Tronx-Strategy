// app/layout.tsx

import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Navbar } from "../components/site/navbar";
import Footer from "../components/site/footer";

const siteUrl = "https://www.tronxstrategy.com";
const siteName = "Tronx Strategy";
const favicon = "/favicon_TronxStrategy.png";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Tronx Strategy — WebOps corporativo en Next.js",
    template: "%s · Tronx Strategy",
  },

  description:
    "Unidad WebOps de Tronx Group. Diseñamos y desarrollamos sitios corporativos modernos en Next.js con infraestructura GitHub + Vercel + Cloudflare.",

  keywords: [
    "sitios web corporativos",
    "desarrollo web Next.js",
    "WebOps",
    "Vercel",
    "Cloudflare",
    "portales institucionales",
    "Tronx Strategy",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Tronx Strategy — Sitios web corporativos modernos",
    description:
      "WebOps para empresas e instituciones que necesitan estructura, medición y continuidad digital.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: favicon,
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
      "Sitios web corporativos modernos en Next.js con infraestructura real.",
    images: [favicon],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      {
        url: favicon,
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: favicon,
    apple: [
      {
        url: favicon,
        sizes: "180x180",
      },
    ],
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Tronx Strategy",
    url: siteUrl,
    logo: `${siteUrl}${favicon}`,
    description:
      "Unidad WebOps de Tronx Group especializada en sitios corporativos modernos en Next.js.",
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
    },
  };

  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100 antialiased">

        {/* Google Analytics (reemplaza si usas otro ID) */}
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

        {/* JSON-LD */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN */}
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
