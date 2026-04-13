import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nebbuler.com/sitemap.xml",
    host: "https://nebbuler.com",
  };
}
