import React from "react";
import "./Phonebook.css";
import { nanoid } from "nanoid";

class Phonebook extends React.Component {
  nameId = nanoid();
  telId = nanoid();

  state = {
    name: "",
    number: "",
  };

  handleInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
    // e.currentTarget.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="Phonebook__Form">
        <label htmlFor={this.nameId}>
          Name
          <input
            className="Phonebook__Input"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={this.nameId}
            value={this.state.name}
            onChange={this.handleInputChange}
          />
        </label>
        <label htmlFor={this.telId}>
          Tel
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            id={this.telId}
            onChange={this.handleInputChange}
          ></input>
        </label>
        <button type="submit" className="Add__Contact">
          Add Contact
        </button>
      </form>
    );
  }
}

export default Phonebook;
