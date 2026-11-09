import { config } from "@/config"
import { getPostSummaries } from "@/lib/posts"

// /llms.txt: a plain-markdown overview of the site for AI assistants and
// LLM-based tools (see https://llmstxt.org). Written to out/llms.txt at build time.
export const dynamic = "force-static"

const url = (path: string) => `${config.siteUrl}${path}`

export function GET() {
  const posts = getPostSummaries()
    .map(
      (post) =>
        `- [${post.title}](${url(`/blog/${post.slug}/`)}) (${post.date}): ${post.description}`
    )
    .join("\n")

  const body = `# Ebru Kaya

> Personal website of Ebru Kaya, a senior software engineer based in Berlin, Germany. She co-builds Stampie, an app that turns travels into collectible passport stamps, and runs Noe Crafts, a design and software studio.

The site has a short introduction, her professional journey, side projects, a few personal facts and a small blog about software, design, life and travels.

## Pages

- [Home](${url("/")}): introduction and postcards from places she has been
- [Journey](${url("/journey/")}): education and work experience so far
- [Side projects](${url("/projects/")}): apps and projects she has built, from Stampie and Noe Crafts to earlier side projects
- [Personal](${url("/personal/")}): personal facts, favourite music, books, movies and games, and her travel stamps from Stampie
- [Blog](${url("/blog/")}): all posts

## Blog posts

${posts}

## Elsewhere

- [Stampie](https://stampie.app): the travel stamp app she co-builds
- [Stampie passport](https://stampie.app/@ebru): her own travel stamps
- [Noe Crafts](https://noecrafts.com): her design and software studio
- [GitHub](https://github.com/ebru)
- [LinkedIn](https://www.linkedin.com/in/ebrukaya)
- [Medium](https://medium.com/@ebrukye)
- [X](https://x.com/ebrukye)
`

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  })
}
