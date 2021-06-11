import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';

import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'

const Navbar = () => {

  const [showLinks, setShowLinks] = useState(false);

  const linksRef = useRef(null);
  const linksContainerRef = useRef(null)

  useEffect(() => {

    // Using useRef to edit element props such as style.
    linksContainerRef.current.style.overflow = 'hidden';
    linksContainerRef.current.style.transition = '0.3s';

    // Get position, height, width function with useRef.
    const linksHeight = linksRef.current.getBoundingClientRect().height;

    // Toggle show/hide hamburger button.
    // Dynamic navbar height with useRef.
    // Scans ul link height and toggle its container from 0 to the scanned height.
    // The overflow hidden on line 16 enables it to hide/show.
    if(showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = '0px';
    }

    return () => {
      // cleanup
    }
  }, [showLinks])

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={() => setShowLinks(!showLinks)}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {
              links.map((link) => {
                const { id, url, text } = link;
                return (
                  <li key={id}>
                    <Link to={url}>{text}</Link>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
