"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import type { Template } from "@/lib/templates";

interface TemplateCardProps {
  template: Template;
  index?: number;
}

export function TemplateCard({ template, index = 0 }: TemplateCardProps) {
  const isFree = template.price === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        background: "#fff",
        border: "1px solid #e6e6e6",
        borderRadius: 16,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
      className="group hover:shadow-md transition-shadow duration-200"
    >
      {/* Preview */}
      <div
        style={{
          aspectRatio: "16/10",
          background: "linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Notion-style mock UI */}
        <div style={{ padding: "16px 20px", width: "100%" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10 }}>
            <div style={{ width: 20, height: 20, borderRadius: 4, background: "#d0d0d0" }} />
            <div style={{ height: 10, width: "40%", borderRadius: 4, background: "#d0d0d0" }} />
          </div>
          {[100, 75, 88].map((w, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
              <div style={{ width: 10, height: 10, borderRadius: 2, border: "1.5px solid #ccc", flexShrink: 0 }} />
              <div style={{ height: 8, width: `${w}%`, borderRadius: 3, background: "#d8d8d8" }} />
            </div>
          ))}
          <div style={{ height: 1, background: "#ddd", margin: "10px 0" }} />
          <div style={{ display: "flex", gap: 6 }}>
            {["#d3e3fd", "#fde8d3", "#d3fde8"].map((c, i) => (
              <div key={i} style={{ flex: 1, height: 24, borderRadius: 6, background: c }} />
            ))}
          </div>
        </div>

        {/* Scale on hover */}
        <div
          className="absolute inset-0 bg-black/0 group-hover:bg-black/3 transition-colors duration-200"
          style={{ position: "absolute", inset: 0 }}
        />
      </div>

      {/* Content */}
      <div style={{ padding: "16px 20px 20px", flex: 1, display: "flex", flexDirection: "column", gap: 8 }}>
        {/* Badge */}
        <span style={{
          display: "inline-block",
          fontSize: 11,
          fontWeight: 600,
          color: "#484848",
          background: "#f0f0f0",
          borderRadius: 100,
          padding: "2px 10px",
          letterSpacing: "0.02em",
          alignSelf: "flex-start",
        }}>
          {template.category}
        </span>

        <div style={{ fontWeight: 600, fontSize: 15, color: "#111", lineHeight: 1.3 }}>
          {template.name}
        </div>

        <div style={{ fontSize: 13, color: "#6b6b6b", lineHeight: 1.5, flex: 1 }}>
          {template.description}
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4 }}>
          {/* Price */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span style={{
              fontSize: 16,
              fontWeight: 700,
              color: isFree ? "#16a34a" : "#111",
            }}>
              {isFree ? "Free" : `$${template.price}`}
            </span>
            {!isFree && (
              <span style={{
                fontSize: 10,
                fontWeight: 700,
                color: "#fff",
                background: "#111",
                borderRadius: 4,
                padding: "2px 6px",
                letterSpacing: "0.04em",
              }}>
                PRO
              </span>
            )}
          </div>

          {/* CTA */}
          <motion.div whileTap={{ scale: 0.97 }}>
            <Link
              href={`/templates/${template.slug}` as never}
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: "#111",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 4,
              }}
              className="hover:underline"
            >
              Get template →
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
