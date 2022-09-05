import React from 'react'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import Layout from './../components/layout'
import SEO from './../components/seo'
import SnippetCard from './../components/snippet-card/snippet-card.component'
import PersonalCard from './../components/personal-card/personal-card.component'
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

export default ({ data }) => {
  return (
    <Layout>
      <SEO description="Hi, I'm Ebru. Founder at Noe Crafts, backpacker and lover of nature. This is my personal website. I'm adding new sections along the way of the journey of growing both professionally and personally." />
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
        {/*
        
        <PersonalCard /> */}
        <BlogCard data={data} />
        <Footer />
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