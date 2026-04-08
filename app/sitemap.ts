import { MetadataRoute } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://notionlatam.com";
const locales = ["es", "en", "fr"];

const routes = [
  { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
  { path: "/templates", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/curso", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/consultoria", changeFrequency: "monthly" as const, priority: 0.9 },
  { path: "/saas", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/bot", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/casos-exito", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/calculadora-roi", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/recomendador", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/empezar", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly" as const, priority: 0.8 },
  { path: "/sobre-nosotros", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/contacto", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/faq", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/terminos", changeFrequency: "yearly" as const, priority: 0.3 },
  { path: "/privacidad", changeFrequency: "yearly" as const, priority: 0.3 },
  // Blog posts
  { path: "/blog/como-usar-notion-como-crm", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/blog/notion-vs-trello-vs-asana-2026", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/blog/mejores-bases-de-datos-notion-empresa", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/blog/notion-para-startups-latinoamericanas", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/blog/automatizaciones-notion-pymes", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/blog/notion-gestion-equipos-remotos", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/blog/notion-ai-funciones-empresas", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/blog/notion-vs-monday-equipos-comerciales", changeFrequency: "monthly" as const, priority: 0.6 },
  // Template detail pages
  { path: "/templates/sistema-financiero-pyme", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/templates/crm-whatsapp", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/templates/control-inventario", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/templates/gestion-proyectos", changeFrequency: "monthly" as const, priority: 0.7 },
  // Monday routes
  { path: "/monday/templates", changeFrequency: "weekly" as const, priority: 0.9 },
  { path: "/monday/curso", changeFrequency: "monthly" as const, priority: 0.8 },
  { path: "/monday/consultoria", changeFrequency: "monthly" as const, priority: 0.8 },
  // Monday template detail pages
  { path: "/monday/templates/pipeline-ventas-b2b", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/monday/templates/gestion-proyectos-cliente", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/monday/templates/marketing-campaigns", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/monday/templates/product-roadmap", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/monday/templates/operaciones-empresariales", changeFrequency: "monthly" as const, priority: 0.7 },
  // Bundles
  { path: "/bundles", changeFrequency: "weekly" as const, priority: 0.9 },
  // Monday blog posts
  { path: "/blog/notion-vs-monday-2026", changeFrequency: "monthly" as const, priority: 0.7 },
  { path: "/blog/stack-productividad-notion-monday", changeFrequency: "monthly" as const, priority: 0.6 },
  { path: "/blog/monday-gestion-proyectos-latam", changeFrequency: "monthly" as const, priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return locales.flatMap((locale) =>
    routes.map(({ path, changeFrequency, priority }) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: {
        languages: Object.fromEntries(
          locales.map((l) => [l, `${siteUrl}/${l}${path}`])
        ),
      },
    }))
  );
}
