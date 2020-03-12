import React from 'react'
import { Link, graphql } from 'gatsby'

import './house.css';

import Layout from '../components/layout'


const IndexPage = (props) => {
  const houseList = props.data.allMarkdownRemark;
  return (
    <Layout>
      {houseList.edges.map(({ node }, i) => (
        <Link to={node.fields.houseLink} key={i} className="link" >
          <div className="house-list">
            <h1>{node.frontmatter.price}</h1>
            <span>{node.frontmatter.address}</span>
            <p>{node.excerpt}</p>
          </div>
        </Link>
      ))}
    </Layout>
  )
}

export default IndexPage;

export const listQuery = graphql`
  query ListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___price] }) {
      edges {
        node {
          fields{
            houseLink
          }
          excerpt(pruneLength: 250)
          frontmatter {
            price
            address
          }
        }
      }
    }
  }
`