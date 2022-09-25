import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import MdEditor from 'react-markdown-editor-lite'

import Layout from '../layout'
import Seo from '../components/seo'
import 'react-markdown-editor-lite/lib/index.css'

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BackToHomepageText = styled.p`
  margin-top: -20px;
  margin-bottom: 30px;
  text-align: right;
`

const BlogTitle = styled.h1`
  margin-bottom: 10px;
  color: #333;
`
const mdParser = new MarkdownIt();

const handleEditorChange = ({ html, text }) => {
  console.log('handleEditorChange', html, text)
}

const Panel = () => {
  return (
    <Layout>
      <Seo title={'Panel'} description='A very simple content management system.' />
      <div>
        <BlogLink to='/'>
          <BackToHomepageText>{'← back to homepage'}</BackToHomepageText>
        </BlogLink>
        <BlogTitle>panel</BlogTitle>
        <MdEditor style={{ height: '500px' }}
          renderHTML={text => mdParser.render(text)}
          onChange={handleEditorChange}
        />
      </div>
    </Layout>
  )
};

export default Panel
