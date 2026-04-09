"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";
import dynamic from "next/dynamic";

const SwiperCarousel = dynamic(() => import("@/components/home/SwiperCarousel"), { ssr: false });

const PIC = (seed: string, w = 324, h = 216) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// ── Data ────────────────────────────────────────────────────────────────────

const POPULAR = [
  { slug: "crm-ventas-b2b",    name: "CRM Ventas B2B",       tag: "Notion Template", price: "$29",    seedA: "biz-crm1",  seedB: "biz-crm2"  },
  { slug: "gestion-proyectos", name: "Gestión de Proyectos", tag: "Notion Template", price: "$24",    seedA: "proj-m1",   seedB: "proj-m2"   },
  { slug: "wiki-empresa",      name: "Wiki Empresarial",      tag: "Notion Template", price: "$19",    seedA: "wiki-1",    seedB: "wiki-2"    },
  { slug: "finanzas-personal", name: "Finanzas Personales",   tag: "Notion Template", price: "Gratis", seedA: "fin-1",     seedB: "fin-2"     },
];

const COLLECTIONS = [
  { slug: "bundle-starter",      name: "Bundle Starter",       tag: "2 Notion + 2 Monday",      price: "$120", seedA: "bund-s1", seedB: "bund-s2", href: "/bundles" },
  { slug: "bundle-professional", name: "Bundle Professional",  tag: "5+5 Templates + 2 Cursos", price: "$250", seedA: "bund-p1", seedB: "bund-p2", href: "/bundles" },
  { slug: "bundle-complete",     name: "Bundle Complete",       tag: "Todo + Consultoría VIP",   price: "$450", seedA: "bund-c1", seedB: "bund-c2", href: "/bundles" },
  { slug: "okr-planificacion",   name: "OKR & Planificación",  tag: "Notion Template",          price: "$34",  seedA: "okr-1",  seedB: "okr-2",   href: undefined  },
];

const NEW_RELEASES = [
  { slug: "pipeline-ventas",   name: "Pipeline de Ventas",   tag: "Notion Template", price: "$29",    seedA: "pipe1",  seedB: "pipe2"  },
  { slug: "recursos-humanos",  name: "Recursos Humanos",     tag: "Notion Template", price: "$24",    seedA: "hr1",    seedB: "hr2"    },
  { slug: "crm-ventas-b2b",    name: "CRM Starter Gratis",   tag: "Notion Template", price: "Gratis", seedA: "crm-f1", seedB: "crm-f2" },
  { slug: "gestion-proyectos", name: "Planificador Semanal", tag: "Notion Template", price: "$19",    seedA: "plan1",  seedB: "plan2"  },
  { slug: "wiki-empresa",      name: "Base de Conocimiento", tag: "Notion Template", price: "$22",    seedA: "know1",  seedB: "know2"  },
  { slug: "finanzas-personal", name: "Tracker de Hábitos",   tag: "Notion Template", price: "Gratis", seedA: "hab1",   seedB: "hab2"   },
  { slug: "pipeline-ventas",   name: "Dashboard Empresa",    tag: "Notion Template", price: "$39",    seedA: "dash1",  seedB: "dash2"  },
  { slug: "recursos-humanos",  name: "Gestión de Clientes",  tag: "Notion Template", price: "$29",    seedA: "cli1",   seedB: "cli2"   },
];

const DEALS = [
  { href: "/bundles", name: "Bundle Starter — Notion + Monday",                  regular: "$180 USD", sale: "$120 USD" },
  { href: "/bundles", name: "Bundle Professional — 5+5 Templates + 2 Cursos",   regular: "$340 USD", sale: "$250 USD" },
  { href: "/bundles", name: "Bundle Complete — Todo Incluido + Consultoría 1h", regular: "$650 USD", sale: "$450 USD" },
];

// ── Exact mockupflock card ───────────────────────────────────────────────────
// Primary image: group-hover:opacity-0 group-hover:invisible
// Secondary image: absolute inset-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible

interface CardProps {
  slug: string;
  name: string;
  tag: string;
  price: string;
  seedA: string;
  seedB: string;
  locale: string;
  href?: string;
}

function TemplateCard({ slug, name, tag, price, seedA, seedB, locale, href }: CardProps) {
  const link = href
    ? `/${locale}${href}`
    : tag.includes("Monday")
    ? `/${locale}/monday/templates`
    : `/${locale}/templates/${slug}`;

  return (
    <div className="p-2 w-full">
      <div className="relative group overflow-hidden rounded-md" style={{ backgroundColor: "#111" }}>

        {/* thumbnail wrapper */}
        <div className="overflow-hidden rounded-md" style={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}>
          <a href={link} className="block overflow-hidden" style={{ position: "relative" }}>
            {/* Primary image — fades out on hover */}
            <img
              src={PIC(seedA)}
              alt={name}
              width={324}
              height={216}
              className="block w-full h-auto object-cover transition-all duration-300 group-hover:opacity-0 group-hover:invisible"
              style={{ aspectRatio: "324/216" }}
            />
            {/* Secondary image — fades in on hover */}
            <img
              src={PIC(seedB)}
              alt=""
              aria-hidden
              width={324}
              height={216}
              className="absolute inset-0 block w-full h-auto object-cover transition-all duration-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              style={{ aspectRatio: "324/216" }}
            />
          </a>
        </div>

        {/* Meta — exact bg-[#2b2b2b] text-white space-y-2 py-3 px-4 */}
        <div className="space-y-2 py-3 px-4" style={{ backgroundColor: "#2b2b2b", color: "#fff" }}>
          <a
            href={link}
            className="block transition-all group-hover:font-bold"
            style={{
              fontSize: "clamp(0.875rem,1.5vw,1.0625rem)",
              textDecoration: "none",
              color: "#fff",
            }}
          >
            <h3 style={{ fontWeight: "normal", margin: 0, fontFamily: "var(--font-titillium, sans-serif)" }}>
              {name}
            </h3>
          </a>
          <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-titillium, sans-serif)" }}>
            {tag}
          </div>
          <div style={{ fontSize: "0.875rem", color: "#fff", fontFamily: "var(--font-titillium, sans-serif)" }}>
            {price}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Section header — exact: border-b border-white, text-2xl md:text-3xl, NOT uppercase ─────

function SectionHeader({ title, count, total }: { title: string; count: number; total: string }) {
  return (
    <div
      className="w-full md:flex justify-between items-center mb-6 pb-2"
      style={{ borderBottom: "1px solid #fff" }}
    >
      <h2
        className="text-white inline-block mb-0"
        style={{
          fontSize: "clamp(1.25rem,2.5vw,1.875rem)",
          fontWeight: 400,
          margin: 0,
          fontFamily: "var(--font-titillium, sans-serif)",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          color: "rgba(255,255,255,0.55)",
          fontSize: "0.875rem",
          fontFamily: "var(--font-titillium, sans-serif)",
        }}
      >
        Showing <span>{count}</span> of {total} Templates.
      </div>
    </div>
  );
}

// ── See More — exact: "See More" text + side-line div ──────────────────────

function SeeMore({ href, label = "See More" }: { href: string; label?: string }) {
  return (
    <div className="flex justify-center mt-8">
      <Link
        href={href}
        className="flex items-center gap-4 text-white group"
        style={{
          textDecoration: "none",
          fontSize: "0.9375rem",
          fontFamily: "var(--font-titillium, sans-serif)",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
        }}
      >
        <span className="whitespace-nowrap">{label}</span>
        {/* side-line — exact: w-full max-w-[17rem] h-px */}
        <div
          style={{
            width: "17rem",
            maxWidth: "17rem",
            height: 1,
            backgroundColor: "rgba(255,255,255,0.35)",
          }}
        />
      </Link>
    </div>
  );
}

// ── Page ────────────────────────────────────────────────────────────────────

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
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "var(--font-titillium, 'Titillium Web', sans-serif)",
      }}
    >

      {/* ══════════════════════════════════════════════════
          HERO — full-width SVG-style wordmark + two columns
          Exact mockupflock: bg-primary--dark pt-16 pb-12 lg:pt-20 lg:pb-8 lg:-mt-14
      ════════════════════════════════════════════════════ */}
      <section
        style={{
          backgroundColor: "#000",
          paddingTop: 64,
          paddingBottom: 48,
          overflow: "hidden",
          position: "relative",
        }}
        className="lg:-mt-14 lg:pt-20 lg:pb-8"
      >
        <div className="max-w-none px-6">

          {/* Full-width wordmark — mimics the SVG logo in mockupflock */}
          <div className="w-full pt-4 pb-8 lg:pb-12">
            <div style={{ position: "relative", textAlign: "center" }}>
              <span
                style={{
                  fontFamily: "var(--font-bebas, 'Bebas Neue', cursive)",
                  fontSize: "clamp(5rem, 22vw, 22rem)",
                  fontWeight: 400,
                  lineHeight: 0.9,
                  letterSpacing: "0.02em",
                  color: "#fff",
                  textTransform: "uppercase",
                  display: "block",
                  whiteSpace: "nowrap",
                }}
              >
                Nebbuler
              </span>
            </div>
          </div>

          {/* Two-column subtitles — exact mockupflock layout */}
          <div className="flex flex-col lg:flex-row gap-6 lg:justify-around items-start">
            <div
              className="w-full lg:w-1/3 text-center uppercase"
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.33,
                fontFamily: "var(--font-titillium, sans-serif)",
              }}
            >
              <h1>Templates Notion &amp; Monday.com para empresas de LATAM.</h1>
            </div>
            <div
              className="w-full lg:w-1/3 text-center uppercase"
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.8)",
                lineHeight: 1.33,
                fontFamily: "var(--font-titillium, sans-serif)",
              }}
            >
              <h2><strong>Implementa en 30 minutos. Resultados desde el primer día.</strong></h2>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          CAROUSEL — full bleed, black bg
      ════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingBottom: 96 }}>
        <SwiperCarousel locale={locale} />
      </section>

      {/* ══════════════════════════════════════════════════
          POPULAR TEMPLATES
          Exact: padding-top:100px; padding-bottom:100px
      ════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 100, paddingBottom: 100 }}>
        <div className="max-w-none px-6 lg:px-10">
          <SectionHeader title="Templates Populares" count={4} total="18+" />
          <div className="grid grid-cols-2 md:grid-cols-4">
            {POPULAR.map((t) => (
              <TemplateCard key={t.slug} {...t} locale={locale} />
            ))}
          </div>
          <SeeMore href={`/${locale}/templates`} />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          COLLECTION MOCKUPS
          Exact: padding-top:100px; padding-bottom:100px
      ════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 100, paddingBottom: 100 }}>
        <div className="max-w-none px-6 lg:px-10">
          <SectionHeader title="Colecciones &amp; Bundles" count={4} total="7" />
          <div className="grid grid-cols-2 md:grid-cols-4">
            {COLLECTIONS.map((t) => (
              <TemplateCard key={t.slug + t.name} {...t} locale={locale} />
            ))}
          </div>
          <SeeMore href={`/${locale}/bundles`} label="Ver Bundles" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          NEW RELEASES
          Exact: padding-top:44px; padding-bottom:100px
      ════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 44, paddingBottom: 100 }}>
        <div className="max-w-none px-6 lg:px-10">
          <SectionHeader title="Nuevos Templates" count={8} total="18+" />
          <div className="grid grid-cols-2 md:grid-cols-4">
            {NEW_RELEASES.map((t) => (
              <TemplateCard key={t.slug + t.name} {...t} locale={locale} />
            ))}
          </div>
          <SeeMore href={`/${locale}/templates`} label="Ver Todos" />
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          DEALS LIST — "Mockup Collection" equivalent
      ════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 44, paddingBottom: 100 }}>
        <div className="max-w-none px-6 lg:px-10">

          {/* Header row with horizontal rule */}
          <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-8 mb-6">
            <h2
              className="text-white text-2xl md:text-3xl whitespace-nowrap"
              style={{ fontWeight: 400, margin: 0, fontFamily: "var(--font-titillium, sans-serif)" }}
            >
              Bundle Collection
            </h2>
            <div className="hidden lg:block flex-1 h-px" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
            <p
              className="hidden lg:block"
              style={{
                color: "rgba(255,255,255,0.55)",
                fontSize: "0.875rem",
                maxWidth: "18rem",
                margin: 0,
                lineHeight: 1.5,
                fontFamily: "var(--font-titillium, sans-serif)",
              }}
            >
              Ahorra hasta 30% combinando Notion y Monday en un solo bundle.
            </p>
          </div>

          {/* List rows */}
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {DEALS.map((d, i) => (
              <li
                key={i}
                style={{
                  borderTop: i === 0 ? "1px solid rgba(255,255,255,0.25)" : undefined,
                  borderBottom: "1px solid rgba(255,255,255,0.25)",
                }}
              >
                <Link
                  href={`/${locale}${d.href}`}
                  style={{ display: "block", padding: "18px 8px", textDecoration: "none", color: "#fff" }}
                  className="group"
                >
                  <div
                    className="flex justify-between items-center gap-4"
                    style={{
                      fontSize: "clamp(0.875rem,1.5vw,1.0625rem)",
                      fontFamily: "var(--font-titillium, sans-serif)",
                    }}
                  >
                    <span className="group-hover:font-bold" style={{ transition: "font-weight 0.15s" }}>
                      {d.name}
                    </span>
                    <span
                      className="flex items-center gap-3 group-hover:-translate-x-1 transition-transform duration-300 flex-shrink-0"
                    >
                      <s style={{ opacity: 0.35, fontSize: "0.8125rem" }}>{d.regular}</s>
                      <strong>{d.sale}</strong>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STAY WILD equivalent + NEWSLETTER
          Exact mockupflock: big tagline + "become member & get 10% off"
      ════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 36, paddingBottom: 32 }}>
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2
            style={{
              fontFamily: "var(--font-bebas, 'Bebas Neue', cursive)",
              fontSize: "clamp(2.5rem,9vw,7rem)",
              fontWeight: 400,
              color: "#fff",
              letterSpacing: "-0.01em",
              lineHeight: 0.9,
              margin: "0 0 -48px",
              position: "relative",
              zIndex: 10,
              textTransform: "uppercase",
            }}
          >
            Digitaliza tu<br />empresa hoy.
          </h2>
        </div>
      </section>

      {/* Newsletter — exact: "become member & get 10% off" */}
      <section style={{ backgroundColor: "#000", paddingTop: 96, paddingBottom: 56 }}>
        <div className="max-w-none px-6 lg:px-10">
          <div
            className="flex flex-col sm:flex-row items-end gap-6"
            style={{ maxWidth: 680 }}
          >
            {/* Label — exact text */}
            <div
              className="uppercase text-center sm:text-left whitespace-nowrap"
              style={{
                fontSize: "1rem",
                color: "#fff",
                lineHeight: 1.33,
                fontFamily: "var(--font-titillium, sans-serif)",
              }}
            >
              únete gratis<br />&amp; recibe templates
            </div>

            {/* Input */}
            <div className="w-full">
              {subOk ? (
                <p
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                    padding: "16px 0",
                    margin: 0,
                    fontFamily: "var(--font-titillium, sans-serif)",
                  }}
                >
                  ¡Gracias! Revisa tu email.
                </p>
              ) : (
                <form onSubmit={handleSub} style={{ position: "relative" }}>
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
                      fontFamily: "var(--font-titillium, sans-serif)",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#fff")}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.2)")}
                  />
                  <button
                    type="submit"
                    aria-label="Suscribirse"
                    style={{
                      position: "absolute",
                      right: 0,
                      top: "50%",
                      transform: "translateY(-50%)",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
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
