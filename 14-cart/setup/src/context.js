import React, { useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  isLoading: false,
  cart: cartItems,
  amount: 0,
  total: 0
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Fetch data function
  const fetchData = async () => {
    dispatch({type: 'LOADING'})
    const response = await fetch(url)
    const cartData = await response.json()
    dispatch({type: 'FETCH_DATA', payload: cartData})
  }

  // Fetch data on url change
  useEffect(() => {
    fetchData()
  }, [url])

  // Recheck amount and totals if cart changes
  useEffect(() => {
    dispatch({type: 'GET_TOTALS'})
  }, [state.cart])

  // Increment / decrement item from cart
  const changeItemAmount = (id, action) => {
    dispatch({type: 'CHANGE_ITEM_AMOUNT', payload: {id: id, change: action}})
  }

  // Remove item from cart
  const removeItem = (id) => {
    dispatch({type: 'REMOVE_ITEM', payload: id})
  }

  // Clear cart list
  const clearCart = () => {
    dispatch({type: 'CLEAR_CART'})
  }

  return (
    <AppContext.Provider
      value={{
        ...state,
        changeItemAmount, removeItem, clearCart
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
