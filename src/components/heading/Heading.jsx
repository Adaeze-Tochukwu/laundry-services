import React from 'react'
import "./Heading.scss"

export default function Heading(props) {
  const { service, includes } = props
  
  return (
    <div className='heading'>
      <h3>{service}</h3>
      <h2>{includes}</h2>
    </div>
  )
}
