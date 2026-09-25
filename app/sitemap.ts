import type { MetadataRoute } from "next";
import { stories } from "@/lib/content";
import { albums } from "@/lib/media";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://begaimederacademy.com"; const now = new Date();
  const pages = ["/", "/about", "/academics", "/school-life", "/stories", "/media", "/community", "/admissions", "/events", "/contact"];
  return [...pages.map(path => ({ url: base + path, lastModified: now, changeFrequency: "weekly" as const, priority: path === "/" ? 1 : 0.7 })),
    ...stories.map(story => ({ url: base + "/stories/" + story.slug, lastModified: now, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...albums.map(album => ({ url: base + "/media/albums/" + album.slug, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 }))];
}