// app/layout.tsx
import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/site/navbar";
import Footer from "../components/site/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://www.tronxstrategy.com";
const siteName = "Tronx Strategy";
const siteTagline = "Base comercial digital para empresas de servicios";
const favicon = "/favicon_TronxStrategy.png";
const ogImage = "/og-tronxstrategy.jpg";

const GA_ID = "G-MZLLPKCM1Q";
const ADS_ID = "";

const defaultTitle =
  "Tronx Strategy — Base comercial digital para empresas de servicios";
const defaultDescription =
  "Diseñamos bases comerciales digitales para empresas de servicios: sitio web claro, textos base, medición real, activación de captación y continuidad mensual.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020617",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: "%s · Tronx Strategy",
  },

  description: defaultDescription,

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
  applicationName: siteName,
  category: "business",

  openGraph: {
    title: defaultTitle,
    description:
      "Estructura clara, textos base, medición, activación de captación y continuidad mensual para captar más consultas.",
    url: siteUrl,
    siteName,
    type: "website",
    locale: "es_CL",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Tronx Strategy — Base comercial digital para empresas de servicios",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description:
      "Sitio web claro, textos base, medición y continuidad mensual para empresas de servicios.",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
    description: defaultDescription,
  };

  return (
    <html lang="es-CL" className="scroll-smooth">
      <head>
        <meta name="author" content="Tronx Strategy" />
        <meta name="application-name" content={siteName} />
        <meta
          name="format-detection"
          content="telephone=no, date=no, email=no, address=no"
        />

        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
      </head>

      <body
        className={`${inter.variable} ${manrope.variable} bg-slate-950 text-slate-100 antialiased`}
      >
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
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                  anonymize_ip: true,
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        ) : null}

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
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${ADS_ID}');
              `}
            </Script>
          </>
        ) : null}

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

        <Navbar />

        <main className="min-h-[70vh]">{children}</main>

        <Footer
          instagram="https://www.instagram.com/tronxstrategy"
          linkedin="https://www.linkedin.com/company/tronx-strategy"
        />
      </body>
    </html>
  );
}
