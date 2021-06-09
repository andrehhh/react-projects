import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {

  // Color list
  const [colors, setColors] = useState(new Values('#45294d').all(10));

  const [color, setColor] = useState('#45294d'); // Color value on input text
  const [isError, setIsError] = useState(false);

  // On submit button, updates color text
  const generateColors = (e) => {
    e.preventDefault();
    try{
      setColors(new Values(color).all(10));
    } catch {
      setIsError(true);
    }
    
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
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={generateColors}>
          <input type="text"
            value={color} 
            onChange={(e) => colorOnChange(e.target.value)}
            className={`${isError ? 'error' : null}`} />
          <button className="btn" type="submit">Generate</button>
        </form>
        </section>
        <section className="colors">
        {
          colors.map((color, index) => {
            return (
              <SingleColor 
                key={index} 
                index={index} 
                color={`#${color.hex}`} 
                weight={color.weight} />
            )
          })
        }
      </section>
    </>
  )
}

export default App
