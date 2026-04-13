import { NextResponse } from "next/server";
import { TEMPLATES } from "@/lib/templates";

export async function GET() {
  // Return templates without the render functions (not serializable)
  const safe = TEMPLATES.map(t => ({
    id: t.id,
    name: t.name,
    description: t.description,
    preview: t.preview,
    tags: t.tags,
    category: t.category,
    tweaks: t.tweaks,
    sections: t.sections.map(s => ({
      id: s.id,
      label: s.label,
      icon: s.icon,
      required: s.required,
      defaultEnabled: s.defaultEnabled,
      fields: s.fields,
    })),
  }));

  return NextResponse.json(safe);
}
