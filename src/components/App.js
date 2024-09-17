import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [item, setItem] = useState("");
  const [submitItems, manageSubmitItems] = useState([]);

  function handleChange(event) {
    setItem(event.target.value);
  }

  function addItem() {
    manageSubmitItems((prevItem) => {
      return [...prevItem, item];
    });
    setItem("");
  }

  function deleteItem(id) {
    manageSubmitItems((prevItem) => {
      return prevItem.filter((item, index) => {
        return index != id;
      });
    })
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={item} type="text" />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {submitItems.map((listItems, index) => (
            <ToDoItem 
              key={index} 
              id={index} 
              text={listItems} 
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
