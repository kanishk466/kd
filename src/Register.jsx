import React, { useState } from 'react';
import axios from 'axios';
import "./Register.css"
const Register = () => {
  const [formData, setFormData] = useState({
    // Initialize form fields
    userName: '',
    email: '',
    passwordHash: ''

    // Add more fields as needed
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://localhost:7092/api/User', formData)
  .then(response => {
    // Handle successful response
    console.log('Data created successfully:', response.data);
  })
  .catch(error => {
    // Handle network errors
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Server responded with status:', error.response.status);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response received from server');
    } else {
      // Something else happened while setting up the request
      console.error('Error setting up the request:', error.message);
    }
  });

  };

  return (
    <form onSubmit={handleSubmit}>

    <div className="container">
    <input
        type="text"
        name="userName"
        placeholder="Name"
        value={formData.userName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="passwordHash"
        placeholder="password"
        value={formData.passwordHash}
        onChange={handleChange}
      />
      {/* Add more input fields as needed */}
      <button type="submit">Submit</button>
    </div>
      
    </form>
  );
};

export default Register;
