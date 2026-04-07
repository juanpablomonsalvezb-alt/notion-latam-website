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
