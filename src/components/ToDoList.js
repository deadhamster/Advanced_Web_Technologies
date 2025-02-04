import React from "react";
import ToDoListItem from "./ToDoListItem";

const ToDoList = ({ todos }) => {
  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <li key={item.id}>
        <ToDoListItem {...itemProps} />
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default ToDoList;
