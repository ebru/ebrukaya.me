import Link from "next/link"

import PostIcon from "@/components/PostIcon"
import { formatDate, getPostSummaries } from "@/lib/posts"

// The newest few posts on the home page: one quiet line each, with the post's
// drawing. Hovering a line brings in the drawing's colour wash and the marker
// behind the title, like the blog list.
const LatestPosts = ({ count = 3 }: { count?: number }) => {
  const posts = getPostSummaries().slice(0, count)

  return (
    <section aria-labelledby="latest-intro" className="mt-16">
      <p id="latest-intro" className="mb-[22px] text-muted">
        Latest from the blog.
      </p>
      <ul className="m-0 list-none">
        {posts.map((post) => (
          <li key={post.slug} className="group/post m-0">
            <Link
              href={`/blog/${post.slug}/`}
              className="flex items-center gap-4 border-b border-line py-2.5 hover:text-inherit"
            >
              <PostIcon
                name={post.icon}
                className="size-10 transition-transform duration-200 ease-[ease] group-hover/post:-rotate-6"
              />
              <span className="min-w-0 flex-1 leading-[1.4] font-bold">
                <span className="bg-[linear-gradient(var(--marker),var(--marker))] bg-size-[0%_100%] bg-position-[0_88%] bg-no-repeat box-decoration-clone transition-[background-size] duration-[350ms] ease-[ease] group-hover/post:bg-size-[100%_100%] group-has-[a:focus-visible]/post:bg-size-[100%_100%]">
                  {post.title}
                </span>
              </span>
              <span className="shrink-0 text-[15px] text-muted tabular-nums max-[480px]:hidden">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href="/blog/"
        className="group/more mt-[22px] mr-0 mb-0 ml-auto block w-fit text-muted underline decoration-transparent decoration-2 underline-offset-4 transition-[text-decoration-color,color] duration-200 ease-[ease] hover:text-ink hover:decoration-accent focus-visible:text-ink focus-visible:decoration-accent"
      >
        all posts{" "}
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 ease-[ease] group-hover/more:translate-x-[3px]"
        >
          →
        </span>
      </Link>
    </section>
  )
}

export default LatestPosts
