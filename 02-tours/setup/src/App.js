import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(url)
    .then((response) => {
      if(response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        setIsLoading(false);
        throw new Error(response.statusText);
      }
    })
    .then((data) => {
      setTours(data);
      setIsLoading(false);
    })
    .catch((error) => console.log(error));

    return () => {
      // cleanup
    }
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  return (
    <>
      { isLoading ? <Loading /> : <Tours data={tours} removeTour={removeTour} /> }
    </>
  );
}

export default App
