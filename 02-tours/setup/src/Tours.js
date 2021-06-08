import React from 'react';
import Tour from './Tour';
const Tours = ({ data, removeTour }) => {
  return (
    <>
      {
        data.map((tour) => {
          return (
            <Tour key={tour.id} data={tour} removeTour={removeTour} />
          )
        })
      }
    </>
  )
};

export default Tours;
