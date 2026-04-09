import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/app/[locale]/LocaleSwitcher";

interface FooterProps {
  locale: string;
}

export async function Footer({ locale }: FooterProps) {
  const t = await getTranslations({ locale });

  const cols = [
    {
      title: "Templates",
      links: [
        ["Life Planner", "/templates/life-planner"],
        ["Habit Tracker", "/templates/habit-tracker"],
        ["Finance Tracker", "/templates/finance-tracker"],
        ["Second Brain", "/templates/second-brain"],
      ],
    },
    {
      title: "Company",
      links: [
        [t("Footer.about"), "/about"],
        [t("Footer.blog"), "/blog"],
        [t("Footer.updates"), "/updates"],
      ],
    },
    {
      title: "Legal",
      links: [
        [t("Footer.privacy"), "/privacy"],
        ["Terms of Service", "/terms"],
      ],
    },
  ];

  return (
    <footer style={{ background: "#f0ece6", borderTop: "1px solid #e6e6e6", padding: "64px 28px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.8fr repeat(3, 1fr)",
            gap: 48,
            marginBottom: 48,
            alignItems: "start",
          }}
          className="grid-cols-2 md:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 14 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "#000", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff", fontSize: 15, fontWeight: 800 }}>N</span>
              </div>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#000" }}>Nebbuler</span>
            </Link>
            <p style={{ fontSize: 14, color: "#6b6b6b", lineHeight: 1.6, maxWidth: 200, marginBottom: 20 }}>
              {t("Footer.tagline")}
            </p>
            <LocaleSwitcher />
          </div>

          {/* Columns */}
          {cols.map((col) => (
            <div key={col.title}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#111", marginBottom: 16, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                {col.title}
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link
                      href={href as never}
                      style={{ fontSize: 14, color: "#6b6b6b", textDecoration: "none" }}
                      className="hover:text-black transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 24 }}>
          <p style={{ fontSize: 13, color: "#b0b0b0" }}>{t("Footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
