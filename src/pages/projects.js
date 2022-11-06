import React from 'react'
import styled from 'styled-components'
import Layout from '../layout'
import Seo from '../components/seo'
import SideProjectsCard from '../components/side-projects-card/side-projects-card.component'
import { pages } from '../consts'

const BlogTitle = styled.h1`
  margin-bottom: 35px;
  color: #333;
`

const Projects = () => {
  return (
    <Layout pageKey={pages.projects}>
      <Seo title='Side Projects' description='Side projects that I completed/am currently working on.' />
      <BlogTitle>side projects</BlogTitle>
      <SideProjectsCard />
    </Layout>
  )
}

export default Projects
