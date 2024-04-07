
import React from 'react';

function Contacts({ contacts }) {
  return (
    <div>
      <h2>Contacts List</h2>
      {contacts.map((contact, id) => (
        <div key={id} className="contact-box">
          <div className="contact-info">
            <strong>Name:</strong>{contact.name}
            <strong>Phone:</strong> {contact.phoneNumber}
            <strong>Location:</strong> {contact.location}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Contacts;