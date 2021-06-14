import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {

  const { id } = useParams()

  const { fetchData } = useGlobalContext()

  const [isLoading, setIsLoading] = useState(true)
  const [cocktail, setCocktail] = useState({})
  
  const getIngredients = (cocktail) => {
    let ingredients = []
    for(const key in cocktail) {
      if(key.includes('Ingredient')) {
        if(cocktail[key]) {
          ingredients = [...ingredients, cocktail[key]]
        }
      }
    }
    return ingredients
  }

  useEffect(() => {
    fetchData(url + id)
      .then((data) => {
        const ingredients = getIngredients(data.drinks[0])
        const newCocktail = {...data.drinks[0], ingredients}
        setCocktail(newCocktail)
        setIsLoading(false)
      })
  }, [id, fetchData])

  if(isLoading) {
    return (
      <Loading />
    )
  }

  if(!cocktail) {
    return <h2>No cocktail to display</h2>
  }

  const { strDrink, strDrinkThumb, strCategory, strAlcoholic, strGlass, strInstructions, ingredients } = cocktail

  return (
    <section className='section cocktail-section'>
      <Link to='/' className='btn btn-primary'>
        back home
      </Link>
      <h2 className='section-title'>{strDrink}</h2>
      <div className='drink'>
        <img src={strDrinkThumb} alt={strDrink} />
        <div className='drink-info'>
          <p>
          <span className='drink-data'>Name:</span> {strDrink}
          </p>
          <p>
            <span className='drink-data'>Category:</span> {strCategory}
          </p>
          <p>
            <span className='drink-data'>Info:</span> {strAlcoholic}
          </p>
          <p>
            <span className='drink-data'>Glass:</span> {strGlass}
          </p>
          <p>
            <span className='drink-data'>Instructions:</span> {strInstructions}
          </p>
          <p>
            <span className='drink-data'>Ingredients:</span>
              {
                ingredients.map((ingredient, index) => {
                  return (
                    <span key={index}>{ingredient}</span>
                  )
                })
              }
          </p>
        </div>
      </div>
    </section>
  )
}

export default SingleCocktail
