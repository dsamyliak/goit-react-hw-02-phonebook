import React from "react";
import "./Section.css";
import propTypes from "prop-types";

const Section = ({ title, children }) => (
  <section className="Section">
    {/* <h1>{title}</h1> */}
    {children}
  </section>
);

Section.propTypes = {
  title: propTypes.string,
  children: propTypes.object,
};

export default Section;
