"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface Post {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  img: string;
  author: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const POSTS: Post[] = [
  {
    slug: "como-crear-landing-page-perfecta",
    category: "Guías",
    title: "Cómo crear la landing page perfecta para tu negocio",
    excerpt:
      "Una landing page efectiva puede duplicar tus ventas. Aquí te mostramos los elementos clave que no pueden faltar.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&q=80",
    author: "Equipo Orbbi",
    date: "12 Abr 2025",
    readTime: "5 min",
    featured: true,
  },
  {
    slug: "ia-para-pymes-latam",
    category: "IA & Negocios",
    title: "Cómo la IA está transformando los negocios en LATAM",
    excerpt:
      "Las pequeñas empresas que adoptan IA hoy tienen una ventaja competitiva enorme. Te explicamos por qué.",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&h=500&fit=crop&q=80",
    author: "Equipo Orbbi",
    date: "8 Abr 2025",
    readTime: "7 min",
  },
  {
    slug: "seo-para-emprendedores",
    category: "SEO",
    title: "SEO básico para emprendedores: aparece en Google sin pagar",
    excerpt:
      "El posicionamiento orgánico es posible sin ser experto. Estos son los 5 pasos que cualquier negocio puede seguir.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=500&fit=crop&q=80",
    author: "Equipo Orbbi",
    date: "2 Abr 2025",
    readTime: "6 min",
  },
  {
    slug: "whatsapp-para-ventas",
    category: "Ventas",
    title: "WhatsApp como canal de ventas: guía completa 2025",
    excerpt:
      "WhatsApp es el canal de comunicación más usado en LATAM. Aprende a convertirlo en tu mejor herramienta de ventas.",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=500&fit=crop&q=80",
    author: "Equipo Orbbi",
    date: "28 Mar 2025",
    readTime: "8 min",
  },
  {
    slug: "diseno-web-sin-codigo",
    category: "Diseño",
    title: "Diseño web profesional sin saber programar: es posible en 2025",
    excerpt:
      "Las herramientas de IA hacen posible que cualquier persona cree un sitio web de nivel profesional.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop&q=80",
    author: "Equipo Orbbi",
    date: "20 Mar 2025",
    readTime: "4 min",
  },
  {
    slug: "primera-landing-page",
    category: "Guías",
    title: "Tu primera landing page: guía paso a paso para principiantes",
    excerpt:
      "Si nunca has creado un sitio web, esta guía es para ti. En 15 minutos tendrás tu primera landing funcionando.",
    img: "https://images.unsplash.com/photo-1542038374-8b585a3d3caf?w=800&h=500&fit=crop&q=80",
    author: "Equipo Orbbi",
    date: "15 Mar 2025",
    readTime: "10 min",
  },
];

const featured = POSTS.find((p) => p.featured)!;
const rest = POSTS.filter((p) => !p.featured);

const CATEGORY_COLORS: Record<string, string> = {
  "Guías": "#1a1a1a",
  "IA & Negocios": "#1a1a1a",
  "SEO": "#1a1a1a",
  "Ventas": "#1a1a1a",
  "Diseño": "#1a1a1a",
};

export default function BlogPage() {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        minHeight: "100vh",
        fontFamily: "Inter, system-ui, sans-serif",
        color: "#1a1a1a",
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
            Blog y recursos
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 52px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              marginBottom: 16,
              color: "#1a1a1a",
              maxWidth: 600,
            }}
          >
            Recursos para hacer crecer tu negocio
          </h1>
          <p
            style={{
              fontSize: 18,
              color: "#6b7280",
              maxWidth: 500,
              lineHeight: 1.65,
            }}
          >
            Guías, estrategias y tendencias para hacer crecer tu negocio digital en LATAM.
          </p>
        </div>
      </section>

      {/* Post destacado */}
      <section style={{ padding: "60px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              overflow: "hidden",
            }}
            className="orbbi-featured-grid"
          >
            <div style={{ position: "relative", minHeight: 340 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featured.img}
                alt={featured.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  minHeight: 340,
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: 16,
                  left: 16,
                  background: "#1a1a1a",
                  color: "#ffffff",
                  fontSize: 10,
                  fontWeight: 700,
                  padding: "5px 12px",
                  borderRadius: 99,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Destacado
              </span>
            </div>

            <div
              style={{
                padding: 40,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: "#ffffff",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#9ca3af",
                  marginBottom: 12,
                }}
              >
                {featured.category}
              </span>
              <h2
                style={{
                  fontSize: "clamp(20px, 2vw, 26px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.3,
                  color: "#1a1a1a",
                  marginBottom: 14,
                }}
              >
                {featured.title}
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: "#6b7280",
                  lineHeight: 1.65,
                  marginBottom: 24,
                }}
              >
                {featured.excerpt}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: 13,
                  color: "#9ca3af",
                  marginBottom: 28,
                }}
              >
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime} lectura</span>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#1a1a1a",
                  color: "#ffffff",
                  fontSize: 13,
                  fontWeight: 600,
                  padding: "12px 24px",
                  borderRadius: 2,
                  textDecoration: "none",
                  width: "fit-content",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Leer artículo →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de posts */}
      <section style={{ paddingBottom: 80 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <h2
            style={{
              fontSize: 24,
              fontWeight: 500,
              letterSpacing: "-0.02em",
              color: "#1a1a1a",
              marginBottom: 32,
            }}
          >
            Todos los artículos
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 24,
            }}
          >
            {rest.map((post) => (
              <article
                key={post.slug}
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
                <div style={{ position: "relative", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post.img}
                    alt={post.title}
                    style={{
                      width: "100%",
                      aspectRatio: "16/9",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.4s ease",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLImageElement).style.transform =
                        "scale(1.04)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLImageElement).style.transform =
                        "scale(1)")
                    }
                  />
                </div>
                <div style={{ padding: 24 }}>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: CATEGORY_COLORS[post.category] || "#1a1a1a",
                      display: "inline-block",
                      marginBottom: 10,
                      padding: "3px 10px",
                      borderRadius: 99,
                      background: "#f3f4f6",
                      border: "1px solid #e5e7eb",
                    }}
                  >
                    {post.category}
                  </span>
                  <h3
                    style={{
                      fontSize: 17,
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                      lineHeight: 1.35,
                      color: "#1a1a1a",
                      marginBottom: 10,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: "#6b7280",
                      lineHeight: 1.6,
                      marginBottom: 20,
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      fontSize: 12,
                      color: "#9ca3af",
                    }}
                  >
                    <span>
                      {post.author} · {post.date}
                    </span>
                    <span>{post.readTime} lectura</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section
        style={{
          padding: "0 0 100px",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: 12,
              padding: "60px 48px",
              textAlign: "center",
              backgroundColor: "#f9fafb",
            }}
          >
            <p
              style={{
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#9ca3af",
                marginBottom: 14,
                fontWeight: 600,
              }}
            >
              Newsletter
            </p>
            <h3
              style={{
                fontSize: 28,
                fontWeight: 500,
                letterSpacing: "-0.02em",
                color: "#1a1a1a",
                marginBottom: 10,
              }}
            >
              Recibe tips de marketing digital cada semana
            </h3>
            <p
              style={{
                fontSize: 15,
                color: "#6b7280",
                marginBottom: 32,
              }}
            >
              Sin spam. Solo contenido útil para hacer crecer tu negocio.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{
                display: "flex",
                gap: 12,
                maxWidth: 440,
                margin: "0 auto",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <input
                type="email"
                placeholder="tu@email.com"
                style={{
                  flex: 1,
                  minWidth: 220,
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
              <button
                type="submit"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#1a1a1a",
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: 600,
                  padding: "12px 24px",
                  borderRadius: 2,
                  border: "1.5px solid #1a1a1a",
                  cursor: "pointer",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                Suscribirme
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 768px) {
          .orbbi-featured-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
