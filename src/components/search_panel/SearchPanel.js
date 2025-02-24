import React from "react";
import { Component } from "react";
import "./SearchPanel.css";

// const SearchPanel = () => {
//   return (
//     <input
//       type="text"
//       className={"form-control search-input"}
//       placeholder="Type to search"
//     />
//   );
// };

export default class SearchPanel extends Component {
  state = {
    term: "",
  };

  onSearchChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    return (
      <input
        type="text"
        className={"form-control search-input"}
        placeholder={"type to search"}
        value={this.state.term}
        onChange={this.onSearchChange}
      />
    );
  }
}
