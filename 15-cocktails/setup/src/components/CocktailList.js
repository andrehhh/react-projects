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
    return <h2 className='section-title'>No cocktails</h2>
  }

  return (
    <section className='section'>
      <h2 className='section-title'>cocktails</h2>
      <div className='cocktails-center'>
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
    </section>
  )
}

export default CocktailList
