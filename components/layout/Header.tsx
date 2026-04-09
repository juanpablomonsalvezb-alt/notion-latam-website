"use client";

import { useState } from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

export default function Header() {
  const locale = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "Mockups",   href: `/${locale}/templates` },
    { label: "Monday",    href: `/${locale}/monday/templates` },
    { label: "Bundles",   href: `/${locale}/bundles` },
    { label: "Blog",      href: `/${locale}/blog` },
    { label: "Nosotros",  href: `/${locale}/sobre-nosotros` },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 9999999,
        width: "100%",
        backgroundColor: "#ffffff",
        borderBottom: "1px solid rgba(0,0,0,0.08)",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 24px",
        }}
      >
        {/* Logo */}
        <Link
          href={`/${locale}`}
          style={{
            fontFamily: "var(--font-titillium, sans-serif)",
            fontSize: "1.0625rem",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "#000",
            letterSpacing: "0.04em",
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          Nebbuler
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex" style={{ alignItems: "center", gap: 4 }}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="group"
              style={{
                display: "flex",
                alignItems: "center",
                height: 28,
                overflow: "hidden",
                textDecoration: "none",
                padding: "0 10px",
              }}
            >
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: 56,
                  transition: "transform 400ms cubic-bezier(0.76,0,0.24,1)",
                }}
                className="group-hover:-translate-y-7"
              >
                <span
                  style={{
                    display: "block",
                    height: 28,
                    lineHeight: "28px",
                    color: "#000",
                    fontSize: "0.875rem",
                    fontWeight: 400,
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-titillium, sans-serif)",
                  }}
                >
                  {item.label}
                </span>
                <span
                  style={{
                    display: "block",
                    height: 28,
                    lineHeight: "28px",
                    color: "#000",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.03em",
                    whiteSpace: "nowrap",
                    fontFamily: "var(--font-titillium, sans-serif)",
                  }}
                >
                  {item.label}
                </span>
              </span>
            </Link>
          ))}
        </div>

        {/* Right icons */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }} aria-label="Buscar">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="11" cy="11" r="6.25" stroke="#000" strokeWidth="1.5" />
              <line x1="15.8" y1="15.8" x2="21" y2="21" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex" }} aria-label="Cuenta">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="8" r="3.25" stroke="#000" strokeWidth="1.5" />
              <path d="M4 20C4 16.686 7.582 14 12 14C16.418 14 20 16.686 20 20" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            aria-label="Menú"
          >
            {mobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <line x1="5" y1="5" x2="19" y2="19" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="19" y1="5" x2="5" y2="19" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <line x1="3" y1="7" x2="21" y2="7" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="12" x2="21" y2="12" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="3" y1="17" x2="21" y2="17" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="lg:hidden"
          style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: "#fff",
            zIndex: 9999998,
            display: "flex",
            flexDirection: "column",
            paddingTop: 72,
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            style={{ position: "absolute", top: 18, right: 24, background: "none", border: "none", cursor: "pointer" }}
            aria-label="Cerrar"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <line x1="5" y1="5" x2="19" y2="19" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="19" y1="5" x2="5" y2="19" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <nav style={{ display: "flex", flexDirection: "column" }}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  color: "#000",
                  textDecoration: "none",
                  fontFamily: "var(--font-titillium, sans-serif)",
                  fontSize: "2rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  padding: "14px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
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
