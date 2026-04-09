import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

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
          {/* SVG illustration — Open Peeps person sitting */}
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 52 }}>
            <svg width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Chair */}
              <rect x="60" y="140" width="100" height="8" rx="4" stroke="#2a2a2a" strokeWidth="2" />
              <line x1="70" y1="148" x2="65" y2="190" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" />
              <line x1="150" y1="148" x2="155" y2="190" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" />
              <line x1="65" y1="168" x2="155" y2="168" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" />
              {/* Chair back */}
              <rect x="58" y="100" width="8" height="44" rx="4" stroke="#2a2a2a" strokeWidth="2" />
              {/* Head */}
              <circle cx="110" cy="44" r="22" stroke="#2a2a2a" strokeWidth="2" />
              {/* Hair */}
              <path d="M88 36 Q96 20 110 22 Q124 20 132 36" stroke="#2a2a2a" strokeWidth="2" fill="none" strokeLinecap="round" />
              {/* Eyes */}
              <circle cx="103" cy="44" r="2" fill="#2a2a2a" />
              <circle cx="117" cy="44" r="2" fill="#2a2a2a" />
              {/* Smile */}
              <path d="M104 52 Q110 58 116 52" stroke="#2a2a2a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              {/* Neck */}
              <line x1="110" y1="66" x2="110" y2="80" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" />
              {/* Body */}
              <path d="M76 80 Q80 82 110 80 Q140 82 144 80" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" />
              <path d="M76 80 Q72 110 68 138" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" />
              <path d="M144 80 Q148 110 152 138" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" />
              {/* Left arm to desk */}
              <path d="M80 92 Q64 112 52 126" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" />
              {/* Right arm to desk */}
              <path d="M140 92 Q158 112 172 126" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" />
              {/* Desk */}
              <rect x="30" y="124" width="160" height="8" rx="4" stroke="#2a2a2a" strokeWidth="2" />
              {/* Laptop on desk */}
              <rect x="75" y="104" width="70" height="46" rx="4" stroke="#2a2a2a" strokeWidth="2" />
              <path d="M60" y2="152" x2="160" x1="60" y1="152" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" />
              {/* Screen content */}
              <line x1="83" y1="113" x2="137" y2="113" stroke="#2a2a2a" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="83" y1="121" x2="120" y2="121" stroke="#2a2a2a" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="83" y1="129" x2="130" y2="129" stroke="#2a2a2a" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="83" y1="137" x2="110" y2="137" stroke="#2a2a2a" strokeWidth="1.5" strokeLinecap="round" />
              {/* Coffee mug */}
              <rect x="164" y="110" width="18" height="20" rx="3" stroke="#2a2a2a" strokeWidth="1.5" />
              <path d="M182 116 Q188 116 188 122 Q188 128 182 128" stroke="#2a2a2a" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
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
                  background: "#f6f6f4",
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
