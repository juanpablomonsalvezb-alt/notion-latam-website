"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { useState } from "react";
import dynamic from "next/dynamic";

const SwiperCarousel = dynamic(() => import("@/components/home/SwiperCarousel"), { ssr: false });

// ── picsum placeholder helper (seed = consistent image per card) ────────────
const PIC = (seed: string, w = 400, h = 300) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

// ── Data ────────────────────────────────────────────────────────────────────

const POPULAR = [
  { slug: "crm-ventas-b2b",      name: "CRM Ventas B2B",       tag: "Notion Template", price: "$29",   seed: "business11", accent: "#2383E2" },
  { slug: "gestion-proyectos",   name: "Gestión de Proyectos", tag: "Notion Template", price: "$24",   seed: "office22",   accent: "#5b5bd6" },
  { slug: "wiki-empresa",        name: "Wiki Empresarial",      tag: "Notion Template", price: "$19",   seed: "laptop33",   accent: "#0095ff" },
  { slug: "finanzas-personal",   name: "Finanzas Personales",   tag: "Notion Template", price: "Gratis",seed: "desk44",     accent: "#00c875" },
];

const COLLECTIONS = [
  { slug: "bundle-starter",      name: "Bundle Starter",                    tag: "2 Notion + 2 Monday",        price: "$120",  seed: "tech55",     accent: "#7c3aed", href: "/bundles" },
  { slug: "bundle-professional", name: "Bundle Professional",               tag: "5+5 Templates + 2 Cursos",   price: "$250",  seed: "workspace66",accent: "#FF3D57", href: "/bundles" },
  { slug: "bundle-complete",     name: "Bundle Complete",                   tag: "Todo + Consultoría VIP",     price: "$450",  seed: "meeting77",  accent: "#2383E2", href: "/bundles" },
  { slug: "okr-planificacion",   name: "OKR & Planificación",               tag: "Notion Template",            price: "$34",   seed: "strategy88", accent: "#eab308", href: undefined },
];

const NEW_RELEASES = [
  { slug: "pipeline-ventas",   name: "Pipeline de Ventas",    tag: "Notion Template", price: "$29",   seed: "sales11",   accent: "#3b82f6" },
  { slug: "recursos-humanos",  name: "Recursos Humanos",      tag: "Notion Template", price: "$24",   seed: "hr22",      accent: "#c026d3" },
  { slug: "crm-ventas-b2b",    name: "CRM Starter Gratis",    tag: "Notion Template", price: "Gratis",seed: "free33",    accent: "#16a34a" },
  { slug: "gestion-proyectos", name: "Planificador Semanal",  tag: "Notion Template", price: "$19",   seed: "planner44", accent: "#ea580c" },
  { slug: "wiki-empresa",      name: "Base de Conocimiento",  tag: "Notion Template", price: "$22",   seed: "knowledge55",accent: "#0284c7" },
  { slug: "finanzas-personal", name: "Tracker de Hábitos",    tag: "Notion Template", price: "Gratis",seed: "habits66",  accent: "#db2777" },
  { slug: "pipeline-ventas",   name: "Dashboard Empresa",     tag: "Notion Template", price: "$39",   seed: "dash77",    accent: "#4f46e5" },
  { slug: "recursos-humanos",  name: "Gestión de Clientes",   tag: "Notion Template", price: "$29",   seed: "clients88", accent: "#0891b2" },
];

const DEALS = [
  { href: "/bundles", name: "Bundle Starter — Notion + Monday",                    regular: "$180 USD", sale: "$120 USD" },
  { href: "/bundles", name: "Bundle Professional — 5+5 Templates + 2 Cursos",      regular: "$340 USD", sale: "$250 USD" },
  { href: "/bundles", name: "Bundle Complete — Todo Incluido + Consultoría 1h",    regular: "$650 USD", sale: "$450 USD" },
];

// ── Photo-based template card (mockupflock style) ───────────────────────────

interface CardProps {
  slug: string;
  name: string;
  tag: string;
  price: string;
  seed: string;
  accent: string;
  locale: string;
  href?: string;
}

function TemplateCard({ slug, name, tag, price, seed, accent, locale, href }: CardProps) {
  const [hovered, setHovered] = useState(false);
  const link = href
    ? `/${locale}${href}`
    : tag.includes("Monday")
    ? `/${locale}/monday/templates`
    : `/${locale}/templates/${slug}`;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ overflow: "hidden", borderRadius: 0 }}
    >
      <Link href={link} style={{ display: "block", textDecoration: "none" }}>
        {/* ── Photo area ── */}
        <div style={{ position: "relative", overflow: "hidden", height: 240 }}>
          {/* primary photo */}
          <img
            src={PIC(seed, 400, 300)}
            alt={name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transform: hovered ? "scale(1.05)" : "scale(1)",
              transition: "transform 600ms cubic-bezier(0.25,0.46,0.45,0.94)",
            }}
          />
          {/* accent color tint overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: accent,
              opacity: hovered ? 0.18 : 0.08,
              transition: "opacity 400ms ease",
              mixBlendMode: "multiply",
            }}
          />
          {/* secondary photo fades in on hover — mimics mockupflock's 2nd image */}
          <img
            src={PIC(seed + "-alt", 400, 300)}
            alt=""
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              opacity: hovered ? 0.45 : 0,
              transition: "opacity 400ms ease",
            }}
          />
        </div>

        {/* ── Meta bar (dark, exact #2b2b2b like mockupflock) ── */}
        <div
          style={{
            backgroundColor: "#2b2b2b",
            padding: "14px 16px 16px",
            color: "#fff",
          }}
        >
          <h3
            style={{
              margin: 0,
              fontSize: "0.9375rem",
              fontWeight: hovered ? 700 : 400,
              transition: "font-weight 0.15s",
              lineHeight: 1.3,
              fontFamily: "var(--font-titillium, sans-serif)",
            }}
          >
            {name}
          </h3>
          <div
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.45)",
              marginTop: 4,
              fontFamily: "var(--font-titillium, sans-serif)",
            }}
          >
            {tag}
          </div>
          <div
            style={{
              fontSize: "0.875rem",
              fontWeight: 500,
              marginTop: 6,
              color: "#fff",
              fontFamily: "var(--font-titillium, sans-serif)",
            }}
          >
            {price}
          </div>
        </div>
      </Link>
    </div>
  );
}

// ── Section header (line + title + count — like mockupflock) ────────────────

function SectionHeader({ title, count, total }: { title: string; count: number; total: string }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
        borderBottom: "1px solid #fff",
        paddingBottom: 10,
        marginBottom: 24,
      }}
    >
      <h2
        style={{
          margin: 0,
          color: "#fff",
          fontSize: "clamp(1.1rem,2.5vw,1.5rem)",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          fontFamily: "var(--font-titillium, sans-serif)",
        }}
      >
        {title}
      </h2>
      <span
        style={{
          color: "rgba(255,255,255,0.5)",
          fontSize: "0.8125rem",
          fontFamily: "var(--font-titillium, sans-serif)",
        }}
      >
        Mostrando {count} de {total}
      </span>
    </div>
  );
}

// ── See-more link ────────────────────────────────────────────────────────────

function SeeMore({ href, label = "Ver Más" }: { href: string; label?: string }) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 20,
        color: "#fff",
        textDecoration: "none",
        fontSize: "0.9375rem",
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        marginTop: 32,
        width: "50%",
        marginLeft: "auto",
        marginRight: "auto",
        fontFamily: "var(--font-titillium, sans-serif)",
      }}
      className="group"
    >
      <span style={{ whiteSpace: "nowrap" }}>{label}</span>
      <span
        style={{
          flex: 1,
          height: 1,
          background: "linear-gradient(90deg, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
    </Link>
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

      {/* ═════════════════════════════════════════════════════════════
          HERO — full-width Bebas Neue wordmark (mockupflock exact)
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", padding: "48px 0 40px" }}>
        <div style={{ padding: "0 24px" }}>

          {/* ── Wordmark ── */}
          <div style={{ textAlign: "center", overflow: "hidden" }}>
            <h1
              style={{
                fontFamily: "var(--font-bebas, 'Bebas Neue', cursive)",
                fontSize: "clamp(4.5rem, 18vw, 18rem)",
                fontWeight: 400,
                lineHeight: 0.88,
                letterSpacing: "0.02em",
                color: "#fff",
                margin: 0,
                padding: 0,
                textTransform: "uppercase",
              }}
            >
              Workspace
            </h1>
            <h1
              style={{
                fontFamily: "var(--font-bebas, 'Bebas Neue', cursive)",
                fontSize: "clamp(4.5rem, 18vw, 18rem)",
                fontWeight: 400,
                lineHeight: 0.88,
                letterSpacing: "0.02em",
                color: "#d9d9d9",
                margin: 0,
                padding: 0,
                textTransform: "uppercase",
                marginBottom: "clamp(24px, 4vw, 56px)",
              }}
            >
              Latam
            </h1>
          </div>

          {/* ── Two-column subtitle ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              maxWidth: 960,
              margin: "0 auto",
            }}
            className="lg:flex-row lg:justify-around"
          >
            <p
              style={{
                margin: 0,
                textTransform: "uppercase",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.4,
                textAlign: "center",
                fontFamily: "var(--font-titillium, sans-serif)",
              }}
            >
              Templates Notion &amp; Monday.com<br />para empresas de LATAM.
            </p>
            <p
              style={{
                margin: 0,
                textTransform: "uppercase",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.75)",
                lineHeight: 1.4,
                textAlign: "center",
                fontFamily: "var(--font-titillium, sans-serif)",
              }}
            >
              <strong>Implementa en 30 minutos.</strong><br />Resultados desde el primer día.
            </p>
          </div>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════
          CAROUSEL — edge-to-edge, black bg
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingBottom: 80 }}>
        <SwiperCarousel locale={locale} />
      </section>

      {/* ═════════════════════════════════════════════════════════════
          POPULAR TEMPLATES
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ padding: "0 24px" }} className="lg:px-10">
          <SectionHeader title="Templates Populares" count={4} total="18+" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 4,
            }}
            className="md:grid-cols-4"
          >
            {POPULAR.map((t) => (
              <TemplateCard key={t.slug} {...t} locale={locale} />
            ))}
          </div>
          <SeeMore href={`/${locale}/templates`} />
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════
          COLLECTIONS & BUNDLES
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 80, paddingBottom: 80 }}>
        <div style={{ padding: "0 24px" }} className="lg:px-10">
          <SectionHeader title="Colecciones &amp; Bundles" count={4} total="7" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 4,
            }}
            className="md:grid-cols-4"
          >
            {COLLECTIONS.map((t) => (
              <TemplateCard key={t.slug + t.name} {...t} locale={locale} />
            ))}
          </div>
          <SeeMore href={`/${locale}/bundles`} label="Ver Bundles" />
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════
          NEW RELEASES
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 40, paddingBottom: 80 }}>
        <div style={{ padding: "0 24px" }} className="lg:px-10">
          <SectionHeader title="Nuevos Templates" count={8} total="18+" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2,1fr)",
              gap: 4,
            }}
            className="md:grid-cols-4"
          >
            {NEW_RELEASES.map((t) => (
              <TemplateCard key={t.slug + t.name} {...t} locale={locale} />
            ))}
          </div>
          <SeeMore href={`/${locale}/templates`} label="Ver Todos" />
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════
          DEALS LIST — "Mockup Collection" equivalent
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 40, paddingBottom: 80 }}>
        <div style={{ padding: "0 24px" }} className="lg:px-10">

          {/* header row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 32,
              marginBottom: 24,
            }}
          >
            <h2
              style={{
                margin: 0,
                color: "#fff",
                textTransform: "uppercase",
                fontWeight: 700,
                fontSize: "clamp(1.2rem,3vw,1.75rem)",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-titillium, sans-serif)",
                letterSpacing: "0.04em",
              }}
            >
              Bundles Notion + Monday
            </h2>
            <div
              style={{ flex: 1, height: 1, backgroundColor: "rgba(255,255,255,0.18)" }}
              className="hidden lg:block"
            />
            <p
              style={{
                margin: 0,
                color: "rgba(255,255,255,0.5)",
                fontSize: "0.8125rem",
                maxWidth: 240,
                lineHeight: 1.4,
                fontFamily: "var(--font-titillium, sans-serif)",
              }}
              className="hidden lg:block"
            >
              Ahorra hasta 30% combinando Notion y Monday en un solo bundle.
            </p>
          </div>

          {/* list rows */}
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
                  style={{ textDecoration: "none", display: "block", padding: "18px 8px" }}
                  className="group"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: 16,
                      color: "#fff",
                      fontSize: "clamp(0.875rem,1.5vw,1.0625rem)",
                      fontFamily: "var(--font-titillium, sans-serif)",
                    }}
                  >
                    <span className="group-hover:font-bold" style={{ transition: "font-weight 0.15s" }}>
                      {d.name}
                    </span>
                    <span
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        flexShrink: 0,
                        transition: "transform 0.3s ease",
                      }}
                      className="group-hover:-translate-x-2"
                    >
                      <s style={{ opacity: 0.35, fontSize: "0.8125rem" }}>{d.regular}</s>
                      <span style={{ fontWeight: 600 }}>{d.sale}</span>
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═════════════════════════════════════════════════════════════
          BIG CTA + NEWSLETTER — "STAY WILD / BECOME MEMBER" combined
      ════════════════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#000", paddingTop: 32, paddingBottom: 80 }}>
        <div style={{ padding: "0 24px" }} className="lg:px-10">

          {/* BIG headline */}
          <h2
            style={{
              fontFamily: "var(--font-bebas, 'Bebas Neue', cursive)",
              fontSize: "clamp(3.5rem, 12vw, 11rem)",
              fontWeight: 400,
              lineHeight: 0.88,
              color: "#fff",
              textTransform: "uppercase",
              margin: "0 0 -16px 0",
              position: "relative",
              zIndex: 1,
              letterSpacing: "0.01em",
            }}
          >
            Digitaliza tu<br />empresa hoy.
          </h2>

          {/* dividing rule */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.15)", margin: "48px 0 40px" }} />

          {/* newsletter row */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              maxWidth: 680,
            }}
            className="sm:flex-row sm:items-end"
          >
            {/* label */}
            <div
              style={{
                textTransform: "uppercase",
                fontSize: "0.875rem",
                color: "#fff",
                lineHeight: 1.4,
                whiteSpace: "nowrap",
                fontFamily: "var(--font-titillium, sans-serif)",
                letterSpacing: "0.06em",
              }}
            >
              Únete gratis<br />&amp; recibe templates
            </div>

            {/* input */}
            <div style={{ flex: 1 }}>
              {subOk ? (
                <p
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    borderBottom: "1px solid rgba(255,255,255,0.15)",
                    padding: "16px 0",
                    margin: 0,
                    fontFamily: "var(--font-titillium, sans-serif)",
                  }}
                >
                  ¡Gracias! Revisa tu email.
                </p>
              ) : (
                <form
                  onSubmit={handleSub}
                  style={{ position: "relative" }}
                >
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
                      borderBottom: "1px solid rgba(255,255,255,0.18)",
                      color: "#fff",
                      padding: "16px 36px 16px 0",
                      outline: "none",
                      fontSize: "1rem",
                      fontFamily: "var(--font-titillium, sans-serif)",
                      boxSizing: "border-box",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderBottomColor = "#fff")}
                    onBlur={(e) => (e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.18)")}
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
