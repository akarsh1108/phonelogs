import React from 'react';

const ContactCard = ({ contact, deleteContact, editContact }) => {
  return (
    <div className="contact-card">
      <h3>{contact.name}</h3>
      <p>{contact.phone}</p>
      <div className="contact-card-buttons">
        <button onClick={editContact}>Edit</button>
        <button onClick={deleteContact}>Delete</button>
      </div>
    </div>
  );
};

export default ContactCard;
