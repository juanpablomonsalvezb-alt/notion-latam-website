import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: NextRequest) {
  const { negocio, descripcion, rubro, telefono, whatsapp } = await req.json();

  const PROMPT = `Eres un experto en marketing digital y copywriting para PYMEs latinoamericanas.
Genera el contenido completo de una landing page profesional y lista para convertir.

NEGOCIO:
- Nombre: ${negocio}
- Rubro: ${rubro}
- Descripción: ${descripcion || "No especificada"}
- Teléfono: ${telefono || "No especificado"}
- WhatsApp: ${whatsapp || "No especificado"}

IMPORTANTE: Escribe TODO el contenido en español neutro latinoamericano. Usa "tú" (nunca "vos"), tuteo estándar, sin modismos regionales. El copy debe funcionar igual de bien en México, Colombia, Chile, Perú o Argentina.
Adapta el tono y ejemplos al rubro. Sé específico y auténtico, no genérico. El copy debe sonar natural y convertir.

Responde ÚNICAMENTE con este JSON (sin texto adicional, sin markdown):
{
  "hero": {
    "headline": "título principal impactante, máx 8 palabras",
    "subheadline": "subtítulo que explica la propuesta de valor, 1-2 oraciones",
    "cta": "texto del botón principal, 3-4 palabras"
  },
  "confianza": ["beneficio breve 1", "beneficio breve 2", "beneficio breve 3", "beneficio breve 4"],
  "sobre": {
    "titulo": "título de sección sobre el negocio",
    "texto": "2-3 párrafos describiendo el negocio, su historia y propuesta de valor"
  },
  "servicios": [
    { "icono": "emoji relevante", "titulo": "nombre servicio", "desc": "descripción breve 15-20 palabras" },
    { "icono": "emoji relevante", "titulo": "nombre servicio", "desc": "descripción breve 15-20 palabras" },
    { "icono": "emoji relevante", "titulo": "nombre servicio", "desc": "descripción breve 15-20 palabras" },
    { "icono": "emoji relevante", "titulo": "nombre servicio", "desc": "descripción breve 15-20 palabras" }
  ],
  "testimonios": [
    { "nombre": "nombre latinoamericano realista", "cargo": "cargo/ciudad", "texto": "testimonio genuino y específico, 2-3 oraciones" },
    { "nombre": "nombre latinoamericano realista", "cargo": "cargo/ciudad", "texto": "testimonio genuino y específico, 2-3 oraciones" },
    { "nombre": "nombre latinoamericano realista", "cargo": "cargo/ciudad", "texto": "testimonio genuino y específico, 2-3 oraciones" }
  ],
  "faq": [
    { "pregunta": "pregunta frecuente relevante para el rubro", "respuesta": "respuesta clara y tranquilizadora" },
    { "pregunta": "pregunta frecuente relevante para el rubro", "respuesta": "respuesta clara y tranquilizadora" },
    { "pregunta": "pregunta frecuente relevante para el rubro", "respuesta": "respuesta clara y tranquilizadora" },
    { "pregunta": "pregunta frecuente relevante para el rubro", "respuesta": "respuesta clara y tranquilizadora" }
  ],
  "cta_final": {
    "titulo": "título urgente que invite a la acción",
    "subtitulo": "frase que elimine objeción y genere confianza",
    "boton": "texto del botón, 4-5 palabras"
  }
}`;

  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: { responseMimeType: "application/json" },
    });

    const result = await model.generateContent(PROMPT);
    const raw = result.response.text();
    const content = JSON.parse(raw);

    return NextResponse.json({ ok: true, content, meta: { negocio, rubro, telefono, whatsapp } });
  } catch (err) {
    console.error("[generate]", err);
    return NextResponse.json({ ok: false, error: "Error generando contenido" }, { status: 500 });
  }
}
