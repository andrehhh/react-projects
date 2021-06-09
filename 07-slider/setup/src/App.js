import React, { useState, useEffect, useRef } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {

  // Saves the current Active Review ID
  const [activeReviewId, setActiveReviewId] = useState(data[0].id);

  // On Click button function to change activeReviewId depending on the action.
  const changeActiveReview = (action) => {
    if(action === "BEFORE") {
      const newReviewId = checkNumber(activeReviewId - 1);
      setActiveReviewId(newReviewId);
    } else if(action === "AFTER"){
      const newReviewId = checkNumber(activeReviewId + 1);
      setActiveReviewId(newReviewId);
    }
  }

  // checkNumber checks whether the new changed id is within the array.
  // Once it reaches the end of the array, we will return the start of the array.
  // Once it reaches the start of the array, we will return the end of the array.
  // Otherwise, return original number.
  const checkNumber = (number) => {
    if(number > data.length) {
      return data[0].id;
    } else if(number < 1) {
      return data.length;
    } else {
      return number;
    }
  }
  
  return (
    <div>
      {
        data.map((review) => {
          const { id, image, name, quote, title } = review;

          // Assigns the className to each individual review to meet the animation logic
          // The activeReviewId is set to activeSlide, that is at the center.
          // lastSlide class is set to the slide before the activeSlide.
          // When the activeReviewId is the start of the array, we can use checkNumber function
          // to return the end of the array and set it as lastSlide.
          // The rest of the reviews are set to nextSlide.
          let selectedClass = '';
          if(id === activeReviewId) {
            selectedClass = 'activeSlide'
          } else {
            if(id === checkNumber(activeReviewId - 1)) {
              selectedClass = 'lastSlide'
            } else {
              selectedClass = 'nextSlide'
            }
          }

          return (
            <article key={id} className={selectedClass}>
              <img src={image} alt={name} className="person-img" />
              <h3>{name}</h3>
              <h4>{title}</h4>
              <p>{quote}</p>
            </article>
          )
        })
      }
      <div style={{position: 'absolute', top: '300px'}}>
        <button onClick={() => changeActiveReview("BEFORE")}>Left</button>
        <button onClick={() => changeActiveReview("AFTER")}>Right</button>
      </div>
      
    </div>
  )
}

export default App;
