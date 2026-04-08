import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Aprende a dominar Notion | Notion LATAM",
  description:
    "Guías, tutoriales y casos de uso de Notion escritos para empresas latinoamericanas. Productividad, automatizaciones y comparativas con Trello, Asana y Monday.",
  openGraph: {
    title: "Blog Notion LATAM — Guías y tutoriales para empresas",
    description:
      "Artículos semanales sobre Notion para empresas latinoamericanas. Aprende CRM, automatizaciones, gestión de equipos remotos y más.",
    images: ["/og-image.svg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog Notion LATAM — Guías y tutoriales",
    description: "Artículos sobre Notion para empresas de LATAM. Tutoriales, comparativas y casos de uso reales.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
