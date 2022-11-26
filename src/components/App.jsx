import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Box } from './Box';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    const filterContacts = this.getFilterContacts();
    return <div></div>;
  }
}

export default App;
