import React, { useState, useEffect } from 'react'

const SingleColor = React.memo(({ color, weight }) => {

  const [showAlert, setShowAlert] = useState(false);

  // Copy to clipboard function, and display alert which times out after 2 seconds.
  const copyToClipboard = () => {
    navigator.clipboard.writeText(color);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false)
    }, 2000);
  }

  return (
    <div style={{backgroundColor: color}} onClick={copyToClipboard}>
      <h1>Color</h1>
      <p>{weight}%</p>
      <p>{showAlert && 'Copied to Clipboard'}</p>
    </div>
  )
})

export default SingleColor
