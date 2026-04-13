import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export async function POST(req: NextRequest) {
  const config = await req.json();

  const templatePath = join(process.cwd(), "public", "template.html");
  let html = readFileSync(templatePath, "utf-8");

  // Reemplaza el bloque CONFIG con los valores del usuario
  const configBlock = `  const CONFIG = ${JSON.stringify(config, null, 4)
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029")};`;

  html = html.replace(
    /\/\* ═+\s*CONFIG[\s\S]*?\/\* ══+\s*\*\//,
    `/* ═══════════════════════════════════════════════════════════
     CONFIG — generado por Orbbi Builder
  ═══════════════════════════════════════════════════════ */
${configBlock}
  /* ══════════════════════════════════════════════════════════ */`
  );

  return new NextResponse(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `attachment; filename="${(config.negocio?.nombre || "mi-negocio").toLowerCase().replace(/\s+/g, "-")}.html"`,
    },
  });
}
