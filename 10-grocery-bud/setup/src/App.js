import React, { useState, useEffect, useRef } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [value, setValue] = useState(''); // Value of input text
  const [list, setList] = useState([]); // List of items
  const [showAlert, setshowAlert] = useState(false); // Show alert boolean
  const [alertMessage, setAlertMessage] = useState('') // Alert message

  // inputMode - 'Add' means on adding mode, while numbers means on Edit Mode.
  // The numbers refers to the current item ID being edited
  const [inputMode, setInputMode] = useState('Add');

  // To focus the input text upon pressing edit button
  const inputRef = useRef(null);

  // Everytime list changes, alert is rendered for 3 seconds.
  useEffect(() => {
    const timeout = setTimeout(() => {
      setshowAlert(false);
    }, 3000);
    return () => {
      clearTimeout(timeout);
    }
  }, [list])

  // On submit button, for both 'Add' and 'Edit'
  const submitHandler = (e) => {
    e.preventDefault();

    if(inputMode === "Add") { // Add
      const newItem = {id: new Date().getTime().toString(), name:value}
      setList([...list, newItem]);
      setAlertMessage('Item has been added to the list!');

    } else { // Edit
      const newList = list.map((item) => {
        if(parseInt(item.id) === parseInt(inputMode)) {
          return {...item, name: value}
        } else {
          return item;
        }
      });
      setList(newList);
      setInputMode('Add');
      setAlertMessage('Item name has been updated!');
    }
    setshowAlert(true);
    setValue('');
  }

  // Edit item finds the selected item ID, set its name as value, set its ID as inputMode
  const editItem = (id) => {
    const item = list.find((item) => item.id === id);
    if(item) {
      setValue(item.name);
      inputRef.current.focus();
      setInputMode(item.id);
    }
  }

  // Remove item filters out the selected item ID
  const removeItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
    setshowAlert(true);
    setAlertMessage('Item has been removed from the list!');
  }

  return (
    <>
      { showAlert && <Alert message={alertMessage}/> }
      <h2>Grocery Bud</h2>
      <form onSubmit={submitHandler}>
        <input 
          type="text" 
          placeholder="eg. eggs" 
          value={value} 
          onChange={(e) => setValue(e.target.value)} 
          ref={inputRef} />
        <button type="submit">{inputMode === "Add" ? 'Add' : 'Edit'}</button>
      </form>
      <List items={list} editItem={editItem} removeItem={removeItem}/>
    </>
  )
}

export default App
