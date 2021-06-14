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
  }, [url, id])

  if(isLoading) {
    return (
      <Loading />
    )
  }

  const { strDrink, strDrinkThumb, strCategory, strAlcoholic, strGlass, strInstructions, ingredients } = cocktail

  return (
    <div>
      <Link to='/'>Back to Home</Link>
      <h2>{strDrink}</h2>
      <img src={strDrinkThumb} alt={strDrink} />
      <ul>
        <li>Name: {strDrink}</li>
        <li>Category: {strCategory}</li>
        <li>Info: {strAlcoholic}</li>
        <li>Glass: {strGlass}</li>
        <li>Instructions: {strInstructions}</li>
        <li>Ingredients: 
          <ul>
            {
              ingredients.map((ingredient, index) => {
                return (
                  <li key={index}>{ingredient}</li>
                )
              })
            }
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default SingleCocktail
