"use client";

import { useState } from "react";
import Link from "next/link";

const PLANS = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    desc: "Para explorar sin compromisos",
    cta: "Empezar gratis",
    ctaHref: "/crear",
    popular: false,
    features: ["1 sitio web", "Subdominio orbbi.site", "Generación con IA (3/mes)", "Soporte por email"],
    missing: ["Dominio personalizado", "IA ilimitada", "Analytics avanzado"],
  },
  {
    name: "Personal",
    price: { monthly: 19, annual: 15 },
    desc: "Para emprendedores y freelancers",
    cta: "Iniciar prueba gratis",
    ctaHref: "/crear",
    popular: true,
    features: ["3 sitios web", "Dominio personalizado incluido", "IA ilimitada", "Analytics completo", "WhatsApp premium", "Soporte prioritario"],
    missing: ["Sitios ilimitados", "White-label"],
  },
  {
    name: "Business",
    price: { monthly: 49, annual: 39 },
    desc: "Para agencias y equipos",
    cta: "Iniciar prueba gratis",
    ctaHref: "/crear",
    popular: false,
    features: ["Sitios ilimitados", "Dominios personalizados ilimitados", "IA ilimitada", "White-label", "Panel multi-cliente", "API access", "Account manager", "SLA 99.9%"],
    missing: [],
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section
      id="pricing"
      style={{
        backgroundColor: "#0d0d0d",
        padding: "120px 24px",
        fontFamily: "Inter, system-ui, sans-serif",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontSize: 11,
              color: "rgba(255,255,255,0.3)",
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              marginBottom: 16,
            }}
          >
            Precios
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 500,
              color: "#ffffff",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              margin: "0 0 32px",
            }}
          >
            Planes claros, sin sorpresas
          </h2>

          {/* Toggle */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontSize: 14, color: !annual ? "#ffffff" : "rgba(255,255,255,0.35)" }}>Mensual</span>
            <button
              onClick={() => setAnnual(!annual)}
              style={{
                position: "relative",
                width: 44,
                height: 24,
                borderRadius: 99,
                backgroundColor: annual ? "#ffffff" : "rgba(255,255,255,0.12)",
                border: "none",
                cursor: "pointer",
                transition: "background 0.2s ease",
                padding: 0,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 3,
                  left: annual ? 23 : 3,
                  width: 18,
                  height: 18,
                  borderRadius: "50%",
                  backgroundColor: annual ? "#0a0a0a" : "#ffffff",
                  transition: "left 0.2s ease",
                }}
              />
            </button>
            <span style={{ fontSize: 14, color: annual ? "#ffffff" : "rgba(255,255,255,0.35)", display: "flex", alignItems: "center", gap: 8 }}>
              Anual
              <span style={{ fontSize: 10, fontWeight: 700, color: "#4ade80", backgroundColor: "rgba(74,222,128,0.12)", padding: "2px 8px", borderRadius: 99, letterSpacing: "0.06em" }}>
                −20%
              </span>
            </span>
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 12,
          }}
          className="orbbi-pricing-grid"
        >
          {PLANS.map((plan, i) => (
            <div
              key={i}
              style={{
                border: plan.popular
                  ? "1px solid rgba(255,255,255,0.25)"
                  : "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: 36,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                backgroundColor: plan.popular ? "#161616" : "#111111",
              }}
            >
              {plan.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: -13,
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#ffffff",
                    color: "#0a0a0a",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    padding: "4px 14px",
                    borderRadius: 99,
                    whiteSpace: "nowrap",
                    textTransform: "uppercase",
                  }}
                >
                  Más popular
                </div>
              )}

              <div style={{ marginBottom: 8 }}>
                <div style={{ fontSize: 16, fontWeight: 600, color: "#ffffff", marginBottom: 4 }}>{plan.name}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}>{plan.desc}</div>
              </div>

              <div style={{ margin: "28px 0 8px", display: "flex", alignItems: "flex-end", gap: 4, lineHeight: 1 }}>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", alignSelf: "flex-start", marginTop: 8 }}>$</span>
                <span style={{ fontSize: 48, fontWeight: 700, color: "#ffffff", letterSpacing: "-0.04em", lineHeight: 1 }}>
                  {annual ? plan.price.annual : plan.price.monthly}
                </span>
                <span style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", marginBottom: 6 }}>/mes</span>
              </div>

              <Link
                href={plan.ctaHref}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "13px 28px",
                  borderRadius: 4,
                  fontSize: 13,
                  fontWeight: 600,
                  marginBottom: 28,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  backgroundColor: plan.popular ? "#ffffff" : "transparent",
                  color: plan.popular ? "#0a0a0a" : "#ffffff",
                  border: plan.popular ? "none" : "1px solid rgba(255,255,255,0.15)",
                }}
              >
                {plan.cta}
              </Link>

              <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.06)", marginBottom: 24 }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 11, flex: 1 }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.7)" }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" stroke="#4ade80" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {f}
                  </div>
                ))}
                {plan.missing.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.2)" }}>
                    <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
                      <path d="M18 6L6 18M6 6l12 12" stroke="rgba(255,255,255,0.2)" strokeWidth={2} strokeLinecap="round"/>
                    </svg>
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p style={{ textAlign: "center", fontSize: 13, color: "rgba(255,255,255,0.25)", marginTop: 36 }}>
          Prueba 14 días gratis · Sin tarjeta de crédito · Cancela cuando quieras
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .orbbi-pricing-grid { grid-template-columns: 1fr !important; max-width: 420px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
