import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';

import Form from './Form';
import ContactList from './ContactsList';
import Filter from './Filter';

import { Box, MainTitle, SecondTitle } from './PhonebookStyled';


export default function App() {
  const [contacts, setContacts] = useState(() => {
    const items = JSON.parse(localStorage.getItem("contacts"))
    return items  ?? [];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts])

  const addContact = (contact) => {
    if(isDuplicate(contact)) {
      return alert(`${contact.name} is already in contacts`)
    }

    setContacts((prev) => {
      const newContact = {
        id: nanoid(),
        ...contact
      }
      return [...prev, newContact];
    })
  }

  const removeContact = (id) => {
    setContacts((prev) => {
      const newContacts = prev.filter((item) => item.id !== id);
  
      return newContacts
    })
  }

  const handleChange = (e) => {
    const { value } = e.target;

    setFilter(value);
  }

  const isDuplicate = ({ name }) => {
    const result = contacts.find((item) => item.name.toLocaleLowerCase() === name.toLocaleLowerCase());
    return result;
  }

  const getFilteredContacts = () => {
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

  const filteredContacts = getFilteredContacts();

  return (
    <Box>
        <MainTitle>Phonebook</MainTitle>
        <Form onSubmit={addContact}/>
        <SecondTitle>Contacts</SecondTitle>
        <Filter filter={filter} handleChange={handleChange}/>
        <ContactList items={filteredContacts} removeContact={removeContact} />
    </Box>
  )
}