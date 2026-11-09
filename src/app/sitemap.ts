import type { MetadataRoute } from "next"

import { config, navLinks } from "@/config"
import { blogPagePath, getPageCount, getPostSummaries } from "@/lib/posts"

// Written to out/sitemap.xml at build time.
export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = navLinks.map((link) => link.path)
  const posts = getPostSummaries().map((post) => `/blog/${post.slug}/`)
  const blogPages = Array.from({ length: getPageCount() - 1 }, (_, i) =>
    blogPagePath(i + 2)
  )

  return [...pages, ...blogPages, ...posts].map((path) => ({
    url: `${config.siteUrl}${path}`,
  }))
}
