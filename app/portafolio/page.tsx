// app/portafolio/page.tsx
import type { Metadata } from "next";
import PortafolioClient from "./PortafolioClient";

export const metadata: Metadata = {
  title: "Portafolio · Tronx Strategy",
  description:
    "Proyectos web listos para operar: sitios corporativos e institucionales con base moderna (Next.js, Vercel, Cloudflare) y foco en continuidad.",
  alternates: { canonical: "/portafolio" },
};

export default function PortafolioPage({
  searchParams,
}: {
  searchParams?: { focus?: string };
}) {
  return <PortafolioClient focus={searchParams?.focus} />;
}
