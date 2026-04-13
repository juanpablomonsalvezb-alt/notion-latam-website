import { NextRequest, NextResponse } from "next/server";
import { getTemplate } from "@/lib/templates";
import { renderFullHtml } from "@/lib/templates/render";

export async function POST(req: NextRequest) {
  const { templateId, tweakValues, enabledSections, contentValues, sectionOrder, siteName } =
    await req.json();

  const template = getTemplate(templateId ?? "orbbi-dark");

  const html = renderFullHtml(
    template,
    tweakValues ?? {},
    enabledSections ?? template.sections.filter(s => s.required || s.defaultEnabled).map(s => s.id),
    contentValues ?? {},
    sectionOrder,
    siteName ?? "Mi Negocio"
  );

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
