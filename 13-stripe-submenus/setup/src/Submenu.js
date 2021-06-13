import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {

  const { submenu } = useGlobalContext()

  const { isOpen, sublink:{ page, links }, coordinates } = submenu
  
  const container = useRef(null)
  const [columns, setColumns] = useState('col-2')

  useEffect(() => {
    const submenuContainer = container.current
    const { center, bottom } = coordinates
    submenuContainer.style.left = `${center}px`
    submenuContainer.style.top = `${bottom}px`
    console.log(links)
    setColumns(`col-${links.length}`)
  }, [page, coordinates, links])

  return (
    <aside
      className={`${isOpen ? 'submenu show' : 'submenu'}`}
      ref={container}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
          {
            links.map((link, index) => {
              const { label, icon, url } = link
              return (
                <a key={index} href={url}>{icon} {label}</a>
              )
            })
          }
        </div>
      </section>
    </aside>
  )
}

export default Submenu
