import React, { useState, useEffect } from 'react';

const Tour = ({ data, removeTour }) => {

  const [info, setInfo] = useState('');
  const [showMore, setShowMore] = useState(false);

  const { id, name, price, image } = data; // Array declaration

  // Shortened info. It cuts the string after 200 characters
  const shortInfo = () => {
    return data.info.slice(0, 200) + ' ... ';
  }

  // infoToggle function checks the value of showMore to see the current state.
  // If showMore is false, this means that the user is seeing the shortened info.
  // Upon calling the function, it will set showMore to true, and set the original info.
  
  // If showMore is true, this means that the user is seeing the original info.
  // Upon calling the function, it will set showMore to false and set the shortened info.
  const infoToggle = () => {
    if(showMore === false) {
      setShowMore(true);
      setInfo(data.info);
    } else {
      setShowMore(false);
      setInfo(shortInfo);
    }
  }

  // Triggers upon initial page load. It sets info to shortened version.
  useEffect(() => {
    setInfo(shortInfo);

    return () => {
      // cleanup
    }
  }, [])

  // Conditional rendering with ternary operator.
  // Since the function used in the button is a toggle-typed button,
  // only the text inside the button is changed.
  return (
    <article className="single-tour">
      <img src={image} alt={name}/>
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{info}<button onClick={infoToggle}>{ showMore ? "Read Less" : "Read More" }</button></p>
        <button className="delete-btn" onClick={() => removeTour(id)}>Not Interested</button>
      </footer>
    </article>
  )
};

export default Tour;
