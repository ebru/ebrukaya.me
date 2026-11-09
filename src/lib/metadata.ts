import type { Metadata } from "next"

import { config } from "@/config"

type PageMeta = {
  /** shown as "<title> – Ebru Kaya"; leave out on the home page */
  title?: string
  description?: string
  /** the page's path, e.g. "/blog/" */
  path: string
}

// Title, description, canonical URL and link-preview tags for one page.
export const pageMetadata = ({
  title,
  description,
  path,
}: PageMeta): Metadata => {
  const metaTitle = title ? `${title} – ${config.shortTitle}` : config.title
  const metaDescription = description || config.description

  return {
    title: { absolute: metaTitle },
    description: metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "website",
      url: path,
    },
    twitter: {
      card: "summary",
      creator: config.author,
      title: metaTitle,
      description: metaDescription,
    },
  }
}
