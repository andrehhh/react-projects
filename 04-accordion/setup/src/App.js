import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';

function App() {
  return (
    <div style={{color: 'white'}}>
      {
        data.map((question) => {
          return (
            <SingleQuestion key={question.id} question={question} />
          )
        })
      }
    </div>
  )
}

export default App;
