import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Builder by ORBBI — Landing pages que convierten, en minutos",
  description:
    "Crea landing pages profesionales para tu negocio con inteligencia artificial. Sin código, sin diseñador, sin semanas de espera.",
  keywords: "landing page builder, IA, LATAM, negocio, marketing digital",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><rect width='32' height='32' rx='8' fill='%236366f1'/><text x='8' y='23' font-size='18' fill='white'>B</text></svg>",
  },
  openGraph: {
    title: "Builder by ORBBI",
    description: "Landing pages que convierten, en minutos",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1a1a1a]">
        {children}
      </body>
    </html>
  );
}
