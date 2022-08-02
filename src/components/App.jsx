import React, { Component } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { nanoid } from 'nanoid'
import styles from './styles.module.css';

class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value })
  };

  formSubmitHandler = newContact => {
    const contactItem = {
      id: nanoid(),
      name: newContact.name,
      number: newContact.number,
    };

    if (this.state.contacts.find(contact =>
      contact.name.toLowerCase().includes(contactItem.name.toLowerCase()))) {
        alert("This contact already exists!")
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contactItem]
      }));
    };
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }))
  };

  render() {
    const normalizedFilter = this.state.filter.toLowerCase();
    const foundContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter));

    return (
      <div className={styles.container}>
        <h1 className={styles.header}>Phonebook</h1>
        <ContactForm onSubmitForm={this.formSubmitHandler} />
        <h2 className={styles.header}>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter}/>
        <ContactList foundContacts={foundContacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  };
};

export default App;