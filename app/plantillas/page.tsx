"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const CATEGORIES = [
  "Todas",
  "Restaurante",
  "Salud",
  "Servicios",
  "Tecnología",
  "Tienda",
  "Educación",
  "Fotografía",
  "Inmobiliaria",
];

const TEMPLATES = [
  {
    id: "dark",
    name: "Orbbi Dark",
    category: "Tecnología",
    desc: "Moderno y oscuro. Ideal para tech y negocios premium.",
    img: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=600&h=400&fit=crop&q=80",
    tags: ["Dark", "Premium", "Tech"],
  },
  {
    id: "light",
    name: "Orbbi Light",
    category: "Servicios",
    desc: "Limpio y profesional. Para consultoras, abogados y salud.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&q=80",
    tags: ["Light", "Profesional", "Limpio"],
  },
  {
    id: "warm",
    name: "Orbbi Warm",
    category: "Restaurante",
    desc: "Cálido y elegante. Para restaurantes, estéticas y bienestar.",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop&q=80",
    tags: ["Warm", "Elegante", "Food"],
  },
  {
    id: "photo",
    name: "Orbbi Photo",
    category: "Fotografía",
    desc: "Galerías visuales impactantes para mostrar tu trabajo.",
    img: "https://images.unsplash.com/photo-1542038374-8b585a3d3caf?w=600&h=400&fit=crop&q=80",
    tags: ["Portfolio", "Visual"],
  },
  {
    id: "health",
    name: "Orbbi Health",
    category: "Salud",
    desc: "Confianza y cercanía para clínicas y profesionales de la salud.",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop&q=80",
    tags: ["Salud", "Clínica"],
  },
  {
    id: "edu",
    name: "Orbbi Edu",
    category: "Educación",
    desc: "Para academias, cursos y contenidos educativos.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop&q=80",
    tags: ["Educación", "Cursos"],
  },
  {
    id: "store",
    name: "Orbbi Store",
    category: "Tienda",
    desc: "Para tiendas y negocios que venden productos.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80",
    tags: ["Tienda", "Retail"],
  },
  {
    id: "real",
    name: "Orbbi Real Estate",
    category: "Inmobiliaria",
    desc: "Para agentes inmobiliarios y proyectos de propiedades.",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&q=80",
    tags: ["Inmobiliaria", "Casa"],
  },
  {
    id: "gym",
    name: "Orbbi Gym",
    category: "Servicios",
    desc: "Para gimnasios, entrenadores y centros de bienestar.",
    img: "https://images.unsplash.com/photo-1534438327047-80c50d1a8fc5?w=600&h=400&fit=crop&q=80",
    tags: ["Gym", "Fitness"],
  },
];

export default function PlantillasPage() {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [search, setSearch] = useState("");

  const filtered = TEMPLATES.filter((t) => {
    const matchesCategory =
      activeCategory === "Todas" || t.category === activeCategory;
    const matchesSearch =
      search === "" ||
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase()) ||
      t.desc.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <Navbar />

      {/* Hero */}
      <section
        style={{
          paddingTop: 140,
          paddingBottom: 60,
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#9ca3af",
              marginBottom: 16,
              fontWeight: 500,
            }}
          >
            Plantillas
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 16,
              color: "#1a1a1a",
            }}
          >
            Encuentra la plantilla perfecta
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#6b7280",
              marginBottom: 32,
              maxWidth: 520,
              lineHeight: 1.65,
            }}
          >
            Diseñadas por expertos, personalizadas por IA para tu negocio.
          </p>
          <input
            type="text"
            placeholder="Busca por categoría o nombre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              maxWidth: 480,
              display: "block",
              border: "1px solid #e5e7eb",
              borderRadius: 4,
              padding: "12px 16px",
              fontSize: 14,
              background: "#ffffff",
              color: "#1a1a1a",
              outline: "none",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          />
        </div>
      </section>

      {/* Filtros */}
      <section
        style={{
          paddingTop: 32,
          paddingBottom: 32,
          borderBottom: "1px solid #e5e7eb",
          backgroundColor: "#f9fafb",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 18px",
                borderRadius: 99,
                fontSize: 13,
                fontWeight: 500,
                cursor: "pointer",
                border:
                  activeCategory === cat
                    ? "1.5px solid #1a1a1a"
                    : "1px solid #e5e7eb",
                background:
                  activeCategory === cat ? "#1a1a1a" : "#ffffff",
                color: activeCategory === cat ? "#ffffff" : "#6b7280",
                transition: "all 0.15s ease",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid de plantillas */}
      <section style={{ padding: "60px 0 100px" }}>
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 24,
          }}
        >
          {filtered.length === 0 && (
            <p
              style={{
                color: "#9ca3af",
                gridColumn: "1/-1",
                textAlign: "center",
                padding: "60px 0",
                fontSize: 15,
              }}
            >
              No se encontraron plantillas con esa búsqueda.
            </p>
          )}
          {filtered.map((t) => (
            <div
              key={t.id}
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                overflow: "hidden",
                transition: "box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow =
                  "0 4px 24px rgba(0,0,0,0.08)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.boxShadow = "none")
              }
            >
              {/* Imagen */}
              <div
                style={{
                  aspectRatio: "3/2",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={t.img}
                  alt={t.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease",
                    display: "block",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1.03)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLImageElement).style.transform =
                      "scale(1)")
                  }
                />
                <span
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    background: "rgba(255,255,255,0.92)",
                    color: "#1a1a1a",
                    fontSize: 10,
                    fontWeight: 600,
                    padding: "4px 10px",
                    borderRadius: 99,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  {t.category}
                </span>
              </div>

              {/* Info */}
              <div style={{ padding: 24 }}>
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#1a1a1a",
                    marginBottom: 6,
                    letterSpacing: "-0.01em",
                  }}
                >
                  {t.name}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: "#6b7280",
                    marginBottom: 16,
                    lineHeight: 1.55,
                  }}
                >
                  {t.desc}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 20,
                  }}
                >
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11,
                        padding: "3px 10px",
                        borderRadius: 99,
                        background: "#f3f4f6",
                        border: "1px solid #e5e7eb",
                        color: "#6b7280",
                        fontWeight: 500,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div style={{ display: "flex", gap: 10 }}>
                  <Link
                    href="/crear"
                    style={{
                      flex: 1,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 0",
                      borderRadius: 2,
                      fontSize: 13,
                      fontWeight: 500,
                      border: "1.5px solid #1a1a1a",
                      color: "#1a1a1a",
                      textDecoration: "none",
                      background: "transparent",
                      transition: "all 0.15s ease",
                      fontFamily: "Inter, system-ui, sans-serif",
                    }}
                  >
                    Vista previa
                  </Link>
                  <Link
                    href="/crear"
                    style={{
                      flex: 1,
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "10px 0",
                      borderRadius: 2,
                      fontSize: 13,
                      fontWeight: 600,
                      border: "1.5px solid #1a1a1a",
                      color: "#ffffff",
                      textDecoration: "none",
                      background: "#1a1a1a",
                      transition: "all 0.15s ease",
                      fontFamily: "Inter, system-ui, sans-serif",
                    }}
                  >
                    Usar esta
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
