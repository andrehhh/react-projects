import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  // Color list
  const [colors, setColors] = useState(new Values('#45294d').all(10));

  // Color value on input text
  const [color, setColor] = useState('#45294d');

  // On submit button, updates color text
  const generateColors = (e) => {
    e.preventDefault();
    setColors(new Values(color).all(10));
  }

  // On input change, set to the new color value. 
  // If value is empty, set as '#'. This will act as a prefix for the hex value.
  const colorOnChange = (value) => {
    if(value === "") {
      setColor("#");
    } else {
      setColor(value);
    }
  }

  return (
    <>
      <form onSubmit={generateColors}>
        <label htmlFor="inputColour"><h2>Color Generator</h2></label>
        <input type="text" value={color} onChange={(e) => colorOnChange(e.target.value)}/>
        <button type="submit">Generate</button>
      </form>
      {
        colors.map((color, index) => {
          return (
            <SingleColor key={index} color={`#${color.hex}`} weight={color.weight} />
          )
        })
      }
    </>
  )
}

export default App
