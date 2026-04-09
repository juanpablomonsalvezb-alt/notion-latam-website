"use client";

import { motion } from "framer-motion";

export function HeroAnimation() {
  return (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      style={{ width: 420, height: 380, position: "relative", flexShrink: 0 }}
    >
      {/* Main card — Second Brain */}
      <div style={{
        position: "absolute",
        top: 30,
        right: 0,
        width: 300,
        background: "#fff",
        border: "1px solid #e6e6e6",
        borderRadius: 20,
        padding: "20px 22px",
        boxShadow: "0 20px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>
            🧠
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "#111" }}>Second Brain</div>
            <div style={{ fontSize: 11, color: "#888" }}>Life OS</div>
          </div>
          <div style={{ marginLeft: "auto", fontSize: 10, fontWeight: 700, background: "#111", color: "#fff", padding: "2px 8px", borderRadius: 4 }}>
            PRO
          </div>
        </div>

        {/* Progress bars */}
        {[
          { label: "Tasks", pct: 72, color: "#d3e3fd" },
          { label: "Notes", pct: 55, color: "#d3fde8" },
          { label: "Goals", pct: 88, color: "#fde8d3" },
        ].map(({ label, pct, color }) => (
          <div key={label} style={{ marginBottom: 10 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ fontSize: 11, color: "#484848" }}>{label}</span>
              <span style={{ fontSize: 11, color: "#888" }}>{pct}%</span>
            </div>
            <div style={{ height: 6, background: "#f0f0f0", borderRadius: 3 }}>
              <div style={{ width: `${pct}%`, height: "100%", background: color, borderRadius: 3 }} />
            </div>
          </div>
        ))}

        <div style={{ borderTop: "1px solid #f0f0f0", paddingTop: 14, marginTop: 4 }}>
          {["✅ Schedule meeting", "✅ Write email draft", "⏳ Film walkthrough"].map((item, i) => (
            <div key={i} style={{ fontSize: 11, color: i < 2 ? "#888" : "#111", marginBottom: 5, display: "flex", alignItems: "center", gap: 6 }}>
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Floating card — Finance */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          width: 200,
          background: "#fff",
          border: "1px solid #e6e6e6",
          borderRadius: 16,
          padding: "16px 18px",
          boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div style={{ fontSize: 11, color: "#888", marginBottom: 6 }}>Monthly savings</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#111", letterSpacing: "-0.03em", marginBottom: 10 }}>
          $1,240
        </div>
        <div style={{ display: "flex", gap: 3 }}>
          {[60, 80, 45, 90, 70, 85, 75].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: h * 0.35,
                background: i === 5 ? "#111" : "#e8e8e8",
                borderRadius: 3,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating badge */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{
          position: "absolute",
          top: 0,
          left: 30,
          background: "#111",
          color: "#fff",
          borderRadius: 100,
          padding: "8px 16px",
          fontSize: 12,
          fontWeight: 600,
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          whiteSpace: "nowrap",
        }}
      >
        6 templates available ✦
      </motion.div>

      {/* SVG person illustration — Open Peeps style */}
      <svg
        width="90"
        height="100"
        viewBox="0 0 90 100"
        fill="none"
        style={{ position: "absolute", bottom: 10, right: 10, opacity: 0.15 }}
      >
        {/* Head */}
        <circle cx="45" cy="18" r="14" stroke="#000" strokeWidth="2" />
        {/* Body */}
        <path d="M30 38 Q28 60 26 78" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        <path d="M60 38 Q62 60 64 78" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        <path d="M30 38 Q45 44 60 38" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        {/* Left arm */}
        <path d="M30 44 Q18 52 14 64" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        {/* Right arm */}
        <path d="M60 44 Q72 52 76 64" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        {/* Laptop */}
        <rect x="8" y="62" width="36" height="22" rx="3" stroke="#000" strokeWidth="2" />
        <path d="M4 84 L52 84" stroke="#000" strokeWidth="2" strokeLinecap="round" />
        {/* Screen lines */}
        <line x1="13" y1="69" x2="38" y2="69" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="13" y1="75" x2="30" y2="75" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}
