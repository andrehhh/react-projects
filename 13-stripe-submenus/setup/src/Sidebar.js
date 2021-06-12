import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
import sublinks from './data'

const Sidebar = () => {

  const { toggleSidebar } = useGlobalContext()

  return (
    <>
      <button onClick={toggleSidebar}>Close Sidebar</button>
      {
        sublinks.map((sublink, index) => {
          const { page, links } = sublink
          return (
            <div key={index}>
              <h4>{page}</h4>
              <ul>
                {
                  links.map((link, index) => {
                    const { label, icon, url } = link
                    return (
                      <li key={index}>
                        <a href={url}>{icon} {label}</a>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          )
        })
      }
    </>
  )
}

export default Sidebar
