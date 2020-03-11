const path = require("path")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const details = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `details`,
      value: details,
    })

  }
}