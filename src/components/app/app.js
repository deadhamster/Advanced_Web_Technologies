import React from "react";

import AppHeader from "../app_header";
import SearchPanel from "../search_panel";
import ToDoList from "../todo_list";
import ItemStatusFilter from "../item_status_filter";

import "./App.css";
const App = () => {
  const todoData = [
    { label: "Drink Coffee", important: false, id: 1 },
    { label: "Make Awesome App", important: true, id: 2 },
    { label: "Have a lunch", important: false, id: 3 },
  ];
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ToDoList todos={todoData} />
    </div>
  );
};
export default App;
