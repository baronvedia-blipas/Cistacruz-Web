import { NextRequest, NextResponse } from "next/server";

const rateLimit = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5;

export async function POST(req: NextRequest) {
  // Basic rate limiting
  const ip = req.headers.get("x-forwarded-for") ?? "unknown";
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (entry && now - entry.timestamp < RATE_LIMIT_WINDOW) {
    if (entry.count >= RATE_LIMIT_MAX) {
      return NextResponse.json(
        { error: "Demasiadas solicitudes. Intenta en un momento." },
        { status: 429 }
      );
    }
    entry.count++;
  } else {
    rateLimit.set(ip, { count: 1, timestamp: now });
  }

  try {
    const body = await req.json();
    const { name, email, phone, projectType, message } = body;

    // Server-side validation
    if (!name || !email || !phone || !projectType || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos." },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Email inválido." },
        { status: 400 }
      );
    }

    if (typeof message !== "string" || message.length < 10) {
      return NextResponse.json(
        { error: "El mensaje debe tener al menos 10 caracteres." },
        { status: 400 }
      );
    }

    // Placeholder: here you would send email via Resend/Nodemailer
    console.log("Contact form submission:", { name, email, phone, projectType, message });

    return NextResponse.json({
      success: true,
      message: "Mensaje recibido correctamente.",
    });
  } catch {
    return NextResponse.json(
      { error: "Error al procesar la solicitud." },
      { status: 500 }
    );
  }
}
