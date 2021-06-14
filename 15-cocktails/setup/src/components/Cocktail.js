import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, name, glassType, alcoholicStatus, img }) => {
  return (
    <div>
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <h3>{glassType}</h3>
      <h4>{alcoholicStatus}</h4>
      <Link to={`/cocktail/${id}`}>Details</Link>
    </div>
  )
}

export default Cocktail
