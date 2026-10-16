import { MetadataRoute } from "next";
import { serviceCategories } from "@/data/siteData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.pranabeautyandwellnesssalon.com";

  const staticRoutes = [
    "",
    "/services",
    "/about",
    "/plans",
    "/team",
    "/careers",
    "/contact",
    "/reviews"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: "2026-10-15T00:00:00.000Z",
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8
  }));

  const serviceRoutes = serviceCategories.map((c) => ({
    url: `${baseUrl}/services/${c.slug}`,
    lastModified: "2026-10-15T00:00:00.000Z",
    changeFrequency: "weekly" as const,
    priority: 0.9
  }));

  return [...staticRoutes, ...serviceRoutes];
}
