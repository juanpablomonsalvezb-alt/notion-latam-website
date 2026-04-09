import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { Link } from "@/i18n/navigation";
import { LocaleSwitcher } from "./LocaleSwitcher";

/* ─── Tokens ──────────────────────────────────────────────────────────────── */
const C = {
  gray:   "#f0f0f0",
  white:  "#ffffff",
  black:  "#000000",
  text:   "#2a2a2a",
  text2:  "#484848",
  muted:  "#6b6b6b",
  border: "#e6e6e6",
} as const;

const H2: React.CSSProperties = {
  fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
  fontWeight: 700, color: C.black,
  lineHeight: 1.1, letterSpacing: "-0.03em",
  textAlign: "center", marginBottom: 16,
};
const Sub: React.CSSProperties = {
  fontSize: 18, color: C.text2, lineHeight: 1.6,
  textAlign: "center", maxWidth: 560,
  margin: "0 auto 28px",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

/* ─── Device frames ───────────────────────────────────────────────────────── */
function TabletFrame({ width = 260, children }: { width?: number; children: React.ReactNode }) {
  return (
    <div style={{
      width, display: "inline-block",
      background: "#1c1c1c", borderRadius: 26, padding: 7,
      boxShadow: "0 28px 72px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.1)",
    }}>
      <div style={{ background: "#fff", borderRadius: 20, overflow: "hidden" }}>
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

/* ─── Notion UI content (decorative, not translated) ─────────────────────── */
function CRMContent() {
  return (
    <div style={{ padding: "12px 14px 16px" }}>
      <div style={{ fontSize: 22, marginBottom: 4 }}>📋</div>
      <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", marginBottom: 2 }}>CRM Sales</div>
      <div style={{ fontSize: 10, color: "#9b9a97", marginBottom: 10 }}>Pipeline management</div>
      <div style={{ fontSize: 10, fontWeight: 600, color: "#9b9a97", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 5 }}>Quick Actions</div>
      {["New Lead","New Company","New Task"].map((t,i) => (
        <div key={i} style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4 }}>
          <div style={{ width: 11, height: 11, borderRadius: 2, border: "1.5px solid #d0d0d0" }} />
          <span style={{ fontSize: 11, color: "#1a1a1a" }}>{t}</span>
        </div>
      ))}
      <div style={{ fontSize: 10, fontWeight: 600, color: "#9b9a97", textTransform: "uppercase", letterSpacing: "0.06em", margin: "10px 0 5px" }}>Pipeline</div>
      {[["Prospect","12","#d3e3fd"],["Proposal","5","#fde8d3"],["Negotiation","3","#d3fde8"],["Closed","8","#f0f0f0"]].map(([s,n,c],i) => (
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
      <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", marginBottom: 2 }}>Projects</div>
      <div style={{ fontSize: 10, color: "#9b9a97", marginBottom: 10 }}>Sprints & tasks</div>
      <div style={{ fontSize: 10, fontWeight: 600, color: "#9b9a97", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 5 }}>Quick Capture</div>
      {["New Task","New Project","New Sprint","New Milestone"].map((t,i) => (
        <div key={i} style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4 }}>
          <div style={{ width: 11, height: 11, borderRadius: 2, border: "1.5px solid #d0d0d0" }} />
          <span style={{ fontSize: 11, color: "#1a1a1a" }}>{t}</span>
        </div>
      ))}
      <div style={{ fontSize: 10, fontWeight: 600, color: "#9b9a97", textTransform: "uppercase", letterSpacing: "0.06em", margin: "10px 0 5px" }}>Projects</div>
      {[["Website Redesign","In Progress","#d3e3fd"],["Mobile App","Planning","#f0f0f0"],["Marketing Q2","Done","#d3fde8"]].map(([n,s,c],i) => (
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
      <div style={{ fontSize: 15, fontWeight: 700, color: "#1a1a1a", marginBottom: 2 }}>Company Wiki</div>
      <div style={{ fontSize: 10, color: "#9b9a97", marginBottom: 10 }}>Knowledge base</div>
      {[["📁","Onboarding"],["📁","Processes"],["📁","Policies"],["📁","Resources"]].map(([ic,t],i) => (
        <div key={i} style={{ display: "flex", gap: 7, alignItems: "center", padding: "4px 0", borderBottom: "1px solid #f5f5f5" }}>
          <span style={{ fontSize: 13 }}>{ic}</span>
          <span style={{ fontSize: 11, color: "#1a1a1a" }}>{t}</span>
        </div>
      ))}
      <div style={{ fontSize: 10, fontWeight: 600, color: "#9b9a97", textTransform: "uppercase", letterSpacing: "0.06em", margin: "10px 0 5px" }}>Featured</div>
      {["📄 Onboarding Guide","📄 Sales Playbook","📄 Time Off Policy"].map((t,i) => (
        <div key={i} style={{ fontSize: 11, color: "#0073ea", marginBottom: 4 }}>{t}</div>
      ))}
    </div>
  );
}

function FinanceNotionContent() {
  return (
    <div style={{ padding: "16px 18px" }}>
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginBottom: 12, paddingBottom: 8, borderBottom: "1px solid #f0f0f0" }}>
        {["Share","💬","🕐","☆","···"].map((t,i) => (
          <span key={i} style={{ fontSize: 11, color: "#9b9a97" }}>{t}</span>
        ))}
      </div>
      <div style={{ fontSize: 28, marginBottom: 6 }}>🏛️</div>
      <div style={{ fontSize: 20, fontWeight: 700, color: "#1a1a1a", marginBottom: 16 }}>Finance Tracker</div>
      <div style={{ display: "flex", gap: 16 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 6 }}>Quick Actions</div>
          {["New Income","New Expense","New Transfer"].map((t,i) => (
            <div key={i} style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 5 }}>
              <div style={{ width: 14, height: 14, borderRadius: "50%", border: "1.5px solid #d0d0d0", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ width: 7, height: 1, background: "#aaa" }} />
              </div>
              <span style={{ fontSize: 11, color: "#1a1a1a" }}>{t}</span>
            </div>
          ))}
          <div style={{ fontSize: 11, fontWeight: 600, margin: "12px 0 6px" }}>Navigation</div>
          {[["🏛️","Dashboard"],["💰","Accounts"],["📊","Budgeting"],["🏷️","Categories"],["⬆️","Incomes"]].map(([ic,t],i) => (
            <div key={i} style={{ display: "flex", gap: 6, alignItems: "center", marginBottom: 4 }}>
              <span style={{ fontSize: 11 }}>{ic}</span>
              <span style={{ fontSize: 11, color: "#484848" }}>{t}</span>
            </div>
          ))}
        </div>
        <div style={{ flex: 1.6 }}>
          <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 8 }}>Accounts</div>
          <div style={{ border: "1px solid #e9e9e7", borderRadius: 4, overflow: "hidden", marginBottom: 10 }}>
            <div style={{ display: "flex", background: "#f7f7f5", borderBottom: "1px solid #e9e9e7", padding: "3px 6px" }}>
              {["Aa Name","# Balance","# Total"].map((h,i) => (
                <span key={i} style={{ flex: 1, fontSize: 9.5, color: "#9b9a97" }}>{h}</span>
              ))}
            </div>
            {[["DBS","$4,188","$4,041"],["OCBC","$0.00","$0.00"]].map(([n,b,t],i) => (
              <div key={i} style={{ display: "flex", padding: "4px 6px", borderBottom: i===0 ? "1px solid #f0f0f0" : "none" }}>
                {[n,b,t].map((v,j) => <span key={j} style={{ flex: 1, fontSize: 10, color: "#1a1a1a" }}>{v}</span>)}
              </div>
            ))}
          </div>
          <div style={{ fontSize: 11, fontWeight: 600, marginBottom: 6 }}>Budgets</div>
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
            {["Today","Upcoming","Next Action"].map((t,i) => (
              <span key={i} style={{ fontSize: 9, padding: "2px 5px", background: i===0?"#1a1a1a":"#f0f0f0", color: i===0?"#fff":"#484848", borderRadius: 3 }}>{t}</span>
            ))}
          </div>
          {[["✅","Schedule meeting with Ben"],["✅","Write email outline"],["🎬","Film YouTube video"]].map(([ic,t],i) => (
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
        {["☐ New Task","☐ New Note","☐ New Project","✏️ New Reference"].map((t,i) => (
          <div key={i} style={{ fontSize: 9.5, color: "#484848", marginBottom: 2 }}>{t}</div>
        ))}
        <div style={{ fontSize: 9, fontWeight: 600, marginTop: 8, marginBottom: 4 }}>Dashboards</div>
        {["📁 PARA Dashboard","✅ GTD Dashboard","✏️ Notes Dashboard"].map((t,i) => (
          <div key={i} style={{ fontSize: 9.5, color: "#484848", marginBottom: 2 }}>{t}</div>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", padding: "8px 0", borderTop: "1px solid #f0f0f0" }}>
        {["≡","🔍","🔔","👤"].map((ic,i) => (
          <span key={i} style={{ fontSize: 14, color: i===0?"#1a1a1a":"#9b9a97" }}>{ic}</span>
        ))}
      </div>
    </div>
  );
}

function MondayPhoneContent() {
  return (
    <div style={{ padding: "44px 12px 8px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
        <div style={{ width: 28, height: 28, borderRadius: 8, background: "#f5f0ff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontSize: 14 }}>📊</span>
        </div>
        <div>
          <div style={{ fontSize: 12, fontWeight: 700, color: "#1a1a1a" }}>Sales Pipeline</div>
          <div style={{ fontSize: 9, color: "#9b9a97" }}>monday.com</div>
        </div>
      </div>
      {[
        { stage: "New", color: "#e2e2e2", items: ["Company A","Company B"] },
        { stage: "Contacted", color: "#fdbc40", items: ["Company C"] },
        { stage: "Proposal", color: "#0073ea", items: ["Company D","Company E"] },
        { stage: "Closed", color: "#00c875", items: ["Company F"] },
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

/* ─── Page ────────────────────────────────────────────────────────────────── */
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  const navLinks = [
    { label: t("Nav.apps"),      href: "/apps" },
    { label: t("Nav.templates"), href: "/templates" },
    { label: t("Nav.blog"),      href: "/blog" },
  ];

  const templateItems = [
    { icon: "📋", name: t("Templates.crm_name"),      desc: t("Templates.crm_desc"),      href: "/templates/crm" },
    { icon: "🗂️", name: t("Templates.projects_name"), desc: t("Templates.projects_desc"), href: "/templates/projects" },
    { icon: "💰", name: t("Templates.finance_name"),  desc: t("Templates.finance_desc"),  href: "/templates/finance" },
    { icon: "📊", name: t("Templates.monday_name"),   desc: t("Templates.monday_desc"),   href: "/monday" },
  ];

  const footerCols = [
    {
      title: t("Footer.pages"),
      links: [
        [t("Footer.apps"),      "/apps"],
        [t("Footer.templates"), "/templates"],
        [t("Footer.blog"),      "/blog"],
      ],
    },
    {
      title: t("Footer.templates"),
      links: [
        [t("Footer.crmVentas"),  "/templates/crm"],
        [t("Footer.finanzas"),   "/templates/finance"],
        [t("Footer.proyectos"),  "/templates/projects"],
        [t("Footer.allAccess"),  "/pricing"],
      ],
    },
    {
      title: t("Footer.monday"),
      links: [
        [t("Footer.pipelineVentas"), "/monday/pipeline"],
        [t("Footer.sprintsAgiles"),  "/monday/sprints"],
        [t("Footer.verTodos"),       "/monday"],
      ],
    },
    {
      title: t("Footer.company"),
      links: [
        [t("Footer.about"),   "/about"],
        [t("Footer.updates"), "/updates"],
        [t("Footer.privacy"), "/privacy"],
      ],
    },
  ];

  return (
    <>
      {/* ── NAV ─────────────────────────────────────────────────────────── */}
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
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 30, height: 30, borderRadius: 8, background: C.black, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 14, fontWeight: 800, letterSpacing: "-0.04em" }}>N</span>
            </div>
            <span style={{ fontSize: 15, fontWeight: 700, color: C.black, letterSpacing: "-0.01em" }}>Nebbuler</span>
          </Link>

          <nav style={{ display: "flex", alignItems: "center", gap: 0 }}>
            {navLinks.map(({ label, href }) => (
              <Link key={href} href={href} style={{ padding: "6px 16px", fontSize: 14, color: C.text2, borderRadius: 100, fontWeight: 400 }}
                className="hover:bg-black/5 transition-colors">
                {label}
              </Link>
            ))}
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <LocaleSwitcher />
            <Link href="/sign-in" style={{ padding: "6px 18px", fontSize: 14, fontWeight: 500, color: C.text, borderRadius: 100, border: "1px solid #d8d8d8", backgroundColor: "rgba(255,255,255,0.8)" }}>
              {t("Nav.signIn")}
            </Link>
            <Link href="/sign-up" style={{ padding: "7px 18px", fontSize: 14, fontWeight: 600, color: "#fff", backgroundColor: C.black, borderRadius: 100 }}>
              {t("Nav.createAccount")}
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* ── HERO ──────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: C.gray, padding: "60px 24px 80px", overflow: "hidden" }}>
          <div style={{ position: "relative", maxWidth: 860, margin: "0 auto", height: 440, marginBottom: 64 }}>
            <div style={{ position: "absolute", width: 240, left: "4%", top: 56, transform: "rotate(-14deg)", transformOrigin: "center bottom", zIndex: 1 }}>
              <TabletFrame width={240}><CRMContent /></TabletFrame>
            </div>
            <div style={{ position: "absolute", width: 268, left: "50%", top: 16, marginLeft: -134, transform: "rotate(-4deg)", transformOrigin: "center bottom", zIndex: 3 }}>
              <TabletFrame width={268}><ProjectsContent /></TabletFrame>
            </div>
            <div style={{ position: "absolute", width: 248, right: "4%", top: 36, transform: "rotate(10deg)", transformOrigin: "center bottom", zIndex: 2 }}>
              <TabletFrame width={248}><WikiContent /></TabletFrame>
            </div>
          </div>
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto" }}>
            <h1 style={{ fontSize: "clamp(3rem, 7vw, 5rem)", fontWeight: 700, color: C.black, lineHeight: 1.08, letterSpacing: "-0.035em", marginBottom: 18 }}>
              {t("Hero.title")}
            </h1>
            <p style={{ fontSize: 18, color: C.text2, lineHeight: 1.6, marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>
              {t("Hero.subtitle")}
            </p>
            <Link href="/templates" style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 32px", backgroundColor: C.black, color: "#fff", borderRadius: 100, fontSize: 15, fontWeight: 600 }}>
              {t("Hero.cta")}
            </Link>
          </div>
        </section>

        {/* ── SECOND BRAIN ──────────────────────────────────────────────── */}
        <section style={{ backgroundColor: C.gray, padding: "96px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <h2 style={H2}>{t("SecondBrain.title")}</h2>
            <p style={Sub}>{t("SecondBrain.subtitle")}</p>
            <Link href="/templates/second-brain" style={{ display: "inline-flex", padding: "13px 28px", backgroundColor: C.black, color: "#fff", borderRadius: 100, fontSize: 15, fontWeight: 600, marginBottom: 64, textDecoration: "none" }}>
              {t("SecondBrain.cta")}
            </Link>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-end", gap: 20 }}>
              <TabletFrame width={480}><SecondBrainTabletContent /></TabletFrame>
              <PhoneFrame width={210}><SecondBrainPhoneContent /></PhoneFrame>
            </div>
          </div>
        </section>

        {/* ── FINANCE ───────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: C.white, padding: "96px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <h2 style={H2}>{t("Finance.title")}</h2>
            <p style={Sub}>{t("Finance.subtitle")}</p>
            <Link href="/templates/finance" style={{ display: "inline-flex", padding: "13px 28px", backgroundColor: C.black, color: "#fff", borderRadius: 100, fontSize: 15, fontWeight: 600, marginBottom: 64, textDecoration: "none" }}>
              {t("Finance.cta")}
            </Link>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <TabletFrame width={600}><FinanceNotionContent /></TabletFrame>
            </div>
          </div>
        </section>

        {/* ── MONDAY ────────────────────────────────────────────────────── */}
        <section style={{ backgroundColor: C.gray, padding: "96px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <h2 style={H2}>{t("Monday.title")}</h2>
            <p style={Sub}>{t("Monday.subtitle")}</p>
            <Link href="/monday" style={{ display: "inline-flex", padding: "13px 28px", backgroundColor: C.black, color: "#fff", borderRadius: 100, fontSize: 15, fontWeight: 600, marginBottom: 64, textDecoration: "none" }}>
              {t("Monday.cta")}
            </Link>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <PhoneFrame width={280}><MondayPhoneContent /></PhoneFrame>
            </div>
          </div>
        </section>

        {/* ── TEMPLATES GRID ────────────────────────────────────────────── */}
        <section style={{ backgroundColor: C.gray, padding: "96px 24px" }}>
          <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
            <h2 style={H2}>{t("Templates.title")}</h2>
            <p style={Sub}>{t("Templates.subtitle")}</p>
            <Link href="/templates" style={{ display: "inline-flex", padding: "13px 28px", backgroundColor: C.black, color: "#fff", borderRadius: 100, fontSize: 15, fontWeight: 600, marginBottom: 64, textDecoration: "none" }}>
              {t("Templates.cta")}
            </Link>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}
              className="grid-cols-2 md:grid-cols-4">
              {templateItems.map(item => (
                <Link key={item.href} href={item.href} style={{ textDecoration: "none" }}>
                  <div style={{ width: "100%", aspectRatio: "1", backgroundColor: "#e8e8e8", borderRadius: "30%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14, fontSize: 36 }}
                    className="hover:bg-gray-300 transition-colors">
                    {item.icon}
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: C.black, marginBottom: 4 }}>{item.name}</div>
                  <div style={{ fontSize: 13, color: C.muted, lineHeight: 1.5 }}>{item.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer style={{ backgroundColor: C.white, padding: "64px 28px 40px", borderTop: "1px solid #e8e8e8" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr repeat(4, 1fr)", gap: 40, marginBottom: 48, alignItems: "start" }}
            className="grid-cols-2 md:grid-cols-5">
            <div>
              <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, textDecoration: "none" }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: C.black, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: "#fff", fontSize: 16, fontWeight: 800 }}>N</span>
                </div>
                <span style={{ fontSize: 16, fontWeight: 700, color: C.black }}>Nebbuler</span>
              </Link>
              <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.6, maxWidth: 200, marginBottom: 20 }}>
                {t("Footer.tagline")}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <LocaleSwitcher />
              </div>
            </div>
            {footerCols.map(col => (
              <div key={col.title}>
                <div style={{ fontSize: 14, fontWeight: 700, color: C.black, marginBottom: 16 }}>{col.title}</div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 11 }}>
                  {col.links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} style={{ fontSize: 14, color: C.muted, textDecoration: "none" }}
                        className="hover:text-black transition-colors">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ fontSize: 13, color: "#b0b0b0" }}>{t("Footer.copyright")}</div>
        </div>
      </footer>
    </>
  );
}
