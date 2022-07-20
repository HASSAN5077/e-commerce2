import React from 'react'

const Title = ({simple,fancy}) => {
  return (
    <h2 className="heading">{simple} <span>{fancy}</span></h2>
  )
}

export default Title;