import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

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

const AppHeader = () => {
  return <h1>My ToDo List</h1>;
};

const SearchPanel = () => {
  return <input placeholder="search" />;
};

const App = () => {
  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
