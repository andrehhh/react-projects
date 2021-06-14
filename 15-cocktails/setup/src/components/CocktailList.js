import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {

  const { isLoading, cocktailList } = useGlobalContext()

  if(isLoading) {
    return <Loading />
  }

  if(!cocktailList) {
    return <h2>No cocktails</h2>
  }

  return (
    <div>
      {
        cocktailList.map((cocktail) => {
          const { idDrink, strDrink, strGlass, strAlcoholic, strDrinkThumb } = cocktail
          return (
              <Cocktail 
                key={idDrink}
                id={idDrink}
                name={strDrink}
                glassType={strGlass}
                alcoholicStatus={strAlcoholic}
                img={strDrinkThumb} />
          )
        })
      }
    </div>
  )
}

export default CocktailList
