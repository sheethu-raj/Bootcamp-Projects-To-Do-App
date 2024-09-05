import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [submitItems, manageSubmitItems] = useState([]);

  function handleChange(event) {
    setItem(event.target.value);
  }

  function handleClick() {
    manageSubmitItems((prevItem) => {
      return [...prevItem, item];
    });
    setItem("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} value={item} type="text" />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {submitItems.map((listItems) => (
            <li>{listItems}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
