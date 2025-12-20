import React from "react";
import Student from "./Student";

const App = () => {
  return (
    <div>
      <Student name="shouqat" relation="Bhai bhai Haii" isloggedin={false} />
      <Student name="Nawaz" relation="Bhai bhai Haii" />
    </div>
  );
};

export default App;
