import React, { useState, useRef, useEffect } from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {

  const { sublinks, submenu } = useGlobalContext()

  return (
    <>
      {
        sublinks.map((sublink, index) => {
          if(submenu.page === sublink.page) {
            return (
              <div key={index}>
                <h4>{sublink.page}</h4>
                <ul>
                  {
                    sublink.links.map((link, index) => {
                      const { label, icon, url } = link
                      return (
                        <a key={index} href={url}>{icon} {label}</a>
                      )
                    })
                  }
                </ul>
              </div>
            )
          }
        })
      }
    </>
  )
}

export default Submenu
