import React, { useState, useEffect } from 'react';
import data from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {

  const [people, setPeople] = useState({});
  const [currentReviewArr, setCurrentReviewArr] = useState(0); // Array index of current review

  useEffect(() => { // Sets the new people object if currentReviewArr changes
    setPeople(data[currentReviewArr]);
    return () => {
      // cleanup
    }
  }, [currentReviewArr])

  const { name, job, text, image } = people; // Array Destructure

  const randomNumber = (num) => { // Random Number function
    return Math.floor(Math.random() * num);
  }

  // All Review change functions
  const changeReview = (action) => {
    const max = data.length;

    if(action === "BEFORE") { // Review Before
      if(currentReviewArr === 0) {
        setCurrentReviewArr(max - 1);
      } else {
        setCurrentReviewArr(currentReviewArr - 1);
      }

    } else if(action === "AFTER") { // Review After
      if(currentReviewArr === max - 1) {
        setCurrentReviewArr(0);
      } else {
        setCurrentReviewArr(currentReviewArr + 1);
      }

    } else { // RANDOMIZER
      let randomReview = randomNumber(max);
      while(randomReview === currentReviewArr) {
        randomReview = randomNumber(max);
      }
      setCurrentReviewArr(randomReview);
    }
  }

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn' onClick={() => changeReview("BEFORE")}>
          <FaChevronLeft />
        </button>
        <button className='next-btn' onClick={() => changeReview("AFTER")}>
          <FaChevronRight />
        </button>
      </div>
      <button className='random-btn' onClick={() => changeReview("RANDOM")}>
        surprise me
      </button>
    </article>
  )
};

export default Review;
