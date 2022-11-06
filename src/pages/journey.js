import React from 'react'
import styled from 'styled-components'
import Layout from '../layout'
import Seo from '../components/seo'
import JourneyCard from '../components/journey-card/journey-card.component'
import { pages } from '../consts'

const BlogTitle = styled.h1`
  margin-bottom: 35px;
  color: #333;
`

const Journey = () => {
  return (
    <Layout pageKey={pages.journey}>
      <Seo title='Journey' description='My educational and professional experience so far.' />
      <BlogTitle>the journey</BlogTitle>
      <JourneyCard />
    </Layout>
  )
}

export default Journey
