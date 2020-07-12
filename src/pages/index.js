import React from 'react'
import { graphql } from 'gatsby'

import Layout from './../components/layout'
import SEO from './../components/seo'
import SnippetCard from './../components/snippet-card/snippet-card.component'
import SideProjectsCard from './../components/side-projects-card/side-projects-card.component'
import JourneyCard from './../components/journey-card/journey-card.component'
import SkillsCard from './../components/skills-card/skills-card.component'
import PersonalCard from './../components/personal-card/personal-card.component'
import BlogCard from './../components/blog-card/blog-card.component'
import Footer from './../components/footer/footer.component'

export default ({ data }) => {
  return (
    <Layout>
      <SEO description="Hi, I'm Ebru. Full Stack Developer at Getir, backpacker and lover of nature. This is my personal website. I'm adding new sections along the way of the journey of growing both professionally and personally." />
      <div>
        <SnippetCard />
        <JourneyCard />
        <SideProjectsCard />
        <SkillsCard />
        <PersonalCard />
        <BlogCard data={data}/>
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