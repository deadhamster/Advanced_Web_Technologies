import React from "react";
import ReactDOM from "react-dom";

const ToDoList = () => {
  return (
    <ul>
      <li>Install React</li>
      <li>Study</li>
      <li>Use</li>
      <li>Build App</li>
      <li>Do HW</li>
    </ul>
  );
};

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

ReactDOM.render(<App />, document.getElementById("root"));
