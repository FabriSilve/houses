import React from 'react'
// import twitterIcon from '../images/twitter.png'
// import fbIcon from '../images/facebook.png'

// import './share.css'

const Links = props => {

  const {
    booli,
    broker,
    maps,
  } = props;

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        <h3 className="center">Open in</h3>
        <a href={maps} target="blank">Maps</a>
        <a href={booli} target="blank">Booli</a>
        <a href={broker} target="blank">Broker</a>
      </div>
    </div>
  )
}

export default Links;