import type { MetadataRoute } from "next";
import { siteUrl } from "@/content/seo";

/*
 * robots.txt: every crawler may read the whole site — Google, AI search
 * (OAI-SearchBot, Claude, Perplexity) and AI training bots (GPTBot,
 * ClaudeBot, Google-Extended), as decided on 17 Nov. Which pages appear in
 * results is set per page (noindex), not here: a page blocked here could
 * not be read, so its noindex would never be seen.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
