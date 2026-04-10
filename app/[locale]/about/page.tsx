import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { HeroAnimation } from "@/components/HeroAnimation";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const values = [
    {
      icon: "✦",
      title: t("About.value1Title"),
      desc: t("About.value1Desc"),
    },
    {
      icon: "◎",
      title: t("About.value2Title"),
      desc: t("About.value2Desc"),
    },
    {
      icon: "⟡",
      title: t("About.value3Title"),
      desc: t("About.value3Desc"),
    },
  ];

  return (
    <div style={{ background: "#fafafa", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ padding: "80px 24px 64px" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {/* Hero animation */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
            <HeroAnimation />
          </div>

          <p style={{
            fontSize: 12,
            fontWeight: 700,
            color: "#888",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: 16,
          }}>
            {t("About.label")}
          </p>

          <h1 style={{
            fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
            fontWeight: 700,
            color: "#000",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: 24,
          }}>
            {t("About.title")}
          </h1>

          <p style={{ fontSize: 17, color: "#484848", lineHeight: 1.75, marginBottom: 20 }}>
            {t("About.p1")}
          </p>
          <p style={{ fontSize: 17, color: "#484848", lineHeight: 1.75, marginBottom: 20 }}>
            {t("About.p2")}
          </p>
          <p style={{ fontSize: 17, color: "#484848", lineHeight: 1.75, marginBottom: 48 }}>
            {t("About.p3")}
          </p>

          {/* Values */}
          <h2 style={{
            fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
            fontWeight: 700,
            color: "#000",
            letterSpacing: "-0.025em",
            marginBottom: 28,
          }}>
            {t("About.valuesTitle")}
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {values.map((v, i) => (
              <div
                key={i}
                style={{
                  background: "#ffffff",
                  border: "1px solid #e6e6e6",
                  borderRadius: 16,
                  padding: "24px 28px",
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                }}
              >
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  flexShrink: 0,
                }}>
                  {v.icon}
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#111", marginBottom: 6 }}>{v.title}</div>
                  <div style={{ fontSize: 14, color: "#6b6b6b", lineHeight: 1.6 }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <Link
              href="/templates"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 36px",
                background: "#000",
                color: "#fff",
                borderRadius: 100,
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              {t("About.cta")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
