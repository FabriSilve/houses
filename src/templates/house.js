import React from 'react';
import { graphql } from 'gatsby'
import Img from 'gatsby-image';

import Layout from '../components/layout';


function House(props) {
  const house = props.data.markdownRemark;
  const { address, price } = house.frontmatter;
  return (
    <Layout>
      <div>
        <h1>{address}</h1>
        <h2>{price}</h2>
        <Img fluid={house.frontmatter.floorplan.childImageSharp.fluid} />
        <div dangerouslySetInnerHTML={{ __html: house.html }} />
      </div>
    </Layout>
  )
}

export default House

/*

*/

export const query = graphql`
query HouseQuery($houseLink: String!) {
    markdownRemark(fields: { houseLink: { eq: $houseLink } }) {
        html
        excerpt
        frontmatter {
            address
            price
            floorplan {
              childImageSharp {
                resize(width: 1500, height: 1500) {
                  src
                }
                fluid(maxWidth: 786) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
        }
    }
}`