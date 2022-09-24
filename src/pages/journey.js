import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Seo from '../components/seo'
import JourneyCard from '../components/journey-card/journey-card.component'

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

const Journey = () => {
  return (
    <Layout>
      <Seo title='Journey' description='My educational and professional experience so far.' />
      <BlogLink to='/'>
        <BackToHomepageText>{'← back to homepage'}</BackToHomepageText>
      </BlogLink>
      <BlogTitle>the journey</BlogTitle>
      <JourneyCard />
    </Layout>
  )
}

export default Journey
