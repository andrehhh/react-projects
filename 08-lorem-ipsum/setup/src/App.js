import React, { useState } from 'react';
import data from './data';
function App() {

  const [isEmpty, setIsEmpty] = useState(true)
  const [paragraphs, setParagraphs] = useState([]); // Paragraphs Array
  const [inputNumber, setInputNumber] = useState(1); // Input Value
  
  // On Submit Form, generates random paragraphs.
  // The number of paragraphs depends on the input value.
  const generateParagraphs = (e) => {
    e.preventDefault();
    setIsEmpty(false);
    let newParagraphs = [];
    for(let i = 0; i < inputNumber; i++) {
      const selectedRandom = Math.floor(Math.random() * data.length);
      newParagraphs = [...newParagraphs, data[selectedRandom]];
    }
    setParagraphs(newParagraphs);
  }

  // Paragraphs Mapping component 
  const ParagraphsMapping = () => {
    if(isEmpty) return (
      <>
        <h5>No Paragraphs Generated</h5>
      </>
    )

    else return (
      <>
        {
          paragraphs.map((paragraph, index) => {
            return (
              <p key={index}>{paragraph}</p>
            )
          })
        }
      </>
    )
  }
  
  return (
      <>
        <h2>Tired of Boring Lorem Ipsum?</h2>
        <form onSubmit={generateParagraphs}>
          <label htmlFor="input">Paragraphs: </label>
          <input 
            id="input" 
            type="number" 
            min="1" 
            value={inputNumber}
            onChange={(e) => {setInputNumber(e.target.value)}} />
          <button type="submit">Generate</button>
        </form>
        <ParagraphsMapping />
      </>
    )
}

export default App;
