import React from 'react'

import { useGlobalContext } from './context'

import { FaTimes } from 'react-icons/fa'

const Modal = () => {

  // Using custom hook to call context values
  const { modal, toggleModal } = useGlobalContext()
  const { status, msg } = modal

  // Some CSS to make it functional
  return (
    <div
      className={`${
        status ? 'modal-overlay show-modal' : 'modal-overlay'
      }`}
    >
      <div className='modal-container'>
        <h3>{msg}</h3>
        <button className='close-modal-btn' onClick={toggleModal}><FaTimes /></button>
      </div>
    </div>
  )
}

export default Modal
