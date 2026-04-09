"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";
import dynamic from "next/dynamic";

const SwiperCarousel = dynamic(() => import("@/components/home/SwiperCarousel"), { ssr: false });

// ─── Data ─────────────────────────────────────────────────────────────────────

const POPULAR_NOTION = [
  {
    slug: "crm-ventas-b2b",
    name: "CRM Ventas B2B",
    tag: "Notion Template",
    price: "$29",
    gradient: "linear-gradient(135deg,#0f1b3d 0%,#1a3a7c 50%,#2383E2 100%)",
    gradientHover: "linear-gradient(135deg,#0a1226 0%,#122d66 50%,#1a6ac7 100%)",
    accent: "#2383E2",
  },
  {
    slug: "gestion-proyectos",
    name: "Gestión de Proyectos",
    tag: "Notion Template",
    price: "$24",
    gradient: "linear-gradient(135deg,#0d0d2b 0%,#1e1e6b 50%,#5b5bd6 100%)",
    gradientHover: "linear-gradient(135deg,#09091e 0%,#151552 50%,#4747b8 100%)",
    accent: "#5b5bd6",
  },
  {
    slug: "wiki-empresa",
    name: "Wiki Empresarial",
    tag: "Notion Template",
    price: "$19",
    gradient: "linear-gradient(135deg,#001a2d 0%,#00456b 50%,#0095ff 100%)",
    gradientHover: "linear-gradient(135deg,#001020 0%,#003352 50%,#007acc 100%)",
    accent: "#0095ff",
  },
  {
    slug: "finanzas-personal",
    name: "Finanzas Personales",
    tag: "Notion Template",
    price: "Gratis",
    gradient: "linear-gradient(135deg,#001a10 0%,#00502e 50%,#00c875 100%)",
    gradientHover: "linear-gradient(135deg,#00100a 0%,#003d22 50%,#00a55e 100%)",
    accent: "#00c875",
  },
];

const COLLECTIONS = [
  {
    slug: "bundle-starter",
    name: "Bundle Starter — Notion + Monday",
    tag: "2 Notion + 2 Monday",
    price: "$120",
    gradient: "linear-gradient(135deg,#1a0a1a 0%,#4a1a6b 40%,#2383E2 100%)",
    gradientHover: "linear-gradient(135deg,#120812 0%,#381252 40%,#1a6ac7 100%)",
    accent: "#7c3aed",
  },
  {
    slug: "bundle-professional",
    name: "Bundle Professional",
    tag: "5+5 Templates + 2 Cursos",
    price: "$250",
    gradient: "linear-gradient(135deg,#0a0020 0%,#1a0060 40%,#FF3D57 100%)",
    gradientHover: "linear-gradient(135deg,#060016 0%,#12004a 40%,#cc2f45 100%)",
    accent: "#FF3D57",
  },
  {
    slug: "bundle-complete",
    name: "Bundle Complete",
    tag: "Todo + Consultoría VIP",
    price: "$450",
    gradient: "linear-gradient(135deg,#0a1a0a 0%,#1a4a1a 40%,#2383E2 100%)",
    gradientHover: "linear-gradient(135deg,#061006 0%,#123512 40%,#1a6ac7 100%)",
    accent: "#2383E2",
  },
  {
    slug: "okr-planificacion",
    name: "OKR & Planificación",
    tag: "Notion Template",
    price: "$34",
    gradient: "linear-gradient(135deg,#1a1a00 0%,#4a4a00 50%,#eab308 100%)",
    gradientHover: "linear-gradient(135deg,#101000 0%,#363600 50%,#b98e06 100%)",
    accent: "#eab308",
  },
];

const NEW_RELEASES_NOTION = [
  { slug: "pipeline-ventas", name: "Pipeline de Ventas", tag: "Notion Template", price: "$29", gradient: "linear-gradient(135deg,#0d1a2b 0%,#1e4070 50%,#3b82f6 100%)", gradientHover: "linear-gradient(135deg,#091220 0%,#163055 50%,#2d68d5 100%)", accent: "#3b82f6" },
  { slug: "recursos-humanos", name: "Recursos Humanos", tag: "Notion Template", price: "$24", gradient: "linear-gradient(135deg,#200020 0%,#5a005a 50%,#c026d3 100%)", gradientHover: "linear-gradient(135deg,#180018 0%,#420042 50%,#9b1db0 100%)", accent: "#c026d3" },
  { slug: "crm-ventas-b2b", name: "CRM Starter Gratis", tag: "Notion Template", price: "Gratis", gradient: "linear-gradient(135deg,#001a0a 0%,#004a20 50%,#16a34a 100%)", gradientHover: "linear-gradient(135deg,#001006 0%,#003518 50%,#128a3c 100%)", accent: "#16a34a" },
  { slug: "gestion-proyectos", name: "Planificador Semanal", tag: "Notion Template", price: "$19", gradient: "linear-gradient(135deg,#1a0a00 0%,#4a2000 50%,#ea580c 100%)", gradientHover: "linear-gradient(135deg,#100600 0%,#361800 50%,#bb4509 100%)", accent: "#ea580c" },
  { slug: "wiki-empresa", name: "Base de Conocimiento", tag: "Notion Template", price: "$22", gradient: "linear-gradient(135deg,#000f1a 0%,#002040 50%,#0284c7 100%)", gradientHover: "linear-gradient(135deg,#000a12 0%,#00182f 50%,#0268a0 100%)", accent: "#0284c7" },
  { slug: "finanzas-personal", name: "Tracker de Hábitos", tag: "Notion Template", price: "Gratis", gradient: "linear-gradient(135deg,#1a0010 0%,#4a0030 50%,#db2777 100%)", gradientHover: "linear-gradient(135deg,#12000c 0%,#360024 50%,#b21e5f 100%)", accent: "#db2777" },
  { slug: "pipeline-ventas", name: "Dashboard Empresa", tag: "Notion Template", price: "$39", gradient: "linear-gradient(135deg,#0a0a1a 0%,#20206b 50%,#4f46e5 100%)", gradientHover: "linear-gradient(135deg,#060612 0%,#181852 50%,#3d38c5 100%)", accent: "#4f46e5" },
  { slug: "recursos-humanos", name: "Gestión Clientes", tag: "Notion Template", price: "$29", gradient: "linear-gradient(135deg,#001a1a 0%,#004a4a 50%,#0891b2 100%)", gradientHover: "linear-gradient(135deg,#001212 0%,#003838 50%,#067592 100%)", accent: "#0891b2" },
];

const DEALS = [
  { href: "/bundles", name: "Bundle Starter — Notion + Monday", regular: "$180 USD", sale: "$120 USD" },
  { href: "/bundles", name: "Bundle Professional — 5+5 Templates + 2 Cursos", regular: "$340 USD", sale: "$250 USD" },
  { href: "/bundles", name: "Bundle Complete — Todo Incluido + Consultoría 1h", regular: "$650 USD", sale: "$450 USD" },
];

// ─── Fake UI inside template card ─────────────────────────────────────────────
function FakeUI({ accent, isBundle }: { accent: string; isBundle?: boolean }) {
  return (
    <div className="absolute inset-0 p-4 flex flex-col gap-2.5 pointer-events-none select-none opacity-80">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: accent }} />
        <div className="h-1.5 rounded-full bg-white/20 w-16" />
        <div className="ml-auto h-1.5 rounded-full bg-white/10 w-8" />
      </div>
      {isBundle ? (
        <div className="flex gap-2 mt-1">
          {[accent, "#2383E2", "#FF3D57"].map((c, i) => (
            <div key={i} className="flex-1 rounded p-1.5 flex flex-col gap-1" style={{ backgroundColor: c + "33" }}>
              <div className="h-1 rounded-full bg-white/20 w-6" />
              <div className="h-3 rounded bg-white/10" />
              <div className="h-3 rounded bg-white/10" />
              <div className="h-3 rounded bg-white/10" />
            </div>
          ))}
        </div>
      ) : (
        <>
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-sm flex-shrink-0" style={{ backgroundColor: accent + "99" }} />
              <div className="h-1.5 rounded-full bg-white/15" style={{ width: `${50 + (i * 17) % 40}%` }} />
              <div className="ml-auto h-1.5 rounded-full bg-white/10 w-8 flex-shrink-0" />
            </div>
          ))}
          <div className="mt-1 grid grid-cols-3 gap-1">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-6 rounded bg-white/10 flex items-center justify-center">
                <div className="h-1 rounded-full bg-white/20 w-6" />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ─── Template card (exact mockupflock card structure) ─────────────────────────
interface CardProps {
  slug: string;
  name: string;
  tag: string;
  price: string;
  gradient: string;
  gradientHover: string;
  accent: string;
  locale: string;
  href?: string;
}

function TemplateCard({ slug, name, tag, price, gradient, gradientHover, accent, locale, href }: CardProps) {
  const [hovered, setHovered] = useState(false);
  const isBundle = tag.includes("Bundle") || name.includes("Bundle");
  const link = href ?? (tag.includes("Monday") ? `/${locale}/monday/templates` : `/${locale}/templates/${slug}`);

  return (
    <div className="rounded-md overflow-hidden" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <Link href={link} className="block">
        {/* image area */}
        <div className="relative overflow-hidden rounded-t-md" style={{ height: 216 }}>
          {/* primary bg */}
          <div
            className="absolute inset-0 transition-all duration-500"
            style={{ background: hovered ? gradientHover : gradient, transform: hovered ? "scale(1.04)" : "scale(1)" }}
          />
          {/* secondary image overlay (mockupflock uses a second product photo — we use a shifted gradient) */}
          <div
            className="absolute inset-0 transition-all duration-300"
            style={{
              background: `linear-gradient(225deg,${accent}22 0%,transparent 70%)`,
              opacity: hovered ? 1 : 0,
            }}
          />
          <FakeUI accent={accent} isBundle={isBundle} />
        </div>

        {/* meta — exact mockupflock dark card bottom */}
        <div style={{ backgroundColor: "#2b2b2b" }} className="text-white space-y-1.5 py-3 px-4">
          <h3 className="text-sm md:text-base" style={{ fontWeight: hovered ? 700 : 400, transition: "font-weight 0.15s" }}>
            {name}
          </h3>
          <div className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>{tag}</div>
          <div className="text-sm font-medium">{price}</div>
        </div>
      </Link>
    </div>
  );
}

// ─── "See More" link with side-line ───────────────────────────────────────────
function SeeMore({ href, label = "Ver Más" }: { href: string; label?: string }) {
  return (
    <Link href={href} className="group text-lg uppercase text-white flex items-center gap-6 w-2/3 md:w-1/2 mx-auto mt-8">
      <span className="whitespace-nowrap">{label}</span>
      <span
        className="relative flex-1 h-px"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 100%)",
          transition: "background 0.3s",
        }}
      />
    </Link>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const locale = useLocale();
  const [email, setEmail] = useState("");
  const [subOk, setSubOk] = useState(false);

  const handleSub = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email }),
      headers: { "Content-Type": "application/json" },
    });
    setSubOk(true);
    setEmail("");
  };

  return (
    <div
      className="w-full min-h-screen"
      style={{ backgroundColor: "#000", color: "#fff", fontFamily: "var(--font-titillium, 'Titillium Web', sans-serif)" }}
    >

      {/* ══════════════════════════════════════════
          HERO — logo + subtitles
      ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: "#000", paddingTop: 64, paddingBottom: 32 }}
      >
        <div className="max-w-none px-6 lg:px-10">
          {/* wordmark — full width like mockupflock SVG logo */}
          <div className="w-full py-4 pb-8 lg:pb-12 text-center">
            <div
              className="inline-block leading-none tracking-tighter uppercase"
              style={{ fontSize: "clamp(2.5rem, 10vw, 9rem)", fontWeight: 400, letterSpacing: "-0.03em", color: "#fff" }}
            >
              Workspace<span style={{ color: "#d9d9d9" }}>LATAM</span>
            </div>
          </div>

          {/* two-column subtitles — identical to mockupflock layout */}
          <div className="flex flex-col lg:flex-row gap-6 lg:justify-around items-start">
            <div className="w-full lg:w-1/3 text-center uppercase" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.33 }}>
              <p>Templates Notion &amp; Monday.com para empresas de LATAM.</p>
            </div>
            <div className="w-full lg:w-1/3 text-center uppercase" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.8)", lineHeight: 1.33 }}>
              <strong>Implementa en 30 minutos. Resultados desde el primer día.</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          IMAGE CAROUSEL — swiper style
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 0, paddingBottom: 96 }}>
        <SwiperCarousel locale={locale} />
      </section>

      {/* ══════════════════════════════════════════
          POPULAR TEMPLATES — Notion
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 100, paddingBottom: 100 }}>
        <div className="max-w-none px-6 lg:px-10">
          {/* section header */}
          <div className="flex justify-between items-center mb-6 pb-2" style={{ borderBottom: "1px solid #fff" }}>
            <h2 className="text-2xl md:text-3xl uppercase" style={{ color: "#fff", marginBottom: 0 }}>
              Templates Populares
            </h2>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
              Mostrando <span>4</span> de 18+ Templates.
            </div>
          </div>

          {/* grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {POPULAR_NOTION.map((t) => (
              <TemplateCard key={t.slug} {...t} locale={locale} />
            ))}
          </div>

          {/* see more */}
          <div className="flex justify-center">
            <SeeMore href={`/${locale}/templates`} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          COLLECTIONS — bundles + monday mix
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 100, paddingBottom: 100 }}>
        <div className="max-w-none px-6 lg:px-10">
          <div className="flex justify-between items-center mb-6 pb-2" style={{ borderBottom: "1px solid #fff" }}>
            <h2 className="text-2xl md:text-3xl uppercase" style={{ color: "#fff", marginBottom: 0 }}>
              Colecciones &amp; Bundles
            </h2>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
              Mostrando <span>4</span> de 7 colecciones.
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {COLLECTIONS.map((t) => (
              <TemplateCard
                key={t.slug}
                {...t}
                locale={locale}
                href={t.tag.includes("Bundle") ? `/${locale}/bundles` : `/${locale}/templates/${t.slug}`}
              />
            ))}
          </div>

          <div className="flex justify-center">
            <SeeMore href={`/${locale}/bundles`} label="Ver Bundles" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEW RELEASES — 8 items with load more
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 44, paddingBottom: 100 }}>
        <div className="max-w-none px-6 lg:px-10">
          <div className="flex justify-between items-center mb-6 pb-2" style={{ borderBottom: "1px solid #fff" }}>
            <h2 className="text-2xl md:text-3xl uppercase" style={{ color: "#fff", marginBottom: 0 }}>
              Nuevos Templates
            </h2>
            <div style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem" }}>
              Mostrando <span>8</span> de 18+ Templates.
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {NEW_RELEASES_NOTION.map((t) => (
              <TemplateCard key={t.slug + t.name} {...t} locale={locale} />
            ))}
          </div>

          <div className="flex justify-center">
            <SeeMore href={`/${locale}/templates`} label="Ver Todos" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          DEALS LIST — mockupflock "Mockup Collection"
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 44, paddingBottom: 100 }}>
        <div className="max-w-none px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 mb-6">
            <h2
              className="text-2xl md:text-4xl uppercase whitespace-nowrap"
              style={{ color: "#fff" }}
            >
              Bundles Notion + Monday
            </h2>
            <div className="hidden lg:block flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.875rem", maxWidth: "18rem" }}>
              Ahorra hasta 30% combinando Notion y Monday.com en un solo bundle.
            </p>
          </div>

          <ul>
            {DEALS.map((d, i) => (
              <li
                key={i}
                style={{
                  borderTop: i === 0 ? "1px solid #fff" : undefined,
                  borderBottom: "1px solid #fff",
                }}
              >
                <Link href={`/${locale}${d.href}`} className="group block w-full py-5 px-4">
                  <div className="flex justify-between items-center text-lg text-white gap-4">
                    <span style={{ transition: "font-weight 0.15s" }} className="group-hover:font-bold">
                      {d.name}
                    </span>
                    <span
                      className="flex items-center gap-3 group-hover:-translate-x-2 transition-transform duration-300"
                      style={{ flexShrink: 0 }}
                    >
                      <s style={{ opacity: 0.4, fontSize: "0.875rem" }}>{d.regular}</s>
                      <span>{d.sale}</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BIG TEXT — "stay wild into your ideas"
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 36, paddingBottom: 32 }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            className="uppercase leading-none"
            style={{
              fontSize: "clamp(2.5rem,9vw,6.5rem)",
              fontWeight: 400,
              color: "#fff",
              letterSpacing: "-0.02em",
              marginBottom: -48,
              position: "relative",
              zIndex: 10,
            }}
          >
            DIGITALIZA TU<br />EMPRESA HOY.
          </h2>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEWSLETTER — "become member & get 10% off"
      ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 96, paddingBottom: 56 }}>
        <div className="max-w-none px-6 lg:px-10">
          <div className="flex flex-col sm:flex-row items-end gap-6 max-w-2xl mx-auto">
            {/* label */}
            <div
              className="uppercase text-center sm:text-left whitespace-nowrap"
              style={{ fontSize: "1rem", color: "#fff", lineHeight: 1.33 }}
            >
              únete gratis<br />&amp; recibe templates
            </div>

            {/* input */}
            <div className="w-full">
              {subOk ? (
                <p className="py-4" style={{ color: "rgba(255,255,255,0.5)", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>
                  ¡Gracias! Revisa tu email.
                </p>
              ) : (
                <form onSubmit={handleSub} className="relative group">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="correo electrónico.."
                    required
                    style={{
                      width: "100%",
                      background: "transparent",
                      border: "none",
                      borderBottom: "1px solid rgba(255,255,255,0.2)",
                      color: "#fff",
                      padding: "16px 32px 16px 0",
                      outline: "none",
                      fontSize: "1rem",
                      fontFamily: "inherit",
                    }}
                    onFocus={(e) => (e.target.style.borderBottomColor = "#fff")}
                    onBlur={(e) => (e.target.style.borderBottomColor = "rgba(255,255,255,0.2)")}
                  />
                  {/* submit arrow */}
                  <button
                    type="submit"
                    className="absolute right-0 top-1/2 -translate-y-1/2"
                    style={{ background: "transparent", border: "none", cursor: "pointer", padding: 0 }}
                    aria-label="Suscribirse"
                  >
                    <svg width="8" height="14" viewBox="0 0 8 14" fill="none">
                      <path d="M8 7.006L0.5 13.934V0.078L8 7.006Z" fill="white" />
                    </svg>
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
