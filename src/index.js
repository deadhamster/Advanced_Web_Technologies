import React from "react";
import { createRoot } from "react-dom/client";
import AppHeader from "./components/AppHeader";
import SearchPanel from "./components/SearchPanel";
import ToDoList from "./components/ToDoList";

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
