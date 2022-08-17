import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import {
  SectionTitle,
  PersonalList
} from './../section-card/section-card.styles'

import CustomEmoji from './../custom-emoji/custom-emoji.component'

const SeeMoreLink = styled(Link)`
  text-decoration: underline;
`
const PostTitle = styled.h2`
  margin-bottom: 7px;
  color: #333;
  font-size: 22px;
  background-color: #f8f8f8;
  display: table;
`

const PostDate = styled.p`
  font-size: 14px;
  color: #666;
  margin-bottom: 7px;
`

const PostSnippet = styled.p`
  margin-bottom: 20px;
`

const BlogCard = ({ data }) => {
  return (
    <>
      <SectionTitle><CustomEmoji label='blog' emoji='🎞' /> The Journal</SectionTitle>
      <PersonalList>
        {
          data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
              <Link to={node.fields.slug}>
                <PostTitle>{node.frontmatter.title}</PostTitle>
              </Link>
              <PostDate>{node.frontmatter.date}</PostDate>
              <PostSnippet>{node.excerpt}</PostSnippet>
            </div>
          ))
        }
      </PersonalList>
      <SeeMoreLink to='/journal'>see all on the journal</SeeMoreLink>
		</>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            description
            title
            date
          }
          fields {
            slug
          }
          html
          excerpt
        }
      }
    }
  }
`

export default BlogCard