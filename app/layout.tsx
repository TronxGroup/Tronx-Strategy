// app/layout.tsx
import "./globals.css";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Navbar } from "../components/site/navbar";
import Footer from "../components/site/footer";

const siteUrl = "https://www.tronxstrategy.com";
const siteName = "Tronx Strategy";
const siteTagline = "Sitios para servicios + medición + continuidad (WebOps)";
const favicon = "/favicon_TronxStrategy.png";

// Recomendado: crea un OG real (1200x630) en /public/og-tronxstrategy.jpg
const ogImage = "/og-tronxstrategy.jpg";

const GA_ID = "G-MZLLPKCM1Q"; // GA4
// Si usas Google Ads Tag (AW-XXXX), ponlo aquí. Si no, déjalo vacío.
const ADS_ID = ""; // "AW-XXXXXXXXXXX"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Tronx Strategy — WebOps para sitios de servicios",
    template: "%s · Tronx Strategy",
  },

  description:
    "Construimos sitios para servicios (no e-commerce) con estructura operable, medición real y continuidad mensual. Next.js + Vercel + Cloudflare. Google Ads opcional.",

  keywords: [
    "sitios web para servicios",
    "landing page profesional chile",
    "desarrollo web Next.js",
    "WebOps",
    "Vercel",
    "Cloudflare",
    "sitios institucionales",
    "portales institucionales",
    "sitio corporativo",
    "Google Ads para servicios",
    "Tronx Strategy",
  ],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Tronx Strategy — Sitios para servicios + medición + continuidad",
    description:
      "WebOps para empresas e instituciones: estructura operable, medición real y continuidad mensual. Google Ads opcional.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Tronx Strategy — WebOps para sitios de servicios",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tronx Strategy — WebOps para sitios de servicios",
    description:
      "Sitios para servicios con estructura operable, medición real y continuidad mensual. Next.js + infraestructura moderna.",
    images: [ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: favicon, sizes: "32x32", type: "image/png" },
      { url: favicon, sizes: "192x192", type: "image/png" },
    ],
    shortcut: favicon,
    apple: [{ url: favicon, sizes: "180x180" }],
  },

  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}${favicon}`,
    description: siteTagline,
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

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    inLanguage: "es-CL",
  };

  return (
    <html lang="es">
      <head>
        <meta name="author" content="Tronx Strategy" />
        <meta name="application-name" content={siteName} />

        {/* Preconnect (ligero) */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>

      <body className="bg-slate-950 text-slate-100 antialiased">
        {/* Google Analytics */}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { anonymize_ip: true });
              `}
            </Script>
          </>
        ) : null}

        {/* Google Ads (opcional) */}
        {ADS_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-ads-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ADS_ID}');
              `}
            </Script>
          </>
        ) : null}

        {/* JSON-LD */}
        <Script
          id="ld-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN */}
        <main className="min-h-[70vh]">{children}</main>

        {/* FOOTER */}
        <Footer
          instagram="https://www.instagram.com/tronxstrategy"
          linkedin="https://www.linkedin.com/company/tronx-strategy"
        />
      </body>
    </html>
  );
}
