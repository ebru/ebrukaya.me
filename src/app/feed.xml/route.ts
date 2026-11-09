import { config } from "@/config"
import { getAllPosts } from "@/lib/posts"

// /feed.xml: an RSS feed with the full posts, so anyone can follow the blog in a
// feed reader. Written to out/feed.xml at build time.
export const dynamic = "force-static"

const escape = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")

// Feed readers show posts away from the site, so links and images need full URLs.
const absoluteUrls = (html: string) =>
  html.replace(/(href|src)=(["'])\//g, `$1=$2${config.siteUrl}/`)

export function GET() {
  const items = getAllPosts()
    .map((post) => {
      const url = `${config.siteUrl}/blog/${post.slug}/`
      return `    <item>
      <title>${escape(post.title)}</title>
      <link>${url}</link>
      <guid>${url}</guid>
      <pubDate>${new Date(`${post.date}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${escape(post.description || post.excerpt)}</description>
${post.topics.map((topic) => `      <category>${topic}</category>`).join("\n")}
      <content:encoded><![CDATA[${absoluteUrls(post.html).replace(/]]>/g, "]]]]><![CDATA[>")}]]></content:encoded>
    </item>`
    })
    .join("\n")

  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${config.shortTitle}</title>
    <link>${config.siteUrl}/blog/</link>
    <description>Writing about software, design, life and travels.</description>
    <language>en</language>
    <atom:link href="${config.siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`

  return new Response(feed, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  })
}
