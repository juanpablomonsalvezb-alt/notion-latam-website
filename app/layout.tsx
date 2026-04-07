import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/Analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://notionlatam.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Notion LATAM — Templates, Cursos y Consultoría para empresas",
    template: "%s | Notion LATAM",
  },
  description:
    "El ecosistema completo de Notion para empresas latinoamericanas. Templates premium, curso completo, consultoría personalizada y automatización con WhatsApp.",
  keywords: [
    "notion",
    "templates notion",
    "notion latam",
    "notion español",
    "productividad",
    "notion templates",
    "notion chile",
    "notion mexico",
    "curso notion",
    "consultoria notion",
    "notion pyme",
    "gestion de proyectos notion",
  ],
  authors: [{ name: "Notion LATAM", url: siteUrl }],
  creator: "Notion LATAM",
  publisher: "Notion LATAM",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_LA",
    url: siteUrl,
    siteName: "Notion LATAM",
    title: "Notion LATAM — Templates, Cursos y Consultoría para empresas",
    description:
      "El ecosistema completo de Notion para empresas latinoamericanas. Templates premium, curso completo, consultoría personalizada y automatización con WhatsApp.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Notion LATAM",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Notion LATAM — Templates, Cursos y Consultoría",
    description:
      "El ecosistema completo de Notion para empresas latinoamericanas.",
    images: ["/og-image.svg"],
    creator: "@notionlatam",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <body className="antialiased bg-notion-bg dark:bg-notion-bg-dark text-notion-text-primary dark:text-notion-text-dark">
        <Analytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
