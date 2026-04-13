import { ImageResponse } from "next/og";
import type { NextRequest } from "next/server";

export const runtime = "edge";

const SIZE = { width: 1200, height: 630 };

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const title = searchParams.get("title") ?? "Nebbuler";
  const subtitle = searchParams.get("subtitle") ?? "Notion work systems, designed as objects.";

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "72px 80px",
          background: "#FAFAF7",
          fontFamily: "serif",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            background: "#0A0A0A",
            display: "flex",
          }}
        />

        {/* Logo mark */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
          }}
        >
          <div
            style={{
              width: "44px",
              height: "44px",
              border: "2px solid #0A0A0A",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "28px",
              fontWeight: "500",
              color: "#0A0A0A",
              overflow: "hidden",
            }}
          >
            n
          </div>
          <span
            style={{
              fontSize: "18px",
              fontWeight: "500",
              color: "#0A0A0A",
              letterSpacing: "-0.02em",
            }}
          >
            nebbuler
          </span>
        </div>

        {/* Main content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <p
            style={{
              fontSize: "52px",
              fontWeight: "500",
              color: "#0A0A0A",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: 0,
              maxWidth: "900px",
            }}
          >
            {title}
          </p>
          <p
            style={{
              fontSize: "22px",
              color: "#6B6B68",
              lineHeight: 1.4,
              margin: 0,
              maxWidth: "700px",
            }}
          >
            {subtitle}
          </p>
        </div>

        {/* Bottom right tag */}
        <div
          style={{
            position: "absolute",
            bottom: "60px",
            right: "80px",
            display: "flex",
            fontSize: "13px",
            color: "#6B6B68",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          nebbuler.com
        </div>
      </div>
    ),
    {
      ...SIZE,
    }
  );
}
