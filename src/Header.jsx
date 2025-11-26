import React from "react";
import { useState } from "react";

const Header = (props) => {
  const [name, setName] = useState("Shouqat");

  return (
    <div>
      <h1>
        Hello, {name} from {props.count}
      </h1>
      <button onClick={() => setName("Nawaz")}>Hit Me</button>
    </div>
  );
};

export default Header;
