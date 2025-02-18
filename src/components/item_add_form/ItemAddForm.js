import React, { Component } from "react";
import "./ItemAddForm.css";
export default class ItemAddForm extends Component {
  state = {
    label: "",
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onItemAdded(this.state.label);
    this.setState({
      label: "",
    });
  };

  render() {
    return (
      // <div className={"item-add-form"}>
      //   <button
      //     className={"btn btn-outline-secondary"}
      //     onClick={() => this.props.onItemAdded("New Item Added")}
      //   >
      //     Add Item
      //   </button>
      // </div>

      <form className={"item-add-form d-flex"} onSubmit={this.onSubmit}>
        <input
          type={"text"}
          className={"form-control"}
          onChange={this.onLabelChange}
          placeholder={"Type for To Do"}
          value={this.state.label}
        />
        <button className={"btn btn-outline-secondary"}>Add Item</button>
      </form>
    );
  }
}
