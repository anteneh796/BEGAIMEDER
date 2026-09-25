import type { MetadataRoute } from "next";
import { stories } from "@/lib/content";
import { albums } from "@/lib/media";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://begaimederacademy.com";
  const pages = ["/", "/about", "/academics", "/school-life", "/stories", "/media", "/community", "/admissions", "/events", "/contact"];
  return [
    ...pages.map(path => ({ url: base + path, changeFrequency: "weekly" as const, priority: path === "/" ? 1 : 0.7 })),
    ...stories.map(story => ({ url: base + "/stories/" + story.slug, changeFrequency: "monthly" as const, priority: 0.6 })),
    ...albums.map(album => ({ url: base + "/media/albums/" + album.slug, changeFrequency: "monthly" as const, priority: 0.5 })),
  ];
}
