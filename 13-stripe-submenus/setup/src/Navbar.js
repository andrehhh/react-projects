import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

import { useGlobalContext } from './context'

const Navbar = () => {

  const { sublinks, openSubmenu, closeSubmenu, toggleSidebar } = useGlobalContext()

  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems:'center'}}>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <ul style={{display: 'flex'}}>
        {
          sublinks.map((sublink, index) => {
            const { page } = sublink
            return (
              <li key={index} style={{padding: '0 1rem'}}>
                <a 
                  onMouseEnter={() => openSubmenu(page)}
                  onMouseLeave={() => closeSubmenu(page)}>{page}</a>
              </li>
            )
          })
        }
      </ul>
      <div>
        <button onClick={toggleSidebar}>Open Sidebar</button>
      </div>
    </div>
  )
}

export default Navbar
