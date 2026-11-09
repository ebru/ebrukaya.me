import Link from "next/link"

import PostList from "@/components/PostList"
import { PageTitle } from "@/components/ui"
import { blogPagePath, getPageCount, getPostPage } from "@/lib/posts"

export const blogIntro = "Writing about software, design, life and travels."

const pagerLink =
  "group/pager text-muted underline decoration-transparent decoration-2 underline-offset-4 transition-[text-decoration-color,color] duration-200 ease-[ease] hover:text-ink hover:decoration-accent focus-visible:text-ink focus-visible:decoration-accent"
const arrow = "inline-block transition-transform duration-200 ease-[ease]"

// One page of the blog list, with quiet newer / older links and page numbers underneath.
const BlogIndex = ({ page }: { page: number }) => {
  const pageCount = getPageCount()

  return (
    <>
      <PageTitle>blog</PageTitle>
      <p className="-mt-5 mb-10 text-muted">{blogIntro}</p>
      <PostList posts={getPostPage(page)} />
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
