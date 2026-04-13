import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/app/[locale]/LocaleSwitcher";

interface FooterProps {
  locale: string;
}

export function Footer({ locale }: FooterProps) {
  const col1 = {
    title: locale === "fr" ? "Catalogue" : locale === "es" ? "Catálogo" : "Catalog",
    links: [
      [
        locale === "fr" ? "Modèles" : locale === "es" ? "Plantillas" : "Templates",
        "/templates",
      ],
      [
        locale === "fr" ? "Nouveautés" : locale === "es" ? "Novedades" : "New",
        "/templates",
      ],
    ] as [string, string][],
  };

  const col2 = {
    title: locale === "fr" ? "Estudio" : locale === "es" ? "Estudio" : "Studio",
    links: [
      [
        locale === "fr" ? "À propos" : locale === "es" ? "Sobre Nebbuler" : "About",
        "/about",
      ],
      ["Journal", "/journal"],
    ] as [string, string][],
  };

  const col3 = {
    title: locale === "fr" ? "Suivre" : locale === "es" ? "Seguir" : "Follow",
    links: [["X @nebbuler", "https://x.com/nebbuler"]] as [string, string][],
  };

  const copyrightLine =
    locale === "fr"
      ? "© 2026 Nebbuler · Estudio de diseño"
      : locale === "es"
      ? "© 2026 Nebbuler · Estudio de diseño"
      : "© 2026 Nebbuler · Design studio";

  const emailLabel =
    locale === "fr" ? "Nous écrire" : locale === "es" ? "Escríbenos" : "Write to us";

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--border)",
        padding: "64px clamp(1.25rem,5vw,4rem) 40px",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "clamp(2rem,5vw,4rem)",
            marginBottom: 56,
            alignItems: "start",
          }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {/* Brand column */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: 18,
                color: "var(--fg-primary)",
                letterSpacing: "-0.025em",
                fontVariationSettings: "'opsz' 36, 'SOFT' 50",
                lineHeight: 1,
                display: "inline-block",
                marginBottom: 12,
              }}
            >
              nebbuler
            </Link>
            <p
              style={{
                fontSize: 13,
                color: "var(--fg-secondary)",
                lineHeight: 1.6,
                maxWidth: 200,
                marginBottom: 20,
              }}
            >
              {locale === "fr"
                ? "Estudio de diseño · Modèles Notion · ES · EN · FR"
                : locale === "es"
                ? "Estudio de diseño · Plantillas para Notion · ES · EN · FR"
                : "Design studio · Notion templates · ES · EN · FR"}
            </p>
            <LocaleSwitcher />
          </div>

          {/* Catalog */}
          <FooterCol title={col1.title} links={col1.links} />
          {/* Studio */}
          <FooterCol title={col2.title} links={col2.links} />
          {/* Follow */}
          <FooterCol title={col3.title} links={col3.links} />
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <p style={{ fontSize: 12, color: "var(--fg-secondary)" }}>
            {copyrightLine}
          </p>
          <a
            href="mailto:hola@nebbuler.com"
            style={{
              fontSize: 12,
              color: "var(--fg-secondary)",
              fontFamily: "var(--font-body)",
            }}
          >
            {emailLabel}: hola@nebbuler.com
          </a>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: [string, string][];
}) {
  return (
    <div>
      <div
        style={{
          fontSize: 11,
          fontWeight: 500,
          color: "var(--fg-secondary)",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 14,
          fontFamily: "var(--font-body)",
        }}
      >
        {title}
      </div>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        {links.map(([label, href]) => (
          <li key={href}>
            <Link
              href={href as never}
              style={{
                fontSize: 13,
                color: "var(--fg-secondary)",
                fontFamily: "var(--font-body)",
                lineHeight: 1.4,
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
