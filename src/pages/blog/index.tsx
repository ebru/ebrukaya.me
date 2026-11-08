import type { GetStaticProps } from "next"
import styled from "styled-components"

import Layout from "@/components/Layout"
import Seo from "@/components/Seo"
import PostList from "@/components/PostList"
import { PageTitle } from "@/components/ui"
import { pages } from "@/config"
import { getPostSummaries, type PostSummary } from "@/lib/posts"

const Intro = styled.p`
  margin-top: -20px;
  margin-bottom: 40px;
  color: var(--muted);
`

type Props = { posts: PostSummary[] }

const BlogPage = ({ posts }: Props) => (
  <Layout pageKey={pages.blog}>
    <Seo
      title="Blog"
      description="Writing about software, design, life and travels."
    />
    <PageTitle>blog</PageTitle>
    <Intro>Writing about software, design, life and travels.</Intro>
    <PostList posts={posts} />
  </Layout>
)

export default BlogPage

export const getStaticProps: GetStaticProps<Props> = () => ({
  props: { posts: getPostSummaries() },
})
