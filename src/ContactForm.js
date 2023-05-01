import React, { useState, useEffect } from 'react';

const ContactForm = ({ addContact, editIndex, editContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (editIndex !== null) {
      setName(editContact.name);
      setPhone(editContact.phone);
    }
  }, [editIndex, editContact]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || phone === '') {
      alert('Please enter name and phone number');
      return;
    }

    if (editIndex !== null) {
      editContact(editIndex, { name, phone });
    } else {
      addContact({ name, phone });
    }

    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editIndex !== null ? 'Edit Contact' : 'Add Contact'}</h2>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="phone">Phone:</label>
      <input
        type="text"
        id="phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button type="submit">{editIndex !== null ? 'Save' : 'Add'}</button>
    </form>
  );
};

export default ContactForm;
