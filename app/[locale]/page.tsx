import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { templates } from "@/lib/templates";
import { TemplateCard } from "@/components/TemplateCard";
import { CategoryCard } from "@/components/CategoryCard";
import { Newsletter } from "@/components/Newsletter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { HeroAnimation } from "@/components/HeroAnimation";

/* ─── Tokens ──────────────────────────────────────────────────────────────── */
const C = {
  bg: "#fafafa",
  gray: "#f0f0f0",
  white: "#ffffff",
  black: "#000000",
  text: "#2a2a2a",
  text2: "#484848",
  muted: "#6b6b6b",
  border: "#e6e6e6",
} as const;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ─── Testimonials data ───────────────────────────────────────────────────── */
const testimonials = [
  {
    quote: "Nebbuler templates transformed how I manage my entire life. The Second Brain alone is worth every penny.",
    name: "Sarah Chen",
    role: "Product Designer",
  },
  {
    quote: "I use the Freelance Dashboard daily. It keeps my clients, projects and invoices perfectly organized.",
    name: "Marcos Díaz",
    role: "Freelance Developer",
  },
  {
    quote: "The Finance Tracker gave me a real picture of my money for the first time. Beautifully simple.",
    name: "Julie Moreau",
    role: "UX Researcher",
  },
];

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <Navbar
        templatesLabel={t("Nav.templates")}
        blogLabel={t("Nav.blog")}
        aboutLabel={t("Nav.about")}
        browseLabel={t("Nav.browse")}
      />

      <main>
        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section style={{ background: C.bg, padding: "80px 24px 100px", overflow: "hidden" }}>
          <div style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 60,
          }}>
            {/* Text */}
            <div style={{ flex: "0 0 auto", maxWidth: 560 }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                background: "#fff",
                border: "1px solid #e6e6e6",
                borderRadius: 100,
                padding: "5px 14px",
                marginBottom: 28,
                fontSize: 12,
                fontWeight: 600,
                color: "#484848",
                letterSpacing: "0.04em",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a", flexShrink: 0 }} />
                {t("Hero.badge")}
              </div>

              <h1 style={{
                fontSize: "clamp(2.8rem, 5.5vw, 4.2rem)",
                fontWeight: 700,
                color: C.black,
                lineHeight: 1.08,
                letterSpacing: "-0.035em",
                marginBottom: 22,
              }}>
                {t("Hero.title")}
              </h1>

              <p style={{
                fontSize: 18,
                color: C.text2,
                lineHeight: 1.65,
                marginBottom: 40,
                maxWidth: 480,
              }}>
                {t("Hero.subtitle")}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                <Link
                  href="/templates"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "14px 32px",
                    background: C.black,
                    color: "#fff",
                    borderRadius: 100,
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  {t("Hero.cta")}
                </Link>
                <Link
                  href="/about"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 28px",
                    background: "transparent",
                    color: C.text2,
                    borderRadius: 100,
                    fontSize: 15,
                    fontWeight: 500,
                    textDecoration: "none",
                    border: "1px solid #d8d8d8",
                  }}
                >
                  {t("Hero.ctaSecondary")}
                </Link>
              </div>

              {/* Social proof */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 36 }}>
                <div style={{ display: "flex" }}>
                  {["#d3e3fd", "#fde8d3", "#d3fde8", "#f5e1fd"].map((c, i) => (
                    <div key={i} style={{
                      width: 28,
                      height: 28,
                      borderRadius: "50%",
                      background: c,
                      border: "2px solid #fff",
                      marginLeft: i > 0 ? -8 : 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 10,
                      fontWeight: 700,
                      color: "#484848",
                    }}>
                      {["S", "M", "J", "A"][i]}
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 13, color: C.muted }}>
                  <strong style={{ color: C.text, fontWeight: 600 }}>2,000+</strong> {t("Hero.socialProof")}
                </div>
              </div>
            </div>

            {/* Hero SVG — hidden on mobile */}
            <div className="hidden md:block" style={{ flex: "0 0 auto" }}>
              <HeroAnimation />
            </div>
          </div>
        </section>

        {/* ── CATEGORIES STRIP ──────────────────────────────────────────── */}
        <section style={{ background: C.white, padding: "80px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
                {t("Categories.label")}
              </p>
              <h2 style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                color: C.black,
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
              }}>
                {t("Categories.title")}
              </h2>
            </div>

            <div style={{ display: "flex", gap: 20 }} className="flex-col md:flex-row">
              <CategoryCard
                icon="🧘"
                title="Life OS"
                subtitle={t("Categories.lifeOS.subtitle")}
                description={t("Categories.lifeOS.description")}
                count={4}
                href="/templates"
                accentColor="#6366f1"
              />
              <CategoryCard
                icon="💼"
                title="Freelancer OS"
                subtitle={t("Categories.freelancerOS.subtitle")}
                description={t("Categories.freelancerOS.description")}
                count={2}
                href="/templates"
                accentColor="#f59e0b"
              />
            </div>
          </div>
        </section>

        {/* ── FEATURED TEMPLATES ────────────────────────────────────────── */}
        <section style={{ background: C.bg, padding: "80px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 48, flexWrap: "wrap", gap: 16 }}>
              <div>
                <p style={{ fontSize: 12, fontWeight: 700, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
                  {t("FeaturedTemplates.label")}
                </p>
                <h2 style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  fontWeight: 700,
                  color: C.black,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                }}>
                  {t("FeaturedTemplates.title")}
                </h2>
              </div>
              <Link
                href="/templates"
                style={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: C.text2,
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  border: "1px solid #e6e6e6",
                  padding: "8px 18px",
                  borderRadius: 100,
                  background: "#fff",
                }}
              >
                {t("FeaturedTemplates.viewAll")} →
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
              }}
              className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              {templates.map((template, i) => (
                <TemplateCard key={template.slug} template={template} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── FLAGSHIP DARK SECTION (Second Brain) ──────────────────────── */}
        <section style={{ background: "#111", padding: "100px 24px" }}>
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: "#666", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
              {t("Flagship.label")}
            </p>

            <h2 style={{
              fontSize: "clamp(2.6rem, 6vw, 5rem)",
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.04em",
              lineHeight: 1.07,
              marginBottom: 20,
            }}>
              {t("Flagship.title1")}{" "}
              <span style={{ color: "#a3a3a3" }}>{t("Flagship.title2")}</span>
            </h2>

            <p style={{ fontSize: 17, color: "#888", lineHeight: 1.65, maxWidth: 520, margin: "0 auto 48px" }}>
              {t("Flagship.subtitle")}
            </p>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 20, flexWrap: "wrap" }}>
              <div style={{ textAlign: "left" }}>
                <div style={{ fontSize: 40, fontWeight: 700, color: "#fff", letterSpacing: "-0.03em", lineHeight: 1 }}>
                  $49
                </div>
                <div style={{ fontSize: 13, color: "#666", marginTop: 4 }}>{t("Flagship.oneTime")}</div>
              </div>

              <Link
                href="/templates/second-brain"
                style={{
                  padding: "16px 40px",
                  background: "#fff",
                  color: "#000",
                  borderRadius: 100,
                  fontSize: 15,
                  fontWeight: 700,
                  textDecoration: "none",
                  letterSpacing: "-0.01em",
                }}
              >
                {t("Flagship.cta")}
              </Link>

              <Link
                href="/templates/second-brain"
                style={{
                  padding: "15px 28px",
                  background: "transparent",
                  color: "#666",
                  borderRadius: 100,
                  fontSize: 15,
                  fontWeight: 500,
                  textDecoration: "none",
                  border: "1px solid #333",
                }}
              >
                {t("Flagship.preview")}
              </Link>
            </div>

            {/* Feature list */}
            <div style={{ display: "flex", gap: 24, justifyContent: "center", marginTop: 56, flexWrap: "wrap" }}>
              {[t("Flagship.f1"), t("Flagship.f2"), t("Flagship.f3"), t("Flagship.f4")].map((feat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#888" }}>
                  <span style={{ color: "#555", fontSize: 14 }}>✓</span>
                  {feat}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
        <section style={{ background: C.white, padding: "80px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: 52 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
                {t("Testimonials.label")}
              </p>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 700, color: C.black, letterSpacing: "-0.025em" }}>
                {t("Testimonials.title")}
              </h2>
            </div>

            <div
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
              className="grid-cols-1 md:grid-cols-3"
            >
              {testimonials.map((t_, i) => (
                <div
                  key={i}
                  style={{
                    background: C.bg,
                    border: "1px solid #e6e6e6",
                    borderRadius: 16,
                    padding: "28px 28px 24px",
                  }}
                >
                  {/* Stars */}
                  <div style={{ display: "flex", gap: 2, marginBottom: 16 }}>
                    {[...Array(5)].map((_, j) => (
                      <span key={j} style={{ fontSize: 13, color: "#f59e0b" }}>★</span>
                    ))}
                  </div>
                  <p style={{ fontSize: 14, color: "#484848", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>
                    &ldquo;{t_.quote}&rdquo;
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      background: ["#d3e3fd", "#fde8d3", "#d3fde8"][i],
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "#484848",
                    }}>
                      {t_.name[0]}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: "#111" }}>{t_.name}</div>
                      <div style={{ fontSize: 12, color: "#888" }}>{t_.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NEWSLETTER ────────────────────────────────────────────────── */}
        <Newsletter
          title={t("Newsletter.title")}
          subtitle={t("Newsletter.subtitle")}
          placeholder={t("Newsletter.placeholder")}
          buttonText={t("Newsletter.button")}
        />
      </main>

      <Footer locale={locale} />
    </>
  );
}
