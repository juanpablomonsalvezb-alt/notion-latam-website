import Link from "next/link";
import Image from "next/image";

/* ─── Design tokens ───────────────────────────────────────────────────────── */
const T = {
  bg: "#fafafa",
  white: "#ffffff",
  black: "#000000",
  text: "#2a2a2a",
  muted: "#6b6b6b",
  border: "#e6e6e6",
  borderLight: "rgba(230,230,230,0.5)",
  accent: "#0099ff",
  pill: 100,
  sm: 12,
} as const;

/* ─── Nav ─────────────────────────────────────────────────────────────────── */
function Nav() {
  const links = [
    { label: "Apps",      href: "/apps" },
    { label: "Templates", href: "/templates" },
    { label: "Blog",      href: "/blog" },
  ];
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 999,
      width: "100%",
      backgroundColor: "rgba(255,255,255,0.5)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: `1px solid ${T.borderLight}`,
    }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 24px",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 32,
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 32, height: 32,
            borderRadius: 8,
            background: "linear-gradient(135deg, #2a2a2a 0%, #4a4a4a 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#fff", fontSize: 14, fontWeight: 700 }}>N</span>
          </div>
          <span style={{ fontSize: 15, fontWeight: 600, color: T.text }}>Nebbuler</span>
        </Link>

        {/* Center nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              padding: "6px 14px",
              fontSize: 14,
              color: T.text,
              borderRadius: T.pill,
              fontWeight: 400,
              transition: "background 0.15s",
            }}
            className="hover:bg-black/5"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Right CTAs */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
          <Link href="/sign-in" style={{
            padding: "7px 16px",
            fontSize: 14,
            fontWeight: 500,
            color: T.text,
            borderRadius: T.pill,
            border: `1px solid ${T.border}`,
            backgroundColor: T.white,
          }}>
            Iniciar sesión
          </Link>
          <Link href="/sign-up" style={{
            padding: "7px 16px",
            fontSize: 14,
            fontWeight: 600,
            color: T.white,
            backgroundColor: T.black,
            borderRadius: T.pill,
          }}>
            Crear cuenta gratis
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ─── Hero section ────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{
      backgroundColor: T.bg,
      padding: "80px 24px 0",
      textAlign: "center",
    }}>
      <div style={{ maxWidth: 640, margin: "0 auto", marginBottom: 48 }}>
        <h1 style={{
          fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
          fontWeight: 700,
          color: T.text,
          lineHeight: 1.15,
          letterSpacing: "-0.02em",
          marginBottom: 20,
        }}>
          Plantillas para Notion &amp; Monday.com
        </h1>
        <p style={{
          fontSize: "clamp(1rem, 2vw, 1.125rem)",
          color: T.muted,
          lineHeight: 1.6,
          marginBottom: 32,
        }}>
          Descubre 30+ plantillas para organizar tu empresa, ahorrar tiempo y digitalizar tus procesos desde el primer día.
        </p>
        <Link href="/templates" style={{
          display: "inline-flex",
          alignItems: "center",
          padding: "12px 28px",
          backgroundColor: T.black,
          color: T.white,
          borderRadius: T.pill,
          fontSize: 15,
          fontWeight: 600,
          gap: 8,
        }}>
          Ver Templates →
        </Link>
      </div>

      {/* Hero product screenshot */}
      <div style={{
        maxWidth: 900,
        margin: "0 auto",
        borderRadius: 16,
        overflow: "hidden",
        boxShadow: "0 2px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
      }}>
        <img
          src="https://picsum.photos/seed/nebbuler-hero/1800/1000"
          alt="Nebbuler Templates Preview"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
    </section>
  );
}

/* ─── Feature section (alternating image + text) ─────────────────────────── */
interface FeatureProps {
  badge?: string;
  title: string;
  description: string;
  cta: string;
  href: string;
  img: string;
  reverse?: boolean;
  dark?: boolean;
}

function Feature({ badge, title, description, cta, href, img, reverse, dark }: FeatureProps) {
  const bg = dark ? T.black : T.white;
  const fg = dark ? "#fff" : T.text;
  const fgMuted = dark ? "rgba(255,255,255,0.6)" : T.muted;

  return (
    <section style={{ backgroundColor: bg, padding: "80px 24px" }}>
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
        gap: 64,
      }}
      className={`flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""}`}
      >
        {/* Text */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {badge && (
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              padding: "4px 12px",
              backgroundColor: dark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.05)",
              borderRadius: T.pill,
              fontSize: 12,
              fontWeight: 600,
              color: dark ? "rgba(255,255,255,0.7)" : T.muted,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              marginBottom: 20,
            }}>
              {badge}
            </div>
          )}
          <h2 style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: fg,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: 16,
            color: fgMuted,
            lineHeight: 1.7,
            marginBottom: 28,
            maxWidth: 440,
          }}>
            {description}
          </p>
          <Link href={href} style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "10px 24px",
            backgroundColor: dark ? T.white : T.black,
            color: dark ? T.black : T.white,
            borderRadius: T.pill,
            fontSize: 14,
            fontWeight: 600,
            gap: 6,
          }}>
            {cta} →
          </Link>
        </div>

        {/* Image */}
        <div style={{
          flex: 1,
          minWidth: 0,
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: dark
            ? "0 2px 40px rgba(255,255,255,0.06)"
            : "0 2px 40px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
        }}>
          <img
            src={img}
            alt={title}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ─── Apps / Templates grid ───────────────────────────────────────────────── */
interface AppCardProps {
  icon: string;
  name: string;
  description: string;
  href: string;
}

function AppCard({ icon, name, description, href }: AppCardProps) {
  return (
    <Link href={href} style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      padding: 20,
      backgroundColor: T.white,
      borderRadius: T.sm,
      border: `1px solid ${T.border}`,
      gap: 12,
      transition: "box-shadow 0.2s, transform 0.2s",
      textDecoration: "none",
    }}
    className="hover:shadow-md hover:-translate-y-0.5"
    >
      <div style={{
        width: 52,
        height: 52,
        borderRadius: 14,
        overflow: "hidden",
        flexShrink: 0,
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}>
        <img src={icon} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div>
        <div style={{ fontWeight: 600, fontSize: 15, color: T.text, marginBottom: 4 }}>{name}</div>
        <div style={{ fontSize: 13, color: T.muted, lineHeight: 1.5 }}>{description}</div>
      </div>
    </Link>
  );
}

function AppsSection() {
  const items: AppCardProps[] = [
    {
      icon: "https://picsum.photos/seed/app-crm/104/104",
      name: "CRM Ventas B2B",
      description: "Gestiona tus leads y pipeline de ventas.",
      href: "/templates/crm-ventas-b2b",
    },
    {
      icon: "https://picsum.photos/seed/app-proj/104/104",
      name: "Gestión de Proyectos",
      description: "Organiza sprints, tareas y entregas.",
      href: "/templates/gestion-proyectos",
    },
    {
      icon: "https://picsum.photos/seed/app-fin/104/104",
      name: "Finanzas & Presupuesto",
      description: "Controla ingresos, gastos y proyecciones.",
      href: "/templates/finanzas",
    },
    {
      icon: "https://picsum.photos/seed/app-wiki/104/104",
      name: "Wiki Empresarial",
      description: "Base de conocimiento para tu equipo.",
      href: "/templates/wiki-empresa",
    },
    {
      icon: "https://picsum.photos/seed/app-hr/104/104",
      name: "Recursos Humanos",
      description: "Onboarding, evaluaciones y vacaciones.",
      href: "/templates/recursos-humanos",
    },
    {
      icon: "https://picsum.photos/seed/app-okr/104/104",
      name: "OKR & Metas",
      description: "Define y sigue tus objetivos clave.",
      href: "/templates/okr",
    },
  ];

  return (
    <section style={{ backgroundColor: T.bg, padding: "80px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 700,
            color: T.text,
            letterSpacing: "-0.02em",
            marginBottom: 12,
          }}>
            Plantillas por Nebbuler
          </h2>
          <p style={{ fontSize: 16, color: T.muted }}>
            Diseñadas con simplicidad en mente para que tu equipo adopte la herramienta en minutos.
          </p>
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
        }}>
          {items.map(item => (
            <AppCard key={item.name} {...item} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link href="/templates" style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "10px 28px",
            border: `1px solid ${T.border}`,
            borderRadius: T.pill,
            fontSize: 14,
            fontWeight: 500,
            color: T.text,
            backgroundColor: T.white,
            gap: 6,
          }}>
            Ver Todos →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────────────── */
function Footer() {
  const cols = [
    {
      title: "Páginas",
      links: [
        { label: "Apps", href: "/apps" },
        { label: "Templates", href: "/templates" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Templates",
      links: [
        { label: "CRM Ventas", href: "/templates/crm-ventas-b2b" },
        { label: "Gestión Proyectos", href: "/templates/gestion-proyectos" },
        { label: "Finanzas", href: "/templates/finanzas" },
        { label: "Ver Todos", href: "/templates" },
      ],
    },
    {
      title: "Monday.com",
      links: [
        { label: "Pipeline Ventas", href: "/monday/pipeline" },
        { label: "Sprints Agile", href: "/monday/sprints" },
        { label: "Ver Todos", href: "/monday/templates" },
      ],
    },
    {
      title: "Empresa",
      links: [
        { label: "Sobre Nosotros", href: "/sobre-nosotros" },
        { label: "Contacto", href: "/contacto" },
        { label: "Privacidad", href: "/privacidad" },
        { label: "Términos", href: "/terminos" },
      ],
    },
  ];

  return (
    <footer style={{ backgroundColor: T.black, color: T.white, padding: "64px 24px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Top row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr repeat(4, auto)",
          gap: 48,
          marginBottom: 64,
          alignItems: "start",
        }}
        className="grid-cols-1 md:grid-cols-5"
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 32, height: 32,
                borderRadius: 8,
                background: "linear-gradient(135deg, #fff 0%, #ccc 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ color: T.black, fontSize: 14, fontWeight: 700 }}>N</span>
              </div>
              <span style={{ fontSize: 15, fontWeight: 600, color: T.white }}>Nebbuler</span>
            </Link>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.6, maxWidth: 200 }}>
              La productividad encuentra el minimalismo.
            </p>
            {/* Social links */}
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {[
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Twitter/X", href: "https://twitter.com" },
                { label: "YouTube", href: "https://youtube.com" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.5)",
                    transition: "color 0.2s",
                  }}
                  className="hover:text-white"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: 16,
              }}>
                {col.title}
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} style={{ fontSize: 14, color: "rgba(255,255,255,0.65)" }}
                      className="hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: 24,
          fontSize: 13,
          color: "rgba(255,255,255,0.35)",
        }}>
          © 2024–2026 Nebbuler. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />

      <main>
        {/* Hero */}
        <Hero />

        {/* Feature 1 — Second Brain equivalent (dark bg) */}
        <Feature
          badge="Más Popular"
          title="Sistema Todo-en-Uno"
          description="Un sistema Notion completo para organizar tus tareas, proyectos, metas y notas. Todo en un solo lugar, listo para usar desde el primer día."
          cta="Ver Template"
          href="/templates/sistema-all-in-one"
          img="https://picsum.photos/seed/nebbuler-feat1/900/600"
          dark
        />

        {/* Feature 2 — Finance tracker (white bg) */}
        <Feature
          badge="Finanzas"
          title="Dashboard Financiero Empresarial"
          description="Centraliza tus finanzas en un solo lugar para tener una visión completa de tu empresa: ingresos, gastos, proyecciones y KPIs."
          cta="Ver Finance Tracker"
          href="/templates/finanzas"
          img="https://picsum.photos/seed/nebbuler-feat2/900/600"
          reverse
        />

        {/* Feature 3 — Monday section (dark bg) */}
        <Feature
          badge="Monday.com"
          title="Gestiona tus proyectos con Monday"
          description="Templates profesionales para Monday.com: pipeline de ventas, gestión de sprints, onboarding de clientes y más."
          cta="Ver Templates Monday"
          href="/monday/templates"
          img="https://picsum.photos/seed/nebbuler-feat3/900/600"
          dark
        />

        {/* Feature 4 — Consulting (white bg) */}
        <Feature
          badge="Consultoría"
          title="Implementa con expertos"
          description="Te ayudamos a implementar Notion o Monday.com en tu empresa de forma personalizada. Resultados garantizados en 30 días."
          cta="Conocer más"
          href="/consultoria"
          img="https://picsum.photos/seed/nebbuler-feat4/900/600"
          reverse
        />

        {/* Templates grid */}
        <AppsSection />
      </main>

      <Footer />
    </>
  );
}
