import React from 'react'
import { Link } from 'react-router-dom'

import { useGlobalContext } from './context'

import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'

const Sidebar = () => {

  // Using custom hook to call context values
  const { showSidebar, toggleSidebar } = useGlobalContext()

  // Some CSS to make it functional
  return (
    <aside className={`${showSidebar ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <img src={logo} className='logo' alt='coding addict' />
        <button className='close-btn' onClick={toggleSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {
          links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <Link to={url} onClick={toggleSidebar}>{icon} {text}</Link>
              </li>
            )
          })
        }
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          const { id, url, icon } = link;
          return (
            <li key={id}>
              <a href={url} target='_blank'>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
