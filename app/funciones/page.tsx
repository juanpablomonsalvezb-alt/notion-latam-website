"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const FEATURES = [
  { icon: "🌐", title: "Sitio web profesional", desc: "Tu landing page con diseño premium, lista en minutos." },
  { icon: "🤖", title: "IA generativa", desc: "Contenido, textos e imágenes generados automáticamente." },
  { icon: "📱", title: "100% responsive", desc: "Se ve perfecto en móvil, tablet y escritorio." },
  { icon: "💬", title: "WhatsApp integrado", desc: "Botón directo a tu WhatsApp en tu sitio." },
  { icon: "📊", title: "Analytics", desc: "Visitas, fuentes de tráfico y conversiones en tiempo real." },
  { icon: "🎨", title: "Editor visual", desc: "Cambia todo sin código. Colores, fuentes, secciones." },
  { icon: "🚀", title: "Publicación en 1 clic", desc: "Hosting, SSL y CDN incluidos. Tu sitio, siempre rápido." },
  { icon: "🔗", title: "Integraciones", desc: "Conecta con Google Analytics, Facebook Pixel y más." },
];

const BENEFITS_1 = [
  "Sitio listo en menos de 5 minutos",
  "Textos e imágenes generados por IA",
  "Adaptado a tu industria y negocio",
  "Sin necesidad de diseñador ni programador",
];

const BENEFITS_2 = [
  "Arrastra y suelta secciones fácilmente",
  "Cambia colores, fuentes y textos al instante",
  "Vista previa en tiempo real",
  "Exporta o publica directamente desde el editor",
];

function CheckRow({ text }: { text: string }) {
  return (
    <li style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
        <circle cx="12" cy="12" r="11" stroke="#e5e7eb" strokeWidth="1.5" />
        <path d="M7 12l3.5 3.5L17 8" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span style={{ fontSize: 15, color: "#374151" }}>{text}</span>
    </li>
  );
}

export default function FuncionesPage() {
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
            Funciones
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 56px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 20,
              color: "#1a1a1a",
              maxWidth: 720,
              margin: "0 auto 20px",
            }}
          >
            Todo lo que necesitas para tener presencia online
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#6b7280",
              maxWidth: 500,
              margin: "0 auto 40px",
              lineHeight: 1.65,
            }}
          >
            Una plataforma completa para crear, publicar y hacer crecer tu negocio digital.
          </p>
          <Link
            href="/crear"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#1a1a1a",
              color: "#ffffff",
              fontSize: 14,
              fontWeight: 600,
              padding: "14px 32px",
              borderRadius: 2,
              textDecoration: "none",
              border: "1.5px solid #1a1a1a",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Empezar gratis
          </Link>
        </div>
      </section>

      {/* Feature principal — split izquierda */}
      <section style={{ padding: "100px 0" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
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
              src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=600&fit=crop&q=80"
              alt="IA generativa"
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
              Función estrella
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 36px)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: "#1a1a1a",
                marginBottom: 16,
              }}
            >
              Generación con IA en segundos
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#6b7280",
                lineHeight: 1.75,
                marginBottom: 28,
              }}
            >
              Describe tu negocio con unas pocas palabras y nuestra IA crea una landing page
              completa con textos, imágenes y estructura profesional. En segundos, no en días.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {BENEFITS_1.map((b) => (
                <CheckRow key={b} text={b} />
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Grid 2x4 de features */}
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
            Todas las herramientas en un solo lugar
          </h2>
          <p
            style={{
              textAlign: "center",
              color: "#6b7280",
              marginBottom: 56,
              fontSize: 15,
            }}
          >
            Sin integraciones complicadas. Todo funciona de inmediato.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 20,
            }}
          >
            {FEATURES.map((f) => (
              <div
                key={f.title}
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  padding: 28,
                }}
              >
                <div style={{ fontSize: 28, marginBottom: 16 }}>{f.icon}</div>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: 8,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {f.title}
                </h3>
                <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6, margin: 0 }}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature split inverso — imagen derecha */}
      <section style={{ padding: "100px 0" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 60,
            alignItems: "center",
          }}
          className="orbbi-split-grid"
        >
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
              Editor visual
            </p>
            <h2
              style={{
                fontSize: "clamp(28px, 3vw, 36px)",
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
                color: "#1a1a1a",
                marginBottom: 16,
              }}
            >
              Editor visual sin código
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#6b7280",
                lineHeight: 1.75,
                marginBottom: 28,
              }}
            >
              Personaliza cada detalle de tu sitio sin escribir una sola línea de código.
              El editor en tiempo real te muestra el resultado final mientras editas.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {BENEFITS_2.map((b) => (
                <CheckRow key={b} text={b} />
              ))}
            </ul>
            <div style={{ marginTop: 36 }}>
              <Link
                href="/crear"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#1a1a1a",
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "14px 32px",
                  borderRadius: 2,
                  textDecoration: "none",
                  border: "1.5px solid #1a1a1a",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Probar el editor
              </Link>
            </div>
          </div>

          <div
            style={{
              borderRadius: 12,
              overflow: "hidden",
              border: "1px solid #e5e7eb",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&q=80"
              alt="Editor visual"
              style={{ width: "100%", display: "block", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section
        style={{
          padding: "0 0 100px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              backgroundColor: "#1a1a1a",
              borderRadius: 12,
              padding: "72px 48px",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 500,
                color: "#ffffff",
                letterSpacing: "-0.02em",
                marginBottom: 12,
              }}
            >
              Empieza a construir tu presencia digital
            </h2>
            <p
              style={{
                fontSize: 17,
                color: "#9ca3af",
                marginBottom: 36,
              }}
            >
              Únete a más de 2,400 negocios que ya confían en Orbbi.
            </p>
            <Link
              href="/crear"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 32px",
                borderRadius: 2,
                background: "#ffffff",
                color: "#1a1a1a",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Empezar gratis
            </Link>
          </div>
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
