import React from 'react'
import Register from './Register'
import UserList from './UserList'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
         
      <Router>
  
        <Routes>
          <Route path="/" element={<Register />}/>
          <Route path='/users' element={<UserList />}/>
        </Routes>
      </Router>
    
    </div>
  )
}

export default App
