import React from "react";

import { useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  const Name = () => {
    setCount(count + 1);
  };
  // // The hello print continously
  useEffect(() => {
    alert("hello");
  });

  // This will print only once
  useEffect(() => {
    alert("hello");
  }, []);

  // This will print when we click on the button
  useEffect(() => {
    alert("hello");
  }, [count]);

  return (
    <div>
      <h1>We are going to practice about the useeffect types in detialed </h1>
      <h1>The value of the count is {count}</h1>
      <button onClick={Name}>Click Me </button>
    </div>
  );
};

export default App;
