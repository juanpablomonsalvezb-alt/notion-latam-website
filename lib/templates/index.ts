/* ═══════════════════════════════════════════════════════
   ORBBI TEMPLATE ENGINE — Template Registry
   3 templates: dark, light, warm
   Each defines its own tweaks (like Squarespace's Style Editor)
═══════════════════════════════════════════════════════ */

import type { TemplateManifest, TweakDef } from "./types";
import { ALL_SECTIONS } from "./sections";

// ── Shared tweak definitions ──────────────────────────────
const FONT_OPTIONS = [
  "Inter", "Poppins", "Montserrat", "Raleway",
  "Playfair Display", "Lora", "Merriweather",
  "Bebas Neue", "Oswald", "DM Sans",
];

const spacingTweaks: TweakDef[] = [
  {
    id: "sectionPad",
    label: "Espaciado entre secciones",
    category: "Espaciado",
    type: "range",
    cssVar: "--section-pad-y",
    default: "100",
    min: 60, max: 160, step: 10, unit: "px",
  },
  {
    id: "maxWidth",
    label: "Ancho máximo del contenido",
    category: "Espaciado",
    type: "select",
    cssVar: "--max-w",
    default: "1200px",
    options: ["1000px", "1100px", "1200px", "1400px"],
  },
  {
    id: "radius",
    label: "Redondez de cards",
    category: "Bordes",
    type: "range",
    cssVar: "--radius",
    default: "12",
    min: 0, max: 28, step: 2, unit: "px",
  },
  {
    id: "radiusLg",
    label: "Redondez grande (secciones)",
    category: "Bordes",
    type: "range",
    cssVar: "--radius-lg",
    default: "20",
    min: 0, max: 40, step: 4, unit: "px",
  },
];

// ════════════════════════════════════════════════════════
//  TEMPLATE 1 — Orbbi Dark (moderno oscuro)
// ════════════════════════════════════════════════════════
export const templateDark: TemplateManifest = {
  id: "orbbi-dark",
  name: "Orbbi Dark",
  description: "Moderno y oscuro. Ideal para tech, servicios digitales y negocios premium.",
  preview: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=600&q=80",
  tags: ["dark", "moderno", "premium", "tech"],
  category: "dark",
  fonts: ["Inter", "Poppins", "Playfair+Display", "Montserrat", "Bebas+Neue", "Lora", "Raleway", "Oswald", "DM+Sans"],
  tweaks: [
    // Colores
    {
      id: "accent",
      label: "Color de acento",
      category: "Colores",
      type: "color",
      cssVar: "--accent",
      default: "#6366f1",
    },
    {
      id: "bg",
      label: "Fondo principal",
      category: "Colores",
      type: "color",
      cssVar: "--bg",
      default: "#0a0a0a",
    },
    {
      id: "bg2",
      label: "Fondo secundario",
      category: "Colores",
      type: "color",
      cssVar: "--bg2",
      default: "#111111",
    },
    {
      id: "surface",
      label: "Fondo de cards",
      category: "Colores",
      type: "color",
      cssVar: "--surface",
      default: "#1e1e1e",
    },
    {
      id: "text",
      label: "Color de texto",
      category: "Colores",
      type: "color",
      cssVar: "--text",
      default: "#f0f0f0",
    },
    {
      id: "textMuted",
      label: "Texto secundario",
      category: "Colores",
      type: "color",
      cssVar: "--text-muted",
      default: "#888888",
    },
    {
      id: "accentText",
      label: "Texto sobre acento",
      category: "Colores",
      type: "color",
      cssVar: "--accent-text",
      default: "#ffffff",
    },
    // Tipografía
    {
      id: "fontHead",
      label: "Tipografía de títulos",
      category: "Tipografía",
      type: "font",
      cssVar: "--font-head",
      default: "Poppins",
      options: FONT_OPTIONS,
    },
    {
      id: "fontBody",
      label: "Tipografía de cuerpo",
      category: "Tipografía",
      type: "font",
      cssVar: "--font-body",
      default: "Inter",
      options: FONT_OPTIONS,
    },
    ...spacingTweaks,
  ],
  sections: ALL_SECTIONS,
};

// ════════════════════════════════════════════════════════
//  TEMPLATE 2 — Orbbi Light (limpio y profesional)
// ════════════════════════════════════════════════════════
export const templateLight: TemplateManifest = {
  id: "orbbi-light",
  name: "Orbbi Light",
  description: "Limpio y profesional. Perfecto para consultoras, abogados, contadores y salud.",
  preview: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  tags: ["light", "profesional", "limpio", "salud"],
  category: "light",
  fonts: ["Inter", "Poppins", "Playfair+Display", "Montserrat", "Bebas+Neue", "Lora", "Raleway", "Oswald", "DM+Sans"],
  tweaks: [
    {
      id: "accent",
      label: "Color de acento",
      category: "Colores",
      type: "color",
      cssVar: "--accent",
      default: "#2563eb",
    },
    {
      id: "bg",
      label: "Fondo principal",
      category: "Colores",
      type: "color",
      cssVar: "--bg",
      default: "#ffffff",
    },
    {
      id: "bg2",
      label: "Fondo secundario",
      category: "Colores",
      type: "color",
      cssVar: "--bg2",
      default: "#f8fafc",
    },
    {
      id: "surface",
      label: "Fondo de cards",
      category: "Colores",
      type: "color",
      cssVar: "--surface",
      default: "#ffffff",
    },
    {
      id: "text",
      label: "Color de texto",
      category: "Colores",
      type: "color",
      cssVar: "--text",
      default: "#0f172a",
    },
    {
      id: "textMuted",
      label: "Texto secundario",
      category: "Colores",
      type: "color",
      cssVar: "--text-muted",
      default: "#64748b",
    },
    {
      id: "accentText",
      label: "Texto sobre acento",
      category: "Colores",
      type: "color",
      cssVar: "--accent-text",
      default: "#ffffff",
    },
    {
      id: "fontHead",
      label: "Tipografía de títulos",
      category: "Tipografía",
      type: "font",
      cssVar: "--font-head",
      default: "Poppins",
      options: FONT_OPTIONS,
    },
    {
      id: "fontBody",
      label: "Tipografía de cuerpo",
      category: "Tipografía",
      type: "font",
      cssVar: "--font-body",
      default: "Inter",
      options: FONT_OPTIONS,
    },
    ...spacingTweaks,
  ],
  sections: ALL_SECTIONS,
};

// ════════════════════════════════════════════════════════
//  TEMPLATE 3 — Orbbi Warm (cálido y cercano)
// ════════════════════════════════════════════════════════
export const templateWarm: TemplateManifest = {
  id: "orbbi-warm",
  name: "Orbbi Warm",
  description: "Cálido y elegante. Ideal para restaurantes, estéticas, tiendas y servicios de bienestar.",
  preview: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80",
  tags: ["warm", "elegante", "restaurant", "estetica"],
  category: "warm",
  fonts: ["Lora", "Playfair+Display", "Inter", "Poppins", "Montserrat", "Raleway", "Bebas+Neue", "Oswald", "DM+Sans"],
  tweaks: [
    {
      id: "accent",
      label: "Color de acento",
      category: "Colores",
      type: "color",
      cssVar: "--accent",
      default: "#c9748f",
    },
    {
      id: "bg",
      label: "Fondo principal",
      category: "Colores",
      type: "color",
      cssVar: "--bg",
      default: "#fdf8f3",
    },
    {
      id: "bg2",
      label: "Fondo secundario",
      category: "Colores",
      type: "color",
      cssVar: "--bg2",
      default: "#f0e9df",
    },
    {
      id: "surface",
      label: "Fondo de cards",
      category: "Colores",
      type: "color",
      cssVar: "--surface",
      default: "#fffcf9",
    },
    {
      id: "text",
      label: "Color de texto",
      category: "Colores",
      type: "color",
      cssVar: "--text",
      default: "#2c1a0e",
    },
    {
      id: "textMuted",
      label: "Texto secundario",
      category: "Colores",
      type: "color",
      cssVar: "--text-muted",
      default: "#7a6e5f",
    },
    {
      id: "accentText",
      label: "Texto sobre acento",
      category: "Colores",
      type: "color",
      cssVar: "--accent-text",
      default: "#ffffff",
    },
    {
      id: "fontHead",
      label: "Tipografía de títulos",
      category: "Tipografía",
      type: "font",
      cssVar: "--font-head",
      default: "Playfair Display",
      options: FONT_OPTIONS,
    },
    {
      id: "fontBody",
      label: "Tipografía de cuerpo",
      category: "Tipografía",
      type: "font",
      cssVar: "--font-body",
      default: "Lora",
      options: FONT_OPTIONS,
    },
    ...spacingTweaks,
  ],
  sections: ALL_SECTIONS,
};

// ── Registry ──────────────────────────────────────────────
export const TEMPLATES: TemplateManifest[] = [
  templateDark,
  templateLight,
  templateWarm,
];

export function getTemplate(id: string): TemplateManifest {
  return TEMPLATES.find(t => t.id === id) ?? templateDark;
}

export function getDefaultTweaks(template: TemplateManifest): Record<string, string> {
  return Object.fromEntries(template.tweaks.map(t => [t.id, String(t.default)]));
}

export function getDefaultContent(template: TemplateManifest): Record<string, Record<string, string>> {
  return Object.fromEntries(
    template.sections.map(s => [
      s.id,
      Object.fromEntries(s.fields.map(f => [f.id, f.default]))
    ])
  );
}

export function getDefaultEnabledSections(template: TemplateManifest): string[] {
  return template.sections
    .filter(s => s.required || s.defaultEnabled)
    .map(s => s.id);
}
