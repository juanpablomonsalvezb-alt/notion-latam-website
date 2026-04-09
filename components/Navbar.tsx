"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "@/app/[locale]/LocaleSwitcher";

interface NavbarProps {
  templatesLabel: string;
  blogLabel: string;
  aboutLabel: string;
  browseLabel: string;
}

export function Navbar({ templatesLabel, blogLabel, aboutLabel, browseLabel }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const navLinks = [
    { label: templatesLabel, href: "/templates" },
    { label: blogLabel, href: "/blog" },
    { label: aboutLabel, href: "/about" },
  ];

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
        backgroundColor: scrolled ? "rgba(246,246,244,0.85)" : "rgba(246,246,244,0.95)",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(230,230,230,0.8)" : "1px solid transparent",
        transition: "all 0.25s ease",
      }}
    >
      <div style={{
        maxWidth: 1100,
        margin: "0 auto",
        padding: "0 28px",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
          <div style={{
            width: 30,
            height: 30,
            borderRadius: 8,
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <span style={{ color: "#fff", fontSize: 14, fontWeight: 800, letterSpacing: "-0.04em" }}>N</span>
          </div>
          <span style={{ fontSize: 15, fontWeight: 700, color: "#000", letterSpacing: "-0.01em" }}>Nebbuler</span>
        </Link>

        {/* Center Nav — Desktop */}
        <nav className="hidden md:flex" style={{ display: "flex", alignItems: "center", gap: 0 }}>
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href as never}
              style={{ padding: "6px 16px", fontSize: 14, color: "#484848", borderRadius: 100, fontWeight: 400, textDecoration: "none" }}
              className="hover:bg-black/5 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right — Desktop */}
        <div className="hidden md:flex" style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <LocaleSwitcher />
          <motion.div whileTap={{ scale: 0.97 }}>
            <Link
              href="/templates"
              style={{
                padding: "7px 18px",
                fontSize: 13,
                fontWeight: 600,
                color: "#fff",
                backgroundColor: "#000",
                borderRadius: 100,
                textDecoration: "none",
              }}
            >
              {browseLabel}
            </Link>
          </motion.div>
        </div>

        {/* Hamburger — Mobile */}
        <button
          className="flex md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 6,
            display: "flex",
            flexDirection: "column",
            gap: 4,
          }}
          aria-label="Toggle menu"
        >
          <span style={{ display: "block", width: 22, height: 2, background: "#111", transition: "transform 0.2s", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#111", opacity: menuOpen ? 0 : 1, transition: "opacity 0.2s" }} />
          <span style={{ display: "block", width: 22, height: 2, background: "#111", transition: "transform 0.2s", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none" }} />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              background: "#f6f6f4",
              borderTop: "1px solid #e6e6e6",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: "16px 28px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href as never}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    padding: "10px 0",
                    fontSize: 16,
                    color: "#111",
                    fontWeight: 500,
                    textDecoration: "none",
                    borderBottom: "1px solid #f0f0f0",
                  }}
                >
                  {label}
                </Link>
              ))}
              <div style={{ marginTop: 16, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <LocaleSwitcher />
                <Link
                  href="/templates"
                  onClick={() => setMenuOpen(false)}
                  style={{
                    padding: "8px 20px",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#fff",
                    backgroundColor: "#000",
                    borderRadius: 100,
                    textDecoration: "none",
                  }}
                >
                  {browseLabel}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
