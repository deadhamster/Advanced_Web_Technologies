import React from "react";
import "./ToDoListItem.css";

const ToDoListItem = ({ label, important = false }) => {
  const style = {
    color: important ? "tomato" : "black",
  };

  return (
    <span style={style} className={"todo-list-item"}>
      {label}
    </span>
  );
};

export default ToDoListItem;
