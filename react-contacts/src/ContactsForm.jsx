
import React, { useState } from 'react';

function ContactsForm({ handleAddContact }) {
  const [formData, setFormData] = useState({ name: '', phoneNumber: '', location: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddContact(formData);
    setFormData({ name: '', phoneNumber: '', location: '' });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="phoneNumber" placeholder="Phone Number" value={formData.phoneNumber} onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}

export default ContactsForm;