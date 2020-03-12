const path = require("path")
const { createFilePath, createFileNode } = require(`gatsby-source-filesystem`);
const _ = require('lodash');


exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

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
              tags
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

      const houses = result.data.allMarkdownRemark.edges
      const houseTemplate = path.resolve('./src/templates/house.js');
      const tagsTemplate = path.resolve('./src/templates/tags.js');
    
      let allTags = []
      // Iterate through each post, putting all found tags into `allTags array`
      _.each(houses, edge => {
        if (_.get(edge, 'node.frontmatter.tags')) {
          allTags = allTags.concat(edge.node.frontmatter.tags)
        }
      })
      // Eliminate duplicate tags
      allTags = _.uniq(allTags)

      allTags.forEach((tag, index) => {
        createPage({
          path: `/${_.kebabCase(tag)}/`,
          component: tagsTemplate,
          context: {
            tag,
          }
        })
      })
    
      houses.forEach(({ node }, index) => {
        createPage({
          path: node.fields.houseLink,
          component: houseTemplate,
          context: {
            houseLink: node.fields.houseLink,
            prev: index === 0 ? null : houses[index - 1],
            next: index === result.length - 1 ? null : houses[index + 1],
          }, // additional data can be passed
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