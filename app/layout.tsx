import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/site/navbar";
import Footer from "../components/site/footer"; // 👈 default import

export const metadata: Metadata = {
  title: {
    default: "Tronx Strategy — Sitios Web Modernos para Empresas",
    template: "%s · Tronx Strategy",
  },
  description:
    "Tronx Strategy diseña y desarrolla sitios web modernos, rápidos y seguros para emprendedores, pymes e instituciones. Infraestructura GitHub + Vercel + Cloudflare.",
  metadataBase: new URL("https://www.tronxstrategy.com"),
  openGraph: {
    title: "Tronx Strategy — Sitios Web Modernos para Empresas",
    description:
      "Sitios web modernos, rápidos y seguros con tecnología de clase mundial.",
    url: "https://www.tronxstrategy.com",
    siteName: "Tronx Strategy",
    type: "website",
    locale: "es_CL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx Strategy",
    description:
      "Sitios web modernos para empresas que quieren crecer de verdad.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
