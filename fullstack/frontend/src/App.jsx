import React from 'react'
import './App.css'
import Register from './Register'
import Login from './Login'
import Dashboard from './Dashboard'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  //create route for register component
  return (
    <div className="App">
      <Router>
        
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </Router>

      
    </div>
  )

}

export default App
