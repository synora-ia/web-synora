import type { MetadataRoute } from "next";

const BASE_URL = "https://synora.es";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = [
    { url: `${BASE_URL}/`, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/inmobiliarias`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/clinicas`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/restaurantes`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/servicios`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/gimnasios`, priority: 0.8, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/planes`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${BASE_URL}/contacto`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${BASE_URL}/blog`, priority: 0.8, changeFrequency: "weekly" as const },
  ];

  const blogPosts = [
    {
      url: `${BASE_URL}/blog/que-es-la-automatizacion-operativa-para-pymes`,
      lastModified: new Date("2025-05-15"),
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${BASE_URL}/blog/como-reducir-no-shows-clinica-dental`,
      lastModified: new Date("2025-05-15"),
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${BASE_URL}/blog/automatizar-seguimiento-clientes-inmobiliaria`,
      lastModified: new Date("2025-05-15"),
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${BASE_URL}/blog/ejemplos-automatizacion-empresa-reformas`,
      lastModified: new Date("2025-05-15"),
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${BASE_URL}/blog/cuanto-cuesta-automatizar-clinica-medica-privada`,
      lastModified: new Date("2025-05-19"),
      priority: 0.85,
      changeFrequency: "monthly" as const,
    },
  ];

  return [
    ...staticPages.map((page) => ({
      url: page.url,
      lastModified: now,
      changeFrequency: page.changeFrequency,
      priority: page.priority,
    })),
    ...blogPosts,
  ];
}
