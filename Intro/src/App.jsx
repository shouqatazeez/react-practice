import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const addvalue = () => {
    setCount(count + 1);
  };
  const removevalue = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter App value {count}</h1>
      <button onClick={addvalue}>Click me </button>
      <button onClick={removevalue}>Remove value</button>
    </div>
  );
};

export default App;
