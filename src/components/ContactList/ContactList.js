import React, {Component} from "react";
import "./ContactList.css";
import { nanoid } from "nanoid";
import ContactItem from "../ContactItem/";

class ContactList extends Component {
  
  listId = nanoid();
  listItemId = nanoid();
  contactId = nanoid();
  btnDeleteId = nanoid();

  render() {
    console.log("props", this.props);
    const { contacts, onDeleteContact } = this.props;
    
    return (<ul key={this.listId}>
      {contacts.map((contactItem) => (
        
        <li
          key={this.listItemId}
          className="contactItem"><ContactItem
            contactId={nanoid()}
            contacts={contacts}
            contactItem={contactItem}
            onDeleteContact={this.deleteContact}
          ></ContactItem><button
            className="contactDeleteBtn"
            key={this.btnDeleteId} onClick={() => onDeleteContact(contactItem.id)}>
            Delete
          </button></li>
      ))}
    </ul>);
  };
};

export default ContactList;
