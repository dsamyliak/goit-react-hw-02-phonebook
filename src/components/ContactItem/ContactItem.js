import React from "react";
import "./ContactItem.css";

const ContactItem = ({ contactItem, contactId }) => (
    <p
        className="contactText"
        key={contactId}>
        {contactItem.name}: {contactItem.number}
    </p>
);

export default ContactItem;