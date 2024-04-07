// App.js
import React, { useState } from 'react';
import Contacts from './Contacts';
import ContactsForm from './ContactsForm';
import './App.css'

function App() {
  const [contacts, setContacts] = useState([
    { id:1,name: 'Alice', phoneNumber: '1234567890', location: 'Ablekuma' },
    {id:2, name: 'Bob', phoneNumber: '9876543210', location: 'Nsakinaa' }
  ]);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <Contacts contacts={contacts} />
      <ContactsForm handleAddContact={handleAddContact} />
    </div>
  );
}

export default App;