import type { Metadata } from "next"

import PostIcon from "@/components/PostIcon"
import PostNav from "@/components/PostNav"
import { PostDate } from "@/components/PostList"
import ReadingProgress from "@/components/ReadingProgress"
import { pageMetadata } from "@/lib/metadata"
import { getAllPosts, getPostBySlug, getPostSummaries } from "@/lib/posts"

type Props = { params: Promise<{ slug: string }> }

// Only the posts that exist get a page; anything else is the 404.
export const dynamicParams = false

export const generateStaticParams = () =>
  getAllPosts().map((post) => ({ slug: post.slug }))

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const { slug } = await params
  const post = getPostBySlug(slug)
  return pageMetadata({
    title: post.title,
    description: post.description || undefined,
    path: `/blog/${slug}/`,
  })
}

// Styles for the post's own markdown: headings, images, and tags like
// `Animation` in tables, which read as small labels.
const body = [
  "text-[1.05rem] leading-[1.8]",
  "[&_:is(h2,h3,h4)]:mt-[2.4rem] [&_:is(h2,h3,h4)]:tracking-[-0.02em]",
  "[&_img]:rounded-[8px]",
  // plain links read as links (links in bold text are already set apart)
  "[&_a:not(strong_a)]:underline [&_a:not(strong_a)]:decoration-accent [&_a:not(strong_a)]:underline-offset-[3px]",
  // tall photos don't take over the screen
  "[&_figure_img]:mx-auto [&_figure_img]:block [&_figure_img]:max-h-[620px] [&_figure_img]:w-auto",
  // image captions, e.g. in the posts that came from Medium
  "[&_figcaption]:mt-2 [&_figcaption]:text-center [&_figcaption]:text-[15px] [&_figcaption]:leading-normal [&_figcaption]:text-muted",
  "[&_td_code]:inline-block [&_td_code]:rounded-full [&_td_code]:bg-surface [&_td_code]:px-2 [&_td_code]:py-0.5 [&_td_code]:font-[inherit] [&_td_code]:text-[0.8rem] [&_td_code]:leading-[1.6] [&_td_code]:text-ink-soft",
  "[&_td_code]:before:content-none [&_td_code]:after:content-none",
  // A list split into several tables (with quotes in between) keeps its
  // columns lined up on wider screens: the small columns get a fixed width
  // and the first column takes the rest.
  "min-[641px]:[&_table]:table-fixed min-[641px]:[&_:is(th,td):not(:first-child)]:w-[6rem]",
  // wide tables scroll sideways on small screens
  "max-[640px]:[&_table]:block max-[640px]:[&_table]:overflow-x-auto",
].join(" ")

export default async function BlogPost({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  // posts are newest first
  const all = getPostSummaries()
  const index = all.findIndex((p) => p.slug === slug)

  return (
    <>
      <ReadingProgress />
      <article>
        <PostIcon name={post.icon} className="size-[88px]" standalone />
        <h1 className="mt-5 mb-2.5 text-[clamp(2.1rem,6vw,2.8rem)] font-extrabold tracking-[-0.04em]">
          {post.title}
        </h1>
        <PostDate
          date={post.date}
          draft={post.draft}
          className="mb-9 text-[16px] text-muted"
        />
        <div className={body} dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <PostNav newer={all[index - 1]} older={all[index + 1]} />
    </>
  )
}
