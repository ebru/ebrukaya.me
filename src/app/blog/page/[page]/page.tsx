import BlogIndex, { blogIntro } from "@/components/BlogIndex"
import { pageMetadata } from "@/lib/metadata"
import { blogPagePath, getPageCount } from "@/lib/posts"

type Props = { params: Promise<{ page: string }> }

// Page 1 is /blog/ itself; these are the pages after it.
export const dynamicParams = false

export const generateStaticParams = () =>
  Array.from({ length: getPageCount() - 1 }, (_, i) => ({
    page: String(i + 2),
  }))

export const generateMetadata = async ({ params }: Props) => {
  const page = Number((await params).page)
  return pageMetadata({
    title: `Blog – page ${page}`,
    description: blogIntro,
    path: blogPagePath(page),
  })
}

export default async function BlogListPage({ params }: Props) {
  return <BlogIndex page={Number((await params).page)} />
}
