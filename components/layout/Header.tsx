"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function Header() {
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "TEMPLATES", href: `/${locale}/templates`, chevron: true },
    { label: "MONDAY", href: `/${locale}/monday/templates` },
    { label: "BUNDLES", href: `/${locale}/bundles` },
    { label: "BLOG", href: `/${locale}/blog` },
    { label: "NOSOTROS", href: `/${locale}/sobre-nosotros` },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 9999,
        width: "100%",
        backgroundColor: "#000000",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 24px",
        }}
      >
        {/* LEFT: Logo */}
        <Link
          href={`/${locale}`}
          style={{
            fontFamily: "var(--font-titillium, sans-serif)",
            fontSize: "1rem",
            fontWeight: 400,
            textTransform: "uppercase",
            color: "white",
            letterSpacing: "0.05em",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          NEBBULER
        </Link>

        {/* CENTER: Desktop nav */}
        <div
          className="hidden lg:flex"
          style={{ alignItems: "center", gap: "8px" }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                height: "28px",
                overflow: "hidden",
                textDecoration: "none",
                position: "relative",
                paddingRight: "16px",
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "56px",
                  transition: "transform 500ms ease",
                }}
                className="group-hover:-translate-y-7"
              >
                <span
                  style={{
                    display: "block",
                    height: "28px",
                    lineHeight: "28px",
                    color: "white",
                    fontSize: "0.9rem",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    display: "block",
                    height: "28px",
                    lineHeight: "28px",
                    color: "white",
                    fontSize: "0.9rem",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label}
                </span>
              </span>
              {item.chevron && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  style={{ flexShrink: 0, marginLeft: "-12px" }}
                >
                  <path
                    d="M2 4L6 8L10 4"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Link>
          ))}
        </div>

        {/* RIGHT: Icons + mobile hamburger */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Search icon */}
          <button
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
            aria-label="Buscar"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="13" cy="11" r="6.25" stroke="white" strokeWidth="1.5" />
              <line x1="3.5" y1="19.44" x2="12.5" y2="11.44" stroke="white" strokeWidth="1.5" />
            </svg>
          </button>

          {/* Account icon */}
          <button
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
            aria-label="Cuenta"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="3.25" stroke="white" strokeWidth="1.5" />
              <path d="M4 20L8.267 14H15.733L20 20" stroke="white" strokeWidth="1.5" />
            </svg>
          </button>

          {/* Hamburger (mobile only) */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
            aria-label="Menú"
          >
            {mobileOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line x1="5" y1="5" x2="19" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="19" y1="5" x2="5" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <line x1="4" y1="7" x2="20" y2="7" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="4" y1="12" x2="20" y2="12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="4" y1="17" x2="20" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "#000000",
            zIndex: 9998,
            display: "flex",
            flexDirection: "column",
            paddingTop: "80px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{
              position: "absolute",
              top: "16px",
              right: "24px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
            aria-label="Cerrar menú"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <line x1="5" y1="5" x2="19" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="19" y1="5" x2="5" y2="19" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <nav style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontFamily: "var(--font-titillium, sans-serif)",
                  fontSize: "2rem",
                  fontWeight: 400,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.1)",
                  display: "block",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
