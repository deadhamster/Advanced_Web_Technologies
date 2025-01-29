import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ todos }) => {
  return (
    <ul>
      <li>
        <ToDoListItem label={todos[0].label} important={todos[0].important} />
      </li>
      <li>
        <ToDoListItem label={todos[1].label} important={todos[1].important} />
      </li>
      <li>
        <ToDoListItem label={todos[2].label} important={todos[2].important} />
      </li>
      <li>
        <ToDoListItem label={todos[3].label} important={todos[3].important} />
      </li>
    </ul>
  );
};

export default ToDoList;
