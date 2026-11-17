import type { MetadataRoute } from "next";
import { indexedUrls } from "@/content/seo";

// sitemap.xml: the finished pages Google may index (listed in seo.ts).
export default function sitemap(): MetadataRoute.Sitemap {
  return indexedUrls().map((url) => ({ url }));
}
