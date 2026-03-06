import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

function safe(s: any) {
  return typeof s === "string" ? s.trim() : "";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // honeypot
    if (safe(body.hp).length > 0) return NextResponse.json({ ok: true }, { status: 200 });

    const name = safe(body.name);
    const email = safe(body.email);
    const company = safe(body.company);
    const message = safe(body.message);

    if (!name || !email || !company || !message) {
      return NextResponse.json({ error: "Faltan campos obligatorios." }, { status: 400 });
    }

    const to = process.env.LEADS_TO || "info@tronxstrategy.com";
    const from = process.env.LEADS_FROM || "Tronx Strategy <onboarding@resend.dev>";

    const service = safe(body.service);
    const budget = safe(body.budget);
    const phone = safe(body.phone);
    const city = safe(body.city);

    const utm = body.utm && typeof body.utm === "object" ? body.utm : {};
    const utmLines = Object.entries(utm)
      .map(([k, v]) => `${k}: ${String(v)}`)
      .join("\n");

    const text = [
      "Nuevo contacto — tronxstrategy.com",
      "--------------------------------",
      `Nombre: ${name}`,
      `Email: ${email}`,
      `Empresa/Proyecto: ${company}`,
      service ? `Servicio: ${service}` : "",
      budget ? `Presupuesto: ${budget}` : "",
      phone ? `Teléfono: ${phone}` : "",
      city ? `Ciudad: ${city}` : "",
      "",
      "Mensaje:",
      message,
      "",
      utmLines ? "UTM / GCLID:\n" + utmLines : "",
    ]
      .filter(Boolean)
      .join("\n");

    const subject = `Contacto Tronx — ${company} (${name})`;

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject,
      text,
    });

    if (error) {
      return NextResponse.json({ error: "No se pudo enviar el correo." }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Error inesperado." }, { status: 500 });
  }
}
