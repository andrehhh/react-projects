import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [cocktailsCache, setCocktailsCache] = useState([])
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [cocktailList, setCocktailList] = useState([])

  const fetchData = async (url) => {
    const response = await fetch(url)
    return await response.json()
  }

  const searchData = useCallback(async (value) => {
    setIsLoading(true)

    if(value === '') { // No Search Value
      if(cocktailsCache.length > 0) { // Cache is saved
        setCocktailList(cocktailsCache)

      } else { // No cache saved
        const data = await fetchData(`${url}a`)
        setCocktailsCache(data.drinks)
        setCocktailList(data.drinks)
      }

    } else { // Has search value
      const data = await fetchData(url + value)
      setCocktailList(data.drinks)
    }
    setIsLoading(false)
  }, [cocktailsCache])

  useEffect(() => {
    searchData(inputText)
  }, [inputText, searchData])

  const search = (value) => {
    setInputText(value)
  }

  return (
    <AppContext.Provider 
      value={{
        inputText, isLoading, cocktailList,
        search, fetchData
      }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
