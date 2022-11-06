import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../layout'
import Seo from '../components/seo'
import SnippetCard from '../components/snippet-card/snippet-card.component'
import BlogCard from '../components/blog-card/blog-card.component'
import Pagination from '../components/pagination'

const Home = ({ data }) => {
  const currentPage = '1';
  const postsPerPage = 6;
  const totalCount = data.allMarkdownRemark.totalCount;
  const numPages = Math.ceil(totalCount / postsPerPage);

  return (
    <Layout showLogo={false}>
      <Seo />
      <div>
        <SnippetCard />
        <BlogCard data={data} />
        <Pagination numPages={numPages} currentPage={currentPage} />
      </div>
    </Layout>
  )
}

export default Home

export const query = graphql`
  query homeQuery($limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
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