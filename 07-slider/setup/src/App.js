import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';
function App() {

  // Saves the current Active Review Array Index
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setActiveReviewIndex((prevState) => {
        return checkNumber(prevState + 1);
      })
    }, 5000);
    return () => {
      clearTimeout(timeout);
    }
  }, [activeReviewIndex])

  // On Click button function to change activeReviewIndex depending on the action.
  const changeActiveReview = (action) => {
    if(action === "BEFORE") {
      const newReviewId = checkNumber(activeReviewIndex - 1);
      setActiveReviewIndex(newReviewId);
    } else if(action === "AFTER"){
      const newReviewId = checkNumber(activeReviewIndex + 1);
      setActiveReviewIndex(newReviewId);
    }
  }

  // checkNumber checks whether the new changed id is within the array.
  // Once it reaches the end of the array, we will return the start of the array.
  // Once it reaches the start of the array, we will return the end of the array.
  // Otherwise, return original number.
  const checkNumber = (number) => {
    if(number >= data.length) {
      return 0;
    } else if(number < 0) {
      return data.length - 1;
    } else {
      return number;
    }
  }
  
  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
      {
        data.map((review, index) => {
          const { id, image, name, quote, title } = review;

          // Assigns the className to each individual review to meet the animation logic
          // The activeReviewIndex is set to activeSlide, that is at the center.
          // lastSlide class is set to the slide before the activeSlide.
          // When the activeReviewIndex is the start of the array, we can use checkNumber function
          // to return the end of the array and set it as lastSlide.
          // The rest of the reviews are set to nextSlide.
          let selectedClass = '';
          if(index === activeReviewIndex) {
            selectedClass = 'activeSlide'
          } else {
            if(index === checkNumber(activeReviewIndex - 1)) {
              selectedClass = 'lastSlide'
            } else {
              selectedClass = 'nextSlide'
            }
          }

          return (
            <article key={id} className={selectedClass}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          )
        })
      }
      <button className="prev" onClick={() => changeActiveReview("BEFORE")}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => changeActiveReview("AFTER")}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  )
}

export default App;
