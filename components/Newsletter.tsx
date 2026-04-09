"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface NewsletterProps {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonText?: string;
}

export function Newsletter({
  title = "Get templates in your inbox",
  subtitle = "Join 2,000+ creators. New templates every week.",
  placeholder = "your@email.com",
  buttonText = "Subscribe",
}: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section style={{ background: "#f6f6f4", padding: "80px 24px", borderTop: "1px solid #e6e6e6" }}>
      <div style={{ maxWidth: 540, margin: "0 auto", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.4rem)",
            fontWeight: 700,
            color: "#111",
            letterSpacing: "-0.025em",
            marginBottom: 12,
            lineHeight: 1.15,
          }}>
            {title}
          </h2>
          <p style={{ fontSize: 16, color: "#6b6b6b", lineHeight: 1.6, marginBottom: 32 }}>
            {subtitle}
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#f6f6f4",
                border: "1px solid #e6e6e6",
                borderRadius: 100,
                padding: "14px 28px",
                fontSize: 15,
                fontWeight: 500,
                color: "#16a34a",
              }}
            >
              ✓ You&apos;re subscribed!
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: 0, maxWidth: 420, margin: "0 auto" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                required
                style={{
                  flex: 1,
                  padding: "13px 20px",
                  fontSize: 14,
                  border: "1px solid #d8d8d8",
                  borderRight: "none",
                  borderRadius: "100px 0 0 100px",
                  outline: "none",
                  background: "#f6f6f4",
                  color: "#111",
                }}
              />
              <motion.button
                type="submit"
                whileTap={{ scale: 0.97 }}
                style={{
                  padding: "13px 24px",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "#fff",
                  background: "#111",
                  border: "1px solid #111",
                  borderRadius: "0 100px 100px 0",
                  cursor: "pointer",
                  flexShrink: 0,
                }}
              >
                {buttonText}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
