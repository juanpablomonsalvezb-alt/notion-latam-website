"use client";

import Link from "next/link";

const FEATURES = [
  {
    title: "Edición de sitios web",
    desc: "Personaliza fácilmente los detalles de tu diseño con nuestro vanguardista editor de arrastrar y soltar.",
    cta: "Explorar",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=360&fit=crop&q=80",
  },
  {
    title: "Diseño inteligente",
    desc: "Tu asistente creativo de IA para generar diseños, imágenes y contenido diseñado exclusivamente para ti.",
    cta: "Explorar",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&h=360&fit=crop&q=80",
  },
  {
    title: "Correo empresarial",
    desc: "Establece legitimidad a tu negocio con un correo electrónico con tu empresa de Google Workspace.",
    cta: "Explorar",
    img: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=500&h=360&fit=crop&q=80",
  },
  {
    title: "Dominios",
    desc: "Encuentra el dominio de tus sueños. Incluye privacidad de WHOIS, SSL y dominios premium gratuitos.",
    cta: "Explorar",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=360&fit=crop&q=80",
  },
];

export default function Features() {
  return (
    <section
      style={{
        backgroundColor: "#f2f0eb",
        padding: "100px 24px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            marginBottom: 64,
            alignItems: "end",
          }}
          className="orbbi-features-header"
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 500,
              color: "#0a0a0a",
              letterSpacing: "-0.025em",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            Todo lo que necesitas
            <br />en una sola plataforma
          </h2>
          <p
            style={{
              fontSize: 15,
              color: "#555",
              lineHeight: 1.75,
              margin: 0,
            }}
          >
            Impulsa tu día a día con todas las herramientas y sugerencias de IA que necesitas para gestionar
            tu negocio, integradas sin inconvenientes en un solo lugar.
          </p>
        </div>

        {/* 4-card grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 12,
          }}
          className="orbbi-features-grid"
        >
          {FEATURES.map((f, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#1a1a1a",
                borderRadius: 12,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={f.img}
                alt={f.title}
                style={{
                  width: "100%",
                  height: 180,
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Text */}
              <div style={{ padding: "24px 22px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#ffffff",
                    margin: "0 0 10px",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.3,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: "0 0 20px",
                    flex: 1,
                  }}
                >
                  {f.desc}
                </p>
                <Link
                  href="/funciones"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: 13,
                    color: "rgba(255,255,255,0.6)",
                    borderBottom: "1px solid rgba(255,255,255,0.2)",
                    paddingBottom: 2,
                    width: "fit-content",
                  }}
                >
                  {f.cta}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .orbbi-features-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .orbbi-features-grid { grid-template-columns: 1fr !important; }
          .orbbi-features-header { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </section>
  );
}
