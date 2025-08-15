import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Check if user is authenticated
    const token = localStorage.getItem('token')
    if (!token) {
      navigate('/login')
    } else {
      // You can decode the token or make an API call to get user info
      setUser({ name: 'User', email: 'user@example.com' }) // Placeholder
    }
  }, [navigate])

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  return (
    <div className='dashboard-container'>
      <header className='dashboard-header'>
        <div className='header-content'>
          <h1>Dashboard</h1>
          <div className='user-actions'>
            <span className='welcome-text'>Welcome back!</span>
            <button onClick={handleLogout} className='logout-btn'>Logout</button>
          </div>
        </div>
      </header>
      
      <main className='dashboard-main'>
        <div className='dashboard-grid'>
          <div className='dashboard-card'>
            <div className='card-icon'>📊</div>
            <h3>Analytics</h3>
            <p>View your performance metrics and insights</p>
            <button className='card-btn'>View Details</button>
          </div>
          
          <div className='dashboard-card'>
            <div className='card-icon'>👤</div>
            <h3>Profile</h3>
            <p>Manage your account settings and preferences</p>
            <button className='card-btn'>Edit Profile</button>
          </div>
          
          <div className='dashboard-card'>
            <div className='card-icon'>📝</div>
            <h3>Tasks</h3>
            <p>Keep track of your daily tasks and projects</p>
            <button className='card-btn'>View Tasks</button>
          </div>
          
          <div className='dashboard-card'>
            <div className='card-icon'>📈</div>
            <h3>Reports</h3>
            <p>Generate and download detailed reports</p>
            <button className='card-btn'>Generate Report</button>
          </div>
          
          <div className='dashboard-card'>
            <div className='card-icon'>⚙️</div>
            <h3>Settings</h3>
            <p>Configure your application preferences</p>
            <button className='card-btn'>Open Settings</button>
          </div>
          
          <div className='dashboard-card'>
            <div className='card-icon'>💬</div>
            <h3>Messages</h3>
            <p>Check your latest messages and notifications</p>
            <button className='card-btn'>View Messages</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Dashboard
