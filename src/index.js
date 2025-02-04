import React from "react";
import { createRoot } from "react-dom/client";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import ToDoList from "./components/ToDoList";
import ItemStatusFilter from "./components/ItemStatusFilter";

import "./index.css";

const App = () => {
  const toDoData = [
    { label: "Drink Tea", important: false, id: 1 },
    { label: "Implement React Application", important: true, id: 2 },
    { label: "Make notes from your study", important: false, id: 3 },
    { label: "Do not drink alchohol", important: false, id: 4 },
  ];

  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <ToDoList todos={toDoData} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
