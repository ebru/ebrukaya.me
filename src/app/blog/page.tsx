import BlogIndex, { blogIntro } from "@/components/BlogIndex"
import { pageMetadata } from "@/lib/metadata"

export const metadata = pageMetadata({
  title: "Blog",
  description: blogIntro,
  path: "/blog/",
})

export default function BlogPage() {
  return <BlogIndex page={1} />
}
