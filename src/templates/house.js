import React from 'react';
import { graphql } from 'gatsby'
import Img from 'gatsby-image';

import Layout from '../components/layout';
import PrevNext from '../components/prevnext';
import Links from '../components/Links';


function House(props) {
  const house = props.data.markdownRemark;
  const { prev, next } = props.pageContext;
  const { address, price, floorplan, booli, broker, maps, floorplanLink } = house.frontmatter;
  return (
    <Layout>
      <div>
        <h1>{address}</h1>
        <h2>{price}</h2>
        {floorplan && <img src={floorplan} style={{ maxHeight: '800px', width: 'auto' }} />}
        <div dangerouslySetInnerHTML={{ __html: house.html }} />
        <PrevNext prev={prev && prev.node} next={next && next.node} />
        <Links booli={booli} broker={broker} maps={maps} />
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
            booli
            broker
            maps
            floorplanLink
        }
    }
}`