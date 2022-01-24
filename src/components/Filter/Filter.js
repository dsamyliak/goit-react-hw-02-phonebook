import React from "react";
import "./Filter.css";
import { nanoid } from "nanoid";

class Filter extends React.Component {
  state = { filter: "" };

  handleFilterChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
    console.log(this.props);
  };

  render() {
    // const { contactName, onFilter }= this.props;

    return (
      <>
        <span>Find contact by name</span>
        <input
          name="filter"
          value={this.state.filter}
          className="inputFilter"
          onChange={this.handleFilterChange}
        />
      </>
    );
  }
}

export default Filter;
