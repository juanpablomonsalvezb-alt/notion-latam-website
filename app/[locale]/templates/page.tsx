import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import { catalog, Product } from "@/lib/catalog";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

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
    widgetTitle: "Widget Pack",
    widgetSubtitle: "8 widgets embebibles para Notion — reloj, pomodoro, progreso, cuenta regresiva, cita semanal, foco, reflexión y revisión semanal.",
    widgetPrice: "$19",
    bundlesTitle: "Bundles",
    bundlesSubtitle: "Productos de paquete. Mismo precio día uno y mes doce.",
    bundles: [
      { name: "Core Bundle", includes: "Core Personal + Core Freelance + Core Student", price: "$89", note: "Los tres Core en un paquete." },
      { name: "System Bundle", includes: "System Personal + Freelance + Student + Creator", price: "$289", note: "Los cuatro System en un paquete." },
      { name: "Atelier Bundle", includes: "Atelier Personal + Freelance + Creator", price: "$449", note: "Los tres Atelier en un paquete." },
      { name: "Colección completa", includes: "Los 10 productos del catálogo", price: "$599", note: "Todo el catálogo." },
    ],
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
    widgetTitle: "Widget Pack",
    widgetSubtitle: "8 embeddable widgets for Notion — clock, pomodoro, progress, countdown, weekly quote, focus mode, daily reflection, and weekly review.",
    widgetPrice: "$19",
    bundlesTitle: "Bundles",
    bundlesSubtitle: "Bundle products. Same price day one and month twelve.",
    bundles: [
      { name: "Core Bundle", includes: "Core Personal + Core Freelance + Core Student", price: "$89", note: "All three Core products." },
      { name: "System Bundle", includes: "System Personal + Freelance + Student + Creator", price: "$289", note: "All four System products." },
      { name: "Atelier Bundle", includes: "Atelier Personal + Freelance + Creator", price: "$449", note: "All three Atelier products." },
      { name: "Complete Collection", includes: "All 10 catalog products", price: "$599", note: "The full catalog." },
    ],
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
    widgetTitle: "Widget Pack",
    widgetSubtitle: "8 widgets intégrables pour Notion — horloge, pomodoro, progression, compte à rebours, citation hebdomadaire, mode focus, réflexion quotidienne et revue hebdomadaire.",
    widgetPrice: "19 $",
    bundlesTitle: "Bundles",
    bundlesSubtitle: "Produits en bundle. Même prix le jour un et le mois douze.",
    bundles: [
      { name: "Core Bundle", includes: "Core Personal + Core Freelance + Core Student", price: "89 $", note: "Les trois produits Core." },
      { name: "System Bundle", includes: "System Personal + Freelance + Student + Creator", price: "289 $", note: "Les quatre produits System." },
      { name: "Atelier Bundle", includes: "Atelier Personal + Freelance + Creator", price: "449 $", note: "Les trois produits Atelier." },
      { name: "Collection complète", includes: "Les 10 produits du catalogue", price: "599 $", note: "Le catalogue complet." },
    ],
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
                padding:
                  "clamp(56px,8vw,88px) clamp(1.25rem,5vw,4rem)",
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
                    {products.length} {l === "fr" ? "produits" : l === "es" ? "productos" : "products"}
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

        {/* ── Widget Pack ─────────────────────────────────────────────── */}
        <section
          style={{
            padding: "clamp(56px,8vw,88px) clamp(1.25rem,5vw,4rem)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "clamp(32px,5vw,64px)",
                alignItems: "center",
              }}
              className="grid-cols-1 md:grid-cols-2"
            >
              {/* Widget preview */}
              <div
                style={{
                  background: "var(--bg-elevated)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  overflow: "hidden",
                  boxShadow:
                    "0 2px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.07)",
                }}
              >
                {/* Browser bar */}
                <div
                  style={{
                    height: 34,
                    background: "#ECEAE3",
                    borderBottom: "1px solid #DDDBD4",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 12,
                    gap: 6,
                  }}
                >
                  {(["#FF5F57", "#FEBC2E", "#28C840"] as const).map((c) => (
                    <div
                      key={c}
                      style={{
                        width: 9,
                        height: 9,
                        borderRadius: "50%",
                        background: c,
                        opacity: 0.85,
                      }}
                    />
                  ))}
                </div>
                {/* Widget grid mockup */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 1,
                    background: "var(--border)",
                    padding: 0,
                  }}
                >
                  {[
                    { label: "Clock", value: "14:32", sub: "Thursday" },
                    { label: "Focus", value: "working", sub: "click to toggle" },
                    { label: "Pomodoro", value: "25:00", sub: "ready" },
                    { label: "Countdown", value: "18", sub: "days until deadline" },
                  ].map(({ label, value, sub }) => (
                    <div
                      key={label}
                      style={{
                        background: "#FAFAF7",
                        padding: "18px 20px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 4,
                        minHeight: 88,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 400,
                          fontSize: 22,
                          color: "var(--fg-primary)",
                          letterSpacing: "-0.02em",
                          fontVariationSettings: "'opsz' 72, 'SOFT' 50",
                          lineHeight: 1,
                        }}
                      >
                        {value}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-body)",
                          fontSize: 10,
                          color: "var(--fg-secondary)",
                          letterSpacing: "0.01em",
                        }}
                      >
                        {sub}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text */}
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 11,
                    fontWeight: 500,
                    color: "#6B6B68",
                    letterSpacing: "0.09em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 12,
                  }}
                >
                  Add-on
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 500,
                    fontSize: "clamp(1.5rem,3vw,2rem)",
                    color: "var(--fg-primary)",
                    letterSpacing: "-0.02em",
                    fontVariationSettings: "'opsz' 72, 'SOFT' 50",
                    lineHeight: 1.1,
                    marginBottom: 14,
                  }}
                >
                  {c.widgetTitle}
                </h2>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 15,
                    color: "var(--fg-secondary)",
                    lineHeight: 1.65,
                    marginBottom: 24,
                  }}
                >
                  {c.widgetSubtitle}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 20,
                  }}
                >
                  <a
                    href="#"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "8px 18px",
                      background: "var(--fg-primary)",
                      color: "var(--bg-elevated)",
                      borderRadius: 100,
                      fontSize: 13,
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                    }}
                  >
                    {c.buy}
                  </a>
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 18,
                      color: "var(--fg-primary)",
                      fontVariantNumeric: "tabular-nums",
                    }}
                  >
                    {c.widgetPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

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
              {c.bundles.map((bundle) => (
                <div
                  key={bundle.name}
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      justifyContent: "space-between",
                      gap: 12,
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
                    <span
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: 18,
                        color: "var(--fg-primary)",
                        fontVariantNumeric: "tabular-nums",
                        flexShrink: 0,
                      }}
                    >
                      {bundle.price}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      color: "var(--fg-secondary)",
                      lineHeight: 1.5,
                    }}
                  >
                    {bundle.includes}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 12,
                      color: "var(--fg-secondary)",
                      lineHeight: 1.5,
                      fontStyle: "italic",
                    }}
                  >
                    {bundle.note}
                  </p>
                  <div style={{ marginTop: 4 }}>
                    <a
                      href="#"
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
              ))}
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
