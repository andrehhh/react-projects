import React from 'react';

const List = ({ people }) => {
  return (
    <ul>
      {
        people.map((person) => {
          const { id, name, age, image } = person;

          return (
            <li key={id}>
              <img src={image} />
              <h3>{name}</h3>
              <h6>{age}</h6>
            </li>
          )
        })
      }
    </ul>
  );
};

export default List;
