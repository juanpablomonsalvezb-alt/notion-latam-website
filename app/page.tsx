import Link from "next/link";

/* ─── Design tokens (exact from easlo.co inspector) ────────────────────────── */
const C = {
  bg:       "#fafafa",
  white:    "#ffffff",
  black:    "#000000",
  text:     "#2a2a2a",
  text2:    "#484848",
  muted:    "#6b6b6b",
  border:   "#e6e6e6",
  borderM:  "#e3e3e3",
  light:    "#f0f0f0",
  accent:   "#0099ff",
} as const;

/* ─── SVG Mockups ─────────────────────────────────────────────────────────── */

function NotionDashboardMockup() {
  return (
    <svg viewBox="0 0 880 500" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", borderRadius: 12 }}>
      {/* bg */}
      <rect width="880" height="500" fill="#ffffff" />
      {/* sidebar */}
      <rect width="200" height="500" fill="#f7f7f5" />
      {/* sidebar items */}
      <rect x="16" y="20" width="120" height="8" rx="4" fill="#37352f" opacity="0.8" />
      <rect x="16" y="16" width="18" height="18" rx="4" fill="#e9e9e7" />
      {[0,1,2,3,4,5,6].map(i => (
        <g key={i}>
          <rect x="16" y={60 + i*36} width="16" height="16" rx="3" fill="#e9e9e7" />
          <rect x="38" y={63 + i*36} width={60 + (i%3)*20} height="9" rx="4" fill="#37352f" opacity="0.5" />
        </g>
      ))}
      {/* divider */}
      <rect x="12" y="320" width="176" height="1" fill="#e9e9e7" />
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="16" y={330 + i*32} width="14" height="14" rx="2" fill="#d3e3fd" />
          <rect x="36" y={333 + i*32} width={50 + i*15} height="8" rx="3" fill="#37352f" opacity="0.4" />
        </g>
      ))}
      {/* main content */}
      <rect x="216" y="32" width="200" height="12" rx="5" fill={C.text} opacity="0.15" />
      <rect x="216" y="52" width="140" height="8" rx="4" fill={C.text} opacity="0.08" />
      {/* properties row */}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <rect x={216 + i*150} y="88" width="80" height="7" rx="3" fill={C.text} opacity="0.2" />
          <rect x={216 + i*150} y="102" width={50 + (i%2)*30} height="20" rx="4" fill={i===0?"#d3e3fd":i===1?"#fde8d3":i===2?"#d3fde8":"#f0f0f0"} />
        </g>
      ))}
      {/* table header */}
      <rect x="216" y="145" width="640" height="28" rx="4" fill="#f7f7f5" />
      {["Nombre","Estado","Prioridad","Fecha","Asignado"].map((col, i) => (
        <rect key={i} x={224 + i*124} y="154" width={col.length * 5.5} height="8" rx="3" fill={C.text} opacity="0.35" />
      ))}
      {/* table rows */}
      {[0,1,2,3,4,5].map(i => (
        <g key={i}>
          <rect x="216" y={178 + i*44} width="640" height="1" fill="#f0f0f0" />
          <rect x="220" y={188 + i*44} width={80 + (i%4)*10} height="9" rx="4" fill={C.text} opacity="0.55" />
          <rect x="344" y={186 + i*44} width="54" height="14" rx="7" fill={["#d3fde8","#fde8d3","#d3e3fd","#fff3cd","#fde8d3","#d3fde8"][i]} />
          <rect x="468" y={186 + i*44} width="44" height="14" rx="7" fill={["#fde8d3","#d3fde8","#fde8d3","#d3e3fd","#d3fde8","#fde8d3"][i]} />
          <rect x="592" y={188 + i*44} width="52" height="9" rx="4" fill={C.text} opacity="0.3" />
          <circle cx="736" cy={193 + i*44} r="12" fill="#e9e9e7" />
        </g>
      ))}
    </svg>
  );
}

function FinanceMockup() {
  return (
    <svg viewBox="0 0 880 500" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", borderRadius: 12 }}>
      <rect width="880" height="500" fill="#ffffff" />
      {/* top bar */}
      <rect width="880" height="52" fill="#f7f7f5" />
      <rect x="20" y="18" width="90" height="16" rx="4" fill={C.text} opacity="0.6" />
      <rect x="130" y="20" width="60" height="12" rx="3" fill={C.text} opacity="0.25" />
      {/* KPI cards */}
      {[
        { label: "Ingresos", value: "$48.2K", color: "#d3fde8", bar: 0.72 },
        { label: "Gastos",   value: "$21.7K", color: "#fde8d3", bar: 0.45 },
        { label: "Utilidad", value: "$26.5K", color: "#d3e3fd", bar: 0.55 },
        { label: "Balance",  value: "$94.1K", color: "#f3d3fd", bar: 0.88 },
      ].map((k, i) => (
        <g key={i}>
          <rect x={20 + i*212} y="72" width="196" height="100" rx="8" fill={C.white} stroke={C.border} strokeWidth="1" />
          <rect x={28 + i*212} y="80" width="80" height="7" rx="3" fill={C.muted} opacity="0.6" />
          <rect x={28 + i*212} y="95" width="90" height="16" rx="4" fill={C.text} opacity="0.75" />
          <rect x={28 + i*212} y="124" width="168" height="6" rx="3" fill={C.light} />
          <rect x={28 + i*212} y="124" width={168 * k.bar} height="6" rx="3" fill={k.color.replace("d3","73").replace("fd","dd")} />
          <rect x={28 + i*212} y="138" width="40" height="7" rx="3" fill={C.muted} opacity="0.4" />
        </g>
      ))}
      {/* chart area */}
      <rect x="20" y="192" width="540" height="288" rx="8" fill={C.white} stroke={C.border} strokeWidth="1" />
      <rect x="32" y="204" width="80" height="9" rx="4" fill={C.text} opacity="0.6" />
      {/* bar chart */}
      {[120,180,100,220,160,200,140,175,130,190,210,155].map((h, i) => (
        <rect key={i} x={40 + i*40} y={440 - h} width="28" height={h} rx="3" fill={i===3||i===8?"#2a2a2a":"#e6e6e6"} opacity={i===3||i===8?1:0.6} />
      ))}
      {/* right panel */}
      <rect x="576" y="192" width="284" height="288" rx="8" fill={C.white} stroke={C.border} strokeWidth="1" />
      <rect x="590" y="204" width="100" height="9" rx="4" fill={C.text} opacity="0.6" />
      {[
        { label: "Ventas Online",  pct: 45, color: "#2a2a2a" },
        { label: "Consultoría",    pct: 28, color: "#6b6b6b" },
        { label: "Suscripciones",  pct: 18, color: "#e6e6e6" },
        { label: "Otros",          pct: 9,  color: "#f0f0f0" },
      ].map((item, i) => (
        <g key={i}>
          <rect x="590" y={230 + i*44} width="10" height="10" rx="2" fill={item.color} />
          <rect x="608" y={232 + i*44} width="80" height="8" rx="3" fill={C.text} opacity="0.55" />
          <rect x="720" y={232 + i*44} width="30" height="8" rx="3" fill={C.text} opacity="0.3" />
          <rect x="590" y={246 + i*44} width={item.pct * 2.4} height="4" rx="2" fill={item.color === "#f0f0f0" ? C.border : item.color} opacity="0.8" />
        </g>
      ))}
    </svg>
  );
}

function MondayMockup() {
  const statuses = ["En Progreso","Completado","Pendiente","Revisión","Bloqueado"];
  const colors   = ["#fdbc40","#00c875","#c4c4c4","#0099ff","#e2445c"];
  return (
    <svg viewBox="0 0 880 500" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", borderRadius: 12 }}>
      <rect width="880" height="500" fill="#1f1f1f" />
      {/* top bar */}
      <rect width="880" height="48" fill="#1a1a1a" />
      <rect x="16" y="16" width="90" height="16" rx="4" fill="#ffffff" opacity="0.7" />
      {["Tablero","Lista","Timeline","Gantt"].map((t,i) => (
        <rect key={i} x={140+i*80} y="20" width={t.length*6} height="8" rx="3" fill="#ffffff" opacity={i===0?0.85:0.4} />
      ))}
      {/* group header */}
      <rect x="0" y="64" width="880" height="32" fill="#252525" />
      <rect x="16" y="74" width="8" height="8" rx="1" fill="#00c875" />
      <rect x="30" y="74" width="90" height="8" rx="3" fill="#ffffff" opacity="0.7" />
      {/* column headers */}
      {["Tarea","Responsable","Estado","Fecha","Prioridad"].map((h,i)=>(
        <rect key={i} x={[16,220,380,520,660][i]} y="104" width={h.length*6.5} height="7" rx="3" fill="#ffffff" opacity="0.3" />
      ))}
      {/* rows */}
      {[0,1,2,3,4,5,6].map(i=>(
        <g key={i}>
          <rect x="0" y={120+i*48} width="880" height="47" fill={i%2===0?"#252525":"#222"} />
          <rect x="16" y={136+i*48} width={80+(i%4)*18} height="9" rx="4" fill="#ffffff" opacity="0.7" />
          <circle cx="244" cy={141+i*48} r="12" fill={["#c4c4c4","#0073ea","#00c875","#c4c4c4","#e2445c","#0073ea","#fdbc40"][i]} />
          <rect x={372} y={132+i*48} width="72" height="22" rx="4" fill={colors[i%5]} opacity="0.2" />
          <rect x={382} y={137+i*48} width={statuses[i%5].length*5.2} height="9" rx="3" fill={colors[i%5]} />
          <rect x="520" y={136+i*48} width="60" height="9" rx="4" fill="#ffffff" opacity="0.3" />
          <rect x={660} y={134+i*48} width="52" height="16" rx="8" fill={i%2===0?"#e2445c20":"#00c87520"} />
          <rect x={672} y={138+i*48} width="28" height="8" rx="3" fill={i%2===0?"#e2445c":"#00c875"} opacity="0.9" />
        </g>
      ))}
    </svg>
  );
}

function AppsMockup() {
  return (
    <svg viewBox="0 0 880 500" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", display: "block", borderRadius: 12 }}>
      <rect width="880" height="500" fill="#ffffff" />
      <rect width="880" height="500" fill="#f7f7f5" />
      {/* header */}
      <rect x="20" y="24" width="140" height="14" rx="5" fill={C.text} opacity="0.75" />
      <rect x="20" y="46" width="220" height="9" rx="4" fill={C.muted} opacity="0.5" />
      {/* template cards - 3x2 grid */}
      {[
        { title:"CRM & Ventas",     tag:"Notion",   color:"#d3e3fd" },
        { title:"Gestión Proyectos",tag:"Notion",   color:"#d3fde8" },
        { title:"Finanzas",         tag:"Notion",   color:"#fde8d3" },
        { title:"Wiki Empresa",     tag:"Notion",   color:"#f3d3fd" },
        { title:"Pipeline Ventas",  tag:"Monday",   color:"#fde8d3" },
        { title:"Sprints Ágiles",   tag:"Monday",   color:"#d3e3fd" },
      ].map((card, i) => {
        const col = i % 3;
        const row = Math.floor(i / 3);
        const x = 20 + col * 290;
        const y = 80 + row * 200;
        return (
          <g key={i}>
            <rect x={x} y={y} width="272" height="180" rx="10" fill={C.white} stroke={C.border} strokeWidth="1" />
            {/* mock screenshot area */}
            <rect x={x+1} y={y+1} width="270" height="110" rx="10" fill={card.color} opacity="0.4" />
            {/* lines simulating content */}
            <rect x={x+16} y={y+24} width="100" height="8" rx="3" fill={C.text} opacity="0.25" />
            <rect x={x+16} y={y+40} width="200" height="6" rx="3" fill={C.text} opacity="0.15" />
            <rect x={x+16} y={y+54} width="160" height="6" rx="3" fill={C.text} opacity="0.12" />
            {[0,1,2].map(r=>(
              <rect key={r} x={x+16} y={y+70+r*14} width="240" height="5" rx="2" fill={C.text} opacity="0.1" />
            ))}
            {/* card footer */}
            <rect x={x+16} y={y+125} width={card.title.length*7} height="10" rx="4" fill={C.text} opacity="0.7" />
            <rect x={x+16} y={y+142} width="50" height="14" rx="7" fill={card.tag==="Notion"?"#f0f0f0":"#fff3cd"} />
            <rect x={x+22} y={y+146} width={card.tag.length*5.5} height="7" rx="2" fill={C.text} opacity="0.45" />
            <rect x={x+188} y={y+140} width="68" height="24" rx="12" fill={C.text} opacity="0.07" />
            <rect x={x+196} y={y+148} width="50" height="8" rx="3" fill={C.text} opacity="0.45" />
          </g>
        );
      })}
    </svg>
  );
}

/* ─── Nav ─────────────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 999,
      backgroundColor: "rgba(250,250,250,0.7)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: `1px solid rgba(230,230,230,0.5)`,
    }}>
      <div style={{
        maxWidth: 1080, margin: "0 auto", padding: "0 24px",
        height: 56,
        display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none" }}>
          <div style={{
            width: 28, height: 28, borderRadius: 6,
            background: C.black,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            <span style={{ color: "#fff", fontSize: 13, fontWeight: 700, letterSpacing: "-0.03em" }}>N</span>
          </div>
          <span style={{ fontSize: 14, fontWeight: 600, color: C.text, letterSpacing: "-0.01em" }}>Nebbuler</span>
        </Link>

        {/* Center links */}
        <nav style={{ display: "flex", alignItems: "center", gap: 2 }}>
          {[["Apps","/apps"],["Templates","/templates"],["Blog","/blog"]].map(([label, href]) => (
            <Link key={href} href={href} style={{
              padding: "6px 14px", fontSize: 14, color: C.text2,
              borderRadius: 100, fontWeight: 400,
              transition: "background 0.15s",
            }}
            className="hover:bg-black/5"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <Link href="/sign-in" style={{
            padding: "6px 16px", fontSize: 14, fontWeight: 500,
            color: C.text2, borderRadius: 100,
          }}
          className="hover:bg-black/5"
          >
            Sign In
          </Link>
          <Link href="/sign-up" style={{
            padding: "7px 18px", fontSize: 14, fontWeight: 600,
            color: "#fff", backgroundColor: C.black, borderRadius: 100,
          }}>
            Create a free account
          </Link>
        </div>
      </div>
    </header>
  );
}

/* ─── Hero ────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{ backgroundColor: C.bg, padding: "80px 24px 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        {/* Text block — centered */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h1 style={{
            fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)",
            fontWeight: 700, color: C.text, lineHeight: 1.1,
            letterSpacing: "-0.03em", marginBottom: 18,
          }}>
            Notion &amp; Monday.com<br/>Templates
          </h1>
          <p style={{
            fontSize: 17, color: C.muted, lineHeight: 1.65,
            maxWidth: 480, margin: "0 auto 32px",
          }}>
            Discover 30+ templates to organize your company, save time and digitize your workflows from day one.
          </p>
          <Link href="/templates" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "11px 26px",
            backgroundColor: C.black, color: "#fff",
            borderRadius: 100, fontSize: 14, fontWeight: 600,
          }}>
            Shop Templates
          </Link>
        </div>

        {/* Hero screenshot */}
        <div style={{
          borderRadius: "12px 12px 0 0",
          overflow: "hidden",
          border: `1px solid ${C.border}`,
          borderBottom: "none",
          boxShadow: "0 8px 40px rgba(0,0,0,0.07)",
        }}>
          <NotionDashboardMockup />
        </div>
      </div>
    </section>
  );
}

/* ─── Feature section ─────────────────────────────────────────────────────── */
interface FeatureProps {
  title: string;
  description: string;
  cta: string;
  href: string;
  mockup: React.ReactNode;
  reverse?: boolean;
}

function Feature({ title, description, cta, href, mockup, reverse }: FeatureProps) {
  return (
    <section style={{ backgroundColor: C.bg, padding: "100px 24px" }}>
      <div style={{
        maxWidth: 1080, margin: "0 auto",
        display: "flex",
        flexDirection: reverse ? "row-reverse" : "row",
        alignItems: "center",
        gap: 72,
      }}
      className={`flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
      >
        {/* Text */}
        <div style={{ flex: "0 0 320px", minWidth: 0 }}>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700, color: C.text,
            lineHeight: 1.15, letterSpacing: "-0.025em",
            marginBottom: 16,
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: 16, color: C.muted, lineHeight: 1.7,
            marginBottom: 28, maxWidth: 320,
          }}>
            {description}
          </p>
          <Link href={href} style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "9px 22px",
            backgroundColor: C.black, color: "#fff",
            borderRadius: 100, fontSize: 14, fontWeight: 600,
          }}>
            {cta}
          </Link>
        </div>

        {/* Mockup */}
        <div style={{
          flex: 1, minWidth: 0,
          borderRadius: 12,
          overflow: "hidden",
          border: `1px solid ${C.border}`,
          boxShadow: "0 4px 32px rgba(0,0,0,0.07), 0 0 0 0.5px rgba(0,0,0,0.04)",
        }}>
          {mockup}
        </div>
      </div>
    </section>
  );
}

/* ─── Template cards section ──────────────────────────────────────────────── */
function TemplatesSection() {
  const templates = [
    { name: "CRM & Ventas B2B",       desc: "Gestiona leads, pipeline y seguimiento de clientes.", tag: "Notion",  href: "/templates/crm-ventas" },
    { name: "Gestión de Proyectos",   desc: "Organiza sprints, tareas y entregas de tu equipo.",  tag: "Notion",  href: "/templates/proyectos" },
    { name: "Finanzas Empresariales", desc: "Ingresos, gastos, proyecciones y KPIs en un lugar.", tag: "Notion",  href: "/templates/finanzas" },
    { name: "Wiki & Base de Conocimiento", desc: "Documentación centralizada para toda tu empresa.", tag: "Notion", href: "/templates/wiki" },
    { name: "Pipeline de Ventas",     desc: "Automatiza tu proceso de ventas en Monday.com.",      tag: "Monday",  href: "/monday/pipeline" },
    { name: "Sprints Ágiles",         desc: "Gestión de desarrollo y entregables con claridad.",   tag: "Monday",  href: "/monday/sprints" },
    { name: "Recursos Humanos",       desc: "Onboarding, vacaciones, evaluaciones y más.",         tag: "Notion",  href: "/templates/rrhh" },
    { name: "OKR & Metas",            desc: "Define objetivos clave y haz seguimiento semanal.",   tag: "Notion",  href: "/templates/okr" },
  ];

  return (
    <section style={{ backgroundColor: C.bg, padding: "100px 24px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h2 style={{
            fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
            fontWeight: 700, color: C.text,
            letterSpacing: "-0.025em", marginBottom: 10,
          }}>
            Templates by Nebbuler
          </h2>
          <p style={{ fontSize: 16, color: C.muted }}>
            Get things done with templates designed with simplicity in mind.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 12,
        }}>
          {templates.map(t => (
            <Link key={t.href} href={t.href} style={{
              display: "block",
              padding: "18px 20px",
              backgroundColor: C.white,
              borderRadius: 10,
              border: `1px solid ${C.border}`,
              textDecoration: "none",
              transition: "box-shadow 0.15s, border-color 0.15s",
            }}
            className="hover:shadow-md hover:border-gray-300"
            >
              {/* icon placeholder */}
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                backgroundColor: C.light,
                marginBottom: 12,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ fontSize: 18 }}>
                  {t.tag === "Monday" ? "📊" : "📝"}
                </span>
              </div>
              <div style={{ fontSize: 14, fontWeight: 600, color: C.text, marginBottom: 6 }}>
                {t.name}
              </div>
              <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.5, marginBottom: 12 }}>
                {t.desc}
              </div>
              <span style={{
                display: "inline-block",
                padding: "2px 10px",
                borderRadius: 100,
                fontSize: 11, fontWeight: 600,
                backgroundColor: t.tag === "Monday" ? "#fff3cd" : C.light,
                color: C.text2,
              }}>
                {t.tag}
              </span>
            </Link>
          ))}
        </div>

        {/* See more */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <Link href="/templates" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "9px 24px",
            border: `1px solid ${C.border}`,
            borderRadius: 100, fontSize: 14, fontWeight: 500,
            color: C.text, backgroundColor: C.white,
          }}
          className="hover:border-gray-400"
          >
            View All Templates
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ──────────────────────────────────────────────────────────────── */
function Footer() {
  const cols = [
    { title: "Pages", links: [["Apps","/apps"],["Templates","/templates"],["Blog","/blog"]] },
    { title: "Templates", links: [["CRM Ventas","/templates/crm-ventas"],["Finanzas","/templates/finanzas"],["Proyectos","/templates/proyectos"],["Ver Todos","/templates"]] },
    { title: "Monday.com", links: [["Pipeline Ventas","/monday/pipeline"],["Sprints Ágiles","/monday/sprints"],["Ver Todos","/monday"]] },
    { title: "Company", links: [["About","/about"],["Contact","/contact"],["Privacy Policy","/privacy"]] },
  ];

  return (
    <footer style={{ backgroundColor: C.black, color: C.white, padding: "64px 24px 32px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.4fr repeat(4, 1fr)",
          gap: 40,
          marginBottom: 56,
          alignItems: "start",
        }}
        className="grid-cols-2 md:grid-cols-5"
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 14, textDecoration: "none" }}>
              <div style={{
                width: 28, height: 28, borderRadius: 6,
                backgroundColor: C.white,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ color: C.black, fontSize: 13, fontWeight: 700 }}>N</span>
              </div>
              <span style={{ fontSize: 14, fontWeight: 600, color: C.white }}>Nebbuler</span>
            </Link>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", lineHeight: 1.65, maxWidth: 180, marginBottom: 20 }}>
              Productivity meets minimalism.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {["Instagram","Twitter","YouTube","TikTok"].map(s => (
                <a key={s} href="#" style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}
                  className="hover:text-white transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{
                fontSize: 11, fontWeight: 600,
                color: "rgba(255,255,255,0.35)",
                textTransform: "uppercase", letterSpacing: "0.1em",
                marginBottom: 16,
              }}>
                {col.title}
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} style={{ fontSize: 14, color: "rgba(255,255,255,0.6)" }}
                      className="hover:text-white transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: 24,
          fontSize: 12,
          color: "rgba(255,255,255,0.25)",
        }}>
          © 2024–2026 Nebbuler. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        <Feature
          title="Second Brain for your company"
          description="An all-in-one Notion system to organize your tasks, projects, goals, and notes. Everything in one place, ready from day one."
          cta="Learn More"
          href="/templates/second-brain"
          mockup={<NotionDashboardMockup />}
        />

        <Feature
          title="All-In-One Finance Dashboard"
          description="Bring your company financials in one place to get the big picture: income, expenses, forecasts and KPIs."
          cta="Get Finance Tracker"
          href="/templates/finanzas"
          mockup={<FinanceMockup />}
          reverse
        />

        <Feature
          title="Manage your projects with Monday"
          description="Professional Monday.com templates: sales pipeline, sprint management, client onboarding and more."
          cta="View Monday Templates"
          href="/monday"
          mockup={<MondayMockup />}
        />

        <TemplatesSection />
      </main>
      <Footer />
    </>
  );
}
