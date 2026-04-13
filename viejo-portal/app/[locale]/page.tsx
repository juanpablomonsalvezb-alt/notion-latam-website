import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import { catalog, bundles, Product } from "@/lib/catalog";
import { JsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ── Copy by locale ────────────────────────────────────────────────────────── */
const copy = {
  es: {
    catalogLabel: "Plantillas",
    aboutLabel: "Sobre Nebbuler",
    headline: "Sistemas de trabajo en Notion, diseñados como objetos.",
    byline: "Estudio de diseño · Plantillas para Notion · ES · EN · FR",
    manifesto: [
      "Una plantilla de Notion puede ser dos cosas: un archivo que se compra, se duplica y se olvida — o un objeto que se usa durante años porque alguien pensó en cada decisión. El estudio hace lo segundo.",
      "Nebbuler diseña sistemas de trabajo en Notion con la misma atención con la que un estudio de arquitectura hace un plano, o un editor revisa un libro antes de imprimirlo. Menos como software, más como un mueble bien hecho.",
      "El catálogo se construye alrededor de una arquitectura simple: tres niveles de oficio — Core, System, Atelier — aplicados a cinco audiencias. Cada producto existe en un lugar definido, no como un archivo más en el catálogo.",
    ],
    catalogHeading: "Catálogo",
    levelDesc: {
      Core: "Sistema esencial. Lo necesario, sin nada que sobre.",
      System: "Sistema completo. Bases conectadas, vistas pensadas, onboarding editorial.",
      Atelier: "Método más sistema. Va más allá de lo que Notion puede ser solo.",
    },
    bundlesTitle: "Bundles",
    bundlesSubtitle: "Todos los productos de una audiencia en un paquete.",
    bundleIncludes: {
      Personal: "Core Personal + System Personal + Atelier Personal",
      Freelance: "Core Freelance + System Freelance + Atelier Freelance",
      Creator: "System Creator + Atelier Creator",
      Student: "Core Student + System Student",
    },
    studioNoteTitle: "Una nota desde el estudio",
    studioNote:
      "Nebbuler publica pocas cosas, y cuando las publica, las escribe, las piensa y las prueba hasta que se sienten terminadas. La mayoría de las plantillas de Notion del mercado fueron hechas en un fin de semana. El estudio tarda meses. Si encontrás algo útil acá, nos alegra. Si no, también está bien — hay muchas maneras de trabajar, y la nuestra no tiene que ser la tuya.",
    journalLink: "El estudio publica notas sobre su proceso en el →",
    journalLabel: "journal",
    levelLabel: "Nivel",
    buy: "Comprar",
    priceUnit: "USD",
  },
  en: {
    catalogLabel: "Templates",
    aboutLabel: "About",
    headline: "Notion work systems, designed as objects.",
    byline: "Design studio · Notion templates · ES · EN · FR",
    manifesto: [
      "Notion templates can be two things: a file you buy, duplicate once, and forget — or an object you use for years because someone thought about every decision. The studio makes the second kind.",
      "Nebbuler designs work systems in Notion with the kind of attention an architecture studio brings to a floor plan, or an editor brings to a book before it goes to print. Less like software. More like a well-made piece of furniture.",
      "The catalog is built around a simple architecture: three levels of craft — Core, System, Atelier — applied to five audiences. Each product exists in a defined place, not as one more file in the catalog.",
    ],
    catalogHeading: "Catalog",
    levelDesc: {
      Core: "An essential system. What's needed, nothing more.",
      System: "A complete system. Connected databases, considered views, editorial onboarding.",
      Atelier: "Method plus system. Goes beyond what Notion alone can be.",
    },
    bundlesTitle: "Bundles",
    bundlesSubtitle: "All products for one audience in a single package.",
    bundleIncludes: {
      Personal: "Core Personal + System Personal + Atelier Personal",
      Freelance: "Core Freelance + System Freelance + Atelier Freelance",
      Creator: "System Creator + Atelier Creator",
      Student: "Core Student + System Student",
    },
    studioNoteTitle: "A note from the studio",
    studioNote:
      "Nebbuler publishes few things, and when it does, they are written, considered, and tested until they feel finished. Most Notion templates on the market were made in a weekend. The studio takes months. If you find something useful here, we're glad. If not, that's fine — there are many ways to work, and ours doesn't have to be yours.",
    journalLink: "The studio publishes notes about its process in the →",
    journalLabel: "journal",
    levelLabel: "Level",
    buy: "Buy",
    priceUnit: "USD",
  },
  fr: {
    catalogLabel: "Modèles",
    aboutLabel: "À propos",
    headline: "Des systèmes de travail Notion, conçus comme des objets.",
    byline: "Studio de design · Modèles Notion · ES · EN · FR",
    manifesto: [
      "Un modèle Notion peut être deux choses : un fichier qu'on achète, qu'on duplique et qu'on oublie — ou un objet qu'on utilise pendant des années parce que quelqu'un a pensé à chaque décision. Le studio fait la seconde.",
      "Nebbuler conçoit des systèmes de travail dans Notion avec l'attention qu'un cabinet d'architecture accorde à un plan, ou qu'un éditeur accorde à un livre avant l'impression. Moins comme un logiciel. Plutôt comme un meuble bien fait.",
      "Le catalogue s'organise autour d'une architecture simple : trois niveaux de métier — Core, System, Atelier — appliqués à cinq publics. Chaque produit existe à une place définie, pas comme un fichier de plus dans le catalogue.",
    ],
    catalogHeading: "Catalogue",
    levelDesc: {
      Core: "Un système essentiel. Ce qu'il faut, rien de plus.",
      System: "Un système complet. Bases connectées, vues pensées, onboarding éditorial.",
      Atelier: "Méthode et système. Va au-delà de ce que Notion peut être seul.",
    },
    bundlesTitle: "Bundles",
    bundlesSubtitle: "Tous les produits d'un public en un seul package.",
    bundleIncludes: {
      Personal: "Core Personal + System Personal + Atelier Personal",
      Freelance: "Core Freelance + System Freelance + Atelier Freelance",
      Creator: "System Creator + Atelier Creator",
      Student: "Core Student + System Student",
    },
    studioNoteTitle: "Une note du studio",
    studioNote:
      "Nebbuler publie peu de choses, et quand il le fait, elles sont écrites, réfléchies et testées jusqu'à sembler finies. La plupart des modèles Notion sur le marché ont été faits en un week-end. Le studio prend des mois. Si vous trouvez quelque chose d'utile ici, nous en sommes heureux. Sinon, ce n'est pas grave — il existe beaucoup de manières de travailler, et la nôtre n'a pas à être la vôtre.",
    journalLink: "Le studio publie des notes sur son processus dans le →",
    journalLabel: "journal",
    levelLabel: "Niveau",
    buy: "Acheter",
    priceUnit: "USD",
  },
} as const;

type Locale = keyof typeof copy;

/* ── Product subtitle by locale ─────────────────────────────────────────────── */
function subtitle(p: Product, locale: Locale): string {
  if (locale === "es") return p.subtitleES;
  if (locale === "fr") return p.subtitleFR;
  return p.subtitleEN;
}

/* ── Price formatter ─────────────────────────────────────────────────────────── */
function formatPrice(price: number, locale: string): string {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

const BASE = "https://nebbuler.com";

const pageSeo = {
  en: {
    title: "Nebbuler — Notion work systems, made with care",
    description: "Core, System, and Atelier. Three levels of Notion templates for personal use, freelance work, students, and creators. Built slowly, on purpose.",
    ogTitle: "Nebbuler — Notion work systems built with real craft",
    ogDescription: "A design studio. Three levels of Notion templates — Core, System, Atelier — for personal, freelance, student, and creator audiences.",
  },
  es: {
    title: "Nebbuler — Sistemas Notion para trabajar mejor",
    description: "Tres niveles: Core, System y Atelier. Plantillas Notion para productividad personal, freelance, estudiantes y creadores. Hechas con oficio real.",
    ogTitle: "Nebbuler — Sistemas Notion hechos con oficio",
    ogDescription: "Un estudio de diseño. Tres niveles de plantillas Notion para productividad personal, freelance, estudiantes y creadores.",
  },
  fr: {
    title: "Nebbuler — Systèmes Notion conçus avec soin",
    description: "Core, System et Atelier. Trois niveaux de templates Notion pour la vie personnelle, le freelance, les étudiants et les créateurs. Faits lentement.",
    ogTitle: "Nebbuler — Templates Notion faits avec métier",
    ogDescription: "Un studio de design. Trois niveaux de templates Notion pour la vie personnelle, le freelance, les étudiants et les créateurs.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = (locale as keyof typeof pageSeo) in pageSeo ? (locale as keyof typeof pageSeo) : "en";
  const s = pageSeo[l];
  const ogImg = `${BASE}/og?title=${encodeURIComponent(s.ogTitle)}&subtitle=${encodeURIComponent(s.ogDescription)}`;
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `${BASE}/${l}` },
    openGraph: { title: s.ogTitle, description: s.ogDescription, url: `${BASE}/${l}`, images: [{ url: ogImg, width: 1200, height: 630 }] },
    twitter: { title: s.ogTitle, description: s.ogDescription, images: [ogImg] },
  };
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l = (locale as Locale) in copy ? (locale as Locale) : "en";
  const c = copy[l];
  const levels = ["Core", "System", "Atelier"] as const;
  const levelColor: Record<string, string> = {
    Core:    "#6B7F3F",
    System:  "#1C2B4A",
    Atelier: "#6B1F1F",
  };

  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${BASE}/#website`,
        "name": "Nebbuler",
        "url": BASE,
        "publisher": { "@id": `${BASE}/#organization` },
        "inLanguage": ["en", "es", "fr"],
      }} />
      <Navbar catalogLabel={c.catalogLabel} aboutLabel={c.aboutLabel} />

      <main>
        {/* ── SECTION 1: Editorial opening ──────────────────────────────── */}
        <section
          style={{
            padding:
              "clamp(80px,12vw,140px) clamp(1.25rem,5vw,4rem) clamp(64px,10vw,112px)",
          }}
        >
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            {/* Logo icon — inlined so Fraunces renders correctly */}
            <div style={{ marginBottom: "clamp(28px,4vw,40px)" }}>
              <NebbulerIcon size={56} />
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(2.25rem,5.5vw,3.75rem)",
                color: "var(--fg-primary)",
                letterSpacing: "-0.025em",
                lineHeight: 1.08,
                fontVariationSettings: "'opsz' 144, 'SOFT' 50",
                textWrap: "balance",
                marginBottom: "clamp(20px,3vw,28px)",
              }}
            >
              {c.headline}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 13,
                color: "var(--fg-secondary)",
                letterSpacing: "0.01em",
                lineHeight: 1.5,
              }}
            >
              {c.byline}
            </p>
          </div>
        </section>

        {/* ── SECTION 2: Manifesto excerpt ──────────────────────────────── */}
        <section
          style={{
            padding:
              "0 clamp(1.25rem,5vw,4rem) clamp(72px,10vw,104px)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              maxWidth: 600,
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
          >
            {c.manifesto.map((para, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "clamp(15px,2.2vw,17px)",
                  color: i === 0 ? "var(--fg-primary)" : "var(--fg-secondary)",
                  lineHeight: 1.65,
                  fontWeight: i === 0 ? 400 : 400,
                }}
              >
                {para}
              </p>
            ))}
          </div>
        </section>

        {/* ── SECTION 3: Full catalog by level ──────────────────────────── */}
        {levels.map((level) => {
          const products = catalog.filter((p) => p.level === level);
          const color = levelColor[level];
          const desc = c.levelDesc[level];
          return (
            <section
              key={level}
              style={{
                padding: "clamp(56px,8vw,88px) clamp(1.25rem,5vw,4rem)",
                borderTop: "1px solid var(--border)",
              }}
            >
              <div style={{ maxWidth: 1100, margin: "0 auto" }}>
                {/* Level header */}
                <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8, flexWrap: "wrap" }}>
                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 500,
                      fontSize: "clamp(1.4rem,2.8vw,1.9rem)",
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
                      fontSize: 10,
                      fontWeight: 500,
                      color,
                      letterSpacing: "0.1em",
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
                    marginBottom: "clamp(28px,4vw,40px)",
                    maxWidth: 480,
                  }}
                >
                  {desc}
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: `repeat(${Math.min(products.length, 3)}, 1fr)`,
                    gap: "clamp(20px,3vw,36px)",
                  }}
                  className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {products.map((product) => (
                    <ProductCard
                      key={product.slug}
                      product={product}
                      locale={l}
                      subtitleText={subtitle(product, l)}
                      levelLabel={c.levelLabel}
                      buyLabel={c.buy}
                      price={formatPrice(product.price, locale)}
                      color={color}
                    />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        {/* ── SECTION 4: Bundles ────────────────────────────────────────── */}
        <section
          style={{
            padding: "clamp(56px,8vw,88px) clamp(1.25rem,5vw,4rem)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(1.4rem,2.8vw,1.9rem)",
                color: "var(--fg-primary)",
                letterSpacing: "-0.02em",
                fontVariationSettings: "'opsz' 72, 'SOFT' 50",
                lineHeight: 1,
                marginBottom: 8,
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
                marginBottom: "clamp(28px,4vw,40px)",
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
                const includes = c.bundleIncludes[bundle.audience as keyof typeof c.bundleIncludes];
                return (
                  <div
                    key={bundle.slug}
                    style={{
                      background: "var(--bg-elevated)",
                      border: "1px solid var(--border)",
                      borderRadius: 10,
                      padding: "clamp(18px,2.5vw,24px)",
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
                    <div style={{ marginTop: 4 }}>
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

        {/* ── SECTION 4: Studio note ────────────────────────────────────── */}
        <section
          style={{
            padding:
              "clamp(56px,8vw,88px) clamp(1.25rem,5vw,4rem)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(13px,2vw,15px)",
                color: "var(--fg-secondary)",
                letterSpacing: "-0.005em",
                fontVariationSettings: "'opsz' 72, 'SOFT' 50",
                marginBottom: 18,
                fontStyle: "italic",
              }}
            >
              {c.studioNoteTitle}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(14px,2vw,16px)",
                color: "var(--fg-secondary)",
                lineHeight: 1.68,
                marginBottom: 20,
              }}
            >
              {c.studioNote}
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "var(--fg-secondary)",
                lineHeight: 1.5,
              }}
            >
              {c.journalLink}{" "}
              <Link
                href="/journal"
                style={{
                  color: "var(--fg-primary)",
                  borderBottom: "1px solid var(--border)",
                  paddingBottom: 1,
                }}
              >
                {c.journalLabel}
              </Link>
              .
            </p>
          </div>
        </section>
      </main>

      <Footer locale={locale} />
    </>
  );
}

/* ── Product Card ──────────────────────────────────────────────────────────── */
function ProductCard({
  product,
  subtitleText,
  levelLabel,
  buyLabel,
  price,
  locale,
  color,
}: {
  product: Product;
  subtitleText: string;
  levelLabel: string;
  buyLabel: string;
  price: string;
  locale: Locale;
  color: string;
}) {

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 0,
      }}
    >
      {/* Screenshot carousel */}
      <div style={{ marginBottom: 20 }}>
        <ScreenshotCarousel
          slug={product.slug}
          count={product.screenshots}
          alt={product.name}
          autoPlay
          interval={4000}
        />
      </div>

      {/* Card meta */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {/* Level badge */}
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 10,
            fontWeight: 500,
            color,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {levelLabel}: {product.level}
        </span>

        {/* Name + price row */}
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            gap: 12,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(18px,2.5vw,22px)",
              color: "var(--fg-primary)",
              letterSpacing: "-0.02em",
              fontVariationSettings: "'opsz' 72, 'SOFT' 50",
              lineHeight: 1.1,
            }}
          >
            {product.name}
          </h2>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "clamp(16px,2vw,18px)",
              color: "var(--fg-primary)",
              fontVariantNumeric: "tabular-nums",
              flexShrink: 0,
            }}
          >
            {price}
          </span>
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 14,
            color: "var(--fg-secondary)",
            lineHeight: 1.55,
          }}
        >
          {subtitleText}
        </p>

        {/* CTA */}
        <div style={{ marginTop: 4 }}>
          <a
            href={product.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "8px 18px",
              background: "var(--fg-primary)",
              color: "var(--bg-elevated)",
              borderRadius: 100,
              fontSize: 13,
              fontFamily: "var(--font-body)",
              fontWeight: 500,
              letterSpacing: "-0.005em",
            }}
          >
            {buyLabel}
          </a>
        </div>
      </div>
    </article>
  );
}

/* ── Nebbuler isotipo — Sello v2 inlined ───────────────────────────────────── */
function NebbulerIcon({ size = 56 }: { size?: number }) {
  const id = `sello-clip-${size}`;
  return (
    <svg
      viewBox="0 0 500 500"
      width={size}
      height={size}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="nebbuler"
    >
      <defs>
        <clipPath id={id}>
          <rect x="40" y="40" width="420" height="420" rx="64" />
        </clipPath>
      </defs>
      {/* Background */}
      <rect x="40" y="40" width="420" height="420" rx="64" fill="var(--bg-primary)" />
      {/* n — oversized and clipped */}
      <text
        x="250" y="400"
        fontFamily="'Fraunces', serif"
        fontWeight="500"
        fontSize="595"
        letterSpacing="-0.025em"
        textAnchor="middle"
        fill="var(--fg-primary)"
        clipPath={`url(#${id})`}
        style={{ fontVariationSettings: "'opsz' 144, 'SOFT' 50" }}
      >
        n
      </text>
      {/* Stroke border (on top) */}
      <rect x="40" y="40" width="420" height="420" rx="64"
        stroke="var(--fg-primary)" strokeWidth="12" fill="none" />
    </svg>
  );
}
