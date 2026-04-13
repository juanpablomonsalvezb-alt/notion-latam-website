"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = canvas.offsetWidth;
    const H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;
    const cx = W / 2;
    const cy = H / 2;
    const R = Math.min(W, H) * 0.38;
    const N = 500;
    let angle = 0;

    // Fibonacci sphere
    const pts: { x: number; y: number; z: number }[] = [];
    const golden = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(1 - y * y);
      const theta = golden * i;
      pts.push({ x: Math.cos(theta) * r, y, z: Math.sin(theta) * r });
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      angle += 0.003;
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);

      for (const p of pts) {
        const rx = p.x * cos - p.z * sin;
        const rz = p.x * sin + p.z * cos;
        const depth = (rz + 1) / 2;
        const px = cx + rx * R;
        const py = cy + p.y * R;
        const size = depth * 1.8 + 0.2;
        const alpha = depth * 0.75 + 0.05;
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        opacity: 0.55,
      }}
    />
  );
}

export default function CTA() {
  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#000000",
        padding: "140px 24px",
        fontFamily: "Inter, system-ui, sans-serif",
        overflow: "hidden",
        textAlign: "center",
        minHeight: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <ParticleSphere />

      <div style={{ position: "relative", zIndex: 2 }}>
        <h2
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 500,
            color: "#ffffff",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            margin: "0 0 20px",
          }}
        >
          Inicia tu prueba gratuita
          <br />ahora
        </h2>

        <p
          style={{
            fontSize: 14,
            color: "rgba(255,255,255,0.45)",
            marginBottom: 44,
            letterSpacing: "0.01em",
          }}
        >
          No necesitas tarjeta de crédito. Cancela en cualquier momento.
        </p>

        <Link
          href="/crear"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0a0a0a",
            fontSize: 13,
            fontWeight: 700,
            padding: "15px 48px",
            borderRadius: 3,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            backgroundColor: "#ffffff",
          }}
        >
          Comenzar
        </Link>
      </div>
    </section>
  );
}
