import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {

  const { inputText, search } = useGlobalContext()
  const searchValue = React.useRef('')

  React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  return (
    <section className='section search'>
      <form className='search-form'>
        <div className='form-control'>
          <label htmlFor='text'>search your favorite cocktail</label>
          <input 
            type='text' 
            id='text' 
            value={inputText} 
            ref={searchValue}
            onChange={(e) => search(e.target.value)} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
