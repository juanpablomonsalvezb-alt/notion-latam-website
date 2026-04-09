import Link from "next/link";

/* ─── Tokens ────────────────────────────────────────────────────────────────── */
const C = {
  gray: "#f0f0f0",   // section background
  white: "#ffffff",
  black: "#000000",
  text:  "#2a2a2a",
  text2: "#484848",
  muted: "#6b6b6b",
  border: "#e6e6e6",
} as const;

/* ─── Shared heading style ──────────────────────────────────────────────────── */
const H2: React.CSSProperties = {
  fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
  fontWeight: 700,
  color: C.black,
  lineHeight: 1.1,
  letterSpacing: "-0.03em",
  textAlign: "center",
  marginBottom: 16,
};
const Sub: React.CSSProperties = {
  fontSize: 18,
  color: C.text2,
  lineHeight: 1.6,
  textAlign: "center",
  maxWidth: 560,
  margin: "0 auto 28px",
};

/* ─── Device frames ─────────────────────────────────────────────────────────── */
function TabletFrame({ width = 260, children }: { width?: number; children: React.ReactNode }) {
  return (
    <div style={{
      width, display: "inline-block",
      background: "#1c1c1c", borderRadius: 26, padding: 7,
      boxShadow: "0 28px 72px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.1)",
    }}>
      <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden" }}>
        {/* camera bar */}
        <div style={{ height: 20, display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid #f0f0f0" }}>
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#999" }} />
        </div>
        {children}
      </div>
    </div>
  );
}

function PhoneFrame({ width = 200, children }: { width?: number; children: React.ReactNode }) {
  const h = Math.round(width * 2.16);
  return (
    <div style={{
      width, display: "inline-block",
      background: "#1c1c1c", borderRadius: 44, padding: 9,
      boxShadow: "0 28px 72px rgba(0,0,0,0.22)",
    }}>
      <div style={{ background: "#fff", borderRadius: 36, overflow: "hidden", height: h, position: "relative" }}>
        <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", width: "40%", height: 26, borderRadius: 18, background: "#1c1c1c", zIndex: 10 }} />
        {children}
      </div>
    </div>
  );
}

/* ─── Notion-like UI components ─────────────────────────────────────────────── */
const Row = ({ icon, label, tag, tagColor }: { icon: string; label: string; tag?: string; tagColor?: string }) => (
  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "5px 0", borderBottom: "1px solid #f5f5f5" }}>
    <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
      <span style={{ fontSize: 12 }}>{icon}</span>
      <span style={{ fontSize: 11.5, color: "#1a1a1a" }}>{label}</span>
    </div>
    {tag && <span style={{ fontSize: 10, background: tagColor || "#f0f0f0", padding: "1px 7px", borderRadius: 4, color: "#484848" }}>{tag}</span>}
  </div>
);

function CRMContent() {
  return (
    <div style={{ padding: "12px 14px 16px" }}>
      <div style={{ fontSize: 22, marginBottom: 4 }}>📋</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", marginBottom: 2 }}>CRM Ventas</div>
      <div style={{ fontSize: 10, color: "#9b9a97", marginBottom: 10 }}>Pipeline de clientes</div>
      <div style={{ fontSize: 10, fontWeight: 600, color: "#9b9a97", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 5 }}>Quick Actions</div>
      {["Nuevo Lead","Nueva Empresa","Nueva Tarea"].map((t,i) => (
        <div key={i} style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4 }}>
          <div style={{ width: 11, height: 11, borderRadius: 2, border: "1.5px solid #d0d0d0" }} />
          <span style={{ fontSize: 11, color: "#1a1a1a" }}>{t}</span>
        </div>
      ))}
      <div style={{ fontSize: 10, fontWeight: 600, color: "#9b9a97", textTransform: "uppercase", letterSpacing: "0.06em", margin: "10px 0 5px" }}>Pipeline</div>
      {[["Prospecto","12","#d3e3fd"],["Propuesta","5","#fde8d3"],["Negociación","3","#d3fde8"],["Cerrado","8","#f0f0f0"]].map(([s,n,c],i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 3 }}>
          <span style={{ fontSize: 11, color: "#484848" }}>{s}</span>
          <span style={{ fontSize: 10, background: c, padding: "1px 6px", borderRadius: 3, color: "#484848" }}>{n}</span>
        </div>
      ))}
    </div>
  );
}

function ProjectsContent() {
  return (
    <div style={{ padding: "12px 14px 16px" }}>
      <div style={{ fontSize: 22, marginBottom: 4 }}>🗂️</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", marginBottom: 2 }}>Gestión Proyectos</div>
      <div style={{ fontSize: 10, color: "#9b9a97", marginBottom: 10 }}>Sprints y tareas</div>
      <div style={{ fontSize: 10, fontWeight: 600, color: "#9b9a97", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 5 }}>Quick Capture</div>
      {["Nueva Tarea","Nuevo Proyecto","Nuevo Sprint","Nuevo Hito"].map((t,i) => (
        <div key={i} style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4 }}>
          <div style={{ width: 11, height: 11, borderRadius: 2, border: "1.5px solid #d0d0d0" }} />
          <span style={{ fontSize: 11, color: "#1a1a1a" }}>{t}</span>
        </div>
      ))}
      <div style={{ fontSize: 10, fontWeight: 600, color: "#9b9a97", textTransform: "uppercase", letterSpacing: "0.06em", margin: "10px 0 5px" }}>Proyectos</div>
      {[["Website Rediseño","En Progreso","#d3e3fd"],["App Mobile","Planificando","#f0f0f0"],["Marketing Q2","Completado","#d3fde8"]].map(([n,s,c],i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
          <span style={{ fontSize: 11, color: "#1a1a1a" }}>{n}</span>
          <span style={{ fontSize: 10, background: c, padding: "1px 7px", borderRadius: 4, color: "#484848" }}>{s}</span>
        </div>
      ))}
    </div>
  );
}

function WikiContent() {
  return (
    <div style={{ padding: "12px 14px 16px" }}>
      <div style={{ fontSize: 22, marginBottom: 4 }}>📚</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", marginBottom: 2 }}>Wiki Empresa</div>
      <div style={{ fontSize: 10, color: "#9b9a97", marginBottom: 10 }}>Base de conocimiento</div>
      {[["📁","Onboarding"],["📁","Procesos"],["📁","Políticas"],["📁","Recursos"]].map(([ic,t],i) => (
        <div key={i} style={{ display: "flex", gap: 7, alignItems: "center", padding: "4px 0", borderBottom: "1px solid #f5f5f5" }}>
          <span style={{ fontSize: 13 }}>{ic}</span>
          <span style={{ fontSize: 11, color: "#1a1a1a" }}>{t}</span>
        </div>
      ))}
      <div style={{ fontSize: 10, fontWeight: 600, color: "#9b9a97", textTransform: "uppercase", letterSpacing: "0.06em", margin: "10px 0 5px" }}>Destacados</div>
      {["📄 Guía de Onboarding","📄 Manual de Ventas","📄 Política de Vacaciones"].map((t,i) => (
        <div key={i} style={{ fontSize: 11, color: "#0073ea", marginBottom: 4 }}>{t}</div>
      ))}
    </div>
  );
}

/* Finance Tracker Notion content (matching screenshot) */
function FinanceNotionContent() {
  return (
    <div style={{ padding: "16px 18px", fontFamily: "inherit" }}>
      {/* Top bar */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginBottom: 12, paddingBottom: 8, borderBottom: "1px solid #f0f0f0" }}>
        {["Share","💬","🕐","☆","···"].map((t,i) => (
          <span key={i} style={{ fontSize: 11, color: "#9b9a97" }}>{t}</span>
        ))}
      </div>
      {/* Page icon + title */}
      <div style={{ fontSize: 28, marginBottom: 6 }}>🏛️</div>
      <div style={{ fontSize: 20, fontWeight: 700, color: "#1a1a1a", marginBottom: 16 }}>Finance Tracker</div>
      {/* Two columns */}
      <div style={{ display: "flex", gap: 16 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#1a1a1a", marginBottom: 6 }}>Quick Actions</div>
          {["New Income","New Expense","New Transfer"].map((t,i) => (
            <div key={i} style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 5 }}>
              <div style={{ width: 14, height: 14, borderRadius: "50%", border: "1.5px solid #d0d0d0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 7, height: 1, background: "#aaa" }} />
              </div>
              <span style={{ fontSize: 11, color: "#1a1a1a" }}>{t}</span>
            </div>
          ))}
          <div style={{ fontSize: 11, fontWeight: 600, color: "#1a1a1a", margin: "12px 0 6px" }}>Navigation</div>
          {[["🏛️","Dashboard"],["💰","Accounts"],["📊","Budgeting"],["🏷️","Categories"],["⬆️","Incomes"]].map(([ic,t],i) => (
            <div key={i} style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4 }}>
              <span style={{ fontSize: 11 }}>{ic}</span>
              <span style={{ fontSize: 11, color: "#484848" }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ flex: 1.6 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#1a1a1a", marginBottom: 8 }}>Accounts</div>
          {/* Table */}
          <div style={{ border: "1px solid #e9e9e7", borderRadius: 4, overflow: "hidden", marginBottom: 10 }}>
            <div style={{ display: "flex", background: "#f7f7f5", borderBottom: "1px solid #e9e9e7", padding: "3px 6px" }}>
              {["Aa Name","# Balance","# Total"].map((h,i) => (
                <span key={i} style={{ flex: 1, fontSize: 9.5, color: "#9b9a97" }}>{h}</span>
              ))}
            </div>
            {[["DBS","$4,188","$4,041"],["OCBC","$0.00","$0.00"]].map(([n,b,t],i) => (
              <div key={i} style={{ display: "flex", padding: "4px 6px", borderBottom: i===0 ? "1px solid #f0f0f0" : "none" }}>
                {[n,b,t].map((v,j) => (
                  <span key={j} style={{ flex: 1, fontSize: 10, color: "#1a1a1a" }}>{v}</span>
                ))}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#1a1a1a", marginBottom: 6 }}>Budgets</div>
          <div style={{ display: "flex", gap: 4 }}>
            {[["🏠","Housing","100%"],["🛒","Groceries","60%"],["⚡","Utilities","83%"]].map(([ic,n,p],i) => (
              <div key={i} style={{ flex: 1, border: "1px solid #e9e9e7", borderRadius: 4, padding: "5px 6px" }}>
                <div style={{ fontSize: 12, marginBottom: 2 }}>{ic}</div>
                <div style={{ fontSize: 9.5, color: "#484848", marginBottom: 3 }}>{n}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                  <div style={{ flex: 1, height: 4, background: "#e9e9e7", borderRadius: 2 }}>
                    <div style={{ width: p, height: "100%", background: "#484848", borderRadius: 2 }} />
                  </div>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", border: "1.5px solid #d0d0d0" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* Second Brain Notion content */
function SecondBrainTabletContent() {
  return (
    <div style={{ padding: "14px 16px" }}>
      <div style={{ fontSize: 26, marginBottom: 6 }}>🧠</div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "#1a1a1a", marginBottom: 14 }}>Second Brain</div>
      <div style={{ display: "flex", gap: 14 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 5 }}>Quick Capture</div>
          {[["☐","New Task"],["☐","New Note"],["☐","New Project"],["☐","New Highlight"],["✏️","New Reference"]].map(([ic,t],i) => (
            <div key={i} style={{ display: "flex", gap: 5, alignItems: "center", marginBottom: 4 }}>
              <span style={{ fontSize: 10 }}>{ic}</span>
              <span style={{ fontSize: 10.5, color: "#484848" }}>{t}</span>
            </div>
          ))}
          <div style={{ fontSize: 11, fontWeight: 600, marginTop: 8, marginBottom: 5 }}>Dashboards</div>
          {[["📁","PARA Dashboard"],["✅","GTD Dashboard"],["✏️","Notes Dashboard"]].map(([ic,t],i) => (
            <div key={i} style={{ display: "flex", gap: 5, alignItems: "center", marginBottom: 3 }}>
              <span style={{ fontSize: 10 }}>{ic}</span>
              <span style={{ fontSize: 10.5, color: "#484848" }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ flex: 1.4 }}>
          <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 5 }}>Tasks</div>
          <div style={{ display: "flex", gap: 4, marginBottom: 6 }}>
            {["Today","Upcoming","Next Action","Waiting On"].map((t,i) => (
              <span key={i} style={{ fontSize: 9, padding: "2px 5px", background: i===0?"#1a1a1a":"#f0f0f0", color: i===0?"#fff":"#484848", borderRadius: 3 }}>{t}</span>
            ))}
          </div>
          {[["✅","Schedule a meeting with Ben"],["✅","Write an outline for email course"],["🎬","Film a new YouTube video"]].map(([ic,t],i) => (
            <div key={i} style={{ display: "flex", gap: 5, alignItems: "flex-start", marginBottom: 4 }}>
              <span style={{ fontSize: 10 }}>{ic}</span>
              <span style={{ fontSize: 10, color: "#1a1a1a", lineHeight: 1.3 }}>{t}</span>
            </div>
          ))}
          <div style={{ fontSize: 11, fontWeight: 600, marginTop: 8, marginBottom: 5 }}>Projects</div>
          <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
            {["Deadlines","Timeline","Status"].map((t,i) => (
              <span key={i} style={{ fontSize: 9, padding: "1px 4px", background: "#f0f0f0", color: "#484848", borderRadius: 2 }}>{t}</span>
            ))}
          </div>
          {[["▶","Feb 2024","1"],["▼","Apr 2024","3"]].map(([ic,d,c],i) => (
            <div key={i} style={{ display: "flex", gap: 5, alignItems: "center", marginBottom: 3 }}>
              <span style={{ fontSize: 9 }}>{ic}</span>
              <span style={{ fontSize: 10, color: "#484848" }}>{d}</span>
              <span style={{ fontSize: 9, color: "#9b9a97" }}>{c}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SecondBrainPhoneContent() {
  return (
    <div style={{ paddingTop: 44 }}>
      <div style={{ padding: "0 14px 14px" }}>
        <div style={{ fontSize: 20, marginBottom: 4 }}>🧠</div>
        <div style={{ fontSize: 14, fontWeight: 700, color: "#1a1a1a", marginBottom: 8 }}>Second Brain</div>
        <div style={{ fontSize: 9, fontWeight: 600, marginBottom: 4 }}>Quick Capture</div>
        {["☐ New Task","☐ New Note","☐ New Project","☐ New Highlight","✏️ New Reference"].map((t,i) => (
          <div key={i} style={{ fontSize: 9.5, color: "#484848", marginBottom: 2 }}>{t}</div>
        ))}
        <div style={{ fontSize: 9, fontWeight: 600, marginTop: 8, marginBottom: 4 }}>Dashboards</div>
        {["📁 PARA Dashboard","✅ GTD Dashboard","✏️ Notes Dashboard"].map((t,i) => (
          <div key={i} style={{ fontSize: 9.5, color: "#484848", marginBottom: 2 }}>{t}</div>
        ))}
      </div>
      {/* Bottom bar */}
      <div style={{ display: "flex", justifyContent: "space-around", padding: "8px 0", borderTop: "1px solid #f0f0f0" }}>
        {["≡","🔍","🔔","👤"].map((ic,i) => (
          <span key={i} style={{ fontSize: 14, color: i===0?"#1a1a1a":"#9b9a97" }}>{ic}</span>
        ))}
      </div>
    </div>
  );
}

/* Monday phone content */
function MondayPhoneContent() {
  return (
    <div style={{ paddingTop: 44, padding: "44px 12px 8px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: "#f5f0ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 14 }}>📊</span>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#1a1a1a" }}>Pipeline Ventas</div>
          <div style={{ fontSize: 9, color: "#9b9a97" }}>monday.com</div>
        </div>
      </div>
      {/* Kanban columns */}
      {[
        { stage: "Nuevo", color: "#e2e2e2", items: ["Empresa A","Empresa B"] },
        { stage: "Contactado", color: "#fdbc40", items: ["Empresa C"] },
        { stage: "Propuesta", color: "#0073ea", items: ["Empresa D","Empresa E"] },
        { stage: "Cerrado", color: "#00c875", items: ["Empresa F"] },
      ].map((col,i) => (
        <div key={i} style={{ marginBottom: 6 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: col.color }} />
            <span style={{ fontSize: 9.5, fontWeight: 600, color: "#1a1a1a" }}>{col.stage}</span>
            <span style={{ fontSize: 9, color: "#9b9a97" }}>{col.items.length}</span>
          </div>
          {col.items.map((item,j) => (
            <div key={j} style={{ background: "#f7f7f5", borderRadius: 4, padding: "4px 8px", marginBottom: 2 }}>
              <span style={{ fontSize: 10, color: "#1a1a1a" }}>{item}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ─── Nav ────────────────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 999,
      backgroundColor: "rgba(255,255,255,0.8)",
      backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(230,230,230,0.6)",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 28px",
        height: 58, display: "flex", alignItems: "center", justifyContent: "space-between",
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: C.black,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#fff", fontSize: 14, fontWeight: 800, letterSpacing: "-0.04em" }}>N</span>
          </div>
          <span style={{ fontSize: 15, fontWeight: 700, color: C.black, letterSpacing: "-0.01em" }}>Nebbuler</span>
        </Link>

        {/* Center nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: 0 }}>
          {[["Apps","/apps"],["Templates","/templates"],["Blog","/blog"]].map(([l,h]) => (
            <Link key={h} href={h} style={{
              padding: "6px 16px", fontSize: 14, color: C.text2,
              borderRadius: 100, fontWeight: 400,
            }}
            className="hover:bg-black/5 transition-colors"
            >
              {l}
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <Link href="/sign-in" style={{
            padding: "6px 18px", fontSize: 14, fontWeight: 500,
            color: C.text, borderRadius: 100,
            border: "1px solid #d8d8d8", backgroundColor: "rgba(255,255,255,0.8)",
          }}>
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

/* ─── Hero ───────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section style={{ backgroundColor: C.gray, padding: "60px 24px 80px", overflow: "hidden" }}>
      {/* Three floating tablets */}
      <div style={{
        position: "relative", maxWidth: 860, margin: "0 auto",
        height: 440, marginBottom: 64,
      }}>
        {/* Left */}
        <div style={{
          position: "absolute", width: 240,
          left: "4%", top: 56,
          transform: "rotate(-14deg)",
          transformOrigin: "center bottom",
          zIndex: 1,
        }}>
          <TabletFrame width={240}><CRMContent /></TabletFrame>
        </div>
        {/* Center (front) */}
        <div style={{
          position: "absolute", width: 268,
          left: "50%", top: 16, marginLeft: -134,
          transform: "rotate(-4deg)",
          transformOrigin: "center bottom",
          zIndex: 3,
        }}>
          <TabletFrame width={268}><ProjectsContent /></TabletFrame>
        </div>
        {/* Right */}
        <div style={{
          position: "absolute", width: 248,
          right: "4%", top: 36,
          transform: "rotate(10deg)",
          transformOrigin: "center bottom",
          zIndex: 2,
        }}>
          <TabletFrame width={248}><WikiContent /></TabletFrame>
        </div>
      </div>

      {/* Text below */}
      <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
        <h1 style={{
          fontSize: "clamp(3rem, 7vw, 5rem)",
          fontWeight: 700, color: C.black,
          lineHeight: 1.08, letterSpacing: "-0.035em",
          marginBottom: 18,
        }}>
          Notion &amp; Monday.com Templates
        </h1>
        <p style={{ fontSize: 18, color: C.text2, lineHeight: 1.6, marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
          Discover 30+ templates to organize your company, saving you valuable time.
        </p>
        <Link href="/templates" style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "14px 32px",
          backgroundColor: C.black, color: "#fff",
          borderRadius: 100, fontSize: 15, fontWeight: 600,
        }}>
          Shop Templates
        </Link>
      </div>
    </section>
  );
}

/* ─── Centered section (title+subtitle+CTA above, image below) ──────────────── */
interface SectionProps {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: React.ReactNode;
  bg?: string;
}

function CenteredSection({ title, subtitle, cta, href, image, bg = C.gray }: SectionProps) {
  return (
    <section style={{ backgroundColor: bg, padding: "96px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <h2 style={H2}>{title}</h2>
        <p style={Sub}>{subtitle}</p>
        <Link href={href} style={{
          display: "inline-flex", alignItems: "center",
          padding: "13px 28px",
          backgroundColor: C.black, color: "#fff",
          borderRadius: 100, fontSize: 15, fontWeight: 600,
          marginBottom: 64,
        }}>
          {cta}
        </Link>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {image}
        </div>
      </div>
    </section>
  );
}

/* ─── Templates section (replaces "Apps by Easlo") ──────────────────────────── */
function TemplatesSection() {
  const items = [
    {
      icon: (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="16" width="56" height="8" rx="4" fill="#1a1a1a" strokeWidth="0"/>
          <rect x="8" y="32" width="40" height="8" rx="4" fill="#1a1a1a" strokeWidth="0"/>
          <rect x="8" y="48" width="48" height="8" rx="4" fill="#1a1a1a" strokeWidth="0"/>
          <circle cx="60" cy="52" r="10" fill="#1a1a1a"/>
          <path d="M56 52 L59 55 L64 49" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      name: "CRM & Ventas",
      desc: "Gestiona tus leads y pipeline.",
      href: "/templates/crm",
    },
    {
      icon: (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="24" height="24" rx="4" stroke="#1a1a1a" strokeWidth="3"/>
          <rect x="40" y="8" width="24" height="24" rx="4" stroke="#1a1a1a" strokeWidth="3"/>
          <rect x="8" y="40" width="24" height="24" rx="4" stroke="#1a1a1a" strokeWidth="3"/>
          <rect x="40" y="40" width="24" height="24" rx="4" stroke="#1a1a1a" strokeWidth="3"/>
          <rect x="16" y="16" width="8" height="8" rx="1" fill="#1a1a1a"/>
          <rect x="48" y="16" width="8" height="8" rx="1" fill="#1a1a1a"/>
        </svg>
      ),
      name: "Proyectos",
      desc: "Organiza sprints y entregas.",
      href: "/templates/proyectos",
    },
    {
      icon: (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="52" width="12" height="16" rx="2" fill="#1a1a1a"/>
          <rect x="25" y="36" width="12" height="32" rx="2" fill="#1a1a1a"/>
          <rect x="42" y="24" width="12" height="44" rx="2" fill="#1a1a1a"/>
          <rect x="59" y="12" width="12" height="56" rx="2" fill="#1a1a1a"/>
          <path d="M8 52 L20 36 L37 28 L54 20 L68 14" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        </svg>
      ),
      name: "Finanzas",
      desc: "Ingresos, gastos y KPIs.",
      href: "/templates/finanzas",
    },
    {
      icon: (
        <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <text x="6" y="34" fontFamily="sans-serif" fontWeight="900" fontSize="22" fill="#1a1a1a">MO</text>
          <text x="6" y="60" fontFamily="sans-serif" fontWeight="900" fontSize="22" fill="#1a1a1a">ND</text>
          <rect x="52" y="8" width="14" height="56" rx="3" fill="#1a1a1a" opacity="0.12"/>
        </svg>
      ),
      name: "Monday",
      desc: "Templates para Monday.com.",
      href: "/monday",
    },
  ];

  return (
    <section style={{ backgroundColor: C.gray, padding: "96px 24px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
        <h2 style={H2}>Templates by Nebbuler</h2>
        <p style={Sub}>Get things done with templates designed with simplicity in mind.</p>
        <Link href="/templates" style={{
          display: "inline-flex", alignItems: "center",
          padding: "13px 28px",
          backgroundColor: C.black, color: "#fff",
          borderRadius: 100, fontSize: 15, fontWeight: 600,
          marginBottom: 64,
        }}>
          View All
        </Link>

        {/* 4 large app-style icons */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
        }}
        className="grid-cols-2 md:grid-cols-4"
        >
          {items.map(item => (
            <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
              <div style={{
                width: "100%", aspectRatio: "1",
                backgroundColor: "#e8e8e8",
                borderRadius: "30%",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 14,
                transition: "background 0.2s",
              }}
              className="hover:bg-gray-300"
              >
                {item.icon}
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.name}</div>
              <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.5 }}>{item.desc}</div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Footer (white background) ─────────────────────────────────────────────── */
function Footer() {
  const cols = [
    { title: "Pages",     links: [["Apps","/apps"],["Templates","/templates"],["Blog","/blog"]] },
    { title: "Templates", links: [["CRM Ventas","/templates/crm"],["Finanzas","/templates/finanzas"],["Proyectos","/templates/proyectos"],["All Access","/pricing"]] },
    { title: "Monday",    links: [["Pipeline Ventas","/monday/pipeline"],["Sprints Ágiles","/monday/sprints"],["Ver Todos","/monday"]] },
    { title: "Company",   links: [["About","/about"],["Updates","/updates"],["Privacy Policy","/privacy"]] },
  ];

  /* Simple SVG social icons */
  const socials = [
    {
      label: "Notion",
      svg: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1" y="1" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M5 5h8M5 9h5M5 13h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      label: "Instagram",
      svg: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1" y="1" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="9" cy="9" r="3.5" stroke="currentColor" strokeWidth="1.5"/>
          <circle cx="13.5" cy="4.5" r="1" fill="currentColor"/>
        </svg>
      ),
    },
    {
      label: "X/Twitter",
      svg: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M2 2l5.5 6.5L2 16h2l4.5-6 4.5 6H16L10 8.5 15.5 2H14l-4 5L6 2H2z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      label: "TikTok",
      svg: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M12 1c.3 2 1.5 3.5 3 4v3c-1 0-2-.3-3-1v5a5 5 0 1 1-4-4.9V11a2 2 0 1 0 2 2V1h2z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      label: "YouTube",
      svg: (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <rect x="1" y="3" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M7 6.5l5 2.5-5 2.5V6.5z" fill="currentColor"/>
        </svg>
      ),
    },
  ];

  return (
    <footer style={{ backgroundColor: C.white, padding: "64px 28px 40px", borderTop: "1px solid #e8e8e8" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.6fr repeat(4, 1fr)",
          gap: 40,
          marginBottom: 48,
          alignItems: "start",
        }}
        className="grid-cols-2 md:grid-cols-5"
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, textDecoration: "none" }}>
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: C.black,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <span style={{ color: "#fff", fontSize: 16, fontWeight: 800 }}>N</span>
              </div>
              <span style={{ fontSize: 16, fontWeight: 700, color: C.black }}>Nebbuler</span>
            </Link>
            <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.6, maxWidth: 200, marginBottom: 20 }}>
              Productivity meets minimalism.
            </p>
            <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
              {socials.map(s => (
                <a key={s.label} href="#" style={{ color: C.text2, display: "flex" }}
                  className="hover:text-black transition-colors"
                  aria-label={s.label}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 16 }}>
                {col.title}
              </div>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} style={{ fontSize: 14, color: C.muted }}
                      className="hover:text-black transition-colors"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ fontSize: 13, color: "#b0b0b0" }}>
          © 2024–2026 Nebbuler. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* ─── Page ───────────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />

        {/* Second Brain */}
        <CenteredSection
          title="Second Brain"
          subtitle="An all-in-one Notion system to organize your tasks, projects, goals, and notes."
          cta="Learn More"
          href="/templates/second-brain"
          image={
            <div style={{ display: "flex", alignItems: "flex-end", gap: 20, justifyContent: "center" }}>
              <TabletFrame width={480}><SecondBrainTabletContent /></TabletFrame>
              <PhoneFrame width={210}><SecondBrainPhoneContent /></PhoneFrame>
            </div>
          }
        />

        {/* Finance Dashboard */}
        <CenteredSection
          title="All-In-One Finance Dashboard"
          subtitle="Bring your financials in one place to get the big picture."
          cta="Get Finance Tracker"
          href="/templates/finanzas"
          bg={C.white}
          image={
            <TabletFrame width={600}><FinanceNotionContent /></TabletFrame>
          }
        />

        {/* Monday Pipeline */}
        <CenteredSection
          title="Manage with Monday.com"
          subtitle="Professional Monday.com templates for sales pipelines, sprints, and client onboarding."
          cta="View Monday Templates"
          href="/monday"
          image={
            <PhoneFrame width={280}><MondayPhoneContent /></PhoneFrame>
          }
        />

        <TemplatesSection />
      </main>
      <Footer />
    </>
  );
}
