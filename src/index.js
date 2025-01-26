import React from "react";
import { createRoot } from "react-dom/client";

const ToDoList = () => {
  const items = ["Install React", "Study", "Use", "Buils App", "Do HW"];
  return (
    <ul>
      <li>{items[0]}</li>
      <li>{items[1]}</li>
      <li>{items[2]}</li>
      <li>{items[3]}</li>
      <li>{items[4]}</li>
    </ul>
  );
};

const AppHeader = () => {
  return <h1>My ToDo List</h1>;
};

const SearchPanel = () => {
  const searchText = "Type here to search";
  const searchStyle = { fontSize: "20px" };

  return <input style={searchStyle} placeholder={searchText} disabled={true} />;
};

const App = () => {
  const value = <script>alert("")</script>;
  return (
    <div>
      {value}
      <AppHeader />
      <SearchPanel />
      <ToDoList />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
