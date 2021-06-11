import React from 'react'
import { FaBars } from 'react-icons/fa'

import { useGlobalContext } from './context'

const Home = () => {

  // Using custom hook to call context values
  const { toggleModal } = useGlobalContext()

  return (
    <>
      <h2>Home Page</h2>
      <button onClick={() => toggleModal('Modal Text!')}>Show Modal</button>
    </>
  )
}

export default Home
