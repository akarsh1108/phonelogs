import React, { useState } from 'react';
import Navbar from './Navbar';
import './App.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

function App() {
  const [contacts, setContacts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    const newContacts = [...contacts];
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  const editContact = (index, updatedContact) => {
    const newContacts = [...contacts];
    newContacts[index] = updatedContact;
    setContacts(newContacts);
    setEditIndex(null);
  };

  return (
    <div >
       <Navbar />
       <div className="App">
      <ContactForm
        addContact={addContact}
        editIndex={editIndex}
        editContact={editContact}
        contacts={contacts}
      />
      <ContactList
        contacts={contacts}
        deleteContact={deleteContact}
        setEditIndex={setEditIndex}
        />
     </div>
  
    </div>
  );
}

export default App;
