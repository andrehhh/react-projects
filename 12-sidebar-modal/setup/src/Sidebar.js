import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { useGlobalContext } from './context'

import logo from './logo.svg'
import { FaTimes } from 'react-icons/fa'
import { social, links } from './data'


const Sidebar = () => {

  // Using custom hook to call context values
  const { showSidebar, toggleSidebar } = useGlobalContext()

  const sidebarRef = useRef(null)

  useEffect(() => {
    if(showSidebar) {
      sidebarRef.current.style.transform = 'translate(0)'
    } else {
      sidebarRef.current.style.transform = 'translate(-100%)'
    }

    return () => {
      // cleanup
    }
  }, [showSidebar])

  // Some CSS to make it functional
  return (
    <div 
    style={{
      position: 'fixed',
      top: '0',
      left: '0',
      height: '100vh',
      backgroundColor: 'white'
    }} 
    ref={sidebarRef}>
      <img src={logo} alt='logo' />
      <button onClick={toggleSidebar}><FaTimes /></button>
      <ul>
        {
          links.map((link) => {
            const { id, url, text, icon } = link;
            return (
              <li key={id}>
                <Link to={url}>{icon} {text}</Link>
              </li>
            )
          })
        }
      </ul>
      <ul style={{
        position: 'fixed',
        width: '100px',
        bottom: '2rem',
        display: 'flex',
        justifyContent: 'space-between'
      }}>
        {
          social.map((socialLink) => {
            const { id, url, icon } = socialLink;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Sidebar
