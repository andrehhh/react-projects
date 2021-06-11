import React from 'react'

import { useGlobalContext } from './context'

import { FaTimes } from 'react-icons/fa'

const Modal = () => {

  // Using custom hook to call context values
  const { modal, toggleModal } = useGlobalContext();

  // Some CSS to make it functional
  return (
    <div 
      style={{
        top: '0',
        left: '0',
        position: 'fixed', 
        height: '100vh',
        width: '100%',
        display: 'grid',
        placeItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)'}}>
      <div
        style={{
          backgroundColor: 'white'}}>
        <button onClick={toggleModal}><FaTimes /></button>
        <h2>{modal.msg}</h2>
      </div>
    </div>
  )
}

export default Modal
