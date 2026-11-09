import type { Metadata } from "next"

import { config } from "@/config"

const defaultImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: config.shortTitle,
}

type PageMeta = {
  /** shown as "<title> – Ebru Kaya"; leave out on the home page */
  title?: string
  description?: string
  /** the page's path, e.g. "/blog/" */
  path: string
  /** a preview image of its own, e.g. a post's; otherwise the default card */
  image?: string
}

// Title, description, canonical URL and link-preview tags for one page.
export const pageMetadata = ({
  title,
  description,
  path,
  image,
}: PageMeta): Metadata => {
  const metaTitle = title ? `${title} – ${config.shortTitle}` : config.title
  const metaDescription = description || config.description
  const previewImage = image
    ? { ...defaultImage, url: image, alt: metaTitle }
    : defaultImage

  return {
    title: { absolute: metaTitle },
    description: metaDescription,
    alternates: {
      canonical: path,
      // lets feed readers find the blog's RSS feed from any page
      types: {
        "application/rss+xml": [{ url: "/feed.xml", title: config.shortTitle }],
      },
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "website",
      url: path,
      images: [previewImage],
    },
    twitter: {
      card: "summary_large_image",
      creator: config.author,
      title: metaTitle,
      description: metaDescription,
      images: [previewImage],
    },
  }
}
