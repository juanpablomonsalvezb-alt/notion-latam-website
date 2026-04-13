"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type FormData = {
  nombre: string;
  email: string;
  empresa: string;
  asunto: string;
  mensaje: string;
};

const FAQ_SOPORTE = [
  {
    q: "¿Cuánto demora la respuesta?",
    a: "Respondemos en menos de 24 horas hábiles. En planes Personal y Business el tiempo es aún menor gracias al soporte prioritario.",
  },
  {
    q: "¿Tienen soporte en español?",
    a: "Sí, todo nuestro soporte es en español. Somos un equipo latinoamericano y entendemos las necesidades de la región.",
  },
  {
    q: "¿Cómo reporto un error?",
    a: "Puedes enviarnos un email a hola@orbbi.com o escribirnos por WhatsApp. Incluye capturas de pantalla para que podamos ayudarte más rápido.",
  },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  border: "1px solid #e5e7eb",
  borderRadius: 4,
  padding: "12px 16px",
  fontSize: 14,
  background: "#ffffff",
  color: "#1a1a1a",
  outline: "none",
  boxSizing: "border-box",
  fontFamily: "Inter, system-ui, sans-serif",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  color: "#374151",
  marginBottom: 8,
  fontWeight: 500,
};

export default function ContactoPage() {
  const [form, setForm] = useState<FormData>({
    nombre: "",
    email: "",
    empresa: "",
    asunto: "Soporte técnico",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

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
            Contacto
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 14,
              color: "#1a1a1a",
            }}
          >
            Estamos aquí para ayudarte
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#6b7280",
              maxWidth: 480,
              lineHeight: 1.65,
            }}
          >
            Cuéntanos en qué podemos ayudarte y nos pondremos en contacto pronto.
          </p>
        </div>
      </section>

      {/* Grid 2 columnas */}
      <section style={{ padding: "60px 0 80px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "1.2fr 0.8fr",
            gap: 48,
            alignItems: "start",
          }}
          className="orbbi-contact-grid"
        >
          {/* Formulario */}
          <div
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: 40,
            }}
          >
            {enviado ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    backgroundColor: "#f0fdf4",
                    border: "1px solid #bbf7d0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13l4 4L19 7" stroke="#16a34a" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3
                  style={{
                    fontSize: 22,
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: 10,
                  }}
                >
                  ¡Mensaje enviado!
                </h3>
                <p style={{ fontSize: 15, color: "#6b7280", marginBottom: 24 }}>
                  Recibimos tu mensaje. Te responderemos en menos de 24 horas hábiles.
                </p>
                <button
                  onClick={() => {
                    setEnviado(false);
                    setForm({ nombre: "", email: "", empresa: "", asunto: "Soporte técnico", mensaje: "" });
                  }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                    color: "#1a1a1a",
                    fontSize: 14,
                    fontWeight: 600,
                    padding: "12px 24px",
                    borderRadius: 2,
                    border: "1.5px solid #1a1a1a",
                    cursor: "pointer",
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <div>
                  <label style={labelStyle}>
                    Nombre completo <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>
                    Email <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Empresa (opcional)</label>
                  <input
                    type="text"
                    name="empresa"
                    value={form.empresa}
                    onChange={handleChange}
                    placeholder="Nombre de tu empresa"
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle}>Asunto</label>
                  <select
                    name="asunto"
                    value={form.asunto}
                    onChange={handleChange}
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="Soporte técnico">Soporte técnico</option>
                    <option value="Consulta comercial">Consulta comercial</option>
                    <option value="Partnership">Partnership</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>
                    Mensaje <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#1a1a1a",
                    color: "#ffffff",
                    fontSize: 14,
                    fontWeight: 600,
                    padding: "14px 24px",
                    borderRadius: 2,
                    border: "1.5px solid #1a1a1a",
                    cursor: "pointer",
                    marginTop: 4,
                    fontFamily: "Inter, system-ui, sans-serif",
                  }}
                >
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>

          {/* Info de contacto */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Respuesta rápida */}
            <div
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                padding: 24,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 6,
                }}
              >
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8.5" stroke="#9ca3af" strokeWidth="1.2" />
                  <path d="M10 5.5V10l3 2" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontSize: 15, fontWeight: 600, color: "#1a1a1a" }}>
                  Respuesta en menos de 24 horas
                </span>
              </div>
              <p style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, marginLeft: 28, margin: "0 0 0 28px" }}>
                Nuestro equipo responde todos los días de la semana.
              </p>
            </div>

            {/* Email */}
            <div
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                padding: 24,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <rect x="2" y="4.5" width="16" height="11" rx="2" stroke="#9ca3af" strokeWidth="1.2" />
                    <path d="M2 7l8 5 8-5" stroke="#9ca3af" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <div>
                    <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 2, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      Email
                    </div>
                    <a
                      href="mailto:hola@orbbi.com"
                      style={{ fontSize: 14, color: "#1a1a1a", textDecoration: "underline", textUnderlineOffset: 2 }}
                    >
                      hola@orbbi.com
                    </a>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#9ca3af">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <div>
                    <div style={{ fontSize: 11, color: "#9ca3af", marginBottom: 2, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      WhatsApp
                    </div>
                    <a
                      href="https://wa.me/15550000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: 14, color: "#1a1a1a", textDecoration: "underline", textUnderlineOffset: 2 }}
                    >
                      +1 (555) 000-0000
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes */}
            <div
              style={{
                backgroundColor: "#f9fafb",
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                padding: 24,
              }}
            >
              <div style={{ fontSize: 12, color: "#9ca3af", marginBottom: 14, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                Síguenos
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                {[
                  { label: "Instagram", path: "M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z" },
                  { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.258 5.63 5.906-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
                  { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                ].map((sn) => (
                  <a
                    key={sn.label}
                    href="#"
                    aria-label={sn.label}
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 8,
                      border: "1px solid #e5e7eb",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#ffffff",
                      transition: "border-color 0.2s ease",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "#1a1a1a")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor = "#e5e7eb")
                    }
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#6b7280">
                      <path d={sn.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ de soporte */}
      <section
        style={{
          padding: "80px 0 100px",
          backgroundColor: "#f9fafb",
          borderTop: "1px solid #e5e7eb",
        }}
      >
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
          <h2
            style={{
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
              marginBottom: 36,
              textAlign: "center",
            }}
          >
            Preguntas frecuentes
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {FAQ_SOPORTE.map((faq, i) => (
              <div
                key={i}
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: 8,
                  overflow: "hidden",
                  backgroundColor: "#ffffff",
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

      <style>{`
        @media (max-width: 768px) {
          .orbbi-contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
