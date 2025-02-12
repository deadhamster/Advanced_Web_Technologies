import React from "react";
import { Component } from "react";

import AppHeader from "../app_header";
import SearchPanel from "../search_panel";
import ToDoList from "../todo_list";
import ItemStatusFilter from "../item_status_filter";
import ItemAddForm from "../item_add_form/ItemAddForm";

import "./App.css";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Make Awesome App", important: true, id: 2 },
      { label: "Have a lunch", important: false, id: 3 },
    ],
  };

  addItem = (text) => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++,
    };

    this.setState(({ todoData }) => {
      const newArr = [...todoData, newItem];

      return {
        todoData: newArr,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((element) => element.id === id);

      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

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
        <ItemAddForm onItemAdded={this.addItem} />
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
