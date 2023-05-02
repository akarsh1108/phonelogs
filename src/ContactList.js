import React, { useState, useEffect } from 'react';
import ContactCard from './ContactCard';
import './styles.css';
import mWaySearchTree from './Algorithms/mWaySearchTree';
const ContactList = ({ contacts, deleteContact, setEditIndex }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(contacts);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState(null);

  useEffect(() => {
   
    const timerId = setTimeout(() => {
      const filteredContacts = contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          contact.phone.toLowerCase().includes(searchQuery.toLowerCase())
      );
      mWaySearchTree(filteredContacts);
      setFilteredContacts(filteredContacts);
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [contacts, searchQuery]);


  function startListening() {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    recognition.onresult = event => {
      const speechToText = event.results[0][0].transcript;
      setSearchQuery(speechToText);
      setIsListening(false);
    };

    recognition.start();
    setIsListening(true);
    setRecognition(recognition);
  }

  function stopListening() {
    recognition.stop();
    setIsListening(false);
  }

  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      <input
        type="text"
        placeholder="Search contacts"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
  <button className="listening-btn" onClick={isListening ? stopListening : startListening}>
  {isListening ? 'Stop Listening' : 'Start Listening'}
</button>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact, index) => (
          <ContactCard
            key={index}
            contact={contact}
            deleteContact={() => deleteContact(index)}
            editContact={() => setEditIndex(index)}
          />
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export default ContactList;

