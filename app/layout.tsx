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
  themeColor: "#020617",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tronx Strategy — WebOps corporativo",
    template: "%s · Tronx Strategy",
  },
  description:
    "Unidad WebOps de Tronx Group. Sitios corporativos modernos en Next.js con arquitectura GitHub + Vercel + Cloudflare.",
  openGraph: {
    title: "Tronx Strategy — WebOps corporativo",
    description:
      "Arquitectura moderna + gobierno digital + continuidad operativa.",
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
    title: "Tronx Strategy — WebOps",
    description: "Sitios corporativos modernos en Next.js.",
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon_TronxStrategy.png",
  },
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
    logo: ogImage,
    parentOrganization: {
      "@type": "Organization",
      name: "Tronx Group SpA",
      url: "https://www.tronxgroup.com",
    },
    sameAs: [
      "https://www.instagram.com/tronxstrategy",
      "https://www.linkedin.com/company/tronx-strategy",
    ],
  };

  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(orgLdJson),
          }}
        />
      </head>

      <body className="bg-slate-950 text-slate-100 antialiased">
        {/* Google Analytics */}
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

        <main className="min-h-[70vh]">{children}</main>

        <Footer
          instagram="https://www.instagram.com/tronxstrategy"
          linkedin="https://www.linkedin.com/company/tronx-strategy"
        />
      </body>
    </html>
  );
}
