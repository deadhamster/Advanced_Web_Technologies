import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = () => {
  return (
    <ul>
      <li>
        <ToDoListItem label="Drink Tea" />
      </li>
      <li>
        <ToDoListItem label="Implement React Application" />
      </li>
      <li>
        <ToDoListItem label="Make notes from your study" />
      </li>
      <li>
        <ToDoListItem label="Do not drink alchohol" important />
      </li>
    </ul>
  );
};

export default ToDoList;
