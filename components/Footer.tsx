"use client";

import Link from "next/link";

const LINKS: Record<string, { label: string; href: string }[]> = {
  Producto: [
    { label: "Plantillas", href: "/plantillas" },
    { label: "Precios", href: "/precios" },
    { label: "Funciones", href: "/funciones" },
    { label: "Crear sitio", href: "/crear" },
  ],
  Recursos: [
    { label: "Blog", href: "/blog" },
    { label: "Guías", href: "/guias" },
    { label: "Soporte", href: "/soporte" },
  ],
  Empresa: [
    { label: "Sobre nosotros", href: "/sobre" },
    { label: "Contacto", href: "/contacto" },
  ],
  Legal: [
    { label: "Privacidad", href: "/privacidad" },
    { label: "Términos", href: "/terminos" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#000000",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "72px 24px 48px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.5fr 1fr 1fr 1fr 1fr",
            gap: 40,
          }}
          className="orbbi-footer-grid"
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                fontWeight: 700,
                fontSize: 18,
                color: "#ffffff",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 16,
              }}
            >
              Orbbi
            </Link>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.3)", lineHeight: 1.7, maxWidth: 220, margin: 0 }}>
              Crea tu sitio web profesional con inteligencia artificial. Para negocios de toda América Latina.
            </p>
          </div>

          {Object.entries(LINKS).map(([cat, items]) => (
            <div key={cat}>
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 20,
                }}
              >
                {cat}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      style={{ fontSize: 13, color: "rgba(255,255,255,0.35)" }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#ffffff")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)")}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.05)", margin: "48px 0 28px" }} />

        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
            © 2025 Orbbi LATAM. Todos los derechos reservados.
          </span>
          <span style={{ fontSize: 12, color: "rgba(255,255,255,0.2)" }}>
            Hecho con ♥ en América Latina
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .orbbi-footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .orbbi-footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
