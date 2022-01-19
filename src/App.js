import "./App.css";
import React from 'react';
import Section from "./components/Section/Section";


class App extends React.Component {
  
  state = {
    contacts: [],
    name: '',
  };



  render() {

  return (
    <div className="App">
      <><h1>Phonebook Task 2 of HW-2</h1></>
      <Section title="Phonebook" numberH="1">
        <form>
          <input
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
        </form>
      </Section>
      <Section title="Contacts" numberH="2"></Section>
    </div>
    )
  };
};

export default App;
