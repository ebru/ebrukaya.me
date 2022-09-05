import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components'
import Layout from './../components/layout';
import SEO from './../components/seo'

const BlogLink = styled(Link)`
  text-decoration: none;
`

const BackToBlogText = styled.p`
	margin-top: -20px;
	margin-bottom: 2px;
	text-align: right;
`

const PostTitle = styled.h1`
  margin-bottom: 5px;
  color: #333;
`

const PostDate = styled.p`
	font-size: 17px;
	color: #666;
	margin-bottom: 15px;
`

export default ({ data }) => {
	const post = data.markdownRemark
	console.log(data)
	return (
		<Layout>
			<SEO title={post.frontmatter.title} />
			<div>
				<BlogLink to='/'>
					<BackToBlogText>{'← back to homepage'}</BackToBlogText>
				</BlogLink>
				<PostTitle>{post.frontmatter.title}</PostTitle>
				<PostDate>{post.frontmatter.date}, by <BlogLink to='/'>ebru</BlogLink></PostDate>
				<div dangerouslySetInnerHTML={{ __html: post.html }} />
			</div>
		</Layout>
	)
}

export const query = graphql`
    query($slug: String!) {
        markdownRemark( fields: { slug: { eq: $slug }}) {
            html
            frontmatter {
                title
                date
            }
        }
    }
`