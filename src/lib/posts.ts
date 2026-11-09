import fs from "fs"
import path from "path"
import matter from "gray-matter"
import MarkdownIt from "markdown-it"

// Posts live as markdown files in content/posts. The file name is the URL:
// content/posts/the-time.md -> /blog/the-time/
const postsDirectory = path.join(process.cwd(), "content/posts")

const md = new MarkdownIt({ html: true })

// A post can have one or more topics: `topics: [software]` in its front matter.
// "building" is about starting and running things: side projects, a studio, a business;
// watch, read, listen and play are for movies, books, music and games.
export const TOPICS = [
  "software",
  "design",
  "building",
  "life",
  "travel",
  "watch",
  "read",
  "listen",
  "play",
] as const
export type Topic = (typeof TOPICS)[number]

export type Post = {
  slug: string
  title: string
  date: string
  description: string
  icon: string
  /** draft: true in the front matter: shown by `pnpm dev`, left out of the built site */
  draft: boolean
  topics: Topic[]
  /** about how long the post takes to read, in minutes */
  readingMinutes: number
  excerpt: string
  html: string
}

export type PostSummary = Omit<Post, "html">

// Links to other sites open in a new tab, with rel="noopener noreferrer" so the
// opened page can't reach back into this one. Links within the site stay as they are.
const externalLinksInNewTab = (html: string) =>
  html.replace(/<a\b([^>]*)>/g, (tag, attrs: string) => {
    const href = attrs.match(/\bhref=["']([^"']*)["']/)?.[1] ?? ""
    const external =
      /^https?:\/\//.test(href) && !href.startsWith("https://ebrukaya.me")
    if (!external) return tag
    let out = attrs
    if (!/\btarget=/.test(out)) out += ' target="_blank"'
    if (!/\brel=/.test(out)) out += ' rel="noopener noreferrer"'
    return `<a${out}>`
  })

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

const WORDS_PER_MINUTE = 220

// Unknown topics stop the build, so a typo never quietly hides a post.
const readTopics = (slug: string, value: unknown): Topic[] => {
  const list = Array.isArray(value) ? value : value ? [value] : []
  for (const topic of list) {
    if (!TOPICS.includes(topic)) {
      throw new Error(
        `${slug}.md: unknown topic "${topic}" (use ${TOPICS.join(", ")})`
      )
    }
  }
  return list as Topic[]
}

const readPost = (fileName: string): Post => {
  const slug = fileName.replace(/\.md$/, "")
  const raw = fs.readFileSync(path.join(postsDirectory, fileName), "utf8")
  const { data, content } = matter(raw)
  const html = externalLinksInNewTab(md.render(content))

  return {
    slug,
    title: data.title || slug,
    date:
      data.date instanceof Date
        ? data.date.toISOString().slice(0, 10)
        : String(data.date || ""),
    description: data.description || "",
    icon: data.icon || "pen",
    draft: data.draft === true,
    topics: readTopics(slug, data.topics),
    readingMinutes: Math.max(
      1,
      Math.round(toPlainText(html).split(" ").length / WORDS_PER_MINUTE)
    ),
    excerpt: makeExcerpt(html),
    html,
  }
}

// Drafts show while writing locally (`pnpm dev`) and never make it into the build.
const showDrafts = process.env.NODE_ENV !== "production"

export const getAllPosts = (): Post[] =>
  fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(readPost)
    .filter((post) => showDrafts || !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))

// Lighter version for lists: no full html.
export const getPostSummaries = (): PostSummary[] =>
  getAllPosts().map(({ html, ...summary }) => summary)

export const getPostBySlug = (slug: string): Post => readPost(`${slug}.md`)

// The blog list is split into pages: /blog/ is page 1, then /blog/page/2/ ...
export const POSTS_PER_PAGE = 6

export const getPageCount = () =>
  Math.max(1, Math.ceil(getPostSummaries().length / POSTS_PER_PAGE))

export const getPostPage = (page: number): PostSummary[] =>
  getPostSummaries().slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)

export const blogPagePath = (page: number) =>
  page === 1 ? "/blog/" : `/blog/page/${page}/`

export const getTopicPosts = (topic: Topic): PostSummary[] =>
  getPostSummaries().filter((post) => post.topics.includes(topic))

// Topics with at least one post; the others stay hidden until they have one.
export const getUsedTopics = (): Topic[] =>
  TOPICS.filter((topic) => getTopicPosts(topic).length > 0)

export const topicPath = (topic: Topic) => `/blog/topic/${topic}/`

// "2025-02-11" -> "Feb 11, 2025". Dates stay ISO in front matter and feeds.
export const formatDate = (date: string) =>
  new Date(`${date}T00:00:00Z`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  })
