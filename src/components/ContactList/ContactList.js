import React, { Component } from "react";
import "./ContactList.css";
import { nanoid } from "nanoid";
import ContactItem from "../ContactItem/";

class ContactList extends Component {
  render() {
    console.log("props", this.props.contacts);
    const { contacts, onDeleteContact } = this.props;

    return (
      <ul>
        {contacts.map((contactItem) => (
          <li key={nanoid()} className="contactItem">
            <ContactItem contactItem={contactItem}></ContactItem>
            <button
              className="contactDeleteBtn"
              onClick={() => onDeleteContact(contactItem.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
