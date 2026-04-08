import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Templates Premium de Notion para LATAM | Notion LATAM",
  description:
    "18+ templates profesionales de Notion para empresas latinoamericanas: CRM, finanzas, gestión de proyectos, marketing y más. Listos para usar en minutos.",
  openGraph: {
    title: "Templates Premium de Notion para LATAM | Notion LATAM",
    description:
      "18+ templates profesionales de Notion para empresas latinoamericanas. Descarga y personaliza al instante.",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Templates Premium de Notion para LATAM",
    description: "18+ templates listos para usar en minutos. CRM, finanzas, proyectos y más.",
  },
};

export default function TemplatesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
