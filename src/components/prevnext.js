import React from 'react'

const PrevNext = (props) => {
  const { prev, next } = props

  console.log(prev, next)
  return (
    <div>
      Navigation
      <ul>
        {prev && <li><a href={prev.fields.houseLink}>
          Previous {" "}
          {prev.frontmatter.address}</a></li>}
        {next && <li><a href={next.fields.houseLink}>
          Next  {" "} {next.frontmatter.address}
        </a></li>}
      </ul>
    </div>
  )
}

export default PrevNext;