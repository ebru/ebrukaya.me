import Link from "next/link"
import styled from "styled-components"

import PostIcon from "@/components/PostIcon"

// A post in the list. At rest it's plain; on hover a marker sweeps behind
// the title and the drawing's colour wash fades in.
const PostList = ({ posts }) => (
  <List>
    {posts.map((post) => (
      <li key={post.slug}>
        <IconLink href={`/blog/${post.slug}/`} tabIndex={-1} aria-hidden="true">
          <PostIcon name={post.icon} size={72} />
        </IconLink>
        <div>
          <TitleLink href={`/blog/${post.slug}/`}>
            <h2>
              <span>{post.title}</span>
            </h2>
          </TitleLink>
          <PostDate>
            {post.date}, by <Link href="/">ebru</Link>
          </PostDate>
          <PostSnippet>{post.excerpt}</PostSnippet>
        </div>
      </li>
    ))}
  </List>
)

const List = styled.ul`
  list-style: none;
  margin: 0 0 1.5rem;

  > li {
    display: grid;
    grid-template-columns: 72px minmax(0, 1fr);
    gap: 22px;
    align-items: start;
    margin-bottom: 38px;
  }

  @media (max-width: 480px) {
    > li {
      grid-template-columns: 48px minmax(0, 1fr);
      gap: 14px;
    }

    > li > a:first-child > span {
      width: 48px !important;
      height: 48px !important;
    }
  }
`

const IconLink = styled(Link)`
  margin-top: 4px;
  transition: transform 0.2s ease;

  li:hover & {
    transform: rotate(-6deg);
  }
`

const TitleLink = styled(Link)`
  h2 {
    margin-bottom: 6px;
    font-size: 25px;
    font-weight: 800;
    letter-spacing: -0.025em;
    line-height: 1.3;
  }

  span {
    background-image: linear-gradient(var(--marker), var(--marker));
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position: 0 88%;
    transition: background-size 0.35s ease;
    box-decoration-break: clone;
    -webkit-box-decoration-break: clone;
  }

  &:hover {
    color: inherit;
  }

  li:hover & span,
  &:focus-visible span {
    background-size: 100% 100%;
  }
`

export const PostDate = styled.p`
  font-size: 15px;
  color: var(--muted);
  margin-bottom: 6px;

  a {
    color: var(--ink-soft);
    font-weight: 600;
  }
`

const PostSnippet = styled.p`
  margin-bottom: 0;
  color: var(--ink-soft);
`

export default PostList
