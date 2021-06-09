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

  const removeParagraphs = (e) => {
    e.preventDefault();
    setParagraphs([]);
    setIsEmpty(true);
  }

  // Paragraphs Mapping component 
  const ParagraphsMapping = () => {
    if(isEmpty) return (
      <article className="lorem-text">
        <h5>No Paragraphs Generated</h5>
      </article>
    )

    else return (
      <article className="lorem-text">
        {
          paragraphs.map((paragraph, index) => {
            return (
              <p key={index}>{paragraph}</p>
            )
          })
        }
      </article>
    )
  }
  
  return (
      <section className="section-center">
        <h3>Tired of Boring Lorem Ipsum?</h3>
        <form className="lorem-form">
          <label htmlFor="input">Paragraphs: </label>
          <input 
            id="input" 
            type="number" 
            min="1" 
            value={inputNumber}
            onChange={(e) => {setInputNumber(e.target.value)}} />
          <button className="btn" onClick={generateParagraphs}>Generate</button>
          <button 
            className="btn btn-remove" 
            onClick={removeParagraphs}
            style={{marginLeft: '0.5rem'}}>Reset</button>
        </form>
        <ParagraphsMapping />
      </section>
    )
}

export default App;
