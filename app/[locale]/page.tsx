"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";
import dynamic from "next/dynamic";

const SwiperCarousel = dynamic(() => import("@/components/home/SwiperCarousel"), { ssr: false });

// ── picsum placeholder ──────────────────────────────────────────────────────
const PIC = (seed: string, w = 324, h = 351) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// ── Data ────────────────────────────────────────────────────────────────────

const POPULAR = [
  { slug: "crm-ventas-b2b",    name: "CRM Ventas B2B",       tag: "Notion Template", price: "$29",    seed: "biz-crm-01" },
  { slug: "gestion-proyectos", name: "Gestión de Proyectos", tag: "Notion Template", price: "$24",    seed: "proj-mgmt-02" },
  { slug: "wiki-empresa",      name: "Wiki Empresarial",      tag: "Notion Template", price: "$19",    seed: "wiki-corp-03" },
  { slug: "finanzas-personal", name: "Finanzas Personales",   tag: "Notion Template", price: "Gratis", seed: "finance-04" },
];

const COLLECTIONS = [
  { slug: "bundle-starter",      name: "Bundle Starter",          tag: "2 Notion + 2 Monday",    price: "$120", seed: "bundle-start-05", href: "/bundles" },
  { slug: "bundle-professional", name: "Bundle Professional",      tag: "5+5 Templates + 2 Cursos",price: "$250", seed: "bundle-pro-06",  href: "/bundles" },
  { slug: "bundle-complete",     name: "Bundle Complete",          tag: "Todo + Consultoría VIP", price: "$450", seed: "bundle-vip-07",  href: "/bundles" },
  { slug: "okr-planificacion",   name: "OKR & Planificación",      tag: "Notion Template",        price: "$34",  seed: "okr-strat-08",  href: undefined },
];

const NEW_RELEASES = [
  { slug: "pipeline-ventas",   name: "Pipeline de Ventas",    tag: "Notion Template", price: "$29",    seed: "pipe-sales-09" },
  { slug: "recursos-humanos",  name: "Recursos Humanos",      tag: "Notion Template", price: "$24",    seed: "hr-team-10" },
  { slug: "crm-ventas-b2b",    name: "CRM Starter Gratis",    tag: "Notion Template", price: "Gratis", seed: "crm-free-11" },
  { slug: "gestion-proyectos", name: "Planificador Semanal",  tag: "Notion Template", price: "$19",    seed: "weekly-plan-12" },
  { slug: "wiki-empresa",      name: "Base de Conocimiento",  tag: "Notion Template", price: "$22",    seed: "knowledge-13" },
  { slug: "finanzas-personal", name: "Tracker de Hábitos",    tag: "Notion Template", price: "Gratis", seed: "habits-track-14" },
  { slug: "pipeline-ventas",   name: "Dashboard Empresa",     tag: "Notion Template", price: "$39",    seed: "corp-dash-15" },
  { slug: "recursos-humanos",  name: "Gestión de Clientes",   tag: "Notion Template", price: "$29",    seed: "clients-mgmt-16" },
];

const DEALS = [
  { href: "/bundles", name: "Bundle Starter — Notion + Monday",                  regular: "$180 USD", sale: "$120 USD" },
  { href: "/bundles", name: "Bundle Professional — 5+5 Templates + 2 Cursos",   regular: "$340 USD", sale: "$250 USD" },
  { href: "/bundles", name: "Bundle Complete — Todo Incluido + Consultoría 1h", regular: "$650 USD", sale: "$450 USD" },
];

// ── Product card (exact mockupflock structure: photo swap on hover, white bg) ─

interface CardProps {
  slug: string;
  name: string;
  tag: string;
  price: string;
  seed: string;
  locale: string;
  href?: string;
}

function TemplateCard({ slug, name, tag, price, seed, locale, href }: CardProps) {
  const [hov, setHov] = useState(false);
  const link = href
    ? `/${locale}${href}`
    : tag.includes("Monday")
    ? `/${locale}/monday/templates`
    : `/${locale}/templates/${slug}`;

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ cursor: "pointer" }}
    >
      <Link href={link} style={{ textDecoration: "none", display: "block", color: "inherit" }}>
        {/* Photo area — exactly like mockupflock: two images, second fades on hover */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            aspectRatio: "324 / 351",
            backgroundColor: "#f6f6f6",
          }}
        >
          <img
            src={PIC(seed)}
            alt={name}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 500ms ease",
              transform: hov ? "scale(1.04)" : "scale(1)",
            }}
          />
          <img
            src={PIC(seed + "b")}
            alt=""
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              opacity: hov ? 1 : 0,
              transition: "opacity 400ms ease",
            }}
          />
        </div>

        {/* Meta area — white background, black text, exactly like mockupflock */}
        <div style={{ padding: "10px 2px 14px", backgroundColor: "#fff" }}>
          <h3
            style={{
              margin: 0,
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "#000",
              lineHeight: 1.3,
              fontFamily: "var(--font-titillium, sans-serif)",
            }}
          >
            {name}
          </h3>
          <p
            style={{
              margin: "3px 0 0",
              fontSize: "0.75rem",
              color: "rgba(0,0,0,0.45)",
              fontFamily: "var(--font-titillium, sans-serif)",
            }}
          >
            {tag}
          </p>
          <p
            style={{
              margin: "3px 0 0",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#000",
              fontFamily: "var(--font-titillium, sans-serif)",
            }}
          >
            {price}
          </p>
        </div>
      </Link>
    </div>
  );
}

// ── Section header ──────────────────────────────────────────────────────────

function SectionHeader({ title, count, total }: { title: string; count: number; total: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        borderBottom: "1px solid #000",
        paddingBottom: 10,
        marginBottom: 24,
      }}
    >
      <h2
        style={{
          margin: 0,
          fontSize: "clamp(1rem, 2vw, 1.25rem)",
          fontWeight: 700,
          color: "#000",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          fontFamily: "var(--font-titillium, sans-serif)",
        }}
      >
        {title}
      </h2>
      <span
        style={{
          fontSize: "0.8125rem",
          color: "rgba(0,0,0,0.45)",
          fontFamily: "var(--font-titillium, sans-serif)",
        }}
      >
        Mostrando {count} de {total}
      </span>
    </div>
  );
}

// ── See More button ─────────────────────────────────────────────────────────

function SeeMore({ href, label = "Ver Más" }: { href: string; label?: string }) {
  return (
    <div style={{ textAlign: "center", marginTop: 32 }}>
      <Link
        href={href}
        style={{
          display: "inline-block",
          padding: "10px 32px",
          border: "1px solid #000",
          borderRadius: 14,
          fontSize: "0.875rem",
          fontWeight: 600,
          color: "#000",
          textDecoration: "none",
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          fontFamily: "var(--font-titillium, sans-serif)",
          transition: "background 0.2s, color 0.2s",
        }}
        className="hover:bg-black hover:text-white"
      >
        {label}
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
        backgroundColor: "#fff",
        color: "#000",
        minHeight: "100vh",
        fontFamily: "var(--font-titillium, 'Titillium Web', sans-serif)",
      }}
    >

      {/* ═══════════════════════════════════════════
          HERO — centered wordmark + taglines
      ═══════════════════════════════════════════ */}
      <section style={{ padding: "56px 24px 40px", backgroundColor: "#fff" }}>

        {/* Big wordmark */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <h1
            style={{
              fontFamily: "var(--font-titillium, 'Titillium Web', sans-serif)",
              fontSize: "clamp(2rem, 6vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "#000",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Templates para Notion &amp; Monday.com
          </h1>
          <p
            style={{
              marginTop: 16,
              fontSize: "clamp(0.9rem, 1.5vw, 1.125rem)",
              color: "rgba(0,0,0,0.55)",
              fontWeight: 400,
              maxWidth: 560,
              marginLeft: "auto",
              marginRight: "auto",
              lineHeight: 1.5,
            }}
          >
            Implementa sistemas de productividad profesionales en tu empresa. Listos en 30 minutos.
          </p>
        </div>

        {/* Two CTA buttons */}
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href={`/${locale}/templates`}
            style={{
              padding: "12px 28px",
              backgroundColor: "#000",
              color: "#fff",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.875rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              borderRadius: 14,
              fontFamily: "var(--font-titillium, sans-serif)",
            }}
          >
            Ver Templates Notion
          </Link>
          <Link
            href={`/${locale}/monday/templates`}
            style={{
              padding: "12px 28px",
              backgroundColor: "#fff",
              color: "#000",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "0.875rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              borderRadius: 14,
              border: "1px solid #000",
              fontFamily: "var(--font-titillium, sans-serif)",
            }}
          >
            Ver Templates Monday
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CAROUSEL — full bleed
      ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#fff", paddingBottom: 64 }}>
        <SwiperCarousel locale={locale} />
      </section>

      {/* ═══════════════════════════════════════════
          POPULAR TEMPLATES
      ═══════════════════════════════════════════ */}
      <section style={{ padding: "0 24px 72px" }} className="lg:px-10">
        <SectionHeader title="Templates Populares" count={4} total="18+" />
        <div
          style={{ display: "grid", gap: 8 }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {POPULAR.map((t) => (
            <TemplateCard key={t.slug} {...t} locale={locale} />
          ))}
        </div>
        <SeeMore href={`/${locale}/templates`} />
      </section>

      {/* ═══════════════════════════════════════════
          COLLECTIONS & BUNDLES
      ═══════════════════════════════════════════ */}
      <section style={{ padding: "0 24px 72px" }} className="lg:px-10">
        <SectionHeader title="Colecciones &amp; Bundles" count={4} total="7" />
        <div
          style={{ display: "grid", gap: 8 }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {COLLECTIONS.map((t) => (
            <TemplateCard key={t.slug + t.name} {...t} locale={locale} />
          ))}
        </div>
        <SeeMore href={`/${locale}/bundles`} label="Ver Bundles" />
      </section>

      {/* ═══════════════════════════════════════════
          NEW RELEASES
      ═══════════════════════════════════════════ */}
      <section style={{ padding: "0 24px 72px" }} className="lg:px-10">
        <SectionHeader title="Nuevos Templates" count={8} total="18+" />
        <div
          style={{ display: "grid", gap: 8 }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {NEW_RELEASES.map((t) => (
            <TemplateCard key={t.slug + t.name} {...t} locale={locale} />
          ))}
        </div>
        <SeeMore href={`/${locale}/templates`} label="Ver Todos" />
      </section>

      {/* ═══════════════════════════════════════════
          DEALS LIST — "Mockup Collection" equivalent
      ═══════════════════════════════════════════ */}
      <section style={{ padding: "0 24px 72px" }} className="lg:px-10">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 24,
          }}
        >
          <h2
            style={{
              margin: 0,
              fontWeight: 700,
              fontSize: "clamp(1rem,2.5vw,1.25rem)",
              textTransform: "uppercase",
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
              fontFamily: "var(--font-titillium, sans-serif)",
            }}
          >
            Bundle Collection
          </h2>
          <div
            style={{ flex: 1, height: 1, backgroundColor: "#000" }}
            className="hidden md:block"
          />
          <p
            style={{
              margin: 0,
              fontSize: "0.8125rem",
              color: "rgba(0,0,0,0.5)",
              maxWidth: 220,
              lineHeight: 1.4,
              fontFamily: "var(--font-titillium, sans-serif)",
            }}
            className="hidden md:block"
          >
            Ahorra hasta 30% combinando Notion y Monday en un solo bundle.
          </p>
        </div>

        <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {DEALS.map((d, i) => (
            <li
              key={i}
              style={{
                borderTop: i === 0 ? "1px solid #000" : undefined,
                borderBottom: "1px solid #000",
              }}
            >
              <Link
                href={`/${locale}${d.href}`}
                style={{ display: "block", padding: "16px 4px", textDecoration: "none", color: "#000" }}
                className="group"
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 16,
                    fontSize: "clamp(0.875rem,1.4vw,1rem)",
                    fontFamily: "var(--font-titillium, sans-serif)",
                  }}
                >
                  <span className="group-hover:font-bold" style={{ transition: "font-weight 0.15s" }}>
                    {d.name}
                  </span>
                  <span
                    style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, transition: "transform 0.25s" }}
                    className="group-hover:-translate-x-1"
                  >
                    <s style={{ opacity: 0.35, fontSize: "0.8125rem" }}>{d.regular}</s>
                    <strong>{d.sale}</strong>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ═══════════════════════════════════════════
          CTA + NEWSLETTER (grey bg like footer)
      ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#d9d9d9", padding: "64px 24px 72px" }} className="lg:px-10">
        {/* Big headline */}
        <h2
          style={{
            fontFamily: "var(--font-titillium, 'Titillium Web', sans-serif)",
            fontSize: "clamp(2rem, 6vw, 4rem)",
            fontWeight: 700,
            lineHeight: 1.1,
            color: "#000",
            margin: "0 0 48px",
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
          }}
        >
          Digitaliza tu empresa.<br />
          <span style={{ fontWeight: 400, color: "rgba(0,0,0,0.55)" }}>Empieza hoy.</span>
        </h2>

        {/* Newsletter row */}
        <div
          style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 600 }}
          className="sm:flex-row sm:items-end"
        >
          <div
            style={{
              textTransform: "uppercase",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#000",
              lineHeight: 1.5,
              whiteSpace: "nowrap",
              letterSpacing: "0.06em",
              fontFamily: "var(--font-titillium, sans-serif)",
            }}
          >
            Únete gratis<br />&amp; recibe templates
          </div>

          <div style={{ flex: 1 }}>
            {subOk ? (
              <p
                style={{
                  color: "rgba(0,0,0,0.5)",
                  borderBottom: "1px solid rgba(0,0,0,0.3)",
                  padding: "14px 0",
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
                    borderBottom: "1px solid rgba(0,0,0,0.3)",
                    color: "#000",
                    padding: "14px 36px 14px 0",
                    outline: "none",
                    fontSize: "1rem",
                    fontFamily: "var(--font-titillium, sans-serif)",
                    boxSizing: "border-box",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#000")}
                  onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(0,0,0,0.3)")}
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
                    <path d="M8 7.006L0.5 13.934V0.078L8 7.006Z" fill="black" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

    </div>
  );
}
