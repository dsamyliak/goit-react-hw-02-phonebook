import React from "react";
import "./Filter.css";

const Filter = ({ value, onChange }) => (
  <>
    <span>Find contact by name</span>
    <input
      className="inputFilter"
      type="text"
      value={value}
      onChange={onChange}
    />
  </>
);

export default Filter;
