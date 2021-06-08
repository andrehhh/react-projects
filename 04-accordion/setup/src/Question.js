import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ question }) => {
  const { title, info } = question;

  // showInfo controls whether the info is shown or not.
  const [showInfo, setShowInfo] = useState(false); 

  // On Button click will toggle the showInfo to true/false.
  // This causes the conditional rendering to function and renders the info if showInfo is true.
  // The text inside the button also changes using ternary operator.
  return (
    <article className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  )
};

export default Question;
