import React from 'react';
import { graphql } from 'gatsby'
import Img from 'gatsby-image';

import Layout from '../components/layout';
import PrevNext from '../components/prevnext';


function House(props) {
  const house = props.data.markdownRemark;
  const { prev, next } = props.pageContext;
  const { address, price, floorplan } = house.frontmatter;
  return (
    <Layout>
      <div>
        <h1>{address}</h1>
        <h2>{price}</h2>
        {floorplan && <Img fluid={floorplan.childImageSharp.fluid} />}
        <div dangerouslySetInnerHTML={{ __html: house.html }} />
        <PrevNext prev={prev && prev.node} next={next && next.node} />
      </div>
    </Layout>
  )
}

export default House

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