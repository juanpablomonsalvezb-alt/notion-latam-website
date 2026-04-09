"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/navigation";
import { Template } from "@/lib/templates";

interface TemplateCardProps {
  template: Template;
  index: number;
}

/* Inline Notion-style mockups per template */
function NotionMockup({ slug }: { slug: string }) {
  const base: React.CSSProperties = {
    width: "100%",
    height: "100%",
    background: "#f6f6f4",
    padding: "14px 16px",
    display: "flex",
    flexDirection: "column",
    gap: 6,
    overflow: "hidden",
    fontFamily: "ui-sans-serif, system-ui, sans-serif",
  };
  const bar = (w: string, h = 7, color = "#e8e8e8", radius = 4): React.CSSProperties => ({
    width: w, height: h, background: color, borderRadius: radius, flexShrink: 0,
  });
  const tag = (color: string): React.CSSProperties => ({
    display: "inline-block", width: 48, height: 16,
    background: color, borderRadius: 100, flexShrink: 0,
  });

  if (slug === "second-brain") {
    return (
      <div style={base}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: "#111" }}>🧠 Second Brain</span>
        </div>
        {[["Inbox", "#e0f2fe"], ["Projects", "#fef9c3"], ["Areas", "#dcfce7"], ["Resources", "#fce7f3"]].map(([label, bg]) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ ...tag(bg as string) }} />
            <div style={bar("55%", 6)} />
          </div>
        ))}
        <div style={{ marginTop: 4, display: "flex", gap: 4 }}>
          {["✅ 12 tasks", "📝 8 notes"].map((t) => (
            <div key={t} style={{ fontSize: 8, color: "#888", background: "#f5f5f5", borderRadius: 4, padding: "2px 6px" }}>{t}</div>
          ))}
        </div>
        <div style={{ marginTop: 2 }}>
          {[70, 50, 85].map((w, i) => <div key={i} style={bar(`${w}%`, 5, "#f0f0f0")} />)}
        </div>
      </div>
    );
  }

  if (slug === "finance-tracker") {
    return (
      <div style={base}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#111", marginBottom: 4 }}>💰 Finance Tracker</div>
        <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
          {[["Income", "#dcfce7", "$4,200"], ["Expenses", "#fee2e2", "$1,890"], ["Saved", "#dbeafe", "$2,310"]].map(([l, bg, v]) => (
            <div key={l} style={{ flex: 1, background: bg as string, borderRadius: 6, padding: "4px 6px" }}>
              <div style={{ fontSize: 7, color: "#555", fontWeight: 600 }}>{l}</div>
              <div style={{ fontSize: 9, fontWeight: 700, color: "#111" }}>{v}</div>
            </div>
          ))}
        </div>
        {[["Groceries", "−$320", "#fee2e2"], ["Salary", "+$4,200", "#dcfce7"], ["Rent", "−$800", "#fee2e2"], ["Freelance", "+$600", "#dcfce7"]].map(([label, val, bg]) => (
          <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 8, padding: "2px 0", borderBottom: "1px solid #f5f5f5" }}>
            <span style={{ color: "#555" }}>{label}</span>
            <span style={{ background: bg as string, borderRadius: 3, padding: "1px 5px", fontWeight: 600, color: "#111" }}>{val}</span>
          </div>
        ))}
      </div>
    );
  }

  if (slug === "client-crm") {
    return (
      <div style={base}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#111", marginBottom: 4 }}>💼 Client CRM</div>
        <div style={{ display: "flex", gap: 3, marginBottom: 4, fontSize: 7, color: "#888" }}>
          <span style={{ flex: 2 }}>Client</span>
          <span style={{ flex: 1 }}>Status</span>
          <span style={{ flex: 1 }}>Value</span>
        </div>
        {[["Acme Corp", "Active", "$2,400", "#dcfce7"], ["Studio X", "Proposal", "$800", "#fef9c3"], ["Nova Inc", "Closed", "$5,100", "#f3f4f6"], ["Peak Ltd", "Active", "$1,200", "#dcfce7"]].map(([name, status, val, bg]) => (
          <div key={name} style={{ display: "flex", gap: 3, alignItems: "center", fontSize: 7.5, padding: "2px 0", borderBottom: "1px solid #f5f5f5" }}>
            <span style={{ flex: 2, color: "#111", fontWeight: 500 }}>{name}</span>
            <span style={{ flex: 1, background: bg as string, borderRadius: 3, padding: "1px 4px" }}>{status}</span>
            <span style={{ flex: 1, color: "#555" }}>{val}</span>
          </div>
        ))}
      </div>
    );
  }

  if (slug === "freelance-dashboard") {
    return (
      <div style={base}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#111", marginBottom: 4 }}>🚀 Freelance Dashboard</div>
        <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
          {[["In Progress", "#fef9c3", "3"], ["Completed", "#dcfce7", "7"], ["Overdue", "#fee2e2", "1"]].map(([l, bg, c]) => (
            <div key={l} style={{ flex: 1, background: bg as string, borderRadius: 6, padding: "4px 6px", textAlign: "center" }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: "#111" }}>{c}</div>
              <div style={{ fontSize: 6.5, color: "#555" }}>{l}</div>
            </div>
          ))}
        </div>
        {[["Rebrand website", "In Progress"], ["Logo design", "Completed"], ["App mockups", "Overdue"]].map(([task, status]) => (
          <div key={task} style={{ display: "flex", justifyContent: "space-between", fontSize: 7.5, padding: "2px 0", borderBottom: "1px solid #f5f5f5" }}>
            <span style={{ color: "#111" }}>{task}</span>
            <span style={{ color: "#888" }}>{status}</span>
          </div>
        ))}
      </div>
    );
  }

  if (slug === "habit-tracker") {
    return (
      <div style={base}>
        <div style={{ fontSize: 11, fontWeight: 700, color: "#111", marginBottom: 4 }}>🔥 Habit Tracker</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 3, marginBottom: 6 }}>
          {["M","T","W","T","F","S","S"].map((d, i) => (
            <div key={i} style={{ textAlign: "center", fontSize: 7, color: "#888" }}>{d}</div>
          ))}
          {[1,1,1,1,0,1,1, 1,0,1,1,1,1,0, 0,1,1,1,1,0,1].map((done, i) => (
            <div key={i} style={{ width: "100%", aspectRatio: "1", borderRadius: 3, background: done ? "#111" : "#f0f0f0" }} />
          ))}
        </div>
        {[["Exercise", 6], ["Read", 5], ["Meditate", 7], ["Water", 4]].map(([habit, streak]) => (
          <div key={habit} style={{ display: "flex", justifyContent: "space-between", fontSize: 7.5, padding: "2px 0" }}>
            <span style={{ color: "#111" }}>{habit}</span>
            <span style={{ color: "#888" }}>🔥 {streak} day streak</span>
          </div>
        ))}
      </div>
    );
  }

  // life-planner (default)
  return (
    <div style={base}>
      <div style={{ fontSize: 11, fontWeight: 700, color: "#111", marginBottom: 4 }}>📅 Life Planner</div>
      <div style={{ display: "flex", gap: 3, marginBottom: 6 }}>
        {["Q1", "Q2", "Q3", "Q4"].map((q, i) => (
          <div key={q} style={{ flex: 1, background: i === 1 ? "#111" : "#f0f0f0", color: i === 1 ? "#fff" : "#888", borderRadius: 4, padding: "3px 0", textAlign: "center", fontSize: 8, fontWeight: 600 }}>{q}</div>
        ))}
      </div>
      {[["Launch side project", "🟢 On track"], ["Read 12 books", "🟡 2/12"], ["Exercise 3×/wk", "🟢 On track"], ["Save $10k", "🔴 Behind"]].map(([goal, status]) => (
        <div key={goal} style={{ display: "flex", justifyContent: "space-between", fontSize: 7.5, padding: "3px 0", borderBottom: "1px solid #f5f5f5" }}>
          <span style={{ color: "#111" }}>{goal}</span>
          <span style={{ color: "#888", fontSize: 7 }}>{status}</span>
        </div>
      ))}
    </div>
  );
}

export function TemplateCard({ template, index }: TemplateCardProps) {
  const isFree = template.price === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.06, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={`/templates/${template.slug}` as never} style={{ textDecoration: "none", display: "block" }}>
        <div
          style={{
            background: "#f6f6f4",
            border: "1px solid #e8e8e8",
            borderRadius: 12,
            overflow: "hidden",
            cursor: "pointer",
            transition: "border-color 0.2s, box-shadow 0.2s",
          }}
          className="hover:border-black/20 hover:shadow-sm"
        >
          {/* Preview area — Notion mockup */}
          <div style={{
            height: 180,
            background: "#f9f9f9",
            borderBottom: "1px solid #e8e8e8",
            overflow: "hidden",
            position: "relative",
          }}>
            <div style={{ position: "absolute", inset: 0, padding: "0" }}>
              <NotionMockup slug={template.slug} />
            </div>
          </div>

          {/* Card footer */}
          <div style={{ padding: "16px 18px 18px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{
                fontSize: 11,
                fontWeight: 600,
                color: "#666",
                background: "#f3f3f3",
                padding: "2px 8px",
                borderRadius: 100,
                letterSpacing: "0.02em",
              }}>
                {template.category}
              </span>
              <span style={{
                fontSize: 12,
                fontWeight: 700,
                color: isFree ? "#16a34a" : "#111",
                background: isFree ? "#dcfce7" : "#f3f3f3",
                padding: "2px 8px",
                borderRadius: 100,
              }}>
                {isFree ? "Free" : `$${template.price}`}
              </span>
            </div>
            <h3 style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#111",
              letterSpacing: "-0.01em",
              lineHeight: 1.3,
              marginBottom: 4,
            }}>
              {template.name}
            </h3>
            <p style={{ fontSize: 13, color: "#888", lineHeight: 1.5 }}>
              {template.description}
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
