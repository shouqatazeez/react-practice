import React from "react";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const addvalue = () => {
    if (count < 20) {
      // setCount(count + 1);
      setCount((counter) => counter + 1);
      setCount((counter) => counter + 1);
    }
  };
  const removevalue = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <h1>Counter App value {count}</h1>

      <button onClick={addvalue}>Click me </button>
      <button onClick={removevalue}>Remove value</button>
      <h1>Hello guys </h1>
    </div>
  );
};

export default App;
