import React from 'react';
import { graphql } from 'gatsby'
import Img from 'gatsby-image';

import Layout from '../components/layout';
import PrevNext from '../components/prevnext';
import Links from '../components/Links';



function House(props) {
  const house = props.data.markdownRemark;
  const { prev, next } = props.pageContext;
  const {
    // code,
    address,
    price,
    extimated,
    year,
    area,
    rooms,
    priceArea,
    houseCost,
    fees,
    association,
    mortgage,
    fee,
    saving,
    transport,
    bike,
    floorplan,
    booli,
    broker,
    maps,
    tags,
    star,
  } = house.frontmatter;
  return (
    <Layout>
      <div>
        <h1 style={{ textAlign: 'right', width: '100%'}}>{star ? '⭐️ ' : ''}</h1>
        <h1>{address}</h1>
        <h1><i>{price} kr ({extimated} kr)</i></h1>
        <table>
          <tbody>
            <tr>
              <th>Price area</th>
              <td>{priceArea} kr/m²</td>
            </tr>
            <tr>
              <th>House cost</th>
              <td>{houseCost} kr/month</td>
            </tr>
            <tr>
              <th>House fee</th>
              <td>{fees} kr/month</td>
            </tr>
            <tr>
              <th>Year</th>
              <td>{year}</td>
            </tr>
            <tr>
              <th>Area</th>
              <td>{area} m²</td>
            </tr>
            <tr>
              <th>Rooms</th>
              <td>{rooms}</td>
            </tr>
            <tr>
              <th>Transport</th>
              <td>{transport} min</td>
            </tr>
            <tr>
              <th>Bike</th>
              <td>{bike} min</td>
            </tr>
          </tbody>
        </table>
        <table>
          <tbody>
            <tr>
              <th>Association</th>
              <td>{association}</td>
            </tr>
            <tr>
              <th>Mortage</th>
              <td>{mortgage} kr/m²</td>
            </tr>
            <tr>
              <th>Fee</th>
              <td>{fee} kr/month</td>
            </tr>
            <tr>
              <th>Savings</th>
              <td>{saving} kr/month</td>
            </tr>
          </tbody>
        </table>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          {tags.map((item) => (
            <span
              style={{
                background: 'orange',
                padding: '5px 10px',
                margin: '5px',
                borderRadius: '10px',
              }}
            >
              <strong>{item}</strong>
            </span>
          ))}
        </div>
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
            code
            address
            price
            extimated
            year
            area
            rooms
            priceArea
            houseCost
            fees
            association
            mortgage
            fee
            saving
            transport
            bike
            floorplan
            booli
            broker
            maps
            tags
            star
        }
    }
}`