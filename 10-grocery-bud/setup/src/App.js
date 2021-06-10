import React, { useState, useEffect, useRef } from 'react'
import List from './List'
import Alert from './Alert'

function App() {

  const [value, setValue] = useState(''); // Value of input text
  const [list, setList] = useState([]); // List of items
  const [alert, setAlert] = useState({message: '', type:''}) // Alert message and type
  const [showAlert, setshowAlert] = useState(false); // Show alert boolean

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

  // Sets alert message and type function
  const alertMessage = (message, type) => {
    setAlert({message, type});
  }

  // On submit button, for both 'Add' and 'Edit'
  const submitHandler = (e) => {
    e.preventDefault();

    if(value) {
      if(inputMode === "Add") { // Add
        const newItem = {id: new Date().getTime().toString(), name:value}
        setList([...list, newItem]);
        alertMessage(`${value} has been added to the list!`, 'success');

      } else { // Edit
        const newList = list.map((item) => {
          if(parseInt(item.id) === parseInt(inputMode)) {
            return {...item, name: value}
          } else {
            return item;
          }
        });
        alertMessage('Item name has been updated!', 'success');
        setList(newList);
        setInputMode('Add');
      }
      setValue('');

    } else { // If value is empty upon submit form
      alertMessage('Please enter a name!', 'danger');
    }
    setshowAlert(true);
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
    alertMessage('Item has been removed from the list!', 'danger');
  }

  // Clear all items
  const clearList = () => {
    setList([]);
    alertMessage('List has been cleared!', 'danger');
  }

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={submitHandler}>
      { showAlert && <Alert {...alert} /> }

        <h3>grocery bud</h3>
        <div className="form-control">
          <input 
            type="text" 
            className="grocery"
            placeholder="eg. eggs" 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            ref={inputRef} />
          <button type="submit" className="submit-btn">{inputMode === "Add" ? 'Add' : 'Edit'}</button>
        </div>
      </form>
      <div className="grocery-container">
        <List items={list} editItem={editItem} removeItem={removeItem} />
        <button className="clear-btn" onClick={clearList}>Clear List</button>
      </div>
    </section>
  )
}

export default App
