import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nebbuler — Notion & Monday Templates",
  description: "Discover 30+ Notion and Monday.com templates to organize work and life, saving you valuable time.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Nebbuler — Notion & Monday Templates",
    description: "Discover 30+ Notion and Monday.com templates to organize work and life.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
