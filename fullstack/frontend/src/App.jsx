import React from 'react'
import './App.css'
import Register from './Register'
import Login from './Login'
import Dashboard from './Dashboard'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  //create route for register component
  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <Router>
        
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="*" element={<h2>404 Not Found</h2>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </Router>
      <div className="links">
        <p>Go to <a href="/register">Register</a></p>
      <p>Go to <a href="/login">Login</a></p>
      <p>Go to <a href="/dashboard">Dashboard</a></p>
      <p>Go to <a href="/">Home</a></p>
      </div>
      
    </div>
  )

}

export default App
