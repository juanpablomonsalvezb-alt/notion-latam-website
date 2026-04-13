"use client";

import Link from "next/link";

export default function HowItWorks() {
  return (
    <section
      style={{
        backgroundColor: "#0d0d0d",
        padding: "120px 24px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 72 }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 24,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" fill="rgba(255,255,255,0.5)"/>
            </svg>
          </div>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 500,
              color: "#ffffff",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              margin: "0 0 16px",
            }}
          >
            Comenzar nunca ha sido
            <br />tan fácil gracias a la IA
          </h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.45)", margin: 0 }}>
            No hace falta tener experiencia.
          </p>
        </div>

        {/* Two cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
          className="orbbi-how-grid"
        >
          {/* Card 1: AI */}
          <Link
            href="/crear"
            style={{
              display: "block",
              backgroundColor: "#141414",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16,
              overflow: "hidden",
              textDecoration: "none",
              position: "relative",
              minHeight: 420,
            }}
          >
            {/* Card content bottom */}
            <div style={{ padding: "32px 36px 36px" }}>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 10,
                }}
              >
                Kit de diseño con IA
              </div>
            </div>

            {/* Chat mockup in the card */}
            <div
              style={{
                position: "absolute",
                top: 36,
                left: 36,
                right: 36,
                backgroundColor: "#1c1c1c",
                borderRadius: 12,
                padding: "20px 20px",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                  marginBottom: 16,
                }}
              >
                What site sections do you need?
              </div>
              {["Inicio", "Servicios", "Sobre nosotros", "Contacto"].map((s, i) => (
                <div
                  key={i}
                  style={{
                    display: "inline-block",
                    padding: "5px 12px",
                    borderRadius: 99,
                    border: "1px solid rgba(255,255,255,0.12)",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.6)",
                    marginRight: 8,
                    marginBottom: 8,
                  }}
                >
                  {s}
                </div>
              ))}
              <div
                style={{
                  marginTop: 12,
                  height: 2,
                  backgroundColor: "rgba(255,255,255,0.04)",
                  borderRadius: 99,
                }}
              />
              <div
                style={{
                  marginTop: 12,
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 6,
                }}
              >
                {[1, 2, 3, 4].map((j) => (
                  <div
                    key={j}
                    style={{
                      height: 48,
                      borderRadius: 6,
                      backgroundColor: j % 2 === 0 ? "#2a2a2a" : "#222",
                    }}
                  />
                ))}
              </div>
            </div>
          </Link>

          {/* Card 2: Templates */}
          <Link
            href="/plantillas"
            style={{
              display: "block",
              backgroundColor: "#141414",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 16,
              overflow: "hidden",
              textDecoration: "none",
              minHeight: 420,
            }}
          >
            <div style={{ padding: "32px 36px" }}>
              <div
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.35)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Plantillas profesionales
              </div>
            </div>

            {/* Template grid preview */}
            <div
              style={{
                margin: "0 24px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 8,
              }}
            >
              {[
                "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=300&h=200&fit=crop&q=80",
                "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&h=200&fit=crop&q=80",
                "https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop&q=80",
                "https://images.unsplash.com/photo-1542038374-8b585a3d3caf?w=300&h=200&fit=crop&q=80",
              ].map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt=""
                  style={{
                    width: "100%",
                    height: 110,
                    objectFit: "cover",
                    borderRadius: 8,
                    display: "block",
                  }}
                />
              ))}
            </div>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .orbbi-how-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
