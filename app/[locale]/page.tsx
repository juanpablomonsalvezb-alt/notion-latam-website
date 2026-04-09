import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { templates } from "@/lib/templates";
import { TemplateCard } from "@/components/TemplateCard";
import { Newsletter } from "@/components/Newsletter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ─── Testimonials ─────────────────────────────────────────────────────────── */
const testimonials = [
  {
    quote: "Nebbuler templates transformed how I manage my entire life. The Second Brain alone is worth every penny.",
    name: "Sarah Chen",
    role: "Product Designer",
    avatar: "#d3e3fd",
  },
  {
    quote: "I use the Freelance Dashboard daily. Keeps my clients, projects and invoices perfectly organised.",
    name: "Marcos Díaz",
    role: "Freelance Developer",
    avatar: "#fde8d3",
  },
  {
    quote: "The Finance Tracker gave me a real picture of my money for the first time. Beautifully simple.",
    name: "Julie Moreau",
    role: "UX Researcher",
    avatar: "#d3fde8",
  },
];

/* ─── Page ─────────────────────────────────────────────────────────────────── */
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
        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "100px 24px 80px", borderBottom: "1px solid #e8e8e8", overflow: "hidden" }}>
          <div style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: 64,
            justifyContent: "space-between",
          }}>
            {/* Left — Text */}
            <div style={{ flex: "0 0 auto", maxWidth: 520 }}>
              <h1 style={{
                fontSize: "clamp(2.6rem, 5vw, 4rem)",
                fontWeight: 700,
                color: "#000",
                lineHeight: 1.05,
                letterSpacing: "-0.04em",
                marginBottom: 20,
              }}>
                {t("Hero.title")}
              </h1>

              <p style={{
                fontSize: 18,
                color: "#666",
                lineHeight: 1.7,
                marginBottom: 36,
                maxWidth: 440,
              }}>
                {t("Hero.subtitle")}
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
                <Link
                  href="/templates"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "13px 28px",
                    background: "#000",
                    color: "#fff",
                    borderRadius: 100,
                    fontSize: 15,
                    fontWeight: 600,
                    textDecoration: "none",
                    letterSpacing: "-0.01em",
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
                    padding: "12px 24px",
                    background: "transparent",
                    color: "#555",
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
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 36 }}>
                <div style={{ display: "flex" }}>
                  {["#d3e3fd", "#fde8d3", "#d3fde8", "#f5e1fd"].map((c, i) => (
                    <div key={i} style={{
                      width: 28, height: 28, borderRadius: "50%", background: c,
                      border: "2px solid #fff", marginLeft: i > 0 ? -8 : 0,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 10, fontWeight: 700, color: "#484848",
                    }}>
                      {["S","M","J","A"][i]}
                    </div>
                  ))}
                </div>
                <span style={{ fontSize: 13, color: "#888" }}>
                  <strong style={{ color: "#333", fontWeight: 600 }}>2,000+</strong> {t("Hero.socialProof")}
                </span>
              </div>
            </div>

            {/* Right — Video */}
            <div className="hidden md:block" style={{ flex: "0 0 auto" }}>
              <video
                src="/hero-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: 480,
                  maxWidth: "100%",
                  borderRadius: 20,
                  border: "1px solid #e8e8e8",
                  display: "block",
                  boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
                }}
              />
            </div>
          </div>
        </section>

        {/* ── NOTION TEMPLATES (featured grid) ──────────────────────────── */}
        <section style={{ background: "#fff", padding: "80px 24px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
              <div>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#aaa", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 8 }}>
                  {t("FeaturedTemplates.label")}
                </p>
                <h2 style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  fontWeight: 700,
                  color: "#000",
                  letterSpacing: "-0.03em",
                  lineHeight: 1.1,
                }}>
                  {t("FeaturedTemplates.title")}
                </h2>
              </div>
              <Link
                href="/templates"
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#555",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  border: "1px solid #e0e0e0",
                  padding: "7px 16px",
                  borderRadius: 100,
                }}
              >
                {t("FeaturedTemplates.viewAll")} →
              </Link>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 20,
              }}
              className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              {templates.map((template, i) => (
                <TemplateCard key={template.slug} template={template} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* ── SECOND BRAIN ──────────────────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "0 24px 80px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ borderTop: "1px solid #e8e8e8", paddingTop: 80 }}>
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
                className="grid-cols-1 md:grid-cols-2"
              >
                {/* Text */}
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#aaa", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
                    {t("Flagship.label")}
                  </p>
                  <h2 style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                    color: "#000",
                    letterSpacing: "-0.035em",
                    lineHeight: 1.1,
                    marginBottom: 16,
                  }}>
                    {t("Flagship.title1")} {t("Flagship.title2")}
                  </h2>
                  <p style={{ fontSize: 16, color: "#666", lineHeight: 1.7, marginBottom: 32 }}>
                    {t("Flagship.subtitle")}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                    {[t("Flagship.f1"), t("Flagship.f2"), t("Flagship.f3"), t("Flagship.f4")].map((feat, i) => (
                      <span key={i} style={{
                        fontSize: 12, fontWeight: 500, color: "#555",
                        background: "#f5f5f5", borderRadius: 100,
                        padding: "4px 12px", display: "inline-flex", alignItems: "center", gap: 5,
                      }}>
                        <span style={{ color: "#16a34a", fontSize: 11 }}>✓</span> {feat}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                    <Link
                      href="/templates/second-brain"
                      style={{
                        padding: "13px 28px",
                        background: "#000",
                        color: "#fff",
                        borderRadius: 100,
                        fontSize: 14,
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      {t("Flagship.cta")}
                    </Link>
                    <div>
                      <div style={{ fontSize: 22, fontWeight: 700, color: "#000", letterSpacing: "-0.03em", lineHeight: 1 }}>$49</div>
                      <div style={{ fontSize: 11, color: "#aaa" }}>{t("Flagship.oneTime")}</div>
                    </div>
                  </div>
                </div>

                {/* Mockup */}
                <div style={{
                  background: "#f9f9f9",
                  border: "1px solid #e8e8e8",
                  borderRadius: 16,
                  overflow: "hidden",
                  aspectRatio: "4/3",
                }}>
                  <div style={{ padding: "20px 24px", borderBottom: "1px solid #e8e8e8", display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ display: "flex", gap: 5 }}>
                      {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
                    </div>
                    <div style={{ flex: 1, height: 7, background: "#e8e8e8", borderRadius: 100 }} />
                  </div>
                  <div style={{ padding: "20px 24px" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#111", marginBottom: 14 }}>🧠 Second Brain</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 16 }}>
                      {[["Inbox", "#e0f2fe", "12"], ["Projects", "#fef9c3", "5"], ["Areas", "#dcfce7", "8"], ["Resources", "#fce7f3", "34"]].map(([label, bg, count]) => (
                        <div key={label} style={{ background: bg as string, borderRadius: 8, padding: "10px 12px" }}>
                          <div style={{ fontSize: 11, color: "#555", marginBottom: 2 }}>{label}</div>
                          <div style={{ fontSize: 16, fontWeight: 700, color: "#111" }}>{count}</div>
                        </div>
                      ))}
                    </div>
                    {[70, 50, 85, 40].map((w, i) => (
                      <div key={i} style={{ height: 6, background: "#e8e8e8", borderRadius: 3, marginBottom: 6, width: `${w}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINANCE TRACKER ───────────────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "0 24px 80px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ borderTop: "1px solid #e8e8e8", paddingTop: 80 }}>
              <div
                style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}
                className="grid-cols-1 md:grid-cols-2"
              >
                {/* Mockup first on desktop */}
                <div style={{
                  background: "#f9f9f9",
                  border: "1px solid #e8e8e8",
                  borderRadius: 16,
                  overflow: "hidden",
                  aspectRatio: "4/3",
                  order: 0,
                }}
                className="order-2 md:order-1"
                >
                  <div style={{ padding: "20px 24px", borderBottom: "1px solid #e8e8e8", display: "flex", alignItems: "center", gap: 8 }}>
                    <div style={{ display: "flex", gap: 5 }}>
                      {["#ff5f57","#febc2e","#28c840"].map(c => <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />)}
                    </div>
                    <div style={{ flex: 1, height: 7, background: "#e8e8e8", borderRadius: 100 }} />
                  </div>
                  <div style={{ padding: "20px 24px" }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#111", marginBottom: 14 }}>💰 Finance Tracker</div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, marginBottom: 14 }}>
                      {[["Income","#dcfce7","$4,200"],["Expenses","#fee2e2","$1,890"],["Saved","#dbeafe","$2,310"]].map(([l, bg, v]) => (
                        <div key={l} style={{ background: bg as string, borderRadius: 8, padding: "8px 10px" }}>
                          <div style={{ fontSize: 9, color: "#555" }}>{l}</div>
                          <div style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>{v}</div>
                        </div>
                      ))}
                    </div>
                    {[["Groceries","−$320","#fee2e2"],["Salary","+$4,200","#dcfce7"],["Rent","−$800","#fee2e2"],["Freelance","+$600","#dcfce7"]].map(([label, val, bg]) => (
                      <div key={label} style={{ display: "flex", justifyContent: "space-between", fontSize: 10, padding: "4px 0", borderBottom: "1px solid #f0f0f0" }}>
                        <span style={{ color: "#555" }}>{label}</span>
                        <span style={{ background: bg as string, borderRadius: 3, padding: "1px 6px", fontWeight: 600 }}>{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text */}
                <div className="order-1 md:order-2">
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#aaa", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
                    {t("Finance.title")}
                  </p>
                  <h2 style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    fontWeight: 700,
                    color: "#000",
                    letterSpacing: "-0.035em",
                    lineHeight: 1.1,
                    marginBottom: 16,
                  }}>
                    {t("Finance.subtitle")}
                  </h2>
                  <p style={{ fontSize: 16, color: "#666", lineHeight: 1.7, marginBottom: 32 }}>
                    Track income, expenses and savings in one clean Notion workspace. Visual dashboards, monthly reports, net worth tracking.
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                    <Link
                      href="/templates/finance-tracker"
                      style={{
                        padding: "13px 28px",
                        background: "#000",
                        color: "#fff",
                        borderRadius: 100,
                        fontSize: 14,
                        fontWeight: 600,
                        textDecoration: "none",
                      }}
                    >
                      {t("Finance.cta")}
                    </Link>
                    <div>
                      <div style={{ fontSize: 22, fontWeight: 700, color: "#000", letterSpacing: "-0.03em", lineHeight: 1 }}>$19</div>
                      <div style={{ fontSize: 11, color: "#aaa" }}>{t("Flagship.oneTime")}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────────────────────── */}
        <section style={{ background: "#fff", padding: "0 24px 80px" }}>
          <div style={{ maxWidth: 1000, margin: "0 auto" }}>
            <div style={{ borderTop: "1px solid #e8e8e8", paddingTop: 80 }}>
              <div style={{ textAlign: "center", marginBottom: 48 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#aaa", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 10 }}>
                  {t("Testimonials.label")}
                </p>
                <h2 style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  fontWeight: 700,
                  color: "#000",
                  letterSpacing: "-0.03em",
                }}>
                  {t("Testimonials.title")}
                </h2>
              </div>

              <div
                style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}
                className="grid-cols-1 md:grid-cols-3"
              >
                {testimonials.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: "#fff",
                      border: "1px solid #e8e8e8",
                      borderRadius: 12,
                      padding: "24px",
                    }}
                  >
                    <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                      {[...Array(5)].map((_, j) => (
                        <span key={j} style={{ fontSize: 12, color: "#f59e0b" }}>★</span>
                      ))}
                    </div>
                    <p style={{ fontSize: 14, color: "#444", lineHeight: 1.7, marginBottom: 18, fontStyle: "italic" }}>
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{
                        width: 32, height: 32, borderRadius: "50%",
                        background: item.avatar,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: 12, fontWeight: 700, color: "#484848",
                      }}>
                        {item.name[0]}
                      </div>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: "#111" }}>{item.name}</div>
                        <div style={{ fontSize: 12, color: "#999" }}>{item.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
