"use client";

import { useEffect, useState } from "react";

const ITEMS = [
  {
    name: "María Camila Torres",
    role: "Fundadora — Studio Bloom",
    text: "Antes gastaba 3 semanas y $800 USD con una agencia. Con Orbbi la tuve en 8 minutos y se ve mejor. No lo podía creer.",
    av: "MC",
  },
  {
    name: "Rodrigo Espinoza",
    role: "Dueño — Ferretería Don Rodrigo",
    text: "Tengo 60 años y jamás pensé que podría hacer mi propia página web. La IA entendió todo desde el primer intento.",
    av: "RE",
  },
  {
    name: "Valentina Ríos",
    role: "Nutricionista · Buenos Aires",
    text: "El WhatsApp integrado fue clave. Empecé a recibir consultas desde el mismo día que publiqué.",
    av: "VR",
  },
  {
    name: "Javier Mendoza",
    role: "CEO — Tech Soluciones · México",
    text: "Lo que antes tardaba 2 semanas ahora está listo en media hora. El ahorro en tiempo es brutal.",
    av: "JM",
  },
  {
    name: "Daniela Herrera",
    role: "Estilista — The Look Studio · Lima",
    text: "Intenté con Wix, con Squarespace, con todas. Ninguna entendió mi estética. Orbbi sí.",
    av: "DH",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((p) => (p + 1) % ITEMS.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      style={{
        backgroundColor: "#0a0a0a",
        padding: "120px 24px",
        fontFamily: "Inter, system-ui, sans-serif",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <p
          style={{
            fontSize: 11,
            color: "rgba(255,255,255,0.3)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 56,
          }}
        >
          Testimonios
        </p>

        {/* Quote */}
        <blockquote
          key={active}
          style={{
            margin: "0 0 40px",
            animation: "orbbi-fade 0.4s ease forwards",
          }}
        >
          <p
            style={{
              fontSize: "clamp(18px, 2.5vw, 24px)",
              fontWeight: 400,
              color: "#ffffff",
              lineHeight: 1.6,
              letterSpacing: "-0.01em",
              marginBottom: 32,
            }}
          >
            &ldquo;{ITEMS[active].text}&rdquo;
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: "#222",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 12,
                fontWeight: 600,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {ITEMS[active].av}
            </div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#ffffff" }}>{ITEMS[active].name}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>{ITEMS[active].role}</div>
            </div>
          </div>
        </blockquote>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          {ITEMS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: active === i ? 20 : 6,
                height: 6,
                borderRadius: 99,
                backgroundColor: active === i ? "#ffffff" : "rgba(255,255,255,0.2)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.25s ease",
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes orbbi-fade {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
