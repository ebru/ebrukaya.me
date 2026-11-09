import Link from "next/link"

import PostList from "@/components/PostList"
import { PageTitle } from "@/components/ui"
import {
  blogPagePath,
  getPageCount,
  getPostPage,
  getTopicPosts,
  getUsedTopics,
  topicPath,
  type Topic,
} from "@/lib/posts"

export const blogIntro = "Writing about software, design, life and travels."

const pagerLink =
  "group/pager text-muted underline decoration-transparent decoration-2 underline-offset-4 transition-[text-decoration-color,color] duration-200 ease-[ease] hover:text-ink hover:decoration-accent focus-visible:text-ink focus-visible:decoration-accent"
const arrow = "inline-block transition-transform duration-200 ease-[ease]"

const pill =
  "shrink-0 rounded-full px-2.5 py-1 text-muted transition-colors duration-200 ease-[ease] hover:text-ink aria-[current=page]:bg-surface aria-[current=page]:font-bold aria-[current=page]:text-ink"

// all · software · building · life · ... (topics without posts stay hidden)
const TopicFilter = ({ active }: { active?: Topic }) => (
  <nav
    aria-label="Topics"
    className="-mt-5 mb-10 -ml-2.5 flex flex-wrap max-[640px]:-mr-[1.0875rem] max-[640px]:flex-nowrap max-[640px]:overflow-x-auto max-[640px]:pr-[1.0875rem] max-[640px]:[scrollbar-width:none] max-[640px]:[&::-webkit-scrollbar]:hidden gap-1 text-[16px]"
  >
    <Link
      href="/blog/"
      aria-current={active ? undefined : "page"}
      className={pill}
    >
      all
    </Link>
    {getUsedTopics().map((topic) => (
      <Link
        key={topic}
        href={topicPath(topic)}
        aria-current={topic === active ? "page" : undefined}
        className={pill}
      >
        {topic}
      </Link>
    ))}
    <a
      href="/feed.xml"
      className="ml-auto self-center text-[15px] text-muted underline decoration-transparent decoration-2 underline-offset-4 transition-[text-decoration-color,color] duration-200 ease-[ease] hover:text-ink hover:decoration-accent"
    >
      rss
    </a>
  </nav>
)

// The blog list: one page of all posts (with quiet newer / older links and page
// numbers underneath), or all posts of one topic.
const BlogIndex = ({ page = 1, topic }: { page?: number; topic?: Topic }) => {
  const pageCount = topic ? 1 : getPageCount()
  const posts = topic ? getTopicPosts(topic) : getPostPage(page)

  return (
    <>
      <PageTitle>blog</PageTitle>
      <p className="-mt-5 mb-7 text-muted">{blogIntro}</p>
      <TopicFilter active={topic} />
      <PostList posts={posts} />
      {pageCount > 1 && (
        <nav
          aria-label="Blog pages"
          className="flex items-center justify-between gap-4 text-[17px]"
        >
          <span className="flex-1">
            {page > 1 && (
              <Link href={blogPagePath(page - 1)} className={pagerLink}>
                <span
                  aria-hidden="true"
                  className={`${arrow} group-hover/pager:-translate-x-[3px]`}
                >
                  ←
                </span>{" "}
                newer
              </Link>
            )}
          </span>
          <span className="flex gap-1 text-[16px] tabular-nums">
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <Link
                key={n}
                href={blogPagePath(n)}
                aria-label={`Page ${n}`}
                aria-current={n === page ? "page" : undefined}
                className="inline-flex size-8 items-center justify-center rounded-full text-muted transition-colors duration-200 ease-[ease] hover:text-ink aria-[current=page]:bg-surface aria-[current=page]:font-bold aria-[current=page]:text-ink"
              >
                {n}
              </Link>
            ))}
          </span>
          <span className="flex-1 text-right">
            {page < pageCount && (
              <Link href={blogPagePath(page + 1)} className={pagerLink}>
                older{" "}
                <span
                  aria-hidden="true"
                  className={`${arrow} group-hover/pager:translate-x-[3px]`}
                >
                  →
                </span>
              </Link>
            )}
          </span>
        </nav>
      )}
    </>
  )
}

export default BlogIndex
