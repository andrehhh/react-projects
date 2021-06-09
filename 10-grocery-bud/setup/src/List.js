import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
const List = ({ items, editItem, removeItem }) => {
  return (
    <>
      {
        items.map((item) => {
          const { id, name } = item;
          return (
            <div key={id}>
              <p>{name}</p>
              <button onClick={() => editItem(id)}>Edit</button>
              <button onClick={() => removeItem(id)}>Remove</button>
            </div>
          )
        })
      }
    </>
  )
}

export default List
