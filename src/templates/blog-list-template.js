import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from './../components/layout'
import Seo from './../components/seo'

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BackToHomepageText = styled.p`
  margin-top: -20px;
  margin-bottom: 30px;
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

const BlogList = ({ location, data }) => {
  const page = location.pathname.split(`/`)[2];

  return (
    <Layout>
      <Seo title={page ? `Journal: Page ${page}` : 'Journal'} description='I write sometimes about software, design, life and travels.' />
      <div>
        <BlogLink to='/'>
          <BackToHomepageText>{'← back to homepage'}</BackToHomepageText>
        </BlogLink>
        <BlogTitle>the journal</BlogTitle>
        <PostCount>page {page || '1'}</PostCount>
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
};

export default BlogList

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
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