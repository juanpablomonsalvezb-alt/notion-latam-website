"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 64,
        backgroundColor: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "background 0.3s ease, border 0.3s ease",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 32px",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontWeight: 700,
            fontSize: 18,
            color: "#ffffff",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Orbbi
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 36 }} className="orbbi-nav-desktop">
          {["Productos", "Soluciones", "Recursos"].map((label) => (
            <button
              key={label}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontSize: 14,
                color: "rgba(255,255,255,0.75)",
                fontFamily: "Inter, system-ui, sans-serif",
                display: "flex",
                alignItems: "center",
                gap: 4,
                padding: 0,
                letterSpacing: "0.01em",
              }}
            >
              {label}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }} className="orbbi-nav-desktop">
          <Link
            href="/login"
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.7)",
              letterSpacing: "0.01em",
            }}
          >
            Iniciar sesión
          </Link>
          <Link
            href="/crear"
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#0a0a0a",
              backgroundColor: "#ffffff",
              padding: "10px 22px",
              borderRadius: 3,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
            }}
          >
            Empezar
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="orbbi-nav-mobile"
          style={{ background: "none", border: "none", cursor: "pointer", color: "#ffffff", padding: 4 }}
          aria-label="Menú"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="3" y1="16" x2="21" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: 64,
            left: 0,
            right: 0,
            backgroundColor: "#0d0d0d",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
            padding: "20px 32px 28px",
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
        >
          {["Productos", "Soluciones", "Recursos", "Iniciar sesión"].map((l) => (
            <Link
              key={l}
              href="#"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 15, color: "rgba(255,255,255,0.8)" }}
            >
              {l}
            </Link>
          ))}
          <Link
            href="/crear"
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#0a0a0a",
              backgroundColor: "#ffffff",
              padding: "13px 22px",
              borderRadius: 3,
              textAlign: "center",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              marginTop: 4,
            }}
          >
            Empezar gratis
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .orbbi-nav-desktop { display: none !important; }
          .orbbi-nav-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .orbbi-nav-mobile { display: none !important; }
          .orbbi-nav-desktop { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
