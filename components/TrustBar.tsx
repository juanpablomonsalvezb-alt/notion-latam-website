export default function TrustBar() {
  const stats = [
    { value: "+14 M", label: "clientes emprendedores" },
    { value: "+36 MM$", label: "ganado por emprendedores" },
    { value: "+200", label: "países y territorios" },
  ];

  return (
    <section
      style={{
        backgroundColor: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "72px 24px",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <p
        style={{
          textAlign: "center",
          fontSize: 15,
          color: "rgba(255,255,255,0.5)",
          marginBottom: 56,
          letterSpacing: "0.01em",
        }}
      >
        Únete a millones de emprendedores que gestionan sus negocios con Orbbi
      </p>

      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: 0,
        }}
        className="orbbi-stats-grid"
      >
        {stats.map((s, i) => (
          <div
            key={i}
            style={{
              textAlign: "center",
              padding: "0 32px",
              borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
            }}
          >
            <div
              style={{
                fontSize: "clamp(36px, 5vw, 52px)",
                fontWeight: 700,
                color: "#ffffff",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: 10,
              }}
            >
              {s.value}
            </div>
            <div style={{ fontSize: 13, color: "rgba(255,255,255,0.45)", letterSpacing: "0.02em" }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 600px) {
          .orbbi-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
