import React from "react";
import "./ContactItem.css";


const ContactItem = ({ name, number }) => (
  <p className="contactText">
    {name}: {number}
  </p>
);

export default ContactItem;
