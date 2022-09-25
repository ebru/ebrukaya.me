import React, { useState } from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import styled from 'styled-components'
import { TextField, Button } from '@mui/material';

import 'react-markdown-editor-lite/lib/index.css'
import Layout from '../layout'
import Seo from '../components/seo'
import { downloadTxtFile } from '../utils'

const mdParser = new MarkdownIt();

const BlogTitle = styled.h1`
  margin-bottom: 40px;
  color: #333;
`
const Container = styled.div`
`

const Panel = () => {
  const [title, setTitle] = useState();
  const [text, setText] = useState('# hello');
  const [description, setDescription] = useState();

  const validData = title && text && description;

  const handleEditorChange = ({ text }) => {
    setText(text)
  }

  const createPost = () => {
    if (!validData) return

    downloadTxtFile({ text, title })
  }

  return (
    <Layout
      panelLink={false}
      footer={false}
      maxWidth={1000}
    >
      <Seo title={'Panel'} description='A very simple content management system.' />
      <div>
        <BlogTitle>new post</BlogTitle>
        <Container>
          <TextField
            style={{ width: '100%', marginBottom: 30 }}
            label="title"
            onChange={(event) => setTitle(event.target.value)}
            size='small'
          />
          <MdEditor style={{ height: '500px' }}
            value={text}
            renderHTML={text => mdParser.render(text)}
            onChange={handleEditorChange}
          />
          <TextField
            style={{ width: '100%', marginTop: 30 }}
            label="meta description"
            multiline
            rows={2}
            onChange={(event) => setDescription(event.target.value)}
            size='small'
          />
          <Button
            style={{ marginTop: 30, textTransform: 'lowercase' }}
            onClick={createPost}
            disabled={!validData}
            variant="contained"
          >
            create
          </Button>
        </Container>
      </div>
    </Layout>
  )
};

export default Panel
