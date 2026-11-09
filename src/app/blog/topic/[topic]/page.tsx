import BlogIndex, { blogIntro } from "@/components/BlogIndex"
import { pageMetadata } from "@/lib/metadata"
import { getUsedTopics, topicPath, type Topic } from "@/lib/posts"

type Props = { params: Promise<{ topic: Topic }> }

export const dynamicParams = false

export const generateStaticParams = () =>
  getUsedTopics().map((topic) => ({ topic }))

export const generateMetadata = async ({ params }: Props) => {
  const { topic } = await params
  return pageMetadata({
    title: `Blog – ${topic}`,
    description: blogIntro,
    path: topicPath(topic),
  })
}

export default async function TopicPage({ params }: Props) {
  return <BlogIndex topic={(await params).topic} />
}
