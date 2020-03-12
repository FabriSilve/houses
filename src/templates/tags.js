import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout';
import '../pages/house.css'

function Tags(props) {
  const houses = props.data.allMarkdownRemark.edges;
  const { tag } = props.pageContext;
  return (
    <Layout>
      <h1>{`Available houses in ${tag}`}</h1>
      <div className="tags">
        {
          houses.map(({ node }, i) => (
            <Link to={node.fields.houseLink} key={i} >
              {node.frontmatter.address}
            </Link>
          ))
        }
      </div>
    </Layout>
  )
}

export default Tags;

export const query = graphql`

 query TagsQuery($tag: String!) {
allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___price], order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          frontmatter {
            address
          }
          fields {
            houseLink
          }
        }
      }
    }
}
`