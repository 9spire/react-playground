import React from "react";
import { data } from "../mockData/list";

const List = () => {
  return (
    <ul>
      {data.map((item) => {
        return (
          <li key={item.id}>
            <h4>This is {item.name}</h4>
            <p>{item.text}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
