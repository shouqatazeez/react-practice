import React from "react";
import Header from "./Header";
const App = () => {
  let country = "India";
  return (
    <div>
      <Header count={country} />
    </div>
  );
};

export default App;
