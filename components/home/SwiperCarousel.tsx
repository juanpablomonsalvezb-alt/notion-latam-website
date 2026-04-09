"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

interface CarouselItem {
  slug: string;
  label: string;
  tool: "notion" | "monday";
  category: string;
  gradient: string;
  accentColor: string;
}

const ITEMS: CarouselItem[] = [
  { slug: "crm-ventas-b2b", label: "CRM Ventas B2B", tool: "notion", category: "VENTAS", gradient: "linear-gradient(135deg,#0f1b3d 0%,#1a3a7c 50%,#2383E2 100%)", accentColor: "#2383E2" },
  { slug: "pipeline-ventas-b2b", label: "Pipeline de Ventas", tool: "monday", category: "PROYECTOS", gradient: "linear-gradient(135deg,#2d0a0a 0%,#7c1a1a 50%,#FF3D57 100%)", accentColor: "#FF3D57" },
  { slug: "gestion-proyectos", label: "Gestión de Proyectos", tool: "notion", category: "OPERACIONES", gradient: "linear-gradient(135deg,#0d0d2b 0%,#1e1e6b 50%,#5b5bd6 100%)", accentColor: "#5b5bd6" },
  { slug: "gestion-sprints", label: "Sprints & Agile", tool: "monday", category: "DEV", gradient: "linear-gradient(135deg,#1a0a00 0%,#7c3a00 50%,#ff6b35 100%)", accentColor: "#ff6b35" },
  { slug: "wiki-empresa", label: "Wiki Empresarial", tool: "notion", category: "CONOCIMIENTO", gradient: "linear-gradient(135deg,#001a2d 0%,#00456b 50%,#0095ff 100%)", accentColor: "#0095ff" },
  { slug: "onboarding-clientes", label: "Onboarding Clientes", tool: "monday", category: "CLIENTES", gradient: "linear-gradient(135deg,#1a0020 0%,#6b0070 50%,#d946ef 100%)", accentColor: "#d946ef" },
];

function MockUI({ item }: { item: CarouselItem }) {
  const isNotion = item.tool === "notion";
  return (
    <div className="absolute inset-0 p-5 flex flex-col gap-3 select-none" style={{ fontFamily: "var(--font-titillium, sans-serif)" }}>
      {/* top bar */}
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded flex items-center justify-center text-white font-bold text-xs"
          style={{ backgroundColor: item.accentColor, fontSize: 10 }}>
          {isNotion ? "N" : "M"}
        </div>
        <div className="h-2 rounded-full w-20 opacity-30 bg-white" />
        <div className="ml-auto flex gap-1">
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
          <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
        </div>
      </div>
      {/* "rows" */}
      {[...Array(isNotion ? 5 : 4)].map((_, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-sm opacity-40" style={{ backgroundColor: item.accentColor }} />
          <div className="h-1.5 rounded-full bg-white/20" style={{ width: `${55 + (i * 13) % 35}%` }} />
          <div className="ml-auto h-1.5 rounded-full bg-white/10 w-10" />
        </div>
      ))}
      {/* kanban columns hint */}
      {!isNotion && (
        <div className="flex gap-2 mt-1">
          {["#3d3d3d","#1a3a7c","#7c1a1a"].map((c, i) => (
            <div key={i} className="flex-1 rounded p-1.5 flex flex-col gap-1" style={{ backgroundColor: c + "66" }}>
              <div className="h-1 rounded-full bg-white/20 w-8" />
              <div className="h-4 rounded bg-white/10" />
              <div className="h-4 rounded bg-white/10" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function SwiperCarousel({ locale }: { locale: string }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const getHref = (item: CarouselItem) =>
    item.tool === "notion" ? `/${locale}/templates/${item.slug}` : `/${locale}/monday/templates`;

  const slide = (dir: -1 | 1) => {
    if (!trackRef.current) return;
    const step = 300;
    posRef.current = Math.max(0, Math.min(posRef.current + dir * step, trackRef.current.scrollWidth - trackRef.current.offsetWidth));
    trackRef.current.scrollTo({ left: posRef.current, behavior: "smooth" });
  };

  return (
    <div className="relative" style={{ backgroundColor: "#000" }}>
      {/* arrow prev */}
      <button
        onClick={() => slide(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-white/40 hover:bg-white/10 transition-colors group"
        aria-label="Anterior"
      >
        <svg className="w-4 h-4 text-white group-hover:-translate-x-1 transition-transform" viewBox="0 0 16 13" fill="none">
          <path d="M6.364 12.728L7.071 12.021L1.914 6.864L16 6.864V5.864L1.914 5.864L7.071 0.707L6.364 0L0 6.364L6.364 12.728Z" fill="white"/>
        </svg>
      </button>

      {/* track */}
      <div
        ref={trackRef}
        className="flex overflow-x-auto gap-2.5 px-0"
        style={{ scrollSnapType: "x mandatory", scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {ITEMS.map((item) => (
          <Link
            key={item.slug}
            href={getHref(item)}
            className="shrink-0 relative group overflow-hidden"
            style={{ width: 280, height: 400, scrollSnapAlign: "start", borderRadius: 0 }}
          >
            {/* gradient bg */}
            <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
              style={{ background: item.gradient }} />

            {/* fake UI overlay */}
            <MockUI item={item} />

            {/* bottom label */}
            <div className="absolute bottom-0 left-0 right-0 p-4"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)" }}>
              <span className="text-white/50 text-xs uppercase tracking-widest">{item.category}</span>
              <p className="text-white text-sm font-semibold mt-0.5">{item.label}</p>
              <p className="text-white/50 text-xs mt-0.5">{item.tool === "notion" ? "Notion Template" : "Monday Template"}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* arrow next */}
      <button
        onClick={() => slide(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center rounded-full border border-white/40 hover:bg-white/10 transition-colors group"
        aria-label="Siguiente"
      >
        <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" viewBox="0 0 16 14" fill="none">
          <path d="M9.636 0.636L8.929 1.343L14.086 6.5H0V7.5H14.086L8.929 12.657L9.636 13.364L16 7L9.636 0.636Z" fill="white"/>
        </svg>
      </button>

      <style jsx>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
