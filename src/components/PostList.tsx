import Link from "next/link"

import PostIcon from "@/components/PostIcon"
import type { PostSummary } from "@/lib/posts"

// "<date>, by ebru" under a post title, in the list and on the post itself.
// Drafts (only visible locally) get a small label.
export const PostDate = ({
  date,
  draft = false,
  className,
}: {
  date: string
  draft?: boolean
  className?: string
}) => (
  <p className={className ?? "mb-1.5 text-[15px] text-muted"}>
    {date}, by{" "}
    <Link href="/" className="font-semibold text-ink-soft">
      ebru
    </Link>
    {draft && (
      <span className="ml-2 rounded-full bg-surface px-2 py-0.5 text-[13px] font-bold text-accent">
        draft
      </span>
    )}
  </p>
)

// A post in the list. At rest it's plain; on hover a marker sweeps behind
// the title and the drawing's colour wash fades in.
const PostList = ({ posts }: { posts: PostSummary[] }) => (
  <ul className="mx-0 mt-0 mb-[1.5rem] list-none">
    {posts.map((post) => (
      <li
        key={post.slug}
        className="group/post mb-[38px] grid grid-cols-[72px_minmax(0,1fr)] items-start gap-[22px] max-[480px]:grid-cols-[48px_minmax(0,1fr)] max-[480px]:gap-[14px]"
      >
        <Link
          href={`/blog/${post.slug}/`}
          tabIndex={-1}
          aria-hidden="true"
          className="mt-1 transition-transform duration-200 ease-[ease] group-hover/post:-rotate-6"
        >
          <PostIcon name={post.icon} className="max-[480px]:size-[48px]" />
        </Link>
        <div>
          <Link href={`/blog/${post.slug}/`} className="hover:text-inherit">
            <h2 className="mb-1.5 text-[25px] leading-[1.3] font-extrabold tracking-[-0.025em]">
              <span className="bg-[linear-gradient(var(--marker),var(--marker))] bg-size-[0%_100%] bg-position-[0_88%] bg-no-repeat box-decoration-clone transition-[background-size] duration-[350ms] ease-[ease] group-hover/post:bg-size-[100%_100%] group-has-[a:focus-visible]/post:bg-size-[100%_100%]">
                {post.title}
              </span>
            </h2>
          </Link>
          <PostDate date={post.date} draft={post.draft} />
          <p className="mb-0 text-ink-soft">{post.excerpt}</p>
        </div>
      </li>
    ))}
  </ul>
)

export default PostList
