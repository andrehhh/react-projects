import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'

import { useGlobalContext } from './context'

const Navbar = () => {

  const { sublinks, openSubmenu, closeSubmenu, toggleSidebar } = useGlobalContext()

  const displaySubmenu = (e, page) => {
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };

  const handleSubmenu = (e) => {
    if(!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }

  return (
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='nav-logo' alt='' />
          <button className='btn toggle-btn' onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {
            sublinks.map((sublink, index) => {
              const { page } = sublink
              return (
                <li key={index}>
                  <button className='link-btn' 
                    onMouseOver={(e) => displaySubmenu(e, page)}>
                      {page}
                  </button>
                </li>
              )
            })
          }
        </ul>
        <button className='btn signin-btn'>Sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
