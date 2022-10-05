import { Component } from 'react';

import { nanoid } from 'nanoid';

import Form from './Form';
import ContactList from './ContactsList';
import Filter from './Filter';

import { Box, MainTitle, SecondTitle } from './PhonebookStyled';

export default class App extends Component {

  state = {
    contacts: [],
    filter: '',
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"));
    if (contacts?.length) {
      this.setState({
        contacts,
      })
    }
  }

  componentDidUpdate( _, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }
  }

  addContact = (contact) => {
    if(this.isDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts`)
    }
    this.setState((prev) => {
      const newContact = {
        id: nanoid(),
        ...contact
      }
      return {
        contacts: [...prev.contacts, newContact]
      }
    })
  }

  removeContact = (id) => {
    this.setState((prev) => {
      const newContacts = prev.contacts.filter((item) => item.id !== id);

      return {
        contacts: newContacts,
      }
    })
  }

  handleChange = (e) => {
    console.log(this);
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    })
  }

  isDuplicate({ name }) {
    const { contacts } = this.state;

    const result = contacts.find((item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase());

    return result;
  }

  getFilteredContacts() {
    const { contacts, filter } = this.state;

    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter) || number.includes(normalizedFilter);
      return result;
    })

    return filteredContacts;
  }

  render() {
    const { addContact, removeContact, handleChange } = this;
    const { filter } = this.state;
    const contacts = this.getFilteredContacts();

    return(
      <Box>
        <MainTitle>Phonebook</MainTitle>
        <Form onSubmit={addContact}/>
        <SecondTitle>Contacts</SecondTitle>
        <Filter filter={filter} handleChange={handleChange}/>
        <ContactList items={contacts} removeContact={removeContact} />
      </Box>
    )
  }
}

