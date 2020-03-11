import React from 'react';
import { graphql } from 'gatsby'

import Layout from '../components/layout';


function House(props) {
  const house = props.data.markdownRemark;
  const { adress, price } = house.frontmatter;
  return (
    <Layout>
      <div>
        <h1>{adress}</h1>
        <div dangerouslySetInnerHTML={{ __html: house.html }} />
      </div>
    </Layout>
  )
}

export default House

export const query = graphql`
query HouseQuery($details: String!) {
    markdownRemark(fields: { details: { eq: $details } }) {
        html
        excerpt
        frontmatter {
            address
        }
    }
}`