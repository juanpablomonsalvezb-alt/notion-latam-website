"use client";

import Link from "next/link";
import { useLocale } from "next-intl";

export default function Footer() {
  const locale = useLocale();

  const col1 = [
    { label: "Nosotros", href: `/${locale}/sobre-nosotros` },
    { label: "Licencia", href: `/${locale}/licencia` },
    { label: "Tienda", href: `/${locale}/templates` },
  ];

  const col2 = [
    { label: "Contacto", href: `/${locale}/contacto` },
    { label: "Blog", href: `/${locale}/blog` },
    { label: "FAQ", href: `/${locale}/faq` },
  ];

  const col3 = [
    { label: "Términos", href: `/${locale}/terminos` },
    { label: "Privacidad", href: `/${locale}/privacidad` },
  ];

  const linkStyle: React.CSSProperties = {
    fontSize: "0.875rem",
    color: "rgba(0,0,0,0.7)",
    textDecoration: "none",
    display: "block",
    marginBottom: "12px",
    transition: "color 0.2s",
  };

  return (
    <footer style={{ backgroundColor: "#d9d9d9" }}>
      <div className="max-w-none px-6 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* LEFT: col-span-2 wordmark + copyright */}
          <div className="lg:col-span-2">
            <Link href={`/${locale}`} style={{ textDecoration: "none" }}>
              <div
                style={{
                  fontFamily: "var(--font-bebas, sans-serif)",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                  lineHeight: "0.9",
                  color: "#000",
                  fontWeight: 400,
                  letterSpacing: "0.02em",
                  marginBottom: "20px",
                }}
              >
                <div>WORKSPACE</div>
                <div>LATAM</div>
              </div>
            </Link>
            <small
              style={{
                fontSize: "0.75rem",
                color: "rgba(0,0,0,0.6)",
                display: "block",
              }}
            >
              © 2026 WorkspaceLATAM. Todos los derechos reservados.
            </small>
          </div>

          {/* RIGHT: 3 columns of links */}
          <div>
            {col1.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={linkStyle}
                className="hover:!text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            {col2.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={linkStyle}
                className="hover:!text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div>
            {col3.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                style={linkStyle}
                className="hover:!text-black"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #000" }} className="px-6">
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            padding: "16px 0",
            margin: 0,
            listStyle: "none",
          }}
        >
          <li>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.7)", textDecoration: "none" }}
              className="hover:!text-black"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.7)", textDecoration: "none" }}
              className="hover:!text-black"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.7)", textDecoration: "none" }}
              className="hover:!text-black"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "0.875rem", color: "rgba(0,0,0,0.7)", textDecoration: "none" }}
              className="hover:!text-black"
            >
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
