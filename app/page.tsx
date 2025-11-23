// app/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Sitios web corporativos modernos en Next.js",
  description:
    "Desarrollamos sitios web de nivel empresarial: rápidos, seguros y preparados para captar más leads. Operamos con GitHub, Vercel y Cloudflare, conectando tu web a CRM y analítica.",
  alternates: {
    canonical: "/", // home
  },
  openGraph: {
    title: "Tronx Strategy — Sitios web modernos, rápidos y orientados a resultados",
    description:
      "Sitios web corporativos en Next.js para empresas, cámaras e instituciones. Infraestructura GitHub + Vercel + Cloudflare, conectada a CRM y analítica.",
    url: "https://www.tronxstrategy.com/",
    type: "website",
    images: [
      {
        url: "/og_tronxstrategy.jpg",
        width: 1200,
        height: 630,
        alt: "Tronx Strategy — Estudio web de Tronx Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tronx Strategy — Sitios web corporativos modernos",
    description:
      "Desarrollo web en Next.js con infraestructura cloud, SEO base y conexión a CRM para empresas y organizaciones.",
    images: ["/og_tronxstrategy.jpg"],
  },
};
