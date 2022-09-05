import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import {
  SectionTitle,
} from './../section-card/section-card.styles'

const BlogLink = styled(Link)`
  text-decoration: none;
`

const PostTitle = styled.h2`
  margin-bottom: 5px;
  color: #333;
  font-size: 27px;
  background-color: #f8f8f8;
  display: table;
`

const PostDate = styled.p`
  font-size: 15px;
  color: #666;
  margin-bottom: 5px;
`

const PostSnippet = styled.p`
  margin-bottom: 30px;
`

const BlogCard = ({ data }) => {
  return (
    <>
      <SectionTitle />
      {
        data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <BlogLink to={node.fields.slug}>
              <PostTitle>{node.frontmatter.title}</PostTitle>
            </BlogLink>
            <PostDate>{node.frontmatter.date}, by <BlogLink to='/'>ebru</BlogLink></PostDate>
            <PostSnippet>{node.excerpt}</PostSnippet>
          </div>
        ))
      }
    </>
  )
}

export default BlogCard