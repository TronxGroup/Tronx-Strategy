// app/layout.tsx
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { inter, manrope } from "./fonts";

const siteUrl = "https://www.tronxstrategy.com";
const siteName = "Tronx Strategy";
const siteTagline = "Base comercial digital para empresas de servicios";
const defaultTitle =
  "Tronx Strategy — Base comercial digital para empresas de servicios";
const defaultDescription =
  "Diseñamos bases comerciales digitales para empresas de servicios: sitio web claro, textos base, medición real, activación de captación y continuidad mensual.";

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  applicationName: siteName,
  keywords: [
    "sitio web para servicios",
    "landing page servicios",
    "captación digital",
    "base comercial digital",
    "google ads servicios",
    "medición de leads",
    "continuidad web",
    "texto web para servicios",
    "tronx strategy",
    "Chile",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "business",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: siteUrl,
    siteName,
    title: defaultTitle,
    description:
      "Estructura clara, textos base, medición, activación de captación y continuidad mensual para captar más consultas.",
    images: [
      {
        url: "/og-tronxstrategy.jpg",
        width: 1200,
        height: 630,
        alt: "Tronx Strategy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description:
      "Sitio web claro, textos base, medición y continuidad mensual para empresas de servicios.",
    images: ["/og-tronxstrategy.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  description: siteTagline,
  logo: `${siteUrl}/icon.png`,
  sameAs: [],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
  inLanguage: "es-CL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL" className="scroll-smooth">
      <head>
        <meta name="format-detection" content="telephone=no, date=no, email=no, address=no" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <Script
          id="ld-org"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>

      <body
        className={`${inter.variable} ${manrope.variable} bg-slate-950 text-slate-100 antialiased`}
      >
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX', {
              page_path: window.location.pathname,
            });
          `}
        </Script>

        <Navbar />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
