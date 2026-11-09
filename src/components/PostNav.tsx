import Link from "next/link"

import PostIcon from "@/components/PostIcon"
import { cn } from "@/lib/cn"
import type { PostSummary } from "@/lib/posts"

// At the end of a post: the newer post on the left, the older one on the right.
const PostNav = ({
  newer,
  older,
}: {
  newer?: PostSummary
  older?: PostSummary
}) => (
  <nav
    aria-label="More posts"
    className="mt-14 grid grid-cols-2 gap-6 max-[480px]:grid-cols-1"
  >
    {newer ? <PostLink post={newer} label="← newer" /> : <span />}
    {older && <PostLink post={older} label="older →" alignEnd />}
  </nav>
)

const PostLink = ({
  post,
  label,
  alignEnd = false,
}: {
  post: PostSummary
  label: string
  alignEnd?: boolean
}) => (
  <Link
    href={`/blog/${post.slug}/`}
    className={cn(
      "group/post flex items-center gap-3.5 hover:text-inherit",
      alignEnd &&
        "flex-row-reverse text-right max-[480px]:flex-row max-[480px]:text-left"
    )}
  >
    <PostIcon
      name={post.icon}
      className="size-12 transition-transform duration-200 ease-[ease] group-hover/post:-rotate-6"
    />
    <span className="min-w-0">
      <span className="block text-[15px] text-muted">{label}</span>
      <span className="font-bold leading-[1.4]">
        <span className="bg-[linear-gradient(var(--marker),var(--marker))] bg-size-[0%_100%] bg-position-[0_88%] bg-no-repeat box-decoration-clone transition-[background-size] duration-[350ms] ease-[ease] group-hover/post:bg-size-[100%_100%] group-focus-visible/post:bg-size-[100%_100%]">
          {post.title}
        </span>
      </span>
    </span>
  </Link>
)

export default PostNav
