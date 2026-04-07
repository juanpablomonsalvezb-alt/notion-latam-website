import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Notion LATAM - Potencia tu negocio con Notion",
  description: "Templates, cursos y servicios premium de Notion para empresas latinoamericanas. Lleva tu productividad al siguiente nivel.",
  keywords: ["notion", "templates", "productivity", "latam", "productividad", "notion español"],
  authors: [{ name: "Notion LATAM" }],
  openGraph: {
    title: "Notion LATAM - Potencia tu negocio con Notion",
    description: "Templates, cursos y servicios premium de Notion para empresas latinoamericanas.",
    type: "website",
    locale: "es_LA",
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
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
