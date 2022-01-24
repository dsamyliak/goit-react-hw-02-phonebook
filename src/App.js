import "./App.css";
import React from "react";
// import { nanoid } from "nanoid";
// import Section from "./components/Section";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import ContactItem from "./components/ContactItem";
import Filter from "./components/Filter";

class App extends React.Component {
  

  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  formSubmitHandler = (newContact) => {
    console.log(newContact);

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = delContactId => {
    console.log("delete button work");

    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => (contact.id !== delContactId)),
    }));
  };

  render() {

    const { contacts } = this.state;
    console.log(this.state.contacts);

    return (

      <div className="App">
        <h1 className="headerOptions">Phonebook</h1>
        <ContactForm
          className="ContactForm"
          onSubmit={this.formSubmitHandler}
        ></ContactForm>

        <h2 className="headerOptions">Contacts</h2>
        <Filter></Filter>
        <ContactList className="contactList" contacts={contacts} onDeleteContact={this.deleteContact}>
          <ContactItem contacts={contacts} onDeleteContact={this.deleteContact}></ContactItem>
        </ContactList>
      </div>
    );
  };
};

export default App;
