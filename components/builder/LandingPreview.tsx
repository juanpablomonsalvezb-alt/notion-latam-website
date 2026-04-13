"use client";

import { Rubro } from "./rubros";
import { ESTILOS } from "./estilos";

interface Imagenes {
  logo: string | null;
  hero: string | null;
  about: string | null;
}
interface Overrides {
  headline?: string;
  subheadline?: string;
  cta?: string;
  ctaFinalTitulo?: string;
  ctaFinalBoton?: string;
  imagenes?: Imagenes;
}
interface Datos {
  nombre: string;
  telefono: string;
  whatsapp: string;
  ciudad: string;
  horario?: string;
  email?: string;
}
interface Props {
  rubro: Rubro;
  estiloId: string;
  datos: Datos;
  overrides?: Overrides;
  scale?: number;
}

function interpolate(text: string, nombre: string) {
  return text.replace(/\{nombre\}/g, nombre || "Tu Negocio");
}

export default function LandingPreview({ rubro, estiloId, datos, overrides = {}, scale = 1 }: Props) {
  const estilo = ESTILOS.find((e) => e.id === estiloId) ?? ESTILOS[0];
  const nombre = datos.nombre || rubro.nombre;
  const isDark = ["#0", "#1", "#0a", "#0c"].some(p => estilo.bg.startsWith(p));
  const img = overrides.imagenes ?? { logo: null, hero: null, about: null };

  const s = {
    bg: estilo.bg,
    bg2: estilo.surface,
    accent: estilo.accent,
    accentText: estilo.accentText,
    text: estilo.text,
    muted: estilo.textMuted,
    border: estilo.border,
  };

  const heroHeadline   = overrides.headline      || rubro.content.hero.headline;
  const heroSub        = overrides.subheadline   || rubro.content.hero.subheadline;
  const heroCta        = overrides.cta           || rubro.content.hero.cta;
  const ctaFinalTitulo = overrides.ctaFinalTitulo || rubro.content.cta_final.titulo;
  const ctaFinalBoton  = overrides.ctaFinalBoton  || rubro.content.cta_final.boton;
  const waHref = datos.whatsapp ? `https://wa.me/${datos.whatsapp.replace(/\D/g, "")}` : "#";

  const starRow = (
    <div style={{ display: "flex", gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );

  const pill = (children: React.ReactNode) => (
    <div style={{
      display: "inline-block",
      background: `${s.accent}12`,
      border: `1px solid ${s.accent}30`,
      color: s.accentText,
      borderRadius: 99,
      padding: `${4 * scale}px ${12 * scale}px`,
      fontSize: 10 * scale,
      fontWeight: 500,
      letterSpacing: "0.08em",
      textTransform: "uppercase" as const,
      marginBottom: 12 * scale,
    }}>
      {children}
    </div>
  );

  const sectionH2 = (text: string) => (
    <h2 style={{ fontSize: 26 * scale, fontWeight: 500, letterSpacing: "-0.02em", margin: 0, color: s.text }}>
      {interpolate(text, nombre)}
    </h2>
  );

  return (
    <div style={{
      fontFamily: "'Inter', system-ui, sans-serif",
      background: s.bg,
      color: s.text,
      fontSize: 14 * scale,
      lineHeight: 1.6,
      minHeight: "100%",
      WebkitFontSmoothing: "antialiased",
    }}>
      {/* ── NAV ── */}
      <nav style={{
        background: isDark ? `${s.bg}ee` : `${s.bg}f0`,
        backdropFilter: "blur(12px)",
        borderBottom: `1px solid ${s.border}`,
        padding: `${12 * scale}px ${24 * scale}px`,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        {img.logo ? (
          <img src={img.logo} alt={nombre} style={{ height: 28 * scale, objectFit: "contain", maxWidth: 140 * scale }} />
        ) : (
          <span style={{ fontWeight: 500, fontSize: 15 * scale, color: s.text }}>{nombre}</span>
        )}
        <a href={waHref} style={{
          background: `linear-gradient(135deg, ${s.accent}, ${s.accent}cc)`,
          color: "#fff",
          padding: `${7 * scale}px ${16 * scale}px`,
          borderRadius: 7 * scale,
          fontSize: 11 * scale,
          fontWeight: 500,
          textDecoration: "none",
          letterSpacing: "0.04em",
          textTransform: "uppercase" as const,
          boxShadow: `0 4px 14px ${s.accent}40`,
        }}>
          {heroCta}
        </a>
      </nav>

      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        padding: `${80 * scale}px ${24 * scale}px`,
        textAlign: "center",
        overflow: "hidden",
        background: img.hero
          ? "transparent"
          : isDark
            ? `radial-gradient(ellipse 80% 50% at 50% 0%, ${s.accent}18 0%, transparent 70%), ${s.bg}`
            : `radial-gradient(ellipse 80% 50% at 50% 0%, ${s.accent}10 0%, transparent 70%), ${s.bg}`,
      }}>
        {/* Hero background image */}
        {img.hero && (
          <>
            <div style={{ position: "absolute", inset: 0 }}>
              <img src={img.hero} alt="hero" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ position: "absolute", inset: 0, background: isDark ? "rgba(0,0,0,0.65)" : "rgba(0,0,0,0.45)" }} />
          </>
        )}

        <div style={{ position: "relative", zIndex: 1 }}>
          {pill(rubro.nombre)}
          <h1 style={{
            fontSize: 44 * scale,
            fontWeight: 500,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            margin: `0 auto ${16 * scale}px`,
            maxWidth: 500 * scale,
            color: img.hero ? "#fff" : s.text,
            textShadow: `0 2px 30px ${s.accent}25`,
          }}>
            {heroHeadline}
          </h1>
          <p style={{
            color: img.hero ? "rgba(255,255,255,0.8)" : s.muted,
            fontSize: 16 * scale,
            maxWidth: 480 * scale,
            margin: `0 auto ${32 * scale}px`,
            lineHeight: 1.7,
          }}>
            {interpolate(heroSub, nombre)}
          </p>
          <div style={{ display: "flex", gap: 12 * scale, justifyContent: "center", flexWrap: "wrap" as const }}>
            <a href={waHref} style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8 * scale,
              background: `linear-gradient(135deg, ${s.accent}, ${s.accent}cc)`,
              color: "#fff",
              padding: `${13 * scale}px ${28 * scale}px`,
              borderRadius: 8 * scale,
              fontWeight: 500,
              fontSize: 13 * scale,
              letterSpacing: "0.06em",
              textTransform: "uppercase" as const,
              textDecoration: "none",
              boxShadow: `0 8px 24px ${s.accent}40`,
            }}>
              {heroCta}
            </a>
            {datos.telefono && (
              <a href={`tel:${datos.telefono}`} style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8 * scale,
                border: `1px solid ${img.hero ? "rgba(255,255,255,0.25)" : s.border}`,
                color: img.hero ? "#fff" : s.muted,
                padding: `${13 * scale}px ${24 * scale}px`,
                borderRadius: 8 * scale,
                fontSize: 13 * scale,
                textDecoration: "none",
                background: img.hero ? "rgba(255,255,255,0.1)" : "transparent",
              }}>
                📞 {datos.telefono}
              </a>
            )}
          </div>

          {/* Confianza chips */}
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 8 * scale, justifyContent: "center", marginTop: 32 * scale }}>
            {rubro.content.confianza.map((c, i) => (
              <span key={i} style={{
                background: img.hero ? "rgba(255,255,255,0.1)" : isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.04)",
                border: `1px solid ${img.hero ? "rgba(255,255,255,0.2)" : s.border}`,
                borderRadius: 99,
                padding: `${4 * scale}px ${12 * scale}px`,
                fontSize: 11 * scale,
                color: img.hero ? "rgba(255,255,255,0.7)" : s.muted,
              }}>
                ✓ {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section style={{
        padding: `${60 * scale}px ${24 * scale}px`,
        background: s.bg2,
        borderTop: `1px solid ${s.border}`,
        borderBottom: `1px solid ${s.border}`,
      }}>
        <div style={{ textAlign: "center", marginBottom: 40 * scale }}>
          {pill("Servicios")}
          {sectionH2("Lo que ofrecemos")}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 12 * scale, maxWidth: 700 * scale, margin: "0 auto" }}>
          {rubro.content.servicios.map((serv, i) => (
            <div key={i} style={{
              background: s.bg,
              border: `1px solid ${s.border}`,
              borderRadius: 12 * scale,
              padding: `${20 * scale}px`,
              boxShadow: `0 4px 16px rgba(0,0,0,0.08)`,
              transition: "transform 0.2s ease",
            }}>
              <div style={{
                width: 40 * scale, height: 40 * scale,
                background: `${s.accent}15`, border: `1px solid ${s.accent}25`,
                borderRadius: 10 * scale, display: "flex", alignItems: "center",
                justifyContent: "center", fontSize: 18 * scale, marginBottom: 10 * scale,
              }}>
                {serv.icono}
              </div>
              <div style={{ fontWeight: 500, fontSize: 13 * scale, marginBottom: 4 * scale, color: s.text }}>{serv.titulo}</div>
              <div style={{ color: s.muted, fontSize: 11 * scale, lineHeight: 1.6 }}>{serv.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOBRE ── */}
      <section style={{ padding: `${60 * scale}px ${24 * scale}px`, background: s.bg }}>
        <div style={{
          maxWidth: 800 * scale,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: img.about ? "1fr 1fr" : "1fr",
          gap: 40 * scale,
          alignItems: "center",
        }}>
          <div>
            {pill("Nosotros")}
            <h2 style={{ fontSize: 26 * scale, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 16 * scale, color: s.text }}>
              {interpolate(rubro.content.sobre.titulo, nombre)}
            </h2>
            {interpolate(rubro.content.sobre.texto, nombre).split("\n\n").map((p, i) => (
              <p key={i} style={{ color: s.muted, lineHeight: 1.8, marginBottom: 12 * scale, fontSize: 13 * scale }}>{p}</p>
            ))}
          </div>
          {img.about && (
            <div style={{ borderRadius: 16 * scale, overflow: "hidden", aspectRatio: "4/3", border: `1px solid ${s.border}` }}>
              <img src={img.about} alt="Sobre nosotros" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          )}
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section style={{
        padding: `${60 * scale}px ${24 * scale}px`,
        background: s.bg2,
        borderTop: `1px solid ${s.border}`,
        borderBottom: `1px solid ${s.border}`,
      }}>
        <div style={{ textAlign: "center", marginBottom: 40 * scale }}>
          {pill("Testimonios")}
          {sectionH2("Lo que dicen nuestros clientes")}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 * scale, maxWidth: 800 * scale, margin: "0 auto" }}>
          {rubro.content.testimonios.map((t, i) => (
            <div key={i} style={{
              background: s.bg, border: `1px solid ${s.border}`,
              borderRadius: 12 * scale, padding: `${18 * scale}px`,
            }}>
              {starRow}
              <p style={{ color: s.muted, fontSize: 11 * scale, lineHeight: 1.7, margin: `${10 * scale}px 0`, fontStyle: "italic" }}>
                &ldquo;{interpolate(t.texto, nombre)}&rdquo;
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8 * scale, paddingTop: 10 * scale, borderTop: `1px solid ${s.border}` }}>
                <div style={{
                  width: 28 * scale, height: 28 * scale, borderRadius: "50%",
                  background: s.accent, color: "#fff", display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: 10 * scale, fontWeight: 500, flexShrink: 0,
                }}>
                  {t.nombre.split(" ").map(w => w[0]).slice(0, 2).join("")}
                </div>
                <div>
                  <div style={{ fontSize: 11 * scale, fontWeight: 500, color: s.text }}>{t.nombre}</div>
                  <div style={{ fontSize: 10 * scale, color: s.muted }}>{t.cargo}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: `${60 * scale}px ${24 * scale}px`, background: s.bg }}>
        <div style={{ maxWidth: 600 * scale, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 36 * scale }}>
            <h2 style={{ fontSize: 26 * scale, fontWeight: 500, letterSpacing: "-0.02em", color: s.text, margin: 0 }}>
              Preguntas frecuentes
            </h2>
          </div>
          {rubro.content.faq.map((f, i) => (
            <div key={i} style={{ borderBottom: `1px solid ${s.border}`, paddingBottom: 16 * scale, marginBottom: 16 * scale }}>
              <div style={{ fontWeight: 500, fontSize: 13 * scale, marginBottom: 6 * scale, color: s.text }}>{f.pregunta}</div>
              <div style={{ color: s.muted, fontSize: 12 * scale, lineHeight: 1.7 }}>{f.respuesta}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section style={{
        padding: `${72 * scale}px ${24 * scale}px`,
        textAlign: "center",
        background: isDark
          ? `radial-gradient(ellipse 70% 70% at 50% 50%, ${s.accent}15 0%, transparent 70%), ${s.bg2}`
          : `radial-gradient(ellipse 70% 70% at 50% 50%, ${s.accent}08 0%, transparent 70%), ${s.bg2}`,
        borderTop: `1px solid ${s.border}`,
      }}>
        <h2 style={{ fontSize: 32 * scale, fontWeight: 500, letterSpacing: "-0.02em", marginBottom: 12 * scale, color: s.text }}>
          {interpolate(ctaFinalTitulo, nombre)}
        </h2>
        <p style={{ color: s.muted, marginBottom: 28 * scale, fontSize: 14 * scale }}>
          {interpolate(rubro.content.cta_final.subtitulo, nombre)}
        </p>
        <div style={{ display: "flex", gap: 12 * scale, justifyContent: "center", flexWrap: "wrap" as const }}>
          {datos.whatsapp && (
            <a href={waHref} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: 8 * scale,
              background: "#25d366", color: "#fff",
              padding: `${13 * scale}px ${28 * scale}px`, borderRadius: 8 * scale,
              fontWeight: 500, fontSize: 13 * scale, textDecoration: "none",
              boxShadow: "0 8px 24px rgba(37,211,102,0.35)",
            }}>
              <svg width={14 * scale} height={14 * scale} fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          )}
          <a href={waHref} style={{
            display: "inline-flex", alignItems: "center",
            background: `linear-gradient(135deg, ${s.accent}, ${s.accent}cc)`,
            color: "#fff", padding: `${13 * scale}px ${28 * scale}px`,
            borderRadius: 8 * scale, fontWeight: 500, fontSize: 13 * scale,
            letterSpacing: "0.06em", textTransform: "uppercase" as const,
            textDecoration: "none", boxShadow: `0 8px 24px ${s.accent}40`,
          }}>
            {ctaFinalBoton}
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        padding: `${28 * scale}px ${24 * scale}px`,
        background: s.bg, borderTop: `1px solid ${s.border}`,
        textAlign: "center", color: s.muted, fontSize: 11 * scale,
      }}>
        {img.logo ? (
          <img src={img.logo} alt={nombre} style={{ height: 24 * scale, objectFit: "contain", marginBottom: 10 * scale, opacity: 0.7 }} />
        ) : (
          <div style={{ fontWeight: 500, color: s.text, marginBottom: 8 * scale }}>{nombre}</div>
        )}
        <div style={{ display: "flex", gap: 16 * scale, justifyContent: "center", flexWrap: "wrap" as const, marginBottom: 8 * scale }}>
          {datos.telefono && (
            <a href={`tel:${datos.telefono}`} style={{ color: s.muted, textDecoration: "none" }}>📞 {datos.telefono}</a>
          )}
          {datos.whatsapp && (
            <a href={waHref} style={{ color: "#25d366", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          )}
          {datos.email && (
            <a href={`mailto:${datos.email}`} style={{ color: s.muted, textDecoration: "none" }}>✉️ {datos.email}</a>
          )}
        </div>
        <div style={{ display: "flex", gap: 16 * scale, justifyContent: "center", flexWrap: "wrap" as const }}>
          {datos.ciudad && <span>{datos.ciudad}</span>}
          {datos.horario && <span>🕐 {datos.horario}</span>}
        </div>
        <div style={{ marginTop: 12 * scale, fontSize: 10 * scale, opacity: 0.4 }}>
          Creado con Builder by ORBBI
        </div>
      </footer>
    </div>
  );
}
