// Runs after `next build`:
// - writes out/sitemap/sitemap-index.xml and sitemap-0.xml (listed in robots.txt)
// - writes out/_redirects so old addresses keep working on Netlify
import fs from "fs"
import path from "path"

const siteUrl = "https://ebrukaya.me"
const outDir = path.join(process.cwd(), "out")
const excluded = new Set(["/404/"])

const findPages = (dir) =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory())
      return entry.name.startsWith("_next") ? [] : findPages(full)
    return entry.name === "index.html" ? [full] : []
  })

const urls = findPages(outDir)
  .map(
    (file) =>
      "/" + path.relative(outDir, path.dirname(file)).split(path.sep).join("/")
  )
  .map((route) => (route === "/" ? "/" : `${route}/`))
  .filter((route) => !excluded.has(route))
  .sort()

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`).join("\n")}
</urlset>
`

const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${siteUrl}/sitemap/sitemap-0.xml</loc></sitemap>
</sitemapindex>
`

fs.mkdirSync(path.join(outDir, "sitemap"), { recursive: true })
fs.writeFileSync(path.join(outDir, "sitemap/sitemap-0.xml"), sitemap)
fs.writeFileSync(path.join(outDir, "sitemap/sitemap-index.xml"), index)
console.log(`Sitemap: ${urls.length} pages`)

// Old addresses -> new ones. Posts used to live at /<slug>/, the post list at /journal/.
const posts = fs
  .readdirSync(path.join(process.cwd(), "content/posts"))
  .filter((file) => file.endsWith(".md"))
  .map((file) => file.replace(/\.md$/, ""))

const redirects = [
  "/journal /blog/ 301",
  "/journal/* /blog/ 301",
  "/tech-stack /journey/ 301",
  "/tech-stack/ /journey/ 301",
  ...posts.flatMap((slug) => [
    `/${slug} /blog/${slug}/ 301`,
    `/${slug}/ /blog/${slug}/ 301`,
  ]),
]
fs.writeFileSync(path.join(outDir, "_redirects"), redirects.join("\n") + "\n")
console.log(`Redirects: ${redirects.length}`)
