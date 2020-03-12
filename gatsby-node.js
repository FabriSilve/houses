const path = require("path")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/house.js`)

  return new Promise((resolve, reject) => {

    resolve(graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___price] }
        limit: 1000
      ) {
        edges {
          node {
            fields{
                houseLink
            }
            frontmatter {
              address
            }
          }
        }
      }
    }
  `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        return reject(result.errors)
      }

      const houseTemplate = path.resolve('./src/templates/house.js');

      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.houseLink,
          component: houseTemplate,
          context: {
            houseLink: node.fields.houseLink,
          }, // additional data can be passed via context
        })
      })
      return
    })
    )
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const houseLink = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `houseLink`,
      value: houseLink,
    })

  }
}