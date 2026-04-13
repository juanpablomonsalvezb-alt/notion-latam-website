"use client";

import Link from "next/link";

const SITES = [
  {
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=600&h=420&fit=crop&q=85",
    label: "Tienda online",
  },
  {
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=420&fit=crop&q=85",
    label: "Restaurante",
  },
  {
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=420&fit=crop&q=85",
    label: "Oficina creativa",
  },
  {
    img: "https://images.unsplash.com/photo-1542038374-8b585a3d3caf?w=600&h=420&fit=crop&q=85",
    label: "Fotografía",
  },
  {
    img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=420&fit=crop&q=85",
    label: "Consultoría",
  },
  {
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=420&fit=crop&q=85",
    label: "Startup",
  },
];

// Perspective positions for 3D floating grid
const TRANSFORMS = [
  { tx: -520, ty: 60,  tz: -120, rx: 8,  ry: 22, scale: 0.78 },
  { tx: -260, ty: -20, tz: -40,  rx: 5,  ry: 14, scale: 0.88 },
  { tx:    0, ty: -60, tz: 40,   rx: 2,  ry: 2,  scale: 0.95 },
  { tx:  260, ty: -20, tz: -40,  rx: 5,  ry:-14, scale: 0.88 },
  { tx:  520, ty: 60,  tz: -120, rx: 8,  ry:-22, scale: 0.78 },
  { tx:    0, ty: 200, tz: -180, rx: 12, ry: 0,  scale: 0.68 },
];

export default function MockupGallery() {
  return (
    <section
      style={{
        backgroundColor: "#0a0a0a",
        padding: "120px 24px 80px",
        fontFamily: "Inter, system-ui, sans-serif",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 80 }}>
          <p
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.02em",
              marginBottom: 12,
            }}
          >
            emprendedores de todo el mundo
          </p>
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 500,
              color: "#ffffff",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Hecho con Orbbi
          </h2>
        </div>

        {/* 3D Perspective gallery */}
        <div
          style={{
            position: "relative",
            height: 420,
            perspective: "1200px",
          }}
          className="orbbi-gallery-wrap"
        >
          {SITES.map((site, i) => {
            const t = TRANSFORMS[i] || { tx: 0, ty: 0, tz: 0, rx: 0, ry: 0, scale: 1 };
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  width: 260,
                  height: 185,
                  marginLeft: -130,
                  marginTop: -92,
                  transform: `
                    translateX(${t.tx}px)
                    translateY(${t.ty}px)
                    translateZ(${t.tz}px)
                    rotateX(${t.rx}deg)
                    rotateY(${t.ry}deg)
                    scale(${t.scale})
                  `,
                  transformStyle: "preserve-3d",
                  borderRadius: 8,
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Browser bar */}
                <div
                  style={{
                    backgroundColor: "#1a1a1a",
                    padding: "6px 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                  }}
                >
                  {["#ff5f57","#febc2e","#28c840"].map((c) => (
                    <div key={c} style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: c }} />
                  ))}
                  <div
                    style={{
                      flex: 1,
                      height: 14,
                      borderRadius: 3,
                      backgroundColor: "rgba(255,255,255,0.06)",
                      marginLeft: 6,
                    }}
                  />
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={site.img}
                  alt={site.label}
                  style={{
                    width: "100%",
                    height: "calc(100% - 28px)",
                    objectFit: "cover",
                    display: "block",
                  }}
                />

                {/* Label overlay */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "8px 10px",
                    background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.6)",
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                  }}
                >
                  {site.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA below gallery */}
        <div style={{ textAlign: "center", marginTop: 64 }}>
          <Link
            href="/plantillas"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontSize: 14,
              color: "#ffffff",
              borderBottom: "1px solid rgba(255,255,255,0.3)",
              paddingBottom: 3,
              letterSpacing: "0.01em",
            }}
          >
            Ver todas las plantillas
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .orbbi-gallery-wrap { display: none !important; }
        }
      `}</style>
    </section>
  );
}
