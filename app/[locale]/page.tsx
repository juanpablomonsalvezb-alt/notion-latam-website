"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ─── Template data ────────────────────────────────────────────────────────────
const NOTION_TEMPLATES = [
  { slug: "crm-ventas-b2b", name: "CRM Ventas B2B", price: "$29", dims: "Notion Template", gradient: "from-blue-700 to-blue-400" },
  { slug: "gestion-proyectos", name: "Gestión de Proyectos", price: "$24", dims: "Notion Template", gradient: "from-indigo-700 to-violet-400" },
  { slug: "wiki-empresa", name: "Wiki Empresarial", price: "$19", dims: "Notion Template", gradient: "from-sky-700 to-cyan-400" },
  { slug: "finanzas-personal", name: "Finanzas Personales", price: "Gratis", dims: "Notion Template", gradient: "from-emerald-700 to-teal-400" },
  { slug: "okr-planificacion", name: "OKR & Planificación", price: "$34", dims: "Notion Template", gradient: "from-blue-600 to-indigo-500" },
  { slug: "pipeline-ventas", name: "Pipeline de Ventas", price: "$29", dims: "Notion Template", gradient: "from-violet-700 to-purple-400" },
];

const MONDAY_TEMPLATES = [
  { slug: "pipeline-ventas-b2b", name: "Pipeline de Ventas B2B", price: "$49", dims: "Monday Template", gradient: "from-rose-700 to-red-400" },
  { slug: "gestion-sprints", name: "Gestión de Sprints", price: "$39", dims: "Monday Template", gradient: "from-orange-700 to-rose-400" },
  { slug: "onboarding-clientes", name: "Onboarding de Clientes", price: "$44", dims: "Monday Template", gradient: "from-red-700 to-rose-500" },
  { slug: "marketing-campanas", name: "Marketing & Campañas", price: "$39", dims: "Monday Template", gradient: "from-pink-700 to-red-400" },
];

const CAROUSEL_ITEMS = [
  { slug: "crm-ventas-b2b", gradient: "from-blue-700 to-indigo-900", label: "CRM Ventas B2B — Notion" },
  { slug: "pipeline-ventas-b2b", gradient: "from-rose-700 to-red-900", label: "Pipeline Ventas — Monday" },
  { slug: "gestion-proyectos", gradient: "from-violet-700 to-indigo-900", label: "Gestión Proyectos — Notion" },
  { slug: "gestion-sprints", gradient: "from-orange-700 to-red-900", label: "Sprints — Monday" },
  { slug: "wiki-empresa", gradient: "from-sky-700 to-blue-900", label: "Wiki Empresarial — Notion" },
  { slug: "onboarding-clientes", gradient: "from-red-700 to-rose-900", label: "Onboarding — Monday" },
];

const BUNDLES = [
  { href: "/bundles", name: "Bundle Starter — Notion + Monday", regular: "$180", sale: "$120" },
  { href: "/bundles", name: "Bundle Professional — 5+5 Templates + 2 Cursos", regular: "$340", sale: "$250" },
  { href: "/bundles", name: "Bundle Complete — Todo + Consultoría", regular: "$650", sale: "$450" },
];

// ─── Template Card ────────────────────────────────────────────────────────────
function TemplateCard({ slug, name, price, dims, gradient, locale }: {
  slug: string; name: string; price: string; dims: string; gradient: string; locale: string;
}) {
  const [hovered, setHovered] = useState(false);
  const isNotion = dims.includes("Notion");
  const href = isNotion ? `/${locale}/templates/${slug}` : `/${locale}/monday/templates`;

  return (
    <div
      className="w-full rounded-md overflow-hidden group cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={href}>
        <div className="relative overflow-hidden rounded-t-md" style={{ height: 220 }}>
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-transform duration-500 ${hovered ? "scale-105" : "scale-100"}`} />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/20 text-6xl font-bold uppercase select-none">
              {isNotion ? "N" : "M"}
            </span>
          </div>
          {/* hover overlay */}
          <div className={`absolute inset-0 bg-black/30 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`} />
        </div>
        <div className="bg-[#2b2b2b] text-white space-y-1.5 py-3 px-4">
          <h3 className={`text-sm md:text-base transition-all ${hovered ? "font-bold" : "font-normal"}`}>{name}</h3>
          <div className="text-xs text-white/50">{dims}</div>
          <div className="text-sm font-medium">{price}</div>
        </div>
      </Link>
    </div>
  );
}

// ─── Simple carousel (no external dep) ───────────────────────────────────────
function Carousel({ locale }: { locale: string }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir === "right" ? 380 : -380, behavior: "smooth" });
  };

  return (
    <div className="relative overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-2.5 overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {CAROUSEL_ITEMS.map((item) => {
          const isNotion = item.label.includes("Notion");
          return (
            <Link
              key={item.slug}
              href={isNotion ? `/${locale}/templates/${item.slug}` : `/${locale}/monday/templates`}
              className="shrink-0 group relative overflow-hidden rounded-md"
              style={{ width: 280, height: 380, scrollSnapAlign: "start" }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} transition-transform duration-500 group-hover:scale-105`} />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <span className="text-white/20 text-8xl font-bold">{isNotion ? "N" : "M"}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                <p className="text-white text-sm font-medium">{item.label}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-white/40 bg-transparent hover:bg-white/10 transition-colors z-10"
      >
        <ArrowLeft className="w-4 h-4 text-white" />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full border border-white/40 bg-transparent hover:bg-white/10 transition-colors z-10"
      >
        <ArrowRight className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const locale = useLocale();
  const [email, setEmail] = useState("");
  const [subStatus, setSubStatus] = useState<"idle" | "ok">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/newsletter", { method: "POST", body: JSON.stringify({ email }), headers: { "Content-Type": "application/json" } });
    setSubStatus("ok");
    setEmail("");
  };

  return (
    <div className="w-full bg-black text-white min-h-screen" style={{ fontFamily: "'Titillium Web', sans-serif" }}>

      {/* ── HERO ── */}
      <section className="bg-black pt-16 pb-12 lg:pt-20 lg:pb-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Big wordmark */}
          <div className="w-full py-4 pb-8 lg:pb-12 text-center">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter uppercase text-white">
              Workspace<span style={{ color: "#2383E2" }}>LATAM</span>
            </h1>
          </div>

          {/* Subtitle row */}
          <div className="flex flex-col lg:flex-row gap-6 lg:justify-around items-start">
            <div className="w-full lg:w-1/3 text-base text-white/80 text-center uppercase">
              <p>Templates Notion & Monday.com para empresas de LATAM.</p>
            </div>
            <div className="w-full lg:w-1/3 text-base text-white/80 text-center uppercase">
              <p><strong>Implementa en 30 minutos. Resultados desde el primer día.</strong></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CAROUSEL ── */}
      <section className="bg-black pb-24">
        <div className="px-0 max-w-none">
          <Carousel locale={locale} />
        </div>
      </section>

      {/* ── POPULARES NOTION ── */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-6 pb-2 border-b border-white">
            <h2 className="text-white text-2xl md:text-3xl uppercase">Templates Populares — Notion</h2>
            <span className="text-white/60 text-sm">Mostrando {NOTION_TEMPLATES.length} de 18+</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {NOTION_TEMPLATES.map((t) => (
              <TemplateCard key={t.slug} {...t} locale={locale} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link
              href={`/${locale}/templates`}
              className="text-lg uppercase text-white flex items-center gap-6 group"
            >
              <span>Ver Todos</span>
              <div className="relative h-px bg-white/30 w-48 group-hover:bg-white transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── MONDAY ── */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-6 pb-2 border-b border-white">
            <h2 className="text-white text-2xl md:text-3xl uppercase">Templates Monday.com</h2>
            <span className="text-white/60 text-sm">Mostrando {MONDAY_TEMPLATES.length} de 5+</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {MONDAY_TEMPLATES.map((t) => (
              <TemplateCard key={t.slug} {...t} locale={locale} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            <Link
              href={`/${locale}/monday/templates`}
              className="text-lg uppercase text-white flex items-center gap-6 group"
            >
              <span>Ver Todos</span>
              <div className="relative h-px bg-white/30 w-48 group-hover:bg-white transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── BUNDLES DEAL LIST ── */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-6 gap-10">
            <h2 className="text-white text-2xl md:text-4xl uppercase whitespace-nowrap">Bundles Notion + Monday</h2>
            <div className="hidden lg:block h-px bg-white/20 flex-1" />
            <p className="text-white/60 lg:w-1/4 text-sm">Ahorra hasta 30% combinando Notion y Monday.com.</p>
          </div>
          <ul className="list-none">
            {BUNDLES.map((b, i) => (
              <li key={i} className={`border-white ${i === 0 ? "border-t border-b" : "border-b"}`}>
                <Link href={`/${locale}${b.href}`} className="group block w-full py-5 px-4">
                  <div className="flex justify-between text-lg text-white gap-4">
                    <span className="group-hover:font-bold transition-all">{b.name}</span>
                    <span className="group-hover:-translate-x-2 transition-transform duration-300 flex gap-3 items-center">
                      <s className="opacity-40 text-sm">{b.regular}</s>
                      <span>{b.sale}</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── TAGLINE ── */}
      <section className="bg-black py-10 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white uppercase -mb-12 relative z-10">
            DIGITALIZA TU<br />EMPRESA HOY.
          </h2>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="bg-black pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row items-end gap-4 max-w-2xl mx-auto">
            <div className="text-center sm:text-left text-lg text-white uppercase whitespace-nowrap">
              únete gratis<br />&amp; recibe templates
            </div>
            <div className="w-full relative">
              {subStatus === "ok" ? (
                <p className="text-white/60 py-4 border-b border-white/20">¡Gracias! Revisa tu email.</p>
              ) : (
                <form onSubmit={handleSubscribe} className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="correo electrónico.."
                    required
                    className="w-full bg-transparent border-b border-white/20 focus:border-white py-4 text-white placeholder:text-white/30 outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center"
                  >
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
