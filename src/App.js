import "./App.css";
import "./components/Contacts/Contacts.css";
import React from "react";
import { nanoid } from "nanoid";
import Section from "./components/Section/Section";
import Phonebook from "./components/Phonebook/Phonebook";
import Contacts from "./components/Contacts/Contacts";
import Filter from "./components/Filter/Filter";

class App extends React.Component {
  listItemId = nanoid();
  contactId = nanoid();
  btnDeleteId = nanoid();

  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "",
    tel: "",
  };

  formSubmitHandler = (newContact) => {
    console.log(newContact);

    this.setState((prevState) => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    console.log(this.state);
    console.log([...this.state.contacts]);

    return (
      <div className="App">
        {/* <>
          <h1>Phonebook Task 2 of HW-2</h1>
        </> */}
        <h1 className="headerOptions">Phonebook</h1>
        <Section title="Phonebook">
          <Phonebook
            className="Phonebook__Form"
            onSubmit={this.formSubmitHandler}
          ></Phonebook>
        </Section>

        <h2 className="headerOptions">Contacts</h2>
        <Section title="Filter">
          <Filter></Filter>
        </Section>
        <Section title="Contacts">
          <ul>
            {[...this.state.contacts].map((contactItem) => (
              <li id={this.listItemId} className="contactItem">
                <span className="contactText" id={this.listItemId}>
                  {contactItem.name}: {contactItem.number}{" "}
                  <button className="contactDeleteBtn" id={this.listItemId}>
                    Delete
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    );
  }
}

export default App;
