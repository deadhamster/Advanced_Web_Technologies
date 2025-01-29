import React from "react";
import { createRoot } from "react-dom/client";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import ToDoList from "./components/ToDoList";

const App = () => {
  const toDoData = [
    { label: "Drink Tea", important: false },
    { label: "Implement React Application", important: true },
    { label: "Make notes from your study", important: false },
    { label: "Do not drink alchohol", important: false },
  ];

  return (
    <div>
      <AppHeader />
      <SearchPanel />
      <ToDoList todos={toDoData} />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
