import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Sidebar from './Sidebar'
import Submenu from './Submenu'

import { useGlobalContext } from './context'

function App() {

  const { submenu, showSidebar } = useGlobalContext()

  return (
    <>
      <Navbar />
      { submenu.isOpen && <Submenu /> }
      { showSidebar && <Sidebar /> }
      <Hero />
    </>
  )
}

export default App
