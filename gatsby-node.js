const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { config } = require (`./src/config`)

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
		const posts = result.data.allMarkdownRemark.edges
		const postsPerPage = config.postsPerPage
		const numPages = Math.ceil(posts.length / postsPerPage)

		createPage({
			path: `/`,
			component: path.resolve("./src/templates/home-template.js"),
			context: {
				limit: postsPerPage,
			},
		})

		if (process.env.NODE_ENV === 'development') {
			createPage({
				path: `/panel`,
				component: path.resolve("./src/templates/panel-template.js"),
			})
		}

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
				component: path.resolve(`./src/templates/blog-post-template.js`),
				context: {
					slug: node.fields.slug
				}
			})
		})
	})
}