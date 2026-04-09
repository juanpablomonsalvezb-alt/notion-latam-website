"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { templates } from "@/lib/templates";
import { TemplateCard } from "@/components/TemplateCard";
import { useTranslations } from "next-intl";

type Filter = "all" | "Life OS" | "Freelancer OS" | "free" | "pro";

export default function TemplatesPage() {
  const t = useTranslations("TemplatesPage");
  const [active, setActive] = useState<Filter>("all");

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: t("filterAll") },
    { key: "Life OS", label: "Life OS" },
    { key: "Freelancer OS", label: "Freelancer OS" },
    { key: "free", label: t("filterFree") },
    { key: "pro", label: t("filterPro") },
  ];

  const filtered = templates.filter((tmpl) => {
    if (active === "all") return true;
    if (active === "free") return tmpl.price === 0;
    if (active === "pro") return tmpl.price > 0;
    return tmpl.category === active;
  });

  return (
    <>
      {/* Header */}
      <section style={{ background: "#f0ece6", padding: "64px 24px 48px", borderBottom: "1px solid #e6e6e6" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
            Nebbuler
          </p>
          <h1 style={{
            fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
            fontWeight: 700,
            color: "#000",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: 14,
          }}>
            {t("title")}
          </h1>
          <p style={{ fontSize: 17, color: "#6b6b6b", lineHeight: 1.6, maxWidth: 500 }}>
            {t("subtitle")}
          </p>
        </div>
      </section>

      {/* Filters */}
      <div style={{ background: "#f0ece6", borderBottom: "1px solid #e6e6e6", position: "sticky", top: 60, zIndex: 50 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "flex", gap: 4, overflowX: "auto", padding: "14px 0" }}>
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                style={{
                  padding: "7px 18px",
                  borderRadius: 100,
                  fontSize: 13,
                  fontWeight: active === key ? 600 : 400,
                  color: active === key ? "#fff" : "#484848",
                  background: active === key ? "#111" : "#f5f5f5",
                  border: "1px solid",
                  borderColor: active === key ? "#111" : "#e6e6e6",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all 0.15s ease",
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section style={{ background: "#f0ece6", padding: "48px 24px 80px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ marginBottom: 24, fontSize: 13, color: "#888" }}>
            {filtered.length} {t("resultsCount")}
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "#888", fontSize: 16 }}>
              {t("noResults")}
            </div>
          ) : (
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 24,
              }}
              className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((template, i) => (
                <TemplateCard key={template.slug} template={template} index={i} />
              ))}
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}
