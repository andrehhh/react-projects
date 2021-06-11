import React, { useState, useRef, useEffect } from 'react'
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
    <>
      <img src={logo} />
      <button onClick={() => setShowLinks(!showLinks)}>show links</button>

      <div ref={linksContainerRef}>
        <ul ref={linksRef}>
          {
            links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  )
}

export default Navbar
