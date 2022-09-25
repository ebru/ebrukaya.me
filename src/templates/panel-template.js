import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import MarkdownIt from 'markdown-it'
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
  margin-bottom: 40px;
  color: #333;
`
const mdParser = new MarkdownIt();

const Panel = () => {
  const [text, setText] = useState();

  const handleEditorChange = ({ text }) => {
    setText(text)
  }

  const handleSend = () => {
    if (!text) return
    console.log('text', text);
  }

  return (
    <Layout disablePanelLink disableFooter>
      <Seo title={'Panel'} description='A very simple content management system.' />
      <div>
        <BlogLink to='/'>
          <BackToHomepageText>{'← back to homepage'}</BackToHomepageText>
        </BlogLink>
        <BlogTitle>new post</BlogTitle>
        <MdEditor style={{ height: '500px' }}
          renderHTML={text => mdParser.render(text)}
          onChange={handleEditorChange}
        />
        <button style={{ marginTop: 20 }} onClick={handleSend} disabled={!text}>send</button>
      </div>
    </Layout>
  )
};

export default Panel
