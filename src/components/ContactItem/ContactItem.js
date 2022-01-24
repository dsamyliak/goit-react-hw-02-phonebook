import React from "react";
import "./ContactItem.css";

const ContactItem = ({ contactItem }) => (
  <p className="contactText">
    {contactItem.name}: {contactItem.number}
  </p>
);

export default ContactItem;
