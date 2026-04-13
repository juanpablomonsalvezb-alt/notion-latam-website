"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface ScreenshotCarouselProps {
  slug: string;
  count: number;
  alt: string;
  autoPlay?: boolean;
  interval?: number;
}

export function ScreenshotCarousel({
  slug,
  count,
  alt,
  autoPlay = true,
  interval = 3800,
}: ScreenshotCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const go = useCallback(
    (next: number) => {
      if (fading) return;
      setFading(true);
      setTimeout(() => {
        setCurrent(next);
        setFading(false);
      }, 280);
    },
    [fading]
  );

  const advance = useCallback(() => {
    go((current + 1) % count);
  }, [current, count, go]);

  useEffect(() => {
    if (!autoPlay || count <= 1) return;
    const id = setInterval(advance, interval);
    return () => clearInterval(id);
  }, [advance, autoPlay, count, interval]);

  const indices = Array.from({ length: count }, (_, i) => i);

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {/* Browser frame */}
      <div
        style={{
          borderRadius: 10,
          overflow: "hidden",
          background: "#F0EFE9",
          boxShadow:
            "0 2px 4px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08), 0 24px 56px rgba(0,0,0,0.10)",
          border: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        {/* Title bar */}
        <div
          style={{
            height: 34,
            background: "#ECEAE3",
            borderBottom: "1px solid #DDDBD4",
            display: "flex",
            alignItems: "center",
            paddingLeft: 12,
            paddingRight: 12,
            gap: 8,
            flexShrink: 0,
          }}
        >
          {/* Traffic lights */}
          <div style={{ display: "flex", gap: 5, flexShrink: 0 }}>
            {(["#FF5F57", "#FEBC2E", "#28C840"] as const).map((c) => (
              <div
                key={c}
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: c,
                  opacity: 0.85,
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
          {/* Address bar */}
          <div
            style={{
              flex: 1,
              height: 18,
              background: "#F8F7F2",
              borderRadius: 4,
              border: "1px solid #D8D6CF",
              maxWidth: 260,
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              paddingLeft: 8,
            }}
          >
            <span
              style={{
                fontSize: 9,
                color: "#9B9990",
                fontFamily: "var(--font-body)",
                letterSpacing: "0.01em",
                userSelect: "none",
              }}
            >
              notion.so
            </span>
          </div>
        </div>

        {/* Screenshot area */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16 / 10",
            overflow: "hidden",
            background: "#FFFFFF",
          }}
        >
          <Image
            src={`/screenshots/${slug}/${current + 1}.png`}
            alt={`${alt} — screenshot ${current + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{
              objectFit: "cover",
              objectPosition: "top left",
              opacity: fading ? 0 : 1,
              transition: "opacity 0.28s ease",
            }}
            priority={current === 0}
          />
        </div>
      </div>

      {/* Dots */}
      {count > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 6,
            marginTop: 14,
          }}
        >
          {indices.map((i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Screenshot ${i + 1}`}
              style={{
                width: i === current ? 18 : 6,
                height: 6,
                borderRadius: 3,
                background: i === current ? "var(--fg-primary)" : "var(--border)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.25s ease, background 0.25s ease",
                flexShrink: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
