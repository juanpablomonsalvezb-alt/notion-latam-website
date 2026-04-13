"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const STATS = [
  { value: "2,400+", label: "negocios activos" },
  { value: "16", label: "países" },
  { value: "5 min", label: "tiempo promedio" },
  { value: "98%", label: "satisfacción" },
];

const VALUES = [
  {
    icon: "⚡",
    title: "Velocidad",
    desc: "De la idea al sitio publicado en minutos, no en semanas.",
  },
  {
    icon: "🎯",
    title: "Simplicidad",
    desc: "Sin código, sin diseñador, sin complicaciones innecesarias.",
  },
  {
    icon: "🌎",
    title: "Para LATAM",
    desc: "Construido para los emprendedores de América Latina.",
  },
];

const TEAM = [
  { initials: "JP", name: "Juan Pablo M.", role: "CEO & Co-fundador" },
  { initials: "AL", name: "Ana López", role: "CTO & Co-fundadora" },
  { initials: "MR", name: "Marcos Ruiz", role: "Head of Design" },
];

export default function SobrePage() {
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
          paddingBottom: 80,
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
            Sobre nosotros
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: 500,
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              color: "#1a1a1a",
              maxWidth: 820,
              margin: "0 auto 24px",
            }}
          >
            Construimos el futuro digital de América Latina
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#6b7280",
              maxWidth: 540,
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Somos un equipo apasionado por hacer la tecnología accesible para todos los emprendedores de la región.
          </p>
        </div>
      </section>

      {/* Mission split */}
      <section style={{ padding: "100px 0" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="orbbi-split-grid"
        >
          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid #e5e7eb",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80"
              alt="Equipo Orbbi"
              style={{ width: "100%", display: "block", objectFit: "cover" }}
            />
          </div>

          <div>
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#9ca3af",
                fontWeight: 500,
                marginBottom: 20,
              }}
            >
              Nuestra historia
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 36px)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: "#1a1a1a",
                marginBottom: 20,
              }}
            >
              Nuestra misión
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#6b7280",
                lineHeight: 1.8,
              }}
            >
              En Orbbi creemos que toda pequeña empresa merece una presencia digital profesional.
              No importa el tamaño ni el presupuesto — con la tecnología correcta, cualquier negocio
              puede competir al nivel de las grandes marcas. Fundamos Orbbi para democratizar el
              acceso al diseño web en LATAM, usando inteligencia artificial para reducir el tiempo y
              el costo de crear una landing page de cero a publicada.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section
        style={{
          padding: "80px 0",
          backgroundColor: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: 40,
            textAlign: "center",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.label}
              style={{
                paddingRight: i < STATS.length - 1 ? 40 : 0,
                borderRight: i < STATS.length - 1 ? "1px solid #e5e7eb" : "none",
              }}
            >
              <div
                style={{
                  fontSize: 52,
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  color: "#1a1a1a",
                  marginBottom: 8,
                }}
              >
                {s.value}
              </div>
              <div style={{ fontSize: 15, color: "#6b7280" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "100px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#9ca3af",
              fontWeight: 500,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            Valores
          </p>
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
            Lo que nos guía
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
              marginBottom: 56,
              fontSize: 15,
            }}
          >
            Nuestros principios fundamentales como empresa.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {VALUES.map((v) => (
              <div
                key={v.title}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: 36,
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 40, marginBottom: 16 }}>{v.icon}</div>
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: 10,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ fontSize: 15, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
            El equipo detrás de Orbbi
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
              marginBottom: 56,
              fontSize: 15,
            }}
          >
            Personas apasionadas por la tecnología y el emprendimiento en LATAM.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: 24,
            }}
          >
            {TEAM.map((member) => (
              <div
                key={member.name}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: 36,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    backgroundColor: "#1a1a1a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#ffffff",
                    letterSpacing: "0.05em",
                  }}
                >
                  {member.initials}
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: 6,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {member.name}
                </h3>
                <p style={{ fontSize: 13, color: "#6b7280", margin: 0 }}>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "80px 0 100px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: 36,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
              marginBottom: 12,
            }}
          >
            ¿Quieres saber más?
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "#6b7280",
              marginBottom: 36,
              lineHeight: 1.65,
            }}
          >
            Estamos felices de contarte más sobre nuestra visión y cómo podemos ayudarte.
          </p>
          <Link
            href="/contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              color: "#1a1a1a",
              fontSize: 14,
              fontWeight: 600,
              padding: "14px 32px",
              borderRadius: 2,
              textDecoration: "none",
              border: "1.5px solid #1a1a1a",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Contáctanos
          </Link>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .orbbi-split-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
        }
      `}</style>
    </div>
  );
}
