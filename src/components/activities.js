import React from "react";
import List from "./list";

let number = 3;

const Activities = () => {
  return (
    <>
      <h3>Don't be Bored...</h3>
      <ul>
        {[...Array(number)].map(() => (
          <List key={Math.random()} />
        ))}
      </ul>
    </>
  );
};

export default Activities;
