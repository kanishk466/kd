import React, { useEffect, useState } from 'react'
import "./user.css"
import axios from 'axios'
const UserList = () => {

  const [users , setUsers] = useState([])


  useEffect(()=>{
    axios.get('https://localhost:7092/api/User')
      .then(res => {
        console.log("User List : ", res.data)
        setUsers(res.data)
      })
      .catch(err => {
        console.error("Error in getting user list", err)
      })
 
      




  },[])


  const deleteUser = (userId) => {
    console.log(userId)
    axios.delete(`https://localhost:7092/api/User/${userId}`)
      .then(response => {
        console.log('User deleted successfully');
        // Handle success, e.g., show a success message to the user
      })
      .catch(error => {
        console.error('Error deleting user:', error);
        // Handle error, e.g., show an error message to the user
      });
  }


  return (
    <>
    <table>
  <thead>
    <tr>
     <th>Id</th> 
      <th>Username</th>
      <th>Email</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    { users.map((item)=>(
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{item.userName}</td>
      <td>{item.email}</td>
     
      <td className="action-buttons">
        <button className="edit-button"  >Edit</button>
        <button className="delete-button" onClick={() => deleteUser(item.id)}>Delete</button>
      </td>
    </tr>
    ))} 
    
  </tbody>
</table>
    
    </>
   
  
  )
}

export default UserList
