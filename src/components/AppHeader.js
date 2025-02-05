import React from "react";
import "./app_header/AppHeader.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className={"app-header d-flex"}>
      <h1>My ToDo List</h1>
      <h2>
        {toDo} more to do, {done}
      </h2>
    </div>
  );
};

export default AppHeader;
