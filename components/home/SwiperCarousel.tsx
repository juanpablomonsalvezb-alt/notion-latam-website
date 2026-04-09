"use client";

import { useRef } from "react";
import Link from "next/link";

interface CarouselItem {
  slug: string;
  label: string;
  tool: "notion" | "monday";
  category: string;
  seed: string;
  accent: string;
}

const ITEMS: CarouselItem[] = [
  { slug: "crm-ventas-b2b",     label: "CRM Ventas B2B",       tool: "notion",  category: "VENTAS",       seed: "office-crm",    accent: "#2383E2" },
  { slug: "pipeline-ventas-b2b",label: "Pipeline de Ventas",   tool: "monday",  category: "PROYECTOS",    seed: "pipeline-desk", accent: "#FF3D57" },
  { slug: "gestion-proyectos",  label: "Gestión de Proyectos", tool: "notion",  category: "OPERACIONES",  seed: "gestion-proj",  accent: "#5b5bd6" },
  { slug: "gestion-sprints",    label: "Sprints & Agile",      tool: "monday",  category: "DEV",          seed: "agile-sprint",  accent: "#ff6b35" },
  { slug: "wiki-empresa",       label: "Wiki Empresarial",     tool: "notion",  category: "CONOCIMIENTO", seed: "wiki-office",   accent: "#0095ff" },
  { slug: "onboarding-clientes",label: "Onboarding Clientes",  tool: "monday",  category: "CLIENTES",     seed: "onboard-team",  accent: "#d946ef" },
];

const PIC = (seed: string) => `https://picsum.photos/seed/${seed}/560/420`;

export default function SwiperCarousel({ locale }: { locale: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);

  const getHref = (item: CarouselItem) =>
    item.tool === "notion" ? `/${locale}/templates/${item.slug}` : `/${locale}/monday/templates`;

  const slide = (dir: -1 | 1) => {
    if (!trackRef.current) return;
    const step = 290;
    posRef.current = Math.max(
      0,
      Math.min(posRef.current + dir * step, trackRef.current.scrollWidth - trackRef.current.offsetWidth)
    );
    trackRef.current.scrollTo({ left: posRef.current, behavior: "smooth" });
  };

  return (
    <div style={{ position: "relative", backgroundColor: "#000" }}>

      {/* arrow prev */}
      <button
        onClick={() => slide(-1)}
        aria-label="Anterior"
        style={{
          position: "absolute",
          left: 12,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.35)",
          background: "transparent",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
          <path d="M6.364 12.728L7.071 12.021L1.914 6.864L16 6.864V5.864L1.914 5.864L7.071 0.707L6.364 0L0 6.364L6.364 12.728Z" fill="white"/>
        </svg>
      </button>

      {/* track */}
      <div
        ref={trackRef}
        style={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          gap: 2,
          padding: 0,
        }}
      >
        {ITEMS.map((item) => (
          <CarouselCard key={item.slug + item.label} item={item} href={getHref(item)} />
        ))}
      </div>

      {/* arrow next */}
      <button
        onClick={() => slide(1)}
        aria-label="Siguiente"
        style={{
          position: "absolute",
          right: 12,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 10,
          width: 48,
          height: 48,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.35)",
          background: "transparent",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        <svg width="16" height="14" viewBox="0 0 16 14" fill="none">
          <path d="M9.636 0.636L8.929 1.343L14.086 6.5H0V7.5H14.086L8.929 12.657L9.636 13.364L16 7L9.636 0.636Z" fill="white"/>
        </svg>
      </button>

      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}

function CarouselCard({ item, href }: { item: CarouselItem; href: string }) {
  const isHoveredRef = useRef(false);

  return (
    <Link
      href={href}
      style={{
        flexShrink: 0,
        position: "relative",
        overflow: "hidden",
        scrollSnapAlign: "start",
        width: 280,
        height: 400,
        display: "block",
        textDecoration: "none",
      }}
      className="group"
    >
      {/* photo */}
      <img
        src={PIC(item.seed)}
        alt={item.label}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 600ms cubic-bezier(0.25,0.46,0.45,0.94)",
        }}
        className="group-hover:scale-105"
      />

      {/* accent overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: item.accent,
          opacity: 0.25,
          mixBlendMode: "multiply",
          transition: "opacity 400ms ease",
        }}
        className="group-hover:opacity-40"
      />

      {/* dark gradient bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "55%",
          background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
        }}
      />

      {/* tool badge */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          backgroundColor: item.accent,
          color: "#fff",
          fontSize: "0.625rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          padding: "3px 8px",
          borderRadius: 2,
          textTransform: "uppercase",
          fontFamily: "var(--font-titillium, sans-serif)",
        }}
      >
        {item.tool === "notion" ? "Notion" : "Monday"}
      </div>

      {/* label */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "0 16px 20px",
        }}
      >
        <span
          style={{
            display: "block",
            color: "rgba(255,255,255,0.5)",
            fontSize: "0.625rem",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
            fontFamily: "var(--font-titillium, sans-serif)",
            marginBottom: 4,
          }}
        >
          {item.category}
        </span>
        <p
          style={{
            margin: 0,
            color: "#fff",
            fontSize: "0.9375rem",
            fontWeight: 600,
            fontFamily: "var(--font-titillium, sans-serif)",
            lineHeight: 1.3,
          }}
        >
          {item.label}
        </p>
      </div>
    </Link>
  );
}
