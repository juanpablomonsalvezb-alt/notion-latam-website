import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import { catalog, bundles, Product } from "@/lib/catalog";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

/* ── i18n copy ─────────────────────────────────────────────────────────────── */
const copy = {
  es: {
    nav: { catalog: "Plantillas", about: "Sobre Nebbuler" },
    title: "Catálogo",
    subtitle: "Tres niveles de oficio — Core, System, Atelier — en cinco audiencias.",
    levelDesc: {
      Core: "Sistema esencial. Lo necesario, sin nada que sobre. Para quienes quieren un punto de partida limpio.",
      System: "Sistema completo. Bases conectadas, vistas pensadas, onboarding editorial. El nivel de referencia del catálogo.",
      Atelier: "Método más sistema. Va más allá de lo que Notion puede ser solo. Para trabajo serio con tiempo y atención.",
    },
    buy: "Comprar",
    bundlesTitle: "Bundles",
    bundlesSubtitle: "Todos los productos de una audiencia en un paquete. Mismo precio día uno y mes doce.",
    bundleIncludes: {
      Personal: "Core Personal + System Personal + Atelier Personal",
      Freelance: "Core Freelance + System Freelance + Atelier Freelance",
      Creator: "System Creator + Atelier Creator",
      Student: "Core Student + System Student",
    },
    levelLabel: "Nivel",
  },
  en: {
    nav: { catalog: "Templates", about: "About" },
    title: "Catalog",
    subtitle: "Three levels of craft — Core, System, Atelier — across five audiences.",
    levelDesc: {
      Core: "An essential system. What's needed, nothing more. For those who want a clean starting point.",
      System: "A complete system. Connected databases, considered views, editorial onboarding. The reference level of the catalog.",
      Atelier: "Method plus system. Goes beyond what Notion alone can be. For serious work with time and attention.",
    },
    buy: "Buy",
    bundlesTitle: "Bundles",
    bundlesSubtitle: "All products for one audience in a single package. Same price day one and month twelve.",
    bundleIncludes: {
      Personal: "Core Personal + System Personal + Atelier Personal",
      Freelance: "Core Freelance + System Freelance + Atelier Freelance",
      Creator: "System Creator + Atelier Creator",
      Student: "Core Student + System Student",
    },
    levelLabel: "Level",
  },
  fr: {
    nav: { catalog: "Modèles", about: "À propos" },
    title: "Catalogue",
    subtitle: "Trois niveaux de métier — Core, System, Atelier — pour cinq publics.",
    levelDesc: {
      Core: "Un système essentiel. Ce qu'il faut, rien de plus. Pour ceux qui veulent un point de départ clair.",
      System: "Un système complet. Bases connectées, vues pensées, onboarding éditorial. Le niveau de référence du catalogue.",
      Atelier: "Méthode et système. Va au-delà de ce que Notion peut être seul. Pour un travail sérieux avec temps et attention.",
    },
    buy: "Acheter",
    bundlesTitle: "Bundles",
    bundlesSubtitle: "Tous les produits d'un public en un seul package. Même prix le jour un et le mois douze.",
    bundleIncludes: {
      Personal: "Core Personal + System Personal + Atelier Personal",
      Freelance: "Core Freelance + System Freelance + Atelier Freelance",
      Creator: "System Creator + Atelier Creator",
      Student: "Core Student + System Student",
    },
    levelLabel: "Niveau",
  },
} as const;

type Locale = keyof typeof copy;

function getSubtitle(p: Product, l: Locale): string {
  if (l === "es") return p.subtitleES;
  if (l === "fr") return p.subtitleFR;
  return p.subtitleEN;
}

const levelColor: Record<string, string> = {
  Core:    "#6B7F3F",
  System:  "#1C2B4A",
  Atelier: "#6B1F1F",
};

const levels = ["Core", "System", "Atelier"] as const;

const BASE = "https://nebbuler.com";

const templatesSeo = {
  en: {
    title: "Notion templates by Nebbuler — Core, System, Atelier",
    description: "Browse Nebbuler's full catalog of Notion templates. Three levels, five audiences — Personal, Freelance, Student, Creator. Premium craft, fixed price.",
    ogTitle: "The Nebbuler catalog — Notion templates in three levels",
    ogDescription: "Core ($29–39), System ($89), Atelier ($179). Each level designed for a different depth of need.",
  },
  es: {
    title: "Catálogo de plantillas Notion — Nebbuler",
    description: "Tres niveles de plantillas Notion: Core ($29-39), System ($89) y Atelier ($179). Para uso personal, freelance, estudiantes y creadores de contenido.",
    ogTitle: "El catálogo Nebbuler — Plantillas Notion en tres niveles",
    ogDescription: "Core ($29-39), System ($89), Atelier ($179). Cada nivel responde a una profundidad distinta de necesidad.",
  },
  fr: {
    title: "Catalogue Notion Nebbuler — Core, System, Atelier",
    description: "Découvrez le catalogue complet Nebbuler. Templates Notion en trois niveaux pour la vie personnelle, le freelance, les étudiants et les créateurs.",
    ogTitle: "Le catalogue Nebbuler — Templates Notion en trois niveaux",
    ogDescription: "Core (29–39 $), System (89 $), Atelier (179 $). Chaque niveau correspond à une profondeur d'usage différente.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = (locale as keyof typeof templatesSeo) in templatesSeo ? (locale as keyof typeof templatesSeo) : "en";
  const s = templatesSeo[l];
  const ogImg = `${BASE}/og?title=${encodeURIComponent(s.ogTitle)}&subtitle=${encodeURIComponent(s.ogDescription)}`;
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `${BASE}/${l}/templates` },
    openGraph: { title: s.ogTitle, description: s.ogDescription, url: `${BASE}/${l}/templates`, images: [{ url: ogImg, width: 1200, height: 630 }] },
    twitter: { title: s.ogTitle, description: s.ogDescription, images: [ogImg] },
  };
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default async function TemplatesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = (locale as Locale) in copy ? (locale as Locale) : "en";
  const c = copy[l];

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE}/${l}` },
          { "@type": "ListItem", "position": 2, "name": c.title, "item": `${BASE}/${l}/templates` },
        ],
      }} />
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": `${BASE}/${l}/templates#catalog`,
        "name": "Nebbuler Notion Templates",
        "url": `${BASE}/${l}/templates`,
        "numberOfItems": catalog.length,
        "itemListElement": catalog.map((product, i) => ({
          "@type": "ListItem",
          "position": i + 1,
          "name": product.name,
          "url": `${BASE}/${l}/templates/${product.slug}`,
          "item": {
            "@type": "Product",
            "name": product.name,
            "brand": { "@type": "Brand", "name": "Nebbuler" },
            "offers": {
              "@type": "Offer",
              "price": product.price.toFixed(2),
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": product.buyUrl,
            },
          },
        })),
      }} />
      <Navbar catalogLabel={c.nav.catalog} aboutLabel={c.nav.about} />

      <main>
        {/* ── Header ──────────────────────────────────────────────────── */}
        <section
          style={{
            padding: "clamp(60px,10vw,104px) clamp(1.25rem,5vw,4rem) clamp(40px,6vw,64px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(2rem,5vw,3.25rem)",
                color: "var(--fg-primary)",
                letterSpacing: "-0.025em",
                fontVariationSettings: "'opsz' 144, 'SOFT' 50",
                lineHeight: 1.08,
                marginBottom: 16,
                textWrap: "balance",
              }}
            >
              {c.title}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(15px,2vw,17px)",
                color: "var(--fg-secondary)",
                lineHeight: 1.6,
              }}
            >
              {c.subtitle}
            </p>
          </div>
        </section>

        {/* ── Levels ──────────────────────────────────────────────────── */}
        {levels.map((level) => {
          const products = catalog.filter((p) => p.level === level);
          const color = levelColor[level];
          const desc = c.levelDesc[level];

          return (
            <section
              key={level}
              style={{
                padding: "clamp(56px,8vw,88px) clamp(1.25rem,5vw,4rem)",
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                {/* Level header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: 20,
                    marginBottom: 10,
                    flexWrap: "wrap",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      fontSize: "clamp(1.5rem,3vw,2rem)",
                      color: "var(--fg-primary)",
                      letterSpacing: "-0.02em",
                      fontVariationSettings: "'opsz' 72, 'SOFT' 50",
                      lineHeight: 1,
                    }}
                  >
                    {level}
                  </h2>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 11,
                      fontWeight: 500,
                      color,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    {products.length}{" "}
                    {l === "fr" ? "produits" : l === "es" ? "productos" : "products"}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    color: "var(--fg-secondary)",
                    lineHeight: 1.55,
                    marginBottom: "clamp(32px,5vw,48px)",
                    maxWidth: 520,
                  }}
                >
                  {desc}
                </p>

                {/* Products grid */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${products.length <= 3 ? products.length : 2}, 1fr)`,
                    gap: "clamp(20px,3vw,36px)",
                  }}
                  className={
                    products.length === 4
                      ? "grid-cols-1 sm:grid-cols-2"
                      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                  }
                >
                  {products.map((product) => (
                    <ProductCard
                      key={product.slug}
                      product={product}
                      subtitleText={getSubtitle(product, l)}
                      levelLabel={c.levelLabel}
                      buyLabel={c.buy}
                      color={color}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* ── Bundles ─────────────────────────────────────────────────── */}
        <section
          style={{
            padding: "clamp(56px,8vw,88px) clamp(1.25rem,5vw,4rem)",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.5rem,3vw,2rem)",
                color: "var(--fg-primary)",
                letterSpacing: "-0.02em",
                fontVariationSettings: "'opsz' 72, 'SOFT' 50",
                lineHeight: 1.1,
                marginBottom: 10,
              }}
            >
              {c.bundlesTitle}
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "var(--fg-secondary)",
                lineHeight: 1.55,
                marginBottom: "clamp(32px,5vw,48px)",
              }}
            >
              {c.bundlesSubtitle}
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "clamp(12px,2vw,20px)",
              }}
              className="grid-cols-1 sm:grid-cols-2"
            >
              {bundles.map((bundle) => {
                const includes =
                  c.bundleIncludes[bundle.audience as keyof typeof c.bundleIncludes];
                return (
                  <div
                    key={bundle.slug}
                    style={{
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      padding: "clamp(20px,3vw,28px)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 8,
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 500,
                        fontSize: "clamp(16px,2vw,19px)",
                        color: "var(--fg-primary)",
                        letterSpacing: "-0.02em",
                        fontVariationSettings: "'opsz' 72, 'SOFT' 50",
                        lineHeight: 1.15,
                      }}
                    >
                      {bundle.name}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 13,
                        color: "var(--fg-secondary)",
                        lineHeight: 1.5,
                      }}
                    >
                      {includes}
                    </p>
                    <div style={{ marginTop: 8 }}>
                      <a
                        href={bundle.buyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          padding: "7px 16px",
                          background: "var(--fg-primary)",
                          color: "var(--bg-elevated)",
                          borderRadius: 100,
                          fontSize: 12,
                          fontFamily: "var(--font-body)",
                          fontWeight: 500,
                        }}
                      >
                        {c.buy}
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}

/* ── Product card ────────────────────────────────────────────────────────── */
function ProductCard({
  product,
  subtitleText,
  levelLabel,
  buyLabel,
  color,
}: {
  product: Product;
  subtitleText: string;
  levelLabel: string;
  buyLabel: string;
  color: string;
}) {
  return (
    <article style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      <div style={{ marginBottom: 18 }}>
        <ScreenshotCarousel
          slug={product.slug}
          count={product.screenshots}
          alt={product.name}
          autoPlay
          interval={4200}
        />
      </div>

      <span
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 10,
          fontWeight: 500,
          color,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: 6,
          display: "block",
        }}
      >
        {levelLabel}: {product.level}
      </span>

      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-between",
          gap: 10,
          marginBottom: 8,
        }}
      >
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(17px,2.2vw,20px)",
            color: "var(--fg-primary)",
            letterSpacing: "-0.02em",
            fontVariationSettings: "'opsz' 72, 'SOFT' 50",
            lineHeight: 1.1,
          }}
        >
          {product.name}
        </h3>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(15px,1.8vw,17px)",
            color: "var(--fg-primary)",
            fontVariantNumeric: "tabular-nums",
            flexShrink: 0,
          }}
        >
          ${product.price}
        </span>
      </div>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: 13,
          color: "var(--fg-secondary)",
          lineHeight: 1.55,
          marginBottom: 14,
        }}
      >
        {subtitleText}
      </p>

      <div>
        <a
          href={product.buyUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "7px 16px",
            background: "var(--fg-primary)",
            color: "var(--bg-elevated)",
            borderRadius: 100,
            fontSize: 12,
            fontFamily: "var(--font-body)",
            fontWeight: 500,
          }}
        >
          {buyLabel}
        </a>
      </div>
    </article>
  );
}
