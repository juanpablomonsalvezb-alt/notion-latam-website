"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { getTemplateBySlug } from "@/lib/templates";
import { Link } from "@/i18n/navigation";

const INCLUDED_FEATURES: Record<string, string[]> = {
  "life-planner": [
    "📅 Annual & monthly planner",
    "🎯 Goal tracking system",
    "📊 Habit streak dashboard",
    "🔔 Weekly review template",
  ],
  "habit-tracker": [
    "📅 Daily habit checklist",
    "📈 Streak tracking",
    "🔥 Momentum scoring",
    "📋 Weekly review page",
  ],
  "finance-tracker": [
    "💰 Income & expense log",
    "📊 Budget vs. actuals",
    "🏦 Account balances",
    "📅 Monthly reports",
  ],
  "second-brain": [
    "🧠 PARA framework setup",
    "✅ GTD task system",
    "📝 Notes & highlights hub",
    "🗂️ Projects & areas tracker",
  ],
  "freelance-dashboard": [
    "👥 Client database",
    "📋 Project status board",
    "⏱️ Time tracking",
    "📄 Proposal templates",
  ],
  "client-crm": [
    "👥 Client profiles",
    "💼 Project pipeline",
    "🧾 Invoice tracker",
    "📊 Revenue dashboard",
  ],
};

const FAQ = [
  {
    q: "Do I need a paid Notion account?",
    a: "No — the free Notion plan works for personal use. Some advanced features (team sharing) require a paid plan.",
  },
  {
    q: "How do I get the template?",
    a: "After purchase, you'll receive a Notion template link. Click it to duplicate the template into your workspace.",
  },
  {
    q: "Can I customize it?",
    a: "Absolutely. All templates are fully editable. Adapt any page, database or view to fit your workflow.",
  },
];

export function TemplateDetailClient({ slug }: { slug: string }) {
  const template = getTemplateBySlug(slug);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!template) notFound();

  const isFree = template.price === 0;
  const features = INCLUDED_FEATURES[slug] || [];

  return (
    <div style={{ background: "#fefefe", minHeight: "100vh" }}>
      {/* Back nav */}
      <div style={{ background: "#fefefe", borderBottom: "1px solid #e6e6e6", padding: "12px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Link
            href="/templates"
            style={{ fontSize: 13, color: "#888", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}
          >
            ← All templates
          </Link>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, alignItems: "start" }}
          className="grid-cols-1 lg:grid-cols-detail"
        >

          {/* ── LEFT CONTENT ────────────────────────────────────────────── */}
          <div>
            {/* Badge */}
            <span style={{
              display: "inline-block",
              fontSize: 11,
              fontWeight: 600,
              color: "#484848",
              background: "#f5f5f5",
              borderRadius: 100,
              padding: "3px 12px",
              marginBottom: 18,
              letterSpacing: "0.03em",
            }}>
              {template.category}
            </span>

            <h1 style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "#000",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 18,
            }}>
              {template.name}
            </h1>

            <p style={{ fontSize: 17, color: "#6b6b6b", lineHeight: 1.7, marginBottom: 40, maxWidth: 520 }}>
              {template.description} A beautifully designed Notion workspace that adapts to your needs. Built with minimalism and usability in mind — just duplicate and start.
            </p>

            {/* What&apos;s included */}
            <div style={{ marginBottom: 48 }}>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111", marginBottom: 20 }}>
                What&apos;s included
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {features.map((feat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      fontSize: 15,
                      color: "#2a2a2a",
                    }}
                  >
                    <span style={{
                      width: 28,
                      height: 28,
                      background: "#f5f5f5",
                      borderRadius: 8,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      flexShrink: 0,
                    }}>
                      ✓
                    </span>
                    {feat}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Previews */}
            <div>
              <h2 style={{ fontSize: 18, fontWeight: 700, color: "#111", marginBottom: 20 }}>Preview</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[1, 2].map((n) => (
                  <div
                    key={n}
                    style={{
                      aspectRatio: "16/9",
                      background: "#f9f9f9",
                      borderRadius: 16,
                      border: "1px solid #e6e6e6",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#b0b0b0",
                      fontSize: 13,
                      fontWeight: 500,
                    }}
                  >
                    Preview {n}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT SIDEBAR (sticky) ───────────────────────────────────── */}
          <div style={{ position: "sticky", top: 100 }}>
            <div style={{
              background: "#fefefe",
              border: "1px solid #e6e6e6",
              borderRadius: 20,
              padding: "28px 28px 32px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.06)",
            }}>
              {/* Price */}
              <div style={{ marginBottom: 24 }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
                  <span style={{
                    fontSize: 44,
                    fontWeight: 700,
                    color: isFree ? "#16a34a" : "#000",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}>
                    {isFree ? "Free" : `$${template.price}`}
                  </span>
                  {!isFree && (
                    <span style={{ fontSize: 13, color: "#888" }}>one-time</span>
                  )}
                </div>
                {!isFree && (
                  <span style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#fff",
                    background: "#111",
                    borderRadius: 6,
                    padding: "3px 10px",
                    letterSpacing: "0.05em",
                  }}>
                    PRO
                  </span>
                )}
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                <motion.button
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: "100%",
                    padding: "14px 0",
                    background: "#000",
                    color: "#fff",
                    border: "none",
                    borderRadius: 100,
                    fontSize: 15,
                    fontWeight: 600,
                    cursor: "pointer",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {isFree ? "Get this template →" : `Buy for $${template.price} →`}
                </motion.button>

                <motion.button
                  whileTap={{ scale: 0.98 }}
                  style={{
                    width: "100%",
                    padding: "13px 0",
                    background: "transparent",
                    color: "#484848",
                    border: "1px solid #d8d8d8",
                    borderRadius: 100,
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                >
                  Free preview →
                </motion.button>
              </div>

              {/* Trust badges */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, borderTop: "1px solid #f0f0f0", paddingTop: 20, marginBottom: 24 }}>
                {[
                  { icon: "⚡", text: "Instant access after purchase" },
                  { icon: "🔄", text: "Free updates forever" },
                  { icon: "✦", text: "Works with free Notion plan" },
                ].map(({ icon, text }, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "#6b6b6b" }}>
                    <span style={{ fontSize: 15 }}>{icon}</span>
                    {text}
                  </div>
                ))}
              </div>

              {/* FAQ accordion */}
              <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 20 }}>
                <h3 style={{ fontSize: 14, fontWeight: 700, color: "#111", marginBottom: 14 }}>FAQ</h3>
                {FAQ.map((item, i) => (
                  <div
                    key={i}
                    style={{ borderBottom: i < FAQ.length - 1 ? "1px solid #f0f0f0" : "none", paddingBottom: 12, marginBottom: 12 }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: 0,
                        gap: 8,
                      }}
                    >
                      <span style={{ fontSize: 13, fontWeight: 500, color: "#111", lineHeight: 1.4 }}>{item.q}</span>
                      <span style={{
                        fontSize: 16,
                        color: "#888",
                        flexShrink: 0,
                        transform: openFaq === i ? "rotate(45deg)" : "none",
                        transition: "transform 0.2s",
                        display: "inline-block",
                      }}>
                        +
                      </span>
                    </button>
                    {openFaq === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        style={{ overflow: "hidden" }}
                      >
                        <p style={{ fontSize: 13, color: "#6b6b6b", lineHeight: 1.6, marginTop: 8 }}>
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
