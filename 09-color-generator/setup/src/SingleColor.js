import React, { useState } from 'react'

const SingleColor = React.memo(({ index, color, weight }) => {

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
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{backgroundColor: color}} 
      onClick={copyToClipboard}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{color}</p>
      <p className="alert">{ showAlert && 'Copied to Clipboard' }</p>
    </article>
  )
})

export default SingleColor
