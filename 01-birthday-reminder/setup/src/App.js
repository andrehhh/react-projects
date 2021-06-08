import React, { useState, useEffect } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people, setPeople] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true)

  // useEffect to load data, on intial page load
  useEffect(() => {
    if(data) {
      setPeople(data);
      setIsEmpty(false);
    }
    return () => {
      // cleanup
    }
  }, [])

  // clearPeople button empties people array and sets isEmpty true
  const clearPeople = () => {
    setPeople([]);
    setIsEmpty(true);
  }

  // Conditional Rendering with Ternary Operator
  return (
    <main>
      <section className="container">
        <h3>Birthdays Today</h3>
        <List people={people} />
        { isEmpty ? <p>List is Empty</p> : <button onClick={clearPeople}>Clear List</button> }
      </section>
    </main>
  );
}

export default App;
