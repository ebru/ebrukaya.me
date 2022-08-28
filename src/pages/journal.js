import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'

import Layout from './../components/layout'
import SEO from './../components/seo'

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BackToHomepageText = styled.p`
  margin-top: -20px;
  margin-bottom: 2px;
  text-align: right;
`

const BlogTitle = styled.h1`
  margin-bottom: 10px;
  color: #333;
`

const PostCount = styled.h4`
  margin-bottom: 35px;
  color: #666;
  font-weight: normal;
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

export default ({ data }) => {
  return (
    <Layout>
      <SEO title='the journal' description='I write sometimes.' />
      <div>
        <BlogLink to='/'>
          <BackToHomepageText>{'← back to homepage'}</BackToHomepageText>
        </BlogLink>
        <BlogTitle>the journal</BlogTitle>
        <PostCount>{data.allMarkdownRemark.totalCount} posts</PostCount>
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
      </div>
    </Layout>
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