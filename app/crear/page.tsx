"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { TEMPLATES, getTemplate, getDefaultTweaks, getDefaultContent, getDefaultEnabledSections } from "@/lib/templates";
import type { TemplateManifest, TweakDef, SectionDef } from "@/lib/templates/types";
import { buildCssVars, buildFontLink } from "@/lib/templates/render";

/* ══════════════════════════════════════════════════════
   DATA — Palettes, Font Pairs, Rubros
══════════════════════════════════════════════════════ */
const COLOR_PALETTES = [
  { id: "dark-pro",    name: "Dark Pro",   preview: ["#0a0a0a","#6366f1","#f0f0f0"], tweaks: { accent:"#6366f1", bg:"#0a0a0a", bg2:"#111111", surface:"#1e1e1e", text:"#f0f0f0", textMuted:"#888888", accentText:"#ffffff" }},
  { id: "light-clean", name: "Blanco",     preview: ["#ffffff","#2563eb","#0f172a"], tweaks: { accent:"#2563eb", bg:"#ffffff", bg2:"#f8fafc", surface:"#ffffff", text:"#0f172a", textMuted:"#64748b", accentText:"#ffffff" }},
  { id: "warm-beige",  name: "Cálido",     preview: ["#fdf8f3","#c9748f","#2c1a0e"], tweaks: { accent:"#c9748f", bg:"#fdf8f3", bg2:"#f0e9df", surface:"#fffcf9", text:"#2c1a0e", textMuted:"#7a6e5f", accentText:"#ffffff" }},
  { id: "forest",      name: "Bosque",     preview: ["#fafaf8","#16a34a","#1c1917"], tweaks: { accent:"#16a34a", bg:"#fafaf8", bg2:"#f0f5f0", surface:"#ffffff", text:"#1c1917", textMuted:"#5a7a58", accentText:"#ffffff" }},
  { id: "ocean",       name: "Océano",     preview: ["#f0f9ff","#0ea5e9","#0c1a2e"], tweaks: { accent:"#0ea5e9", bg:"#f0f9ff", bg2:"#e0f2fe", surface:"#ffffff", text:"#0c1a2e", textMuted:"#4a7a9b", accentText:"#ffffff" }},
  { id: "black-gold",  name: "Dorado",     preview: ["#1a1a1a","#f59e0b","#fafafa"], tweaks: { accent:"#f59e0b", bg:"#1a1a1a", bg2:"#222222", surface:"#2a2a2a", text:"#fafafa", textMuted:"#888888", accentText:"#000000" }},
];

const FONT_PAIRS = [
  { id:"modern",    name:"Moderno",    head:"Poppins",          body:"Inter",        hSample:"Solución profesional", bSample:"Texto claro y directo" },
  { id:"editorial", name:"Editorial",  head:"Playfair Display", body:"Lora",         hSample:"Elegancia atemporal",  bSample:"Narrativa sofisticada" },
  { id:"bold",      name:"Impactante", head:"Bebas Neue",       body:"DM Sans",      hSample:"MÁXIMO IMPACTO",       bSample:"Dinámico y moderno" },
  { id:"elegant",   name:"Elegante",   head:"Raleway",          body:"Merriweather", hSample:"Estilo refinado",       bSample:"Lectura placentera" },
  { id:"classic",   name:"Clásico",    head:"Oswald",           body:"Montserrat",   hSample:"Presencia fuerte",      bSample:"Equilibrio perfecto" },
];

/* ══════════════════════════════════════════════════════
   CURATED IMAGES — Unsplash CDN por rubro
   Format: [hero_bg, about, gallery×6]
══════════════════════════════════════════════════════ */
const U = (id: string, w = 800, h = 600) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`;

const RUBRO_IMAGES: Record<string, { hero: string; about: string; gallery: string[] }> = {
  restaurante: {
    hero:    U("1414235077428-338989a2e8c0", 1600, 900),
    about:   U("1555396273-367ea4eb4db5"),
    gallery: [
      U("1565299624946-b28f40a0ae38", 600, 600),
      U("1567521464027-f127ff144326", 600, 600),
      U("1544148103-0773bf10d330", 600, 600),
      U("1551218808-94e220e084d2", 600, 600),
      U("1414235077428-338989a2e8c0", 600, 600),
      U("1555396273-367ea4eb4db5", 600, 600),
    ],
  },
  dentista: {
    hero:    U("1606811851888-c9b35e72c70b", 1600, 900),
    about:   U("1581595219315-a187dd40c5d5"),
    gallery: [
      U("1606811851888-c9b35e72c70b", 600, 600),
      U("1588776814546-1ffbb083abb6", 600, 600),
      U("1609840114035-3c981b3f6e97", 600, 600),
      U("1581595219315-a187dd40c5d5", 600, 600),
      U("1559757175-5700dde675bc", 600, 600),
      U("1576091160399-112ba8d25d1d", 600, 600),
    ],
  },
  gym: {
    hero:    U("1534438327047-80c50d1a8fc5", 1600, 900),
    about:   U("1517836357463-d25dfeac3438"),
    gallery: [
      U("1534438327047-80c50d1a8fc5", 600, 600),
      U("1517836357463-d25dfeac3438", 600, 600),
      U("1571019614242-c5c5dee9f50b", 600, 600),
      U("1526506118085-60ce8714f8c5", 600, 600),
      U("1574680096145-d05b474e2155", 600, 600),
      U("1599058917212-d750089bc07e", 600, 600),
    ],
  },
  salon: {
    hero:    U("1560066984-138dadb4c035", 1600, 900),
    about:   U("1522337360826-74d2f7b32c35"),
    gallery: [
      U("1560066984-138dadb4c035", 600, 600),
      U("1522337360826-74d2f7b32c35", 600, 600),
      U("1487412912498-0447578fcca8", 600, 600),
      U("1503951914875-452162b0f3f1", 600, 600),
      U("1521590832167-7bcbfaa6381f", 600, 600),
      U("1516975080664-ed2fc6a32937", 600, 600),
    ],
  },
  clinica: {
    hero:    U("1576091160550-2173dba999ef", 1600, 900),
    about:   U("1584820927498-cad2bf7b4a34"),
    gallery: [
      U("1576091160550-2173dba999ef", 600, 600),
      U("1530026405186-ed1f139313f9", 600, 600),
      U("1584820927498-cad2bf7b4a34", 600, 600),
      U("1631815589968-fdb09a223b1e", 600, 600),
      U("1551884831-bbf3cdc6469e", 600, 600),
      U("1559757175-5700dde675bc", 600, 600),
    ],
  },
  abogado: {
    hero:    U("1589829545856-d10d557cf95f", 1600, 900),
    about:   U("1521791136064-7986c2920216"),
    gallery: [
      U("1589829545856-d10d557cf95f", 600, 600),
      U("1479432085652-1b99b35b3d2f", 600, 600),
      U("1450101499163-c8848c66ca85", 600, 600),
      U("1507679799987-c73779587ccf", 600, 600),
      U("1521791136064-7986c2920216", 600, 600),
      U("1454165804606-c3d57bc86b40", 600, 600),
    ],
  },
  psicologo: {
    hero:    U("1573497019940-1c28c88b4f3e", 1600, 900),
    about:   U("1516302752760-5c36a3d96891"),
    gallery: [
      U("1573497019940-1c28c88b4f3e", 600, 600),
      U("1516302752760-5c36a3d96891", 600, 600),
      U("1544027988-c3d2c4e0a75e", 600, 600),
      U("1515023115689-589c33041d3c", 600, 600),
      U("1531983412531-1f49a365ffed", 600, 600),
      U("1506126613408-eca07ce68773", 600, 600),
    ],
  },
  contador: {
    hero:    U("1554224155-8d04cb21cd6c", 1600, 900),
    about:   U("1507003211169-0a1dd7228f2d"),
    gallery: [
      U("1554224155-8d04cb21cd6c", 600, 600),
      U("1507003211169-0a1dd7228f2d", 600, 600),
      U("1460925895917-afdab827c52f", 600, 600),
      U("1579621970563-ebec7560ff3e", 600, 600),
      U("1553729459-efe14ef6055d", 600, 600),
      U("1434030216411-0b793f4b4173", 600, 600),
    ],
  },
  construccion: {
    hero:    U("1504307651254-35680f356dfd", 1600, 900),
    about:   U("1584622650111-993a426fbf0a"),
    gallery: [
      U("1504307651254-35680f356dfd", 600, 600),
      U("1558618666-fcd25c85cd64", 600, 600),
      U("1588464083059-ebfb6a6ecaae", 600, 600),
      U("1584622650111-993a426fbf0a", 600, 600),
      U("1565008576549-57569a49371d", 600, 600),
      U("1541976590369-68832a49c1f1", 600, 600),
    ],
  },
  tienda: {
    hero:    U("1556742049-0cfed4f6a45d", 1600, 900),
    about:   U("1441986300917-64674bd600d8"),
    gallery: [
      U("1556742049-0cfed4f6a45d", 600, 600),
      U("1441986300917-64674bd600d8", 600, 600),
      U("1607082349566-187342175e2f", 600, 600),
      U("1483985988355-763728e1935b", 600, 600),
      U("1472851294608-062f824d29cc", 600, 600),
      U("1601924994987-69e26d50dc26", 600, 600),
    ],
  },
  academia: {
    hero:    U("1523050854058-8df90110c9f1", 1600, 900),
    about:   U("1524178232363-1fb2b075b655"),
    gallery: [
      U("1523050854058-8df90110c9f1", 600, 600),
      U("1524178232363-1fb2b075b655", 600, 600),
      U("1434030216411-0b793f4b4173", 600, 600),
      U("1546410531-bb4caa6b424d", 600, 600),
      U("1509062522246-3755977927d7", 600, 600),
      U("1580582932707-520aed937b7b", 600, 600),
    ],
  },
  fotografia: {
    hero:    U("1542038374-8b585a3d3caf", 1600, 900),
    about:   U("1452587925148-ce544e77e70d"),
    gallery: [
      U("1542038374-8b585a3d3caf", 600, 600),
      U("1498408785550-c0bcf589f06d", 600, 600),
      U("1452587925148-ce544e77e70d", 600, 600),
      U("1554080353-a576cf803bda", 600, 600),
      U("1492691527719-9d1e07e534b4", 600, 600),
      U("1505325010650-b83e77a45dd4", 600, 600),
    ],
  },
  tecnologia: {
    hero:    U("1460925895917-afdab827c52f", 1600, 900),
    about:   U("1510915228340-29c85a43dcfe"),
    gallery: [
      U("1460925895917-afdab827c52f", 600, 600),
      U("1510915228340-29c85a43dcfe", 600, 600),
      U("1451187580459-43490279c0fa", 600, 600),
      U("1518770660439-4636190af475", 600, 600),
      U("1526374965328-7f61d4dc18c5", 600, 600),
      U("1488590528505-98d2b5aba04b", 600, 600),
    ],
  },
  inmobiliaria: {
    hero:    U("1560518883-ce09059eeffa", 1600, 900),
    about:   U("1568605114967-8130f3a36994"),
    gallery: [
      U("1560518883-ce09059eeffa", 600, 600),
      U("1582407947304-fd86f28320c7", 600, 600),
      U("1568605114967-8130f3a36994", 600, 600),
      U("1512917774080-9991f1c4c750", 600, 600),
      U("1600596542815-ffad4c1539a9", 600, 600),
      U("1600585154340-be6161a56a0c", 600, 600),
    ],
  },
  veterinaria: {
    hero:    U("1548767797-d8c844163c4a", 1600, 900),
    about:   U("1587300003388-59208cc962cb"),
    gallery: [
      U("1548767797-d8c844163c4a", 600, 600),
      U("1450778869180-41d0601e046e", 600, 600),
      U("1587300003388-59208cc962cb", 600, 600),
      U("1535268647677-300dbf3d78d1", 600, 600),
      U("1574158622682-e40e69881006", 600, 600),
      U("1601758003122-53c40e686a19", 600, 600),
    ],
  },
  otro: {
    hero:    U("1497366216548-37526070297c", 1600, 900),
    about:   U("1497366754035-f200968a6e72"),
    gallery: [
      U("1497366216548-37526070297c", 600, 600),
      U("1522202176988-66273c2fd55f", 600, 600),
      U("1454165804606-c3d57bc86b40", 600, 600),
      U("1507679799987-c73779587ccf", 600, 600),
      U("1521737604893-d14cc237f11d", 600, 600),
      U("1556742049-0cfed4f6a45d", 600, 600),
    ],
  },
};

const RUBROS_IA = [
  { id:"restaurante",  icono:"🍽️", nombre:"Restaurante / Café" },
  { id:"dentista",     icono:"🦷", nombre:"Dentista / Odontología" },
  { id:"gym",          icono:"💪", nombre:"Gimnasio / Fitness" },
  { id:"salon",        icono:"💇", nombre:"Salón de belleza" },
  { id:"clinica",      icono:"🏥", nombre:"Clínica / Médico" },
  { id:"abogado",      icono:"⚖️", nombre:"Abogado / Estudio jurídico" },
  { id:"psicologo",    icono:"🧠", nombre:"Psicólogo / Terapeuta" },
  { id:"contador",     icono:"📊", nombre:"Contador / Asesoría contable" },
  { id:"construccion", icono:"🏗️", nombre:"Construcción / Remodelación" },
  { id:"tienda",       icono:"🛍️", nombre:"Tienda / Retail" },
  { id:"academia",     icono:"🎓", nombre:"Academia / Educación" },
  { id:"fotografia",   icono:"📸", nombre:"Fotografía / Eventos" },
  { id:"tecnologia",   icono:"💻", nombre:"Tecnología / Software" },
  { id:"inmobiliaria", icono:"🏠", nombre:"Inmobiliaria" },
  { id:"veterinaria",  icono:"🐾", nombre:"Veterinaria" },
  { id:"otro",         icono:"✨", nombre:"Otro (describir abajo)" },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapAiToContent(ai: any, nombre: string, whatsapp: string, rubro = "otro"): Record<string, Record<string, string>> {
  const wa = whatsapp || "56912345678";
  const imgs = RUBRO_IMAGES[rubro] ?? RUBRO_IMAGES["otro"];
  const g = imgs.gallery;
  return {
    navbar:      { logo_text: nombre, whatsapp: wa },
    hero:        { headline: ai.hero?.headline ?? "", subheadline: ai.hero?.subheadline ?? "", cta1: ai.hero?.cta ?? "Contáctanos ahora", whatsapp: wa, bg_image: imgs.hero },
    trust:       { stat1_val:"500+", stat1_label:ai.confianza?.[0]??"", stat2_val:"10+", stat2_label:ai.confianza?.[1]??"", stat3_val:"98%", stat3_label:ai.confianza?.[2]??"", stat4_val:"4.9★", stat4_label:ai.confianza?.[3]??"" },
    servicios:   { s1_icon:ai.servicios?.[0]?.icono??"⚡", s1_title:ai.servicios?.[0]?.titulo??"", s1_desc:ai.servicios?.[0]?.desc??"", s2_icon:ai.servicios?.[1]?.icono??"🛡️", s2_title:ai.servicios?.[1]?.titulo??"", s2_desc:ai.servicios?.[1]?.desc??"", s3_icon:ai.servicios?.[2]?.icono??"📋", s3_title:ai.servicios?.[2]?.titulo??"", s3_desc:ai.servicios?.[2]?.desc??"", s4_icon:ai.servicios?.[3]?.icono??"🚀", s4_title:ai.servicios?.[3]?.titulo??"", s4_desc:ai.servicios?.[3]?.desc??"" },
    nosotros:    { titulo:ai.sobre?.titulo??"Quiénes somos", texto:ai.sobre?.texto??"", whatsapp:wa, imagen: imgs.about },
    galeria:     { titulo:"Nuestro trabajo", subtitulo:"Resultados que hablan por sí solos.", img1:g[0], img2:g[1], img3:g[2], img4:g[3], img5:g[4], img6:g[5] },
    testimonios: { t1_nombre:ai.testimonios?.[0]?.nombre??"", t1_ciudad:ai.testimonios?.[0]?.cargo??"", t1_texto:ai.testimonios?.[0]?.texto??"", t2_nombre:ai.testimonios?.[1]?.nombre??"", t2_ciudad:ai.testimonios?.[1]?.cargo??"", t2_texto:ai.testimonios?.[1]?.texto??"", t3_nombre:ai.testimonios?.[2]?.nombre??"", t3_ciudad:ai.testimonios?.[2]?.cargo??"", t3_texto:ai.testimonios?.[2]?.texto??"" },
    faq:         { q1:ai.faq?.[0]?.pregunta??"", a1:ai.faq?.[0]?.respuesta??"", q2:ai.faq?.[1]?.pregunta??"", a2:ai.faq?.[1]?.respuesta??"", q3:ai.faq?.[2]?.pregunta??"", a3:ai.faq?.[2]?.respuesta??"", q4:ai.faq?.[3]?.pregunta??"", a4:ai.faq?.[3]?.respuesta??"" },
    cta:         { titulo:ai.cta_final?.titulo??"¿Listo para comenzar?", texto:ai.cta_final?.subtitulo??"", boton1:ai.cta_final?.boton??"Escribir por WhatsApp", whatsapp:wa },
    contacto:    { whatsapp:wa },
    footer:      { nombre, whatsapp:wa },
  };
}

/* ══════════════════════════════════════════════════════
   WIZARD DATA
══════════════════════════════════════════════════════ */
const WIZARD_PURPOSES = [
  "Vender servicios",        "Mostrar mi trabajo/portfolio",
  "Reservar citas o turnos", "Vender productos",
  "Crear un blog",           "Ofrecer cursos en línea",
  "Recibir consultas",       "Promocionar negocio físico",
  "Crear una comunidad",     "Enviar facturas a clientes",
  "Aceptar donaciones",      "Vender membresías",
];

const WIZARD_PREVIEWS = [
  {
    img: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=1400&q=90",
    label: "Dark Pro",
  },
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=90",
    label: "Blanco",
  },
  {
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1400&q=90",
    label: "Cálido",
  },
];

/* ══════════════════════════════════════════════════════
   TYPES
══════════════════════════════════════════════════════ */
type Panel = "plantilla" | "secciones" | "estilos" | "contenido";
type DesignTab = "paleta" | "tipografia" | "espaciado";
type WizardStep = 0 | 1 | 2 | 3;

/* ══════════════════════════════════════════════════════
   FIELD EDITOR
══════════════════════════════════════════════════════ */
function FieldEditor({ field, value, onChange }: { field: { id: string; label: string; type: string; placeholder?: string }; value: string; onChange: (v: string) => void }) {
  const base = "w-full bg-white border border-[#e0e0e0] rounded px-3 py-2 text-[13px] text-[#1a1a1a] placeholder-[#bbb] focus:outline-none focus:border-[#1a1a1a] transition-colors";
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[11px] font-semibold text-[#666] uppercase tracking-wide">{field.label}</label>
      {field.type === "textarea"
        ? <textarea value={value} onChange={e => onChange(e.target.value)} placeholder={field.placeholder} rows={3} className={`${base} resize-none`} />
        : <input type={field.type === "image" ? "url" : "text"} value={value} onChange={e => onChange(e.target.value)} placeholder={field.placeholder} className={base} />}
    </div>
  );
}

/* ══════════════════════════════════════════════════════
   MAIN BUILDER
══════════════════════════════════════════════════════ */
export default function CrearPage() {
  /* ── WIZARD STATE ── */
  const [wizardDone, setWizardDone]         = useState(false);
  const [wizardStep, setWizardStep]         = useState<WizardStep>(0);
  const [wizardMode, setWizardMode]         = useState<"ai"|"template"|"">("");
  const [wizardPurposes, setWizardPurposes] = useState<string[]>([]);
  const [wizardRubro, setWizardRubro]       = useState("restaurante");
  const [wizardNombre, setWizardNombre]     = useState("");
  const [wizardWa, setWizardWa]             = useState("");
  const [wizardDesc, setWizardDesc]         = useState("");
  const [wizardSearch, setWizardSearch]     = useState("");
  const [wizardPrevIdx, setWizardPrevIdx]   = useState(0);
  const [wizardLoading, setWizardLoading]   = useState(false);
  const [wizardError, setWizardError]       = useState("");

  const [panel, setPanel] = useState<Panel>("plantilla");
  const [designTab, setDesignTab] = useState<DesignTab>("paleta");
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [downloading, setDownloading] = useState(false);
  const [previewLoading, setPreviewLoading] = useState(false);
  const [siteName, setSiteName] = useState("Mi Negocio");
  const [editingName, setEditingName] = useState(false);
  const [showAiModal, setShowAiModal] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiError, setAiError] = useState("");
  const [aiForm, setAiForm] = useState({ nombre:"", rubro:"restaurante", descripcion:"", whatsapp:"", telefono:"" });
  const [showCustomColors, setShowCustomColors] = useState(false);

  // Drag & drop
  const [dragId, setDragId] = useState<string | null>(null);
  const [dragOverId, setDragOverId] = useState<string | null>(null);

  // Template state
  const [templateId, setTemplateId] = useState("orbbi-dark");
  const template = getTemplate(templateId);
  const [tweaks, setTweaks] = useState<Record<string, string>>(() => getDefaultTweaks(getTemplate("orbbi-dark")));
  const [enabledSections, setEnabledSections] = useState<Set<string>>(() => new Set(getDefaultEnabledSections(getTemplate("orbbi-dark"))));
  const [sectionOrder, setSectionOrder] = useState<string[]>(() => getTemplate("orbbi-dark").sections.map(s => s.id));
  const [content, setContent] = useState<Record<string, Record<string, string>>>(() => getDefaultContent(getTemplate("orbbi-dark")));
  const [activeSection, setActiveSection] = useState<string>("hero");

  const iframeRef = useRef<HTMLIFrameElement>(null);
  const previewDebounce = useRef<ReturnType<typeof setTimeout> | null>(null);
  const iframeLoadedRef = useRef(false);

  /* ── Wizard: rotar preview ── */
  useEffect(() => {
    if (wizardDone) return;
    const t = setInterval(() => setWizardPrevIdx(i => (i + 1) % WIZARD_PREVIEWS.length), 4000);
    return () => clearInterval(t);
  }, [wizardDone]);

  /* ── Wizard: completar con IA ── */
  const handleWizardGenerate = async () => {
    if (!wizardNombre.trim()) { setWizardError("Escribe el nombre de tu negocio"); return; }
    setWizardLoading(true); setWizardError("");
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ negocio: wizardNombre, rubro: RUBROS_IA.find(r => r.id === wizardRubro)?.nombre ?? wizardRubro, descripcion: wizardDesc, whatsapp: wizardWa }),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error);
      const mapped = mapAiToContent(data.content, wizardNombre, wizardWa, wizardRubro);
      setContent(prev => { const n = { ...prev }; for (const [k,v] of Object.entries(mapped)) n[k] = { ...(prev[k] ?? {}), ...v }; return n; });
      setSiteName(wizardNombre);
      setWizardDone(true);
      setPanel("contenido");
    } catch { setWizardError("Error al generar. Intentá de nuevo."); }
    finally { setWizardLoading(false); }
  };

  /* ── Wizard: completar con plantilla ── */
  const handleWizardTemplate = () => {
    setWizardDone(true);
    setPanel("plantilla");
  };

  /* ── postMessage: click-to-edit from preview ── */
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data?.type === "orbbi-edit" && e.data?.sectionId) {
        setActiveSection(e.data.sectionId);
        setPanel("contenido");
      }
    };
    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, []);

  /* ── Instant CSS injection ── */
  const injectStyles = useCallback(() => {
    const iframe = iframeRef.current;
    if (!iframe?.contentDocument || !iframeLoadedRef.current) return;
    const doc = iframe.contentDocument;
    let styleEl = doc.getElementById("orbbi-live-tweaks") as HTMLStyleElement | null;
    if (!styleEl) { styleEl = doc.createElement("style"); styleEl.id = "orbbi-live-tweaks"; doc.head.appendChild(styleEl); }
    styleEl.textContent = buildCssVars(template, tweaks);
    const fontUrl = buildFontLink(template, tweaks);
    let linkEl = doc.getElementById("orbbi-live-fonts") as HTMLLinkElement | null;
    if (!linkEl) { linkEl = doc.createElement("link"); linkEl.id = "orbbi-live-fonts"; linkEl.rel = "stylesheet"; doc.head.appendChild(linkEl); }
    if (linkEl.href !== fontUrl) linkEl.href = fontUrl;
    const bodyFont = tweaks["fontBody"] ?? "Inter";
    if (doc.body) doc.body.style.fontFamily = `'${bodyFont}', system-ui, sans-serif`;
  }, [template, tweaks]);

  /* ── Full refresh ── */
  const refreshPreview = useCallback(() => {
    if (previewDebounce.current) clearTimeout(previewDebounce.current);
    previewDebounce.current = setTimeout(async () => {
      setPreviewLoading(true);
      iframeLoadedRef.current = false;
      try {
        const res = await fetch("/api/preview", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ templateId, tweakValues:tweaks, enabledSections:[...enabledSections], contentValues:content, sectionOrder, siteName }) });
        const html = await res.text();
        if (iframeRef.current) iframeRef.current.srcdoc = html;
      } finally { setPreviewLoading(false); }
    }, 400);
  }, [templateId, tweaks, enabledSections, content, sectionOrder, siteName]);

  const handleIframeLoad = useCallback(() => { iframeLoadedRef.current = true; injectStyles(); }, [injectStyles]);

  const tweaksRef = useRef(tweaks);
  useEffect(() => {
    const isFirst = tweaksRef.current === tweaks;
    tweaksRef.current = tweaks;
    if (!isFirst) { injectStyles(); return; }
    refreshPreview();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tweaks]);

  const prevRef = useRef({ templateId, enabledSections, sectionOrder, content, siteName });
  useEffect(() => {
    const p = prevRef.current;
    const changed = p.templateId !== templateId || p.enabledSections !== enabledSections || p.sectionOrder !== sectionOrder || p.content !== content || p.siteName !== siteName;
    prevRef.current = { templateId, enabledSections, sectionOrder, content, siteName };
    if (changed) refreshPreview();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [templateId, enabledSections, sectionOrder, content, siteName]);

  /* ── Actions ── */
  const switchTemplate = useCallback((id: string) => {
    const t = getTemplate(id);
    setTemplateId(id); setTweaks(getDefaultTweaks(t));
    setEnabledSections(new Set(getDefaultEnabledSections(t)));
    setSectionOrder(t.sections.map(s => s.id)); setContent(getDefaultContent(t)); setPanel("estilos");
  }, []);

  const setTweak = useCallback((id: string, v: string) => setTweaks(prev => ({ ...prev, [id]: v })), []);

  const applyPalette = useCallback((palette: typeof COLOR_PALETTES[0]) => {
    setTweaks(prev => ({ ...prev, ...palette.tweaks }));
  }, []);

  const applyFontPair = useCallback((pair: typeof FONT_PAIRS[0]) => {
    setTweaks(prev => ({ ...prev, fontHead: pair.head, fontBody: pair.body }));
  }, []);

  const toggleSection = useCallback((id: string) => {
    const sec = template.sections.find(s => s.id === id);
    if (sec?.required) return;
    setEnabledSections(prev => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });
  }, [template]);

  const setContentField = useCallback((sId: string, fId: string, v: string) => {
    setContent(prev => ({ ...prev, [sId]: { ...(prev[sId] ?? {}), [fId]: v } }));
  }, []);

  /* ── Drag & Drop ── */
  const onDragStart = (e: React.DragEvent, id: string) => { setDragId(id); e.dataTransfer.effectAllowed = "move"; };
  const onDragOver  = (e: React.DragEvent, id: string) => { e.preventDefault(); setDragOverId(id); };
  const onDrop = (e: React.DragEvent, targetId: string) => {
    e.preventDefault();
    if (!dragId || dragId === targetId) { setDragId(null); setDragOverId(null); return; }
    setSectionOrder(prev => {
      const n = [...prev];
      const from = n.indexOf(dragId); const to = n.indexOf(targetId);
      n.splice(from, 1); n.splice(to, 0, dragId); return n;
    });
    setDragId(null); setDragOverId(null);
  };
  const onDragEnd = () => { setDragId(null); setDragOverId(null); };

  /* ── Generate with Gemini ── */
  const handleGenerate = async () => {
    if (!aiForm.nombre.trim()) { setAiError("Escribe el nombre de tu negocio"); return; }
    setAiLoading(true); setAiError("");
    try {
      const res = await fetch("/api/generate", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ negocio:aiForm.nombre, rubro:RUBROS_IA.find(r => r.id===aiForm.rubro)?.nombre??aiForm.rubro, descripcion:aiForm.descripcion, whatsapp:aiForm.whatsapp, telefono:aiForm.telefono }) });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error);
      const mapped = mapAiToContent(data.content, aiForm.nombre, aiForm.whatsapp, aiForm.rubro);
      setContent(prev => { const n={...prev}; for(const[k,v] of Object.entries(mapped)) n[k]={...(prev[k]??{}),...v}; return n; });
      setSiteName(aiForm.nombre); setShowAiModal(false); setPanel("contenido");
    } catch(e){ setAiError("Error al generar. Verificá tu GEMINI_API_KEY."); console.error(e); }
    finally { setAiLoading(false); }
  };

  /* ── Download ── */
  const handleDownload = async () => {
    setDownloading(true);
    try {
      const res = await fetch("/api/preview", { method:"POST", headers:{"Content-Type":"application/json"}, body: JSON.stringify({ templateId, tweakValues:tweaks, enabledSections:[...enabledSections], contentValues:content, sectionOrder, siteName }) });
      const blob = await res.blob();
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
      a.download = `${siteName.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")}.html`;
      a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 10000);
    } finally { setDownloading(false); }
  };

  /* ── Computed ── */
  const spacingTweaks = template.tweaks.filter(t => t.category === "Espaciado" || t.category === "Bordes");
  const activeSectionDef = template.sections.find(s => s.id === activeSection);
  const currentFontPair = FONT_PAIRS.find(p => p.head === tweaks["fontHead"] && p.body === tweaks["fontBody"]);

  const PANELS: {id:Panel; label:string}[] = [
    { id:"plantilla", label:"Plantillas" },
    { id:"secciones", label:"Páginas" },
    { id:"estilos",   label:"Diseño" },
    { id:"contenido", label:"Contenido" },
  ];

  /* ── SVG Icons ── */
  const IcoDesktop = () => <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3"/></svg>;
  const IcoMobile  = () => <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/></svg>;
  const IcoDrag    = () => <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16"/></svg>;
  const IcoDown    = () => <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>;

  /* ════════════════════════════════════════════════════
     WIZARD RENDER
  ════════════════════════════════════════════════════ */
  if (!wizardDone) {
    const filteredRubros = RUBROS_IA.filter(r =>
      wizardSearch === "" || r.nombre.toLowerCase().includes(wizardSearch.toLowerCase())
    );
    const canNext =
      wizardStep === 0 ? wizardMode !== "" :
      wizardStep === 1 ? wizardPurposes.length > 0 :
      wizardStep === 2 ? wizardRubro !== "" :
      wizardNombre.trim() !== "";

    return (
      <div style={{ display:"flex", height:"100vh", fontFamily:"system-ui,-apple-system,sans-serif", background:"#fff" }}>
        <style>{`
          @keyframes wfadeIn { from{opacity:0;transform:translateY(12px)} to{opacity:1;transform:translateY(0)} }
          .w-anim { animation: wfadeIn .28s ease; }
          @keyframes imgFade { from{opacity:0} to{opacity:1} }
          .img-anim { animation: imgFade .6s ease; }
          .wchk:hover { background:#f5f5f5; }
          .wrubro:hover { background:#f0f0f0; }
          .wrubro.active { background:#1a1a1a !important; color:#fff !important; }
          .wcard:hover { box-shadow: 0 4px 24px rgba(0,0,0,.10); }
          ::-webkit-scrollbar{width:4px} ::-webkit-scrollbar-thumb{background:#e0e0e0;border-radius:99px}
        `}</style>

        {/* ── LEFT PANEL ── */}
        <div style={{ width:480, flexShrink:0, display:"flex", flexDirection:"column", padding:"0 60px", position:"relative", overflowY:"auto", background:"#fff" }}>

          {/* Logo + Cerrar */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:32, paddingBottom:0, flexShrink:0 }}>
            <span style={{ fontSize:13, fontWeight:700, letterSpacing:".1em", textTransform:"uppercase", color:"#1a1a1a" }}>ORBBI</span>
            <Link href="/" style={{ fontSize:11, fontWeight:600, letterSpacing:".1em", textTransform:"uppercase", color:"#1a1a1a", textDecoration:"none" }}>CERRAR</Link>
          </div>

          {/* Step content */}
          <div style={{ flex:1, display:"flex", flexDirection:"column", justifyContent:"center", paddingTop:40, paddingBottom:120 }}>

            {/* STEP 0 — Cómo empezar */}
            {wizardStep === 0 && (
              <div className="w-anim">
                <h1 style={{ fontSize:28, fontWeight:300, color:"#1a1a1a", lineHeight:1.25, margin:"0 0 14px" }}>¿Cómo quieres empezar?</h1>
                <div style={{ width:36, height:2, background:"#1a1a1a", marginBottom:36 }}/>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:16 }}>
                  {[
                    {
                      mode: "template" as const,
                      img: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=600&h=400&fit=crop&q=80",
                      title: "Plantillas profesionales",
                      desc: "Elige entre plantillas diseñadas por expertos para tu negocio.",
                      cta: "Elegir plantilla",
                    },
                    {
                      mode: "ai" as const,
                      img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop&q=80",
                      title: "Creador con IA",
                      desc: "La IA genera todo el contenido personalizado para tu rubro.",
                      cta: "Crear con IA",
                    },
                  ].map(opt => (
                    <button key={opt.mode} onClick={() => { setWizardMode(opt.mode); setWizardStep(1); }}
                      className="wcard"
                      style={{ textAlign:"left", border:`1.5px solid ${wizardMode===opt.mode?"#1a1a1a":"#e0e0e0"}`, borderRadius:4, overflow:"hidden", background:"#fff", cursor:"pointer", padding:0, transition:"box-shadow .2s,border-color .2s" }}>
                      <div style={{ height:140, overflow:"hidden" }}>
                        <img src={opt.img} alt={opt.title} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} loading="lazy"/>
                      </div>
                      <div style={{ padding:"16px 16px 20px" }}>
                        <div style={{ fontSize:13, fontWeight:600, color:"#1a1a1a", marginBottom:6 }}>{opt.title}</div>
                        <div style={{ fontSize:12, color:"#777", lineHeight:1.5, marginBottom:14 }}>{opt.desc}</div>
                        <div style={{ fontSize:13, fontWeight:500, color:"#1a1a1a", display:"flex", alignItems:"center", gap:6 }}>
                          {opt.cta} <span style={{ fontSize:16 }}>→</span>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 1 — Propósito */}
            {wizardStep === 1 && (
              <div className="w-anim">
                <h1 style={{ fontSize:28, fontWeight:300, color:"#1a1a1a", lineHeight:1.25, margin:"0 0 14px" }}>¿Qué hace tu negocio?</h1>
                <div style={{ width:36, height:2, background:"#1a1a1a", marginBottom:10 }}/>
                <p style={{ fontSize:13, color:"#888", marginBottom:28 }}>Podés elegir más de una opción.</p>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:0 }}>
                  {WIZARD_PURPOSES.map(p => {
                    const active = wizardPurposes.includes(p);
                    return (
                      <label key={p} className="wchk"
                        style={{ display:"flex", alignItems:"center", gap:10, padding:"10px 8px", cursor:"pointer", borderRadius:3, transition:"background .15s" }}>
                        <input type="checkbox" checked={active}
                          onChange={() => setWizardPurposes(prev => active ? prev.filter(x=>x!==p) : [...prev,p])}
                          style={{ width:14, height:14, accentColor:"#1a1a1a", cursor:"pointer", flexShrink:0 }}/>
                        <span style={{ fontSize:13, color:"#1a1a1a", lineHeight:1.4 }}>{p}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 2 — Rubro */}
            {wizardStep === 2 && (
              <div className="w-anim">
                <h1 style={{ fontSize:28, fontWeight:300, color:"#1a1a1a", lineHeight:1.25, margin:"0 0 14px" }}>¿De qué rubro eres?</h1>
                <div style={{ width:36, height:2, background:"#1a1a1a", marginBottom:28 }}/>
                <input
                  type="text" placeholder="Buscá tu rubro..." value={wizardSearch}
                  onChange={e => setWizardSearch(e.target.value)}
                  style={{ width:"100%", border:"1px solid #ddd", borderRadius:3, padding:"10px 14px", fontSize:13, color:"#1a1a1a", outline:"none", marginBottom:20, boxSizing:"border-box", fontFamily:"inherit" }}
                  onFocus={e => e.target.style.borderColor="#1a1a1a"}
                  onBlur={e => e.target.style.borderColor="#ddd"}/>
                <p style={{ fontSize:11, fontWeight:600, letterSpacing:".08em", textTransform:"uppercase", color:"#999", marginBottom:12 }}>Rubros populares</p>
                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  {filteredRubros.map(r => (
                    <button key={r.id} onClick={() => setWizardRubro(r.id)}
                      className={`wrubro${wizardRubro===r.id?" active":""}`}
                      style={{ fontSize:13, padding:"7px 14px", borderRadius:999, border:"1px solid #ddd", background: wizardRubro===r.id?"#1a1a1a":"#fff", color: wizardRubro===r.id?"#fff":"#1a1a1a", cursor:"pointer", transition:"all .15s", fontFamily:"inherit" }}>
                      {r.icono} {r.nombre}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3 — Datos del negocio (solo AI) */}
            {wizardStep === 3 && (
              <div className="w-anim">
                <h1 style={{ fontSize:28, fontWeight:300, color:"#1a1a1a", lineHeight:1.25, margin:"0 0 14px" }}>Cuéntanos sobre tu negocio</h1>
                <div style={{ width:36, height:2, background:"#1a1a1a", marginBottom:28 }}/>
                <div style={{ display:"flex", flexDirection:"column", gap:18 }}>
                  <div>
                    <label style={{ fontSize:11, fontWeight:600, letterSpacing:".08em", textTransform:"uppercase", color:"#666", display:"block", marginBottom:7 }}>Nombre del negocio <span style={{ color:"#e55" }}>*</span></label>
                    <input type="text" value={wizardNombre} onChange={e => setWizardNombre(e.target.value)}
                      placeholder="Ej: Clínica Dental Sonrisa"
                      style={{ width:"100%", border:"1px solid #ddd", borderRadius:3, padding:"11px 14px", fontSize:13, outline:"none", fontFamily:"inherit", boxSizing:"border-box" }}
                      onFocus={e=>e.target.style.borderColor="#1a1a1a"} onBlur={e=>e.target.style.borderColor="#ddd"}/>
                  </div>
                  <div>
                    <label style={{ fontSize:11, fontWeight:600, letterSpacing:".08em", textTransform:"uppercase", color:"#666", display:"block", marginBottom:7 }}>WhatsApp <span style={{ color:"#bbb", fontWeight:400, textTransform:"none" }}>— opcional</span></label>
                    <input type="text" value={wizardWa} onChange={e => setWizardWa(e.target.value)}
                      placeholder="56912345678"
                      style={{ width:"100%", border:"1px solid #ddd", borderRadius:3, padding:"11px 14px", fontSize:13, outline:"none", fontFamily:"inherit", boxSizing:"border-box" }}
                      onFocus={e=>e.target.style.borderColor="#1a1a1a"} onBlur={e=>e.target.style.borderColor="#ddd"}/>
                  </div>
                  <div>
                    <label style={{ fontSize:11, fontWeight:600, letterSpacing:".08em", textTransform:"uppercase", color:"#666", display:"block", marginBottom:7 }}>¿Qué hacen? <span style={{ color:"#bbb", fontWeight:400, textTransform:"none" }}>— opcional</span></label>
                    <textarea value={wizardDesc} onChange={e => setWizardDesc(e.target.value)}
                      placeholder="Blanqueamientos, ortodoncia, implantes para toda la familia..."
                      rows={3}
                      style={{ width:"100%", border:"1px solid #ddd", borderRadius:3, padding:"11px 14px", fontSize:13, outline:"none", resize:"none", fontFamily:"inherit", boxSizing:"border-box" }}
                      onFocus={e=>e.target.style.borderColor="#1a1a1a"} onBlur={e=>e.target.style.borderColor="#ddd"}/>
                  </div>
                  {wizardError && <p style={{ fontSize:12, color:"#e55", background:"#fff5f5", border:"1px solid #fdd", borderRadius:4, padding:"8px 12px" }}>{wizardError}</p>}
                </div>
              </div>
            )}
          </div>

          {/* ── Bottom navigation ── */}
          <div style={{ position:"sticky", bottom:0, background:"#fff", paddingBottom:40, paddingTop:20, display:"flex", alignItems:"center", justifyContent:"space-between", flexShrink:0 }}>
            {wizardStep > 0
              ? <button onClick={() => setWizardStep(s => (s - 1) as WizardStep)}
                  style={{ fontSize:12, fontWeight:600, letterSpacing:".08em", textTransform:"uppercase", color:"#1a1a1a", background:"none", border:"none", cursor:"pointer", fontFamily:"inherit", padding:0 }}>
                  ATRÁS
                </button>
              : <span/>
            }
            {/* SIGUIENTE / GENERAR */}
            {wizardStep < 2 && (
              <button onClick={() => setWizardStep(s => (s + 1) as WizardStep)} disabled={!canNext}
                style={{ fontSize:12, fontWeight:600, letterSpacing:".08em", textTransform:"uppercase", padding:"12px 28px", background: canNext?"#1a1a1a":"#ccc", color:"#fff", border:"none", cursor: canNext?"pointer":"not-allowed", fontFamily:"inherit", transition:"background .2s" }}>
                SIGUIENTE →
              </button>
            )}
            {wizardStep === 2 && (
              <button onClick={() => { if (wizardMode==="ai") setWizardStep(3); else handleWizardTemplate(); }} disabled={!canNext}
                style={{ fontSize:12, fontWeight:600, letterSpacing:".08em", textTransform:"uppercase", padding:"12px 28px", background: canNext?"#1a1a1a":"#ccc", color:"#fff", border:"none", cursor: canNext?"pointer":"not-allowed", fontFamily:"inherit", transition:"background .2s" }}>
                SIGUIENTE →
              </button>
            )}
            {wizardStep === 3 && (
              <button onClick={handleWizardGenerate} disabled={wizardLoading || !canNext}
                style={{ fontSize:12, fontWeight:600, letterSpacing:".08em", textTransform:"uppercase", padding:"12px 28px", background: canNext&&!wizardLoading?"#1a1a1a":"#ccc", color:"#fff", border:"none", cursor: canNext&&!wizardLoading?"pointer":"not-allowed", fontFamily:"inherit", transition:"background .2s", display:"flex", alignItems:"center", gap:8 }}>
                {wizardLoading
                  ? <><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} style={{ animation:"spin 1s linear infinite" }}><circle cx="12" cy="12" r="10" strokeOpacity=".2"/><path d="M12 2a10 10 0 0110 10"/></svg>GENERANDO...</>
                  : "GENERAR MI SITIO →"
                }
              </button>
            )}
          </div>
        </div>

        {/* ── RIGHT PANEL — preview rotativo ── */}
        <div style={{ flex:1, position:"relative", overflow:"hidden", background:"#f0eeeb" }}>
          {WIZARD_PREVIEWS.map((p, i) => (
            <img key={i} src={p.img} alt={p.label}
              className={i === wizardPrevIdx ? "img-anim" : ""}
              style={{ position:"absolute", inset:0, width:"100%", height:"100%", objectFit:"cover", opacity: i === wizardPrevIdx ? 1 : 0, transition:"opacity .6s ease" }}
              loading="lazy"/>
          ))}
          {/* Overlay oscuro */}
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, rgba(255,255,255,.18) 0%, rgba(0,0,0,.35) 100%)" }}/>
          {/* Badge */}
          <div style={{ position:"absolute", top:32, right:32, fontSize:11, fontWeight:600, letterSpacing:".1em", textTransform:"uppercase", color:"rgba(255,255,255,.7)", background:"rgba(0,0,0,.25)", backdropFilter:"blur(8px)", padding:"6px 14px", borderRadius:999 }}>
            {WIZARD_PREVIEWS[wizardPrevIdx].label}
          </div>
          {/* Dots */}
          <div style={{ position:"absolute", bottom:32, left:"50%", transform:"translateX(-50%)", display:"flex", gap:6 }}>
            {WIZARD_PREVIEWS.map((_, i) => (
              <button key={i} onClick={() => setWizardPrevIdx(i)}
                style={{ width: i===wizardPrevIdx?20:6, height:6, borderRadius:999, background: i===wizardPrevIdx?"#fff":"rgba(255,255,255,.4)", border:"none", cursor:"pointer", transition:"all .3s", padding:0 }}/>
            ))}
          </div>
          {/* Spin keyframe */}
          <style>{`@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`}</style>
        </div>
      </div>
    );
  }

  /* ════════════════════════════════════════════════════
     BUILDER RENDER
  ════════════════════════════════════════════════════ */
  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ background:"#f0eeeb" }}>

      {/* ── Keyframes ── */}
      <style>{`
        @keyframes panelIn { from { opacity:0; transform:translateX(-10px); } to { opacity:1; transform:translateX(0); } }
        .panel-anim { animation: panelIn 0.18s ease; }
        @keyframes modalIn { from { opacity:0; transform:scale(.97) translateY(8px); } to { opacity:1; transform:scale(1) translateY(0); } }
        .modal-anim { animation: modalIn 0.2s ease; }
        ::-webkit-scrollbar { width:5px; } ::-webkit-scrollbar-thumb { background:#e0e0e0; border-radius:99px; }
        [draggable=true] { user-select:none; }
      `}</style>

      {/* ══════════ TOP BAR ══════════ */}
      <header className="flex items-center justify-between flex-shrink-0 z-50" style={{ height:56, background:"#1a1a1a" }}>

        {/* LEFT */}
        <div className="flex items-center h-full flex-shrink-0">
          <Link href="/" className="flex items-center gap-2 px-5 h-full border-r border-white/10 text-white/40 hover:text-white transition-colors">
            <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
            <span className="text-[12px] hidden sm:inline">Salir</span>
          </Link>
          {editingName ? (
            <input autoFocus value={siteName}
              onChange={e => setSiteName(e.target.value)}
              onBlur={() => setEditingName(false)}
              onKeyDown={e => e.key === "Enter" && setEditingName(false)}
              className="mx-4 bg-white/10 border border-white/20 rounded px-2.5 py-1 text-[12px] text-white w-40 focus:outline-none focus:border-white/40"/>
          ) : (
            <button onClick={() => setEditingName(true)}
              className="mx-4 group flex items-center gap-1.5 text-[13px] text-white/70 hover:text-white transition-colors">
              <span>{siteName}</span>
              <svg width="10" height="10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} className="opacity-0 group-hover:opacity-50 transition-opacity"><path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
            </button>
          )}
        </div>

        {/* CENTER — panel tabs */}
        <nav className="flex items-center h-full">
          {PANELS.map(p => (
            <button key={p.id} onClick={() => setPanel(p.id)}
              className="h-full px-5 text-[13px] font-medium transition-colors relative"
              style={{ color: panel===p.id ? "#fff" : "rgba(255,255,255,0.4)" }}>
              {p.label}
              {panel===p.id && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-white rounded-t"/>}
            </button>
          ))}
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-2 px-4 flex-shrink-0">
          <button onClick={() => { setShowAiModal(true); setAiError(""); }}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded text-[12px] font-medium transition-all border border-white/15 text-white/80 hover:text-white hover:border-white/30">
            <span>✦</span><span>Generar con IA</span>
          </button>
          <div className="flex items-center rounded overflow-hidden border border-white/15">
            {(["desktop","mobile"] as const).map(v => (
              <button key={v} onClick={() => setViewMode(v)} title={v==="desktop"?"Escritorio":"Móvil"}
                className="p-2 transition-all"
                style={{ background: viewMode===v ? "rgba(255,255,255,0.15)" : "transparent", color: viewMode===v ? "#fff" : "rgba(255,255,255,0.35)" }}>
                {v==="desktop" ? <IcoDesktop/> : <IcoMobile/>}
              </button>
            ))}
          </div>
          {previewLoading && <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"/>}
          <button onClick={handleDownload} disabled={downloading}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded text-[12px] font-semibold bg-white text-[#1a1a1a] hover:bg-white/90 transition-all disabled:opacity-50">
            {downloading
              ? <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="animate-spin"><circle cx="12" cy="12" r="10" strokeOpacity=".25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
              : <IcoDown/>}
            <span className="hidden sm:inline">{downloading?"Generando...":"Descargar"}</span>
          </button>
        </div>
      </header>

      {/* ══════════ BODY ══════════ */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── SIDEBAR ── */}
        <aside className="flex-shrink-0 flex flex-col overflow-hidden bg-white border-r border-[#e8e8e8]" style={{ width:288 }}>
          <div className="flex-1 overflow-y-auto">

            {/* ─── PLANTILLAS ─── */}
            {panel === "plantilla" && (
              <div key="plantilla" className="panel-anim p-5 space-y-4">
                <h3 className="text-[11px] font-semibold text-[#999] uppercase tracking-widest">Elige una plantilla</h3>
                {TEMPLATES.map(t => (
                  <button key={t.id} onClick={() => switchTemplate(t.id)}
                    className="w-full text-left rounded-lg overflow-hidden border transition-all"
                    style={{ borderColor: templateId===t.id ? "#1a1a1a" : "#e8e8e8", boxShadow: templateId===t.id ? "0 0 0 2px #1a1a1a" : "none" }}>
                    <div className="aspect-video w-full overflow-hidden bg-[#f5f5f5]">
                      <img src={t.preview} alt={t.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" loading="lazy"/>
                    </div>
                    <div className="px-3 py-2.5 bg-white">
                      <div className="flex items-center justify-between">
                        <span className="text-[13px] font-semibold text-[#1a1a1a]">{t.name}</span>
                        {templateId===t.id && <span className="text-[10px] bg-[#1a1a1a] text-white px-2 py-0.5 rounded-full">Activa</span>}
                      </div>
                      <p className="text-[11px] text-[#999] mt-0.5 line-clamp-2">{t.description}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* ─── SECCIONES — con drag & drop ─── */}
            {panel === "secciones" && (
              <div key="secciones" className="panel-anim">
                <div className="px-5 py-4 border-b border-[#f0f0f0]">
                  <h3 className="text-[11px] font-semibold text-[#999] uppercase tracking-widest">Secciones</h3>
                  <p className="text-[11px] text-[#bbb] mt-0.5">Arrastra para reordenar</p>
                </div>
                <div>
                  {sectionOrder.map((id, idx) => {
                    const sec = template.sections.find(s => s.id === id);
                    if (!sec) return null;
                    const enabled = enabledSections.has(id) || !!sec.required;
                    const isDragging = dragId === id;
                    const isOver = dragOverId === id;
                    return (
                      <div key={id}
                        draggable={!sec.required}
                        onDragStart={e => !sec.required && onDragStart(e, id)}
                        onDragOver={e => onDragOver(e, id)}
                        onDrop={e => onDrop(e, id)}
                        onDragEnd={onDragEnd}
                        className="flex items-center gap-3 px-4 py-3.5 border-b border-[#f5f5f5] group transition-all"
                        style={{
                          opacity: isDragging ? 0.35 : enabled ? 1 : 0.38,
                          background: isOver ? "#f0f0ff" : "white",
                          borderLeft: isOver ? "2px solid #6366f1" : "2px solid transparent",
                          cursor: sec.required ? "default" : "grab",
                        }}>
                        {/* Drag handle */}
                        <span className={`text-[#ccc] flex-shrink-0 transition-opacity ${sec.required ? "opacity-0" : "opacity-0 group-hover:opacity-100"}`}>
                          <IcoDrag/>
                        </span>
                        <span className="text-[15px] flex-shrink-0">{sec.icon}</span>
                        <span className="flex-1 text-[13px] text-[#1a1a1a] cursor-pointer hover:text-[#6366f1] transition-colors"
                          onClick={() => { setActiveSection(id); setPanel("contenido"); }}>
                          {sec.label}
                        </span>
                        {!sec.required ? (
                          <button onClick={() => toggleSection(id)}
                            className="relative w-9 h-5 rounded-full transition-colors flex-shrink-0"
                            style={{ background: enabledSections.has(id) ? "#1a1a1a" : "#d4d4d4" }}>
                            <span className="absolute top-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-all"
                              style={{ left: enabledSections.has(id) ? "calc(100% - 18px)" : "2px" }}/>
                          </button>
                        ) : (
                          <span className="text-[10px] text-[#bbb] px-1.5 py-0.5 border border-[#ebebeb] rounded">fijo</span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ─── ESTILOS / DISEÑO — con sub-tabs ─── */}
            {panel === "estilos" && (
              <div key="estilos" className="panel-anim">
                {/* Sub-tabs */}
                <div className="flex border-b border-[#f0f0f0] bg-white sticky top-0 z-10">
                  {(["paleta","tipografia","espaciado"] as DesignTab[]).map(tab => (
                    <button key={tab} onClick={() => setDesignTab(tab)}
                      className="flex-1 py-3 text-[11px] font-semibold uppercase tracking-wide transition-colors relative"
                      style={{ color: designTab===tab ? "#1a1a1a" : "#bbb" }}>
                      {tab === "paleta" ? "Colores" : tab === "tipografia" ? "Fuentes" : "Espaciado"}
                      {designTab===tab && <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#1a1a1a] rounded-t"/>}
                    </button>
                  ))}
                </div>

                {/* TAB: PALETA */}
                {designTab === "paleta" && (
                  <div className="p-5 space-y-5">
                    <div>
                      <p className="text-[11px] font-semibold text-[#999] uppercase tracking-widest mb-3">Paletas de color</p>
                      <div className="grid grid-cols-3 gap-2">
                        {COLOR_PALETTES.map(pal => {
                          const isActive = tweaks["bg"] === pal.tweaks.bg && tweaks["accent"] === pal.tweaks.accent;
                          return (
                            <button key={pal.id} onClick={() => applyPalette(pal)}
                              className="flex flex-col gap-1.5 p-2 rounded-lg border transition-all text-left"
                              style={{ borderColor: isActive ? "#1a1a1a" : "#e8e8e8", background: isActive ? "#fafafa" : "white", boxShadow: isActive ? "0 0 0 1.5px #1a1a1a" : "none" }}>
                              <div className="flex gap-1 h-8 rounded overflow-hidden w-full">
                                {pal.preview.map((c, i) => (
                                  <div key={i} className="flex-1 h-full" style={{ background: c, flex: i===0 ? "2" : "1" }}/>
                                ))}
                              </div>
                              <span className="text-[10px] font-semibold text-[#666] leading-none">{pal.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Personalizar colores */}
                    <div>
                      <button onClick={() => setShowCustomColors(v => !v)}
                        className="flex items-center justify-between w-full text-[11px] font-semibold text-[#666] uppercase tracking-widest py-1">
                        <span>Personalizar</span>
                        <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                          style={{ transform: showCustomColors ? "rotate(180deg)" : "none", transition:"transform 0.2s" }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"/>
                        </svg>
                      </button>
                      {showCustomColors && (
                        <div className="mt-2 space-y-0 border border-[#f0f0f0] rounded-lg overflow-hidden">
                          {template.tweaks.filter(t => t.type === "color").map(tweak => (
                            <div key={tweak.id} className="flex items-center justify-between px-3 py-2.5 border-b border-[#f5f5f5] last:border-0 bg-white">
                              <span className="text-[12px] text-[#444]">{tweak.label}</span>
                              <div className="flex items-center gap-2">
                                <span className="text-[10px] text-[#bbb] font-mono">{tweaks[tweak.id]??String(tweak.default)}</span>
                                <div className="relative w-6 h-6 rounded cursor-pointer border border-[#e0e0e0] overflow-hidden flex-shrink-0"
                                  style={{ background: tweaks[tweak.id]??String(tweak.default) }}>
                                  <input type="color" value={tweaks[tweak.id]??String(tweak.default)} onChange={e => setTweak(tweak.id, e.target.value)}
                                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"/>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* TAB: TIPOGRAFÍA */}
                {designTab === "tipografia" && (
                  <div className="p-5 space-y-3">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-widest mb-1">Combinaciones de fuentes</p>
                    {FONT_PAIRS.map(pair => {
                      const isActive = tweaks["fontHead"]===pair.head && tweaks["fontBody"]===pair.body;
                      return (
                        <button key={pair.id} onClick={() => applyFontPair(pair)}
                          className="w-full text-left p-4 rounded-lg border transition-all"
                          style={{ borderColor: isActive ? "#1a1a1a" : "#e8e8e8", background: isActive ? "#fafafa" : "white", boxShadow: isActive ? "0 0 0 1.5px #1a1a1a" : "none" }}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-[11px] font-semibold text-[#999] uppercase tracking-widest">{pair.name}</span>
                            {isActive && <span className="text-[10px] bg-[#1a1a1a] text-white px-1.5 py-0.5 rounded-full">Activa</span>}
                          </div>
                          <p className="text-[18px] leading-tight text-[#1a1a1a] mb-1 truncate" style={{ fontFamily:`'${pair.head}', serif` }}>
                            {pair.hSample}
                          </p>
                          <p className="text-[12px] text-[#666]" style={{ fontFamily:`'${pair.body}', sans-serif` }}>
                            {pair.bSample}
                          </p>
                          <p className="text-[10px] text-[#bbb] mt-1.5">{pair.head} + {pair.body}</p>
                        </button>
                      );
                    })}

                    {/* Load fonts for preview */}
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="stylesheet" href={`https://fonts.googleapis.com/css2?family=Poppins:wght@700&family=Playfair+Display:wght@700&family=Bebas+Neue&family=Raleway:wght@700&family=Oswald:wght@700&family=Inter&family=Lora&family=DM+Sans&family=Merriweather&family=Montserrat&display=swap`}/>
                  </div>
                )}

                {/* TAB: ESPACIADO */}
                {designTab === "espaciado" && (
                  <div className="px-5 py-4">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-widest mb-3">Espaciado y bordes</p>
                    <div className="space-y-0 border border-[#f0f0f0] rounded-lg overflow-hidden">
                      {spacingTweaks.map(tweak => {
                        const val = tweaks[tweak.id] ?? String(tweak.default);
                        const pct = ((Number(val) - (tweak.min ?? 0)) / ((tweak.max ?? 100) - (tweak.min ?? 0))) * 100;
                        return (
                          <div key={tweak.id} className="px-4 py-3.5 border-b border-[#f5f5f5] last:border-0 bg-white">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-[12px] text-[#444]">{tweak.label}</span>
                              <span className="text-[11px] text-[#bbb] font-mono">{val}{tweak.unit}</span>
                            </div>
                            <input type="range" min={tweak.min} max={tweak.max} step={tweak.step} value={val}
                              onChange={e => setTweak(tweak.id, e.target.value)}
                              className="w-full h-0.5 cursor-pointer appearance-none rounded-full"
                              style={{ background:`linear-gradient(to right,#1a1a1a 0%,#1a1a1a ${pct}%,#e0e0e0 ${pct}%,#e0e0e0 100%)`, accentColor:"#1a1a1a" }}/>
                          </div>
                        );
                      })}
                    </div>
                    <button onClick={() => setTweaks(getDefaultTweaks(template))}
                      className="w-full mt-4 py-2.5 text-[12px] text-[#999] border border-[#e0e0e0] rounded hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all">
                      Restaurar valores por defecto
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* ─── CONTENIDO ─── */}
            {panel === "contenido" && (
              <div key="contenido" className="panel-anim">
                <div className="px-5 py-4 border-b border-[#f0f0f0]">
                  <h3 className="text-[11px] font-semibold text-[#999] uppercase tracking-widest mb-3">Nombre del sitio</h3>
                  <input type="text" value={siteName} onChange={e => setSiteName(e.target.value)} placeholder="Mi Negocio"
                    className="w-full bg-white border border-[#e0e0e0] rounded px-3 py-2 text-[13px] text-[#1a1a1a] focus:outline-none focus:border-[#1a1a1a] transition-colors"/>
                </div>

                {/* Section pills */}
                <div className="px-5 py-4 border-b border-[#f0f0f0]">
                  <p className="text-[11px] font-semibold text-[#999] uppercase tracking-widest mb-3">Sección</p>
                  <div className="flex flex-wrap gap-1.5">
                    {sectionOrder.filter(id => enabledSections.has(id) || template.sections.find(s=>s.id===id)?.required).map(id => {
                      const sec = template.sections.find(s => s.id===id);
                      if (!sec) return null;
                      return (
                        <button key={id} onClick={() => setActiveSection(id)}
                          className="text-[11px] px-2.5 py-1 rounded border transition-all"
                          style={{ background: activeSection===id ? "#1a1a1a" : "#fff", color: activeSection===id ? "#fff" : "#666", borderColor: activeSection===id ? "#1a1a1a" : "#e0e0e0" }}>
                          {sec.icon} {sec.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Fields */}
                {activeSectionDef && (
                  <div className="px-5 py-4 space-y-4">
                    <p className="text-[11px] font-semibold text-[#999] uppercase tracking-widest">{activeSectionDef.icon} {activeSectionDef.label}</p>
                    {activeSectionDef.fields.map(field => (
                      <FieldEditor key={field.id} field={field}
                        value={content[activeSection]?.[field.id] ?? field.default}
                        onChange={v => setContentField(activeSection, field.id, v)}/>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </aside>

        {/* ── PREVIEW (Squarespace warm gray) ── */}
        <main className="flex-1 flex flex-col overflow-hidden relative" style={{ background:"#f0eeeb" }}>
          {/* Hint bar */}
          <div className="flex-shrink-0 flex items-center justify-center py-2 border-b border-black/5">
            <span className="text-[11px] text-[#b0ada8]">
              {viewMode==="mobile" ? "390 × 844 px — móvil" : "Vista escritorio"}
              <span className="mx-2 opacity-30">·</span>
              <span className="text-[#888]">Clic en cualquier sección para editar</span>
            </span>
          </div>

          {/* iframe */}
          <div className="flex-1 overflow-auto flex items-start justify-center p-6">
            <div className="relative transition-all duration-300"
              style={{
                width: viewMode==="mobile" ? 390 : "100%",
                height: viewMode==="mobile" ? 844 : "100%",
                minHeight: 600,
                boxShadow: "0 4px 40px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.06)",
                borderRadius: 6,
                overflow: "hidden",
                background: "#fff",
              }}>
              {previewLoading && (
                <div className="absolute inset-0 z-10 flex items-center justify-center" style={{ background:"rgba(240,238,235,0.85)" }}>
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-7 h-7 border-2 border-[#1a1a1a]/15 border-t-[#1a1a1a] rounded-full animate-spin"/>
                    <span className="text-[12px] text-[#999]">Actualizando...</span>
                  </div>
                </div>
              )}
              <iframe ref={iframeRef} title="preview" className="w-full h-full border-0"
                srcDoc="<!DOCTYPE html><html><body style='margin:0;background:#0a0a0a'></body></html>"
                sandbox="allow-scripts allow-same-origin" onLoad={handleIframeLoad}/>
            </div>
          </div>
        </main>
      </div>

      {/* ══ MODAL IA ══ */}
      {showAiModal && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          style={{ background:"rgba(26,26,26,0.65)", backdropFilter:"blur(10px)" }}
          onClick={e => { if(e.target===e.currentTarget) setShowAiModal(false); }}>
          <div className="modal-anim w-full max-w-md rounded-xl bg-white shadow-2xl overflow-hidden">
            <div className="px-6 py-5 border-b border-[#f0f0f0]" style={{ background:"#1a1a1a" }}>
              <div className="flex items-start justify-between">
                <div>
                  <h2 className="text-[15px] font-bold text-white">✦ Generar con IA</h2>
                  <p className="text-[12px] text-white/45 mt-0.5">Gemini 2.0 Flash · Gratis · ~5 segundos</p>
                </div>
                <button onClick={() => setShowAiModal(false)} className="text-white/30 hover:text-white text-xl leading-none mt-0.5 transition-colors">×</button>
              </div>
            </div>
            <div className="px-6 py-5 space-y-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-[#666] uppercase tracking-wide">Nombre del negocio <span className="text-red-400 lowercase font-normal">· requerido</span></label>
                <input type="text" value={aiForm.nombre} onChange={e => setAiForm(f=>({...f,nombre:e.target.value}))} placeholder="Ej: Clínica Dental Sonrisa"
                  className="w-full border border-[#e0e0e0] rounded px-3 py-2.5 text-[13px] placeholder-[#bbb] focus:outline-none focus:border-[#1a1a1a] transition-colors"/>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-[#666] uppercase tracking-wide">Rubro</label>
                <select value={aiForm.rubro} onChange={e => setAiForm(f=>({...f,rubro:e.target.value}))}
                  className="w-full border border-[#e0e0e0] rounded px-3 py-2.5 text-[13px] bg-white focus:outline-none focus:border-[#1a1a1a] transition-colors cursor-pointer">
                  {RUBROS_IA.map(r => <option key={r.id} value={r.id}>{r.icono} {r.nombre}</option>)}
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-semibold text-[#666] uppercase tracking-wide">¿Qué hacen? <span className="text-[#bbb] lowercase font-normal">· opcional</span></label>
                <textarea value={aiForm.descripcion} onChange={e => setAiForm(f=>({...f,descripcion:e.target.value}))}
                  placeholder="Blanqueamientos, ortodoncia y diseño de sonrisa para toda la familia..."
                  rows={2} className="w-full border border-[#e0e0e0] rounded px-3 py-2.5 text-[13px] placeholder-[#bbb] focus:outline-none focus:border-[#1a1a1a] transition-colors resize-none"/>
              </div>
              <div className="flex gap-3">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-[#666] uppercase tracking-wide">WhatsApp</label>
                  <input type="text" value={aiForm.whatsapp} onChange={e => setAiForm(f=>({...f,whatsapp:e.target.value}))} placeholder="56912345678"
                    className="w-full border border-[#e0e0e0] rounded px-3 py-2.5 text-[13px] placeholder-[#bbb] focus:outline-none focus:border-[#1a1a1a] transition-colors"/>
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold text-[#666] uppercase tracking-wide">Teléfono</label>
                  <input type="text" value={aiForm.telefono} onChange={e => setAiForm(f=>({...f,telefono:e.target.value}))} placeholder="+56 9 0000 0000"
                    className="w-full border border-[#e0e0e0] rounded px-3 py-2.5 text-[13px] placeholder-[#bbb] focus:outline-none focus:border-[#1a1a1a] transition-colors"/>
                </div>
              </div>
              {aiError && <p className="text-[12px] text-red-500 bg-red-50 border border-red-100 rounded px-3 py-2">{aiError}</p>}
            </div>
            <div className="px-6 py-4 border-t border-[#f0f0f0] flex gap-3">
              <button onClick={() => setShowAiModal(false)}
                className="flex-1 py-2.5 text-[13px] text-[#666] border border-[#e0e0e0] rounded hover:border-[#1a1a1a] hover:text-[#1a1a1a] transition-all">
                Cancelar
              </button>
              <button onClick={handleGenerate} disabled={aiLoading}
                className="flex-1 py-2.5 text-[13px] font-semibold rounded transition-all flex items-center justify-center gap-2 disabled:opacity-55"
                style={{ background:"#1a1a1a", color:"#fff" }}>
                {aiLoading
                  ? <><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="animate-spin"><circle cx="12" cy="12" r="10" strokeOpacity=".25"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>Generando...</>
                  : <><span>✦</span>Generar landing</>}
              </button>
            </div>
            {aiLoading && <p className="text-center text-[11px] text-[#bbb] pb-3">Gemini está escribiendo tu sitio...</p>}
          </div>
        </div>
      )}
    </div>
  );
}
