"use client";

import { useState, useEffect } from "react";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/app/[locale]/LocaleSwitcher";

interface NavbarProps {
  catalogLabel: string;
  aboutLabel: string;
}

export function Navbar({ catalogLabel, aboutLabel }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: catalogLabel, href: "/templates" },
    { label: aboutLabel, href: "/about" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        backgroundColor: scrolled
          ? "rgba(250,250,247,0.88)"
          : "rgba(250,250,247,0.96)",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid var(--border)"
          : "1px solid transparent",
        transition: "border-color 0.25s ease, background-color 0.25s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "0 clamp(1.25rem,4vw,2.5rem)",
          height: 58,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Wordmark */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: 18,
            color: "var(--fg-primary)",
            letterSpacing: "-0.025em",
            fontVariationSettings: "'opsz' 36, 'SOFT' 50",
            lineHeight: 1,
            flexShrink: 0,
          }}
        >
          nebbuler
        </Link>

        {/* Nav — Desktop */}
        <nav
          className="hidden md:flex"
          style={{ display: "flex", alignItems: "center", gap: 0 }}
        >
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href as never}
              style={{
                padding: "6px 14px",
                fontSize: 14,
                color: "var(--fg-secondary)",
                fontFamily: "var(--font-body)",
                fontWeight: 400,
                letterSpacing: "-0.005em",
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right — Desktop */}
        <div
          className="hidden md:flex"
          style={{ display: "flex", alignItems: "center", gap: 20 }}
        >
          <LocaleSwitcher />
        </div>

        {/* Hamburger — Mobile */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{ padding: 6, display: "flex", flexDirection: "column", gap: 4 }}
        >
          <span
            style={{
              display: "block",
              width: 20,
              height: 1.5,
              background: "var(--fg-primary)",
              transition: "transform 0.2s",
              transform: menuOpen
                ? "rotate(45deg) translate(3.5px, 3.5px)"
                : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 20,
              height: 1.5,
              background: "var(--fg-primary)",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          />
          <span
            style={{
              display: "block",
              width: 20,
              height: 1.5,
              background: "var(--fg-primary)",
              transition: "transform 0.2s",
              transform: menuOpen
                ? "rotate(-45deg) translate(3.5px, -3.5px)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            background: "var(--bg-primary)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div
            style={{
              padding: "16px clamp(1.25rem,4vw,2.5rem) 24px",
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href as never}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "12px 0",
                  fontSize: 16,
                  color: "var(--fg-primary)",
                  fontFamily: "var(--font-body)",
                  fontWeight: 400,
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {label}
              </Link>
            ))}
            <div style={{ marginTop: 20 }}>
              <LocaleSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
