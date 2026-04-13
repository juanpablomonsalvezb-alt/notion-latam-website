"use client";

import { useLocale } from "next-intl";
import { usePathname, Link } from "@/i18n/navigation";

const LOCALES = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
] as const;

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 2 }}>
      {LOCALES.map(({ code, label }, i) => (
        <span key={code} style={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Link
            href={pathname}
            locale={code}
            style={{
              fontSize: 12,
              fontWeight: locale === code ? 700 : 400,
              color: locale === code ? "#000" : "#888",
              padding: "3px 4px",
              textDecoration: "none",
              letterSpacing: "0.03em",
            }}
          >
            {label}
          </Link>
          {i < LOCALES.length - 1 && (
            <span style={{ fontSize: 11, color: "#ccc" }}>/</span>
          )}
        </span>
      ))}
    </div>
  );
}
