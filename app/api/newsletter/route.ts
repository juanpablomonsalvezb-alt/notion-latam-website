import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const DATA_FILE = path.join(process.cwd(), "data", "newsletter-subscribers.json");

interface Subscriber {
  email: string;
  subscribedAt: string;
  source?: string;
}

async function readSubscribers(): Promise<Subscriber[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    return JSON.parse(raw) as Subscriber[];
  } catch {
    return [];
  }
}

async function writeSubscribers(subscribers: Subscriber[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(subscribers, null, 2), "utf-8");
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email: string = (body.email || "").trim().toLowerCase();
    const source: string = body.source || "blog";

    if (!email || !validateEmail(email)) {
      return NextResponse.json({ error: "El email no es válido." }, { status: 400 });
    }

    const subscribers = await readSubscribers();

    // Check duplicates
    if (subscribers.some((s) => s.email === email)) {
      return NextResponse.json({ success: true, alreadySubscribed: true });
    }

    subscribers.push({ email, subscribedAt: new Date().toISOString(), source });
    await writeSubscribers(subscribers);

    // Optionally send welcome email via Resend
    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    if (RESEND_API_KEY) {
      const html = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; max-width: 560px; margin: 0 auto; padding: 40px 24px;">
          <div style="background: #2383e2; border-radius: 12px; padding: 32px; text-align: center; margin-bottom: 32px;">
            <span style="font-size: 40px;">📬</span>
            <h1 style="color: #fff; margin: 16px 0 8px; font-size: 24px;">¡Bienvenido al newsletter!</h1>
            <p style="color: rgba(255,255,255,0.85); margin: 0;">Notion LATAM</p>
          </div>
          <p style="color: #191919; font-size: 16px; line-height: 1.6;">
            Hola, ya estás suscrito a <strong>Notion LATAM</strong>.
            Cada semana recibirás un artículo sobre productividad y Notion pensado para empresas latinoamericanas.
          </p>
          <p style="color: #555; font-size: 14px; line-height: 1.6;">
            Sin spam. Puedes darte de baja cuando quieras respondiendo este email con "Baja".
          </p>
          <hr style="border: none; border-top: 1px solid #e3e3e1; margin: 24px 0;" />
          <p style="color: #b0b0b0; font-size: 12px; text-align: center;">
            © 2026 Notion LATAM · <a href="https://notionlatam.com" style="color: #2383e2;">notionlatam.com</a>
          </p>
        </div>
      `;

      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Notion LATAM <newsletter@notionlatam.com>",
          to: [email],
          subject: "¡Ya estás suscrito al newsletter de Notion LATAM!",
          html,
        }),
      }).catch((err) => console.error("[newsletter] welcome email error:", err));
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[newsletter] error:", err);
    return NextResponse.json({ error: "Error interno. Por favor intenta de nuevo." }, { status: 500 });
  }
}

export async function GET() {
  // Simple health / count endpoint (admin use)
  const subscribers = await readSubscribers();
  return NextResponse.json({ count: subscribers.length });
}
