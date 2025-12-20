import React from "react";

const Student = (props) => {
  return (
    <div>
      <h1>Mera Naam {props.name}</h1>
      <p>Hum dono {props.relation}</p>
      <h2>{props.isloggedin ? "yes" : "No"} </h2>
    </div>
  );
};

export default Student;
