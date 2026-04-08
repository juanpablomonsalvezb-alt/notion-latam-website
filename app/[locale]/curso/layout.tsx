import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Curso Completo de Notion para Empresas LATAM | Notion LATAM",
  description:
    "Aprende Notion desde cero hasta nivel experto. Curso completo con más de 40 lecciones, casos reales de empresas latinoamericanas y soporte personalizado en español.",
  openGraph: {
    title: "Curso Completo de Notion para Empresas LATAM",
    description:
      "Domina Notion con nuestro curso estructurado: 40+ lecciones, plantillas incluidas y casos reales de PyMEs latinoamericanas.",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Curso Completo de Notion — Notion LATAM",
    description: "De cero a experto en Notion. 40+ lecciones con casos reales de empresas latinoamericanas.",
  },
};

export default function CursoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
