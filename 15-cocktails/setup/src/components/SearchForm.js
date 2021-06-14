import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const { inputText, search } = useGlobalContext()

  return (
    <div>
      <form>
        <label htmlFor='searchInput'>Search Your Favourite Cocktail!</label>
        <input 
          type='text' 
          id='text' 
          value={inputText} 
          onChange={(e) => search(e.target.value)} />
      </form>
    </div>
  )
}

export default SearchForm
