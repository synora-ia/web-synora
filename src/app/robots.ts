import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/admin/login", "/dashboard/"],
      },
    ],
    sitemap: "https://synora.es/sitemap.xml",
    host: "https://synora.es",
  };
}
