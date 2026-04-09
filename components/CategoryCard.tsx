"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";

interface CategoryCardProps {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  count: number;
  href: string;
  accentColor: string;
}

export function CategoryCard({
  icon,
  title,
  subtitle,
  description,
  count,
  href,
  accentColor,
}: CategoryCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ flex: 1 }}
    >
      <Link href={href as never} style={{ textDecoration: "none", display: "block" }}>
        <div
          style={{
            background: "#fefefe",
            border: "1px solid #e6e6e6",
            borderRadius: 20,
            padding: "32px 36px",
            height: "100%",
            cursor: "pointer",
            position: "relative",
            overflow: "hidden",
          }}
          className="hover:border-black/20 transition-colors duration-200"
        >
          {/* Background accent */}
          <div style={{
            position: "absolute",
            top: -40,
            right: -40,
            width: 160,
            height: 160,
            borderRadius: "50%",
            background: accentColor,
            opacity: 0.08,
          }} />

          <div style={{ fontSize: 40, marginBottom: 16 }}>{icon}</div>

          <div style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 6, letterSpacing: "-0.02em" }}>
            {title}
          </div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#888", marginBottom: 12, letterSpacing: "0.04em", textTransform: "uppercase" }}>
            {subtitle}
          </div>

          <p style={{ fontSize: 14, color: "#6b6b6b", lineHeight: 1.6, marginBottom: 24, maxWidth: 320 }}>
            {description}
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#111",
              background: "#f5f5f5",
              padding: "4px 12px",
              borderRadius: 100,
            }}>
              {count} templates
            </span>
            <span style={{ fontSize: 14, fontWeight: 500, color: "#111" }}>Browse →</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
