import { NextRequest, NextResponse } from "next/server";

interface ContactBody {
  nombre: string;
  email: string;
  asunto?: string;
  mensaje: string;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json();
    const { nombre, email, asunto, mensaje } = body;

    // Validation
    if (!nombre || nombre.trim().length < 2) {
      return NextResponse.json({ error: "El nombre debe tener al menos 2 caracteres." }, { status: 400 });
    }
    if (!email || !validateEmail(email)) {
      return NextResponse.json({ error: "El email no es válido." }, { status: 400 });
    }
    if (!mensaje || mensaje.trim().length < 10) {
      return NextResponse.json({ error: "El mensaje debe tener al menos 10 caracteres." }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
      // Dev mode: log and return success without sending
      console.log("[contact form] No RESEND_API_KEY — logging submission:", { nombre, email, asunto, mensaje });
      return NextResponse.json({ success: true, dev: true });
    }

    const subject = asunto
      ? `[Contacto] ${asunto} — de ${nombre}`
      : `[Contacto] Nuevo mensaje de ${nombre}`;

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 32px 24px; background: #f8f8f7; border-radius: 12px;">
        <h2 style="color: #191919; margin-top: 0;">Nuevo mensaje de contacto</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #787774; font-size: 14px; width: 100px;">Nombre</td>
            <td style="padding: 8px 0; color: #191919; font-weight: 600;">${nombre.trim()}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #787774; font-size: 14px;">Email</td>
            <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #2383e2;">${email}</a></td>
          </tr>
          ${asunto ? `<tr>
            <td style="padding: 8px 0; color: #787774; font-size: 14px;">Asunto</td>
            <td style="padding: 8px 0; color: #191919;">${asunto}</td>
          </tr>` : ""}
        </table>
        <hr style="border: none; border-top: 1px solid #e3e3e1; margin: 20px 0;" />
        <p style="color: #555; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${mensaje.trim()}</p>
        <hr style="border: none; border-top: 1px solid #e3e3e1; margin: 20px 0;" />
        <p style="color: #b0b0b0; font-size: 12px; margin-bottom: 0;">Enviado desde el formulario de contacto de notionlatam.com</p>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Notion LATAM <noreply@notionlatam.com>",
        to: ["hello@notionlatam.com"],
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errorData = await resendResponse.json().catch(() => ({}));
      console.error("[contact form] Resend error:", errorData);
      return NextResponse.json(
        { error: "No pudimos enviar tu mensaje. Intenta de nuevo o escríbenos directamente a hello@notionlatam.com." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact form] Unexpected error:", err);
    return NextResponse.json(
      { error: "Error interno del servidor. Por favor intenta de nuevo." },
      { status: 500 }
    );
  }
}
