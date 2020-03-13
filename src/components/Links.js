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
      <h3 className="center">Open in</h3>
      <ul className="social">
        <li>
          <a href={booli} target="blank">
            Booli
            {/* <img src={fbIcon} alt="facebook" /> */}
          </a>
        </li>
        {/* <li>
          <a href={twitter} target="blank">
            <img src={twitterIcon} alt="twitter" />
          </a>
        </li> */}
      </ul>
    </div>
  )
}

export default Links;