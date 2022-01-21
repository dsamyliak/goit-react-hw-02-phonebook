import React from "react";
import "./Filter.css";
import { nanoid } from "nanoid";

class Filter extends React.Component {
  filterId = nanoid();

  state = {};

  render() {
    return (
      <>
        <span>Find contact by name</span>
        <input className="inputFilter" />
      </>
    );
  }
}

export default Filter;
