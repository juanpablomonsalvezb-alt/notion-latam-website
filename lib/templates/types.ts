/* ═══════════════════════════════════════════════════════
   ORBBI TEMPLATE ENGINE — Types
   Inspired by Squarespace's template system:
   template.conf + style tweaks + regions/blocks
═══════════════════════════════════════════════════════ */

// ── Tweak Types (like Squarespace's Style Editor) ────────
export type TweakType = "color" | "font" | "range" | "select" | "toggle" | "image";

export interface TweakDef {
  id: string;
  label: string;
  category: "Colores" | "Tipografía" | "Espaciado" | "Bordes" | "Sombras";
  type: TweakType;
  cssVar: string;          // CSS custom property this tweak controls
  default: string;

  // range only
  min?: number;
  max?: number;
  step?: number;
  unit?: string;

  // select / font only
  options?: string[];

  // font: which Google Font weights to load
  weights?: string;
}

// ── Content Fields (editable text/images per section) ────
export type FieldType = "text" | "textarea" | "image" | "richtext" | "list";

export interface ContentField {
  id: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  default: string;
  // for list: items separated by |
  itemPlaceholder?: string;
}

// ── Section Definition (like Squarespace's blocks) ───────
export interface SectionDef {
  id: string;
  label: string;
  icon: string;
  description?: string;
  required?: boolean;         // can't be disabled (navbar, footer)
  defaultEnabled?: boolean;
  fields: ContentField[];
  render: (values: Record<string, string>, tweaks: Record<string, string>) => string;
}

// ── Template Manifest (like template.conf) ───────────────
export interface TemplateManifest {
  id: string;
  name: string;
  description: string;
  preview: string;             // screenshot URL
  tags: string[];
  category: "dark" | "light" | "warm" | "minimal";
  fonts: string[];             // Google Fonts to preload
  tweaks: TweakDef[];
  sections: SectionDef[];
}

// ── Runtime State ─────────────────────────────────────────
export interface BuilderState {
  templateId: string;
  tweakValues: Record<string, string>;     // tweak id → value
  sectionOrder: string[];                  // section ids in order
  enabledSections: Set<string>;
  contentValues: Record<string, Record<string, string>>; // sectionId → fieldId → value
}

// ── Rendered Output ───────────────────────────────────────
export interface RenderedTemplate {
  html: string;
  css: string;
  fonts: string;
}
