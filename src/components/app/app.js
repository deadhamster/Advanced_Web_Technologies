import React from "react";
import { Component } from "react";

import AppHeader from "../app_header";
import SearchPanel from "../search_panel";
import ToDoList from "../todo_list";
import ItemStatusFilter from "../item_status_filter";

import "./App.css";

export default class App extends Component {
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Make Awesome App", important: true, id: 2 },
      { label: "Have a lunch", important: false, id: 3 },
    ],
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((element) => element.id === id);

      todoData.splice(id, 1);
      const before = todoData.slice(0, idx);
      const after = todoData.slice(idx + 1);
      const newArray = [...before, ...after];

      return {
        todoData: newArray,
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <ToDoList todos={this.state.todoData} onDeleted={this.deleteItem} />
      </div>
    );
  }
}

// const App = () => {
//   const todoData = [
//     { label: "Drink Coffee", important: false, id: 1 },
//     { label: "Make Awesome App", important: true, id: 2 },
//     { label: "Have a lunch", important: false, id: 3 },
//   ];
//   return (
//     <div className="todo-app">
//       <AppHeader toDo={1} done={3} />
//       <div className="top-panel d-flex">
//         <SearchPanel />
//         <ItemStatusFilter />
//       </div>
//       <ToDoList todos={todoData} onDeleted={(id) => console.log("del", id)} />
//     </div>
//   );
// };
// export default App;
