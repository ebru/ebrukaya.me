import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from './../components/layout'
import Seo from './../components/seo'
import SnippetCard from './../components/snippet-card/snippet-card.component'
import BlogCard from './../components/blog-card/blog-card.component'
import Footer from './../components/footer/footer.component'

const NavLinks = styled.p`
  margin-top: -20px;
  margin-bottom: 30px;
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  font-size: 17px;
`

const BlogLink = styled(Link)`
  text-decoration: none;
`

const Divider = styled.span`
  padding-left: 7px;
  padding-right: 7px;
`

const Pagination = styled.div`
  margin-top: 20px;
`

export default ({ data }) => {
  const postsPerPage = 6;
  const totalCount = data.allMarkdownRemark.totalCount;
  const numPages = Math.ceil(totalCount / postsPerPage);

  return (
    <Layout>
      <Seo />
      <div>
        <NavLinks>
          <BlogLink to='/journey'>
            journey
          </BlogLink>
          <Divider>·</Divider>
          <BlogLink to='/tech-stack'>
            tech stack
          </BlogLink>
          <Divider>·</Divider>
          <BlogLink to='/projects'>
            projects
          </BlogLink>
          <Divider>·</Divider>
          <BlogLink to='/personal'>
            personal
          </BlogLink>
        </NavLinks>
        <SnippetCard />
        <BlogCard data={data} />
        <Pagination>
          {Array.from({ length: numPages }).map((page, index) => <div key={index}>{page}</div>)}
        </Pagination>
        <Footer />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 6) {
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