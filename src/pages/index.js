import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../layout'
import Seo from './../components/seo'
import SnippetCard from './../components/snippet-card/snippet-card.component'
import BlogCard from './../components/blog-card/blog-card.component'
import Pagination from '../components/pagination'

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

const Home = ({ data }) => {
  const currentPage = '1';
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
        <Pagination numPages={numPages} currentPage={currentPage} />
      </div>
    </Layout>
  )
}

export default Home

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