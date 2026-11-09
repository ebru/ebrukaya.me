import PostList from "@/components/PostList"
import { PageTitle } from "@/components/ui"
import { pageMetadata } from "@/lib/metadata"
import { getPostSummaries } from "@/lib/posts"

const intro = "Writing about software, design, life and travels."

export const metadata = pageMetadata({
  title: "Blog",
  description: intro,
  path: "/blog/",
})

export default function BlogPage() {
  return (
    <>
      <PageTitle>blog</PageTitle>
      <p className="-mt-5 mb-10 text-muted">{intro}</p>
      <PostList posts={getPostSummaries()} />
    </>
  )
}
