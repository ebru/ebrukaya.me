import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import SEO from '../components/seo'
import PersonalCard from '../components/personal-card/personal-card.component'

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BackToHomepageText = styled.p`
  margin-top: -20px;
  margin-bottom: 30px;
  text-align: right;
`

const BlogTitle = styled.h1`
  margin-bottom: 35px;
  color: #333;
`

export default () => {
  return (
    <Layout>
      <SEO title='Personal' description='Some personal facts that you can get to know me.' />
      <BlogLink to='/'>
        <BackToHomepageText>{'← back to homepage'}</BackToHomepageText>
      </BlogLink>
      <BlogTitle>personal</BlogTitle>
      <PersonalCard />
    </Layout>
  )
}
