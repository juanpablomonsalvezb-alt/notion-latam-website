"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <>
      {/* ── Full-screen image hero ── */}
      <section
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: 600,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1800&h=1200&fit=crop&q=90"
          alt=""
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "brightness(0.28)",
          }}
        />

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "40%",
            background: "linear-gradient(to top, #0a0a0a 0%, transparent 100%)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "0 24px",
            maxWidth: 860,
            animation: "heroFadeIn 0.7s ease forwards",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(44px, 7.5vw, 82px)",
              fontWeight: 500,
              color: "#ffffff",
              lineHeight: 1.07,
              letterSpacing: "-0.03em",
              margin: "0 0 24px",
            }}
          >
            Tu sitio web hace tus ideas realidad
          </h1>

          <p
            style={{
              fontSize: 16,
              color: "rgba(255,255,255,0.6)",
              marginBottom: 44,
              letterSpacing: "0.01em",
            }}
          >
            Comienza gratuitamente. No hace falta tarjeta.
          </p>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link
              href="/crear"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#ffffff",
                color: "#0a0a0a",
                fontSize: 13,
                fontWeight: 700,
                padding: "16px 52px",
                borderRadius: 3,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Comenzar
            </Link>
            <Link
              href="/plantillas"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "transparent",
                color: "#ffffff",
                fontSize: 13,
                fontWeight: 700,
                padding: "16px 52px",
                borderRadius: 3,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                border: "1.5px solid rgba(255,255,255,0.4)",
              }}
            >
              Ver plantillas
            </Link>
          </div>
        </div>
      </section>

      {/* ── Video demo (separate section below hero) ── */}
      <section
        style={{
          backgroundColor: "#0a0a0a",
          padding: "80px 24px 100px",
        }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <p
            style={{
              textAlign: "center",
              fontSize: 12,
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: 36,
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Mira cómo funciona
          </p>
          <div
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "56.25%",
              borderRadius: 14,
              overflow: "hidden",
              boxShadow: "0 32px 100px rgba(0,0,0,0.7)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/QYU8zydUqD8?autoplay=0&rel=0&modestbranding=1"
              title="Demo Orbbi — Tu sitio web listo en minutos"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </div>
        </div>
      </section>

      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
}
