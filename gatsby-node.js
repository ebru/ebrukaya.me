const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode })

		createNodeField({
			node,
			name: `slug`,
			value: slug
		})
	}
}

exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions
	return graphql(`
    {
        allMarkdownRemark {
            edges {
                node {
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `).then(result => {
		const posts = result.data.allMarkdownRemark.edges;
		const postsPerPage = 6;
		const numPages = Math.ceil(posts.length / postsPerPage);

		Array.from({ length: numPages }).forEach((_, i) => {
			createPage({
				path: i === 0 ? `/journal` : `/journal/${i + 1}`,
				component: path.resolve("./src/templates/blog-list-template.js"),
				context: {
					limit: postsPerPage,
					skip: i * postsPerPage,
					numPages,
					currentPage: i + 1,
				},
			})
		})

		posts.forEach(({ node }) => {
			createPage({
				path: node.fields.slug,
				component: path.resolve(`./src/templates/blog-post.js`),
				context: {
					slug: node.fields.slug
				}
			})
		})
	})
}