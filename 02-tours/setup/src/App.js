import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Function that fetches all tours from the url
  const fetchTours = () => {
    setIsLoading(true); // Before it starts fetching, set isLoading true.

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
  }

  useEffect(() => {
    fetchTours();

    return () => {
      // cleanup
    }
  }, [])

  // removeTour takes in ID and filters it out from the current tours state
  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  // If the fetch has finished and tour length is 0, return No Tours Left.
  if(isLoading === false && tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>No Tours Left</h2>
          <button className="btn" onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    )
  }

  return (
    <>
      { isLoading ? <Loading /> : <main><Tours data={tours} removeTour={removeTour} /></main> }
    </>
  );
}

export default App
