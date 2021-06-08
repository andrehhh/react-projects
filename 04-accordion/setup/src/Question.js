import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = ({ question }) => {
  const { title, info } = question;

  // showInfo controls whether the info is shown or not.
  const [showInfo, setshowInfo] = useState(false); 

  // On Button click will toggle the showInfo to true/false.
  // This causes the conditional rendering to function and renders the info if showInfo is true.
  // The text inside the button also changes using ternary operator.
  return (
    <>
      <h3>{title}</h3>
      <button
        style={{padding: '0.25rem 0.5rem'}}
        onClick={() => setshowInfo(!showInfo)}> 
          { showInfo ? '-' : '+' }
      </button>
      {showInfo && info}
    </>
  )
};

export default Question;
