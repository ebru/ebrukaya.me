import React from 'react'
import styled from 'styled-components'
import Layout from '../layout'
import Seo from '../components/seo'
import SkillsCard from '../components/skills-card/skills-card.component'
import { pages } from '../consts'

const BlogTitle = styled.h1`
  margin-bottom: 35px;
  color: #333;
`

const TechStack = () => {
  return (
    <Layout pageKey={pages.techStack}>
      <Seo title='Tech Stack' description='Tech stack that I have been adapted to along the years.' />
      <BlogTitle>tech stack</BlogTitle>
      <SkillsCard />
    </Layout>
  )
}

export default TechStack
