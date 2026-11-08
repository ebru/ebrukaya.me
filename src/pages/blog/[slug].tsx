import { useEffect, useState } from "react"
import type { GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"
import styled from "styled-components"
import Layout from "@/components/Layout"
import { getAllPosts, getPostBySlug, type Post } from "@/lib/posts"
import Seo from "@/components/Seo"
import PostIcon from "@/components/PostIcon"
import { PostDate } from "@/components/PostList"

const PostTitle = styled.h1`
  margin-top: 20px;
  font-size: clamp(2.1rem, 6vw, 2.8rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  margin-bottom: 10px;
`

const Meta = styled(PostDate)`
  font-size: 16px;
  margin-bottom: 36px;
`

const Body = styled.div`
  font-size: 1.05rem;
  line-height: 1.8;

  h2,
  h3,
  h4 {
    margin-top: 2.4rem;
    letter-spacing: -0.02em;
  }

  img {
    border-radius: 8px;
  }

  /* tags like \`Animation\` in tables read as small labels */
  td code {
    font-family: inherit;
    font-size: 0.8rem;
    display: inline-block;
    line-height: 1.6;
    padding: 2px 8px;
    border-radius: 999px;
    background: var(--surface);
    color: var(--ink-soft);
  }

  td code::before,
  td code::after {
    content: none;
  }

  /* wide tables scroll sideways on small screens */
  @media (max-width: 640px) {
    table {
      display: block;
      overflow-x: auto;
    }
  }
`

const Progress = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  z-index: 10;
  background: var(--accent);
  transform-origin: 0 50%;
  pointer-events: none;
`

// A thin accent line at the top of the window that fills as you read.
const ReadingProgress = () => {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const update = () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0)
    }
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [])

  return (
    <Progress style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
  )
}

type Props = { post: Post }
type Params = { slug: string }

const BlogPost = ({ post }: Props) => {
  return (
    <Layout>
      <Seo title={post.title} description={post.description || undefined} />
      <ReadingProgress />
      <article>
        <PostIcon name={post.icon} size={88} className="post-icon" />
        <PostTitle>{post.title}</PostTitle>
        <Meta>
          {post.date}, by <Link href="/">ebru</Link>
        </Meta>
        <Body dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
    </Layout>
  )
}

export default BlogPost

export const getStaticPaths: GetStaticPaths<Params> = () => ({
  paths: getAllPosts().map((post) => ({ params: { slug: post.slug } })),
  fallback: false,
})

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => ({
  props: { post: getPostBySlug(params!.slug) },
})
