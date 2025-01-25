import React from "react";
import ReactDOM from "react-dom";

const element = (
  <div>
    <h1>My ToDo List</h1>
    <input placeholder="search" />
    <ul>
      <li>Install React</li>
      <li>Study</li>
      <li>Use</li>
      <li>Build App</li>
      <li>Do HW</li>
    </ul>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
