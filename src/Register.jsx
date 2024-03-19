import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from "axios";
import "./Register.css"
import UserList from './UserList';
const Register = () => {

  const [users, setUsers] = useState([]);



  useEffect(() => {
    axios.get('https://localhost:7092/api/User')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);



  return (
      <>
      <form >
         <div className="container">
          
          <h1>Sign Up</h1>
          <p>Please fill in this form to create an account.</p>
      
              <label htmlFor="email"><b>Username</b></label>
              <input type="text" name="userName" placeholder="Enter Username"   required />
               <label htmlFor="email"><b>Email</b></label>
            <input type="text" placeholder="Enter Email" name="email"  required />
          
          <label htmlFor="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password"  name="passwordHash" required />
      
            <br/>
          
      
        
      
          <div className="clearfix">
      
            <button type="submit" className="btn">Sign Up</button>
          </div>
       </div>
        </form>
        
        <UserList users={users}/>
        </>
      
      
    
  )
}

export default Register
