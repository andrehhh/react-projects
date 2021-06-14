import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, name, glassType, alcoholicStatus, img }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={img} alt={name} />
      </div>
      <div className='cocktail-footer'>
        <h3>{name}</h3>
        <h4>{glassType}</h4>
        <p>{alcoholicStatus}</p>
        <Link to={`/cocktail/${id}`} className='btn btn-primary btn-details'>
          Details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail
