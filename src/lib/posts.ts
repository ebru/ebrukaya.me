import fs from "fs"
import path from "path"
import matter from "gray-matter"
import MarkdownIt from "markdown-it"

// Posts live as markdown files in content/posts. The file name is the URL:
// content/posts/the-time.md -> /the-time/
const postsDirectory = path.join(process.cwd(), "content/posts")

const md = new MarkdownIt({ html: true })

export type Post = {
  slug: string
  title: string
  date: string
  description: string
  icon: string
  excerpt: string
  html: string
}

export type PostSummary = Omit<Post, "html">

// Links that open in a new tab get rel="noopener noreferrer", so the opened page
// can't reach back into this one.
const safeNewTabLinks = (html: string) =>
  html.replace(
    /<a\b([^>]*\btarget=["']_blank["'][^>]*)>/g,
    (tag, attrs: string) =>
      /\brel=/.test(attrs) ? tag : `<a${attrs} rel="noopener noreferrer">`
  )

const EXCERPT_LENGTH = 140

const toPlainText = (html: string) =>
  html
    .replace(/<!--[\s\S]*?-->/g, " ")
    // block-level tags separate words; inline tags (a, strong, em...) do not
    .replace(
      /<\/?(p|h[1-6]|li|ul|ol|blockquote|br|hr|div|pre|table|tr|td|th|img)\b[^>]*>/gi,
      " "
    )
    .replace(/<[^>]+>/g, "")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/\s+/g, " ")
    .trim()

// Excerpt: the first ~140 characters, cut at a word.
const makeExcerpt = (html: string) => {
  const text = toPlainText(html)
  if (text.length <= EXCERPT_LENGTH) return text
  const letter = (c: string) =>
    c.toUpperCase() !== c.toLowerCase() ? "A" : " "
  let template = text
    .slice(0, EXCERPT_LENGTH + 1)
    .replace(/.(?=\W*\w*$)/g, letter)
  template = /\w\w/.test(template.slice(-2))
    ? template.replace(/\s*\S+$/, "")
    : template.slice(0, -1).trimEnd()
  return `${text.slice(0, template.length)}…`
}

const readPost = (fileName: string): Post => {
  const slug = fileName.replace(/\.md$/, "")
  const raw = fs.readFileSync(path.join(postsDirectory, fileName), "utf8")
  const { data, content } = matter(raw)
  const html = safeNewTabLinks(md.render(content))

  return {
    slug,
    title: data.title || slug,
    date:
      data.date instanceof Date
        ? data.date.toISOString().slice(0, 10)
        : String(data.date || ""),
    description: data.description || "",
    icon: data.icon || "pen",
    excerpt: makeExcerpt(html),
    html,
  }
}

export const getAllPosts = (): Post[] =>
  fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(readPost)
    .sort((a, b) => (a.date < b.date ? 1 : -1))

// Lighter version for lists: no full html.
export const getPostSummaries = (): PostSummary[] =>
  getAllPosts().map(({ html, ...summary }) => summary)

export const getPostBySlug = (slug: string): Post => readPost(`${slug}.md`)
