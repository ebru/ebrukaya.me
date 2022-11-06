import React from 'react'
import styled from 'styled-components'
import Layout from '../layout'
import Seo from '../components/seo'
import PersonalCard from '../components/personal-card/personal-card.component'
import { pages } from '../consts'

const BlogTitle = styled.h1`
  margin-bottom: 35px;
  color: #333;
`

const Personal = () => {
  return (
    <Layout pageKey={pages.personal}>
      <Seo title='Personal' description='Some personal facts that you can get to know me.' />
      <BlogTitle>personal</BlogTitle>
      <PersonalCard />
    </Layout>
  )
}

export default Personal
