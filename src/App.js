import "./App.css";
import React from "react";
// import ReactDOM from "react-dom";
import Section from "./components/Section/Section";
import Phonebook from "./components/Phonebook/Phonebook";

class App extends React.Component {
  state = {
    contacts: [],
    name: "",
    tel: "",
  };

  formSubmitHandler = (newContact) => {
    console.log(newContact);

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  render() {
    console.log(this.state);

    return (
      <div className="App">
        <>
          <h1>Phonebook Task 2 of HW-2</h1>
        </>

        <Section title="Phonebook">
          <Phonebook
            className="Phonebook__Form"
            contacts={this.state.contacts}
            name={this.state.name}
            tel={this.state.tel}
            onSubmit={this.formSubmitHandler}
          ></Phonebook>
        </Section>

        <Section title="Contacts"></Section>
      </div>
    );
  }
}

export default App;
