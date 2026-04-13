"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PLANS = [
  {
    name: "Starter",
    price: { monthly: 0, annual: 0 },
    desc: "Para explorar sin compromisos",
    cta: "Empezar gratis",
    href: "/crear",
    popular: false,
    features: [
      "1 sitio web activo",
      "Subdominio orbbi.site",
      "Generación IA (3/mes)",
      "Editor visual completo",
      "Soporte por email",
    ],
    missing: [
      "Dominio personalizado",
      "IA ilimitada",
      "Analytics avanzado",
      "WhatsApp premium",
    ],
  },
  {
    name: "Personal",
    price: { monthly: 19, annual: 15 },
    desc: "Para emprendedores y freelancers",
    cta: "Prueba 14 días gratis",
    href: "/crear",
    popular: true,
    features: [
      "3 sitios web activos",
      "Dominio personalizado incluido",
      "IA ilimitada",
      "Analytics completo",
      "WhatsApp premium",
      "Soporte prioritario 24h",
      "Integraciones básicas",
    ],
    missing: ["Sitios ilimitados", "White-label", "API access"],
  },
  {
    name: "Business",
    price: { monthly: 49, annual: 39 },
    desc: "Para agencias y equipos que gestionan clientes",
    cta: "Prueba 14 días gratis",
    href: "/crear",
    popular: false,
    features: [
      "Sitios ilimitados",
      "Dominios ilimitados",
      "IA ilimitada",
      "White-label (tu marca)",
      "Panel multi-cliente",
      "API access completo",
      "Account manager dedicado",
      "SLA 99.9% uptime",
    ],
    missing: [],
  },
];

const COMPARE_ROWS = [
  {
    category: "Sitios web",
    rows: [
      { label: "Sitios activos", starter: "1", personal: "3", business: "Ilimitados" },
      { label: "Dominio personalizado", starter: false, personal: true, business: true },
      { label: "Subdominio gratis", starter: true, personal: true, business: true },
    ],
  },
  {
    category: "IA",
    rows: [
      { label: "Generación con IA", starter: "3/mes", personal: "Ilimitada", business: "Ilimitada" },
      { label: "Personalización IA", starter: false, personal: true, business: true },
    ],
  },
  {
    category: "Dominio",
    rows: [
      { label: "Dominio incluido", starter: false, personal: true, business: true },
      { label: "SSL gratuito", starter: true, personal: true, business: true },
    ],
  },
  {
    category: "Soporte",
    rows: [
      { label: "Soporte por email", starter: true, personal: true, business: true },
      { label: "Soporte prioritario 24h", starter: false, personal: true, business: true },
      { label: "Account manager", starter: false, personal: false, business: true },
    ],
  },
  {
    category: "Avanzado",
    rows: [
      { label: "Analytics completo", starter: false, personal: true, business: true },
      { label: "WhatsApp premium", starter: false, personal: true, business: true },
      { label: "White-label", starter: false, personal: false, business: true },
      { label: "API access", starter: false, personal: false, business: true },
      { label: "Panel multi-cliente", starter: false, personal: false, business: true },
      { label: "SLA 99.9% uptime", starter: false, personal: false, business: true },
    ],
  },
];

const FAQS = [
  {
    q: "¿Puedo cambiar de plan después?",
    a: "Sí, puedes subir o bajar de plan en cualquier momento desde tu panel de control. Los cambios se aplican de inmediato y el cobro se ajusta de forma proporcional.",
  },
  {
    q: "¿Hay período de prueba?",
    a: "Sí, Personal y Business tienen 14 días gratis sin necesidad de tarjeta de crédito. Puedes explorar todas las funciones sin compromisos.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Aceptamos tarjetas de crédito y débito (Visa, Mastercard, Amex), PayPal y transferencia bancaria. Todos los pagos son procesados de forma segura.",
  },
  {
    q: "¿Puedo cancelar en cualquier momento?",
    a: "Sí, cancelas cuando quieras sin penalización ni períodos mínimos. Si cancelas en período anual, te reembolsamos los meses restantes.",
  },
  {
    q: "¿El dominio está incluido?",
    a: "En Personal y Business sí, incluye un dominio .com gratuito por un año con renovación automática incluida en el plan.",
  },
  {
    q: "¿Qué pasa si supero el límite?",
    a: "Te avisamos antes de llegar al límite y puedes actualizar tu plan con un solo clic. Nunca cortamos el servicio sin previo aviso.",
  },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M5 13l4 4L19 7" stroke="#22c55e" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
      <path d="M18 6L6 18M6 6l12 12" stroke="#d1d5db" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

function TableCheck({ val }: { val: boolean | string }) {
  if (typeof val === "boolean") {
    return val ? (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M5 13l4 4L19 7" stroke="#22c55e" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ) : (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M18 6L6 18M6 6l12 12" stroke="#e5e7eb" strokeWidth={2} strokeLinecap="round" />
      </svg>
    );
  }
  return <span style={{ fontSize: 13, color: "#6b7280" }}>{val}</span>;
}

export default function PreciosPage() {
  const [annual, setAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#1a1a1a",
      }}
    >
      <Navbar />

      {/* Hero */}
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 60,
          textAlign: "center",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#9ca3af",
              marginBottom: 16,
              fontWeight: 500,
            }}
          >
            Precios
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 16,
              color: "#1a1a1a",
            }}
          >
            Precios simples y transparentes
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#6b7280",
              marginBottom: 40,
              maxWidth: 500,
              margin: "0 auto 40px",
              lineHeight: 1.65,
            }}
          >
            Sin costos ocultos. Sin sorpresas. Elige el plan que mejor se adapta a tu negocio.
          </p>

          {/* Toggle mensual/anual */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
              borderRadius: 99,
              padding: "6px 8px",
            }}
          >
            <button
              onClick={() => setAnnual(false)}
              style={{
                padding: "8px 20px",
                borderRadius: 99,
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                border: "none",
                background: !annual ? "#1a1a1a" : "transparent",
                color: !annual ? "#ffffff" : "#6b7280",
                transition: "all 0.2s ease",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Mensual
            </button>
            <button
              onClick={() => setAnnual(true)}
              style={{
                padding: "8px 20px",
                borderRadius: 99,
                fontSize: 14,
                fontWeight: 500,
                cursor: "pointer",
                border: "none",
                background: annual ? "#1a1a1a" : "transparent",
                color: annual ? "#ffffff" : "#6b7280",
                transition: "all 0.2s ease",
                display: "flex",
                alignItems: "center",
                gap: 8,
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Anual
              <span
                style={{
                  fontSize: 10,
                  padding: "2px 8px",
                  borderRadius: 99,
                  background: "#dcfce7",
                  color: "#16a34a",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                −20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Plan cards */}
      <section style={{ padding: "60px 0 80px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            alignItems: "start",
          }}
        >
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              style={{
                border: plan.popular ? "2px solid #1a1a1a" : "1px solid #e5e7eb",
                borderRadius: 12,
                padding: 40,
                display: "flex",
                flexDirection: "column",
                position: "relative",
                backgroundColor: "#ffffff",
              }}
            >
              {plan.popular && (
                <div
                  style={{
                    position: "absolute",
                    top: -13,
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#1a1a1a",
                    color: "#ffffff",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    padding: "4px 14px",
                    borderRadius: 99,
                    whiteSpace: "nowrap",
                    textTransform: "uppercase",
                  }}
                >
                  MÁS POPULAR
                </div>
              )}

              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#1a1a1a",
                  marginBottom: 4,
                }}
              >
                {plan.name}
              </h3>
              <p style={{ fontSize: 13, color: "#6b7280", marginBottom: 28 }}>{plan.desc}</p>

              <div style={{ marginBottom: 32 }}>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, lineHeight: 1 }}>
                  <span style={{ fontSize: 14, color: "#6b7280", alignSelf: "flex-start", marginTop: 8 }}>$</span>
                  <span
                    style={{
                      fontSize: 52,
                      fontWeight: 700,
                      color: "#1a1a1a",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    {annual ? plan.price.annual : plan.price.monthly}
                  </span>
                  {(annual ? plan.price.annual : plan.price.monthly) > 0 && (
                    <span style={{ fontSize: 13, color: "#9ca3af", marginBottom: 6 }}>/mes</span>
                  )}
                </div>
                {annual && plan.price.annual > 0 && (
                  <p style={{ fontSize: 12, color: "#9ca3af", marginTop: 6 }}>
                    Facturado anualmente (${plan.price.annual * 12}/año)
                  </p>
                )}
              </div>

              <Link
                href={plan.href}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "14px 28px",
                  borderRadius: 2,
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  marginBottom: 28,
                  backgroundColor: plan.popular ? "#1a1a1a" : "transparent",
                  color: plan.popular ? "#ffffff" : "#1a1a1a",
                  border: "1.5px solid #1a1a1a",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                {plan.cta}
              </Link>

              <div style={{ height: 1, backgroundColor: "#e5e7eb", marginBottom: 24 }} />

              <div style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                {plan.features.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#374151" }}>
                    <CheckIcon />
                    {f}
                  </div>
                ))}
                {plan.missing.map((f) => (
                  <div key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#d1d5db" }}>
                    <XIcon />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: 13, color: "#9ca3af", marginTop: 40 }}>
          Prueba 14 días gratis · Sin tarjeta de crédito · Cancela cuando quieras
        </p>
      </section>

      {/* Tabla comparativa */}
      <section
        style={{
          padding: "80px 0 100px",
          backgroundColor: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
              marginBottom: 8,
              textAlign: "center",
            }}
          >
            Comparación detallada
          </h2>
          <p style={{ textAlign: "center", color: "#6b7280", marginBottom: 48, fontSize: 15 }}>
            Todo lo que incluye cada plan, sin letra chica.
          </p>

          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              overflow: "hidden",
              backgroundColor: "#ffffff",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                padding: "16px 24px",
                backgroundColor: "#f9fafb",
                borderBottom: "1px solid #e5e7eb",
              }}
            >
              <div />
              {["Starter", "Personal", "Business"].map((p) => (
                <div
                  key={p}
                  style={{
                    textAlign: "center",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#1a1a1a",
                  }}
                >
                  {p}
                </div>
              ))}
            </div>

            {COMPARE_ROWS.map((section, si) => (
              <div key={section.category}>
                <div
                  style={{
                    padding: "12px 24px",
                    backgroundColor: "#f9fafb",
                    borderTop: si > 0 ? "1px solid #e5e7eb" : undefined,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#9ca3af",
                    }}
                  >
                    {section.category}
                  </span>
                </div>
                {section.rows.map((row, ri) => (
                  <div
                    key={row.label}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "2fr 1fr 1fr 1fr",
                      padding: "14px 24px",
                      borderTop: "1px solid #f3f4f6",
                      backgroundColor: ri % 2 === 0 ? "#ffffff" : "#fafafa",
                    }}
                  >
                    <span style={{ fontSize: 14, color: "#374151" }}>{row.label}</span>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <TableCheck val={row.starter} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <TableCheck val={row.personal} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <TableCheck val={row.business} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "80px 0 100px" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
          <h2
            style={{
              fontSize: 32,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
              marginBottom: 48,
              textAlign: "center",
            }}
          >
            Preguntas frecuentes
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {FAQS.map((faq, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
                  marginBottom: 8,
                }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "20px 24px",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "#1a1a1a",
                    fontSize: 15,
                    fontWeight: 500,
                    textAlign: "left",
                    gap: 16,
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  <span>{faq.q}</span>
                  <span
                    style={{
                      fontSize: 20,
                      color: "#9ca3af",
                      flexShrink: 0,
                      transition: "transform 0.2s ease",
                      transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)",
                    }}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div
                    style={{
                      padding: "16px 24px 20px",
                      fontSize: 14,
                      color: "#6b7280",
                      lineHeight: 1.7,
                      borderTop: "1px solid #f3f4f6",
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
