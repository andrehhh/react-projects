import React from 'react'

import { useGlobalContext } from './context'

const Home = () => {

  // Using custom hook to call context values
  const { toggleModal } = useGlobalContext()

  return (
    <main>
      <h2>Home Page</h2>
      <button className='btn' onClick={() => toggleModal('Modal Text!')}>Show Modal</button>
    </main>
  )
}

export default Home
