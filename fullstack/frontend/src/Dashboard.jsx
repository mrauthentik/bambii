import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Toast from './components/Toast'
import Loader from './components/Loader'
import { useToast } from './hooks/useToast'

const Dashboard = () => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const { toasts, showSuccess, showError, showInfo, removeToast } = useToast()

  useEffect(() => {
    const authenticateUser = async () => {
      try {
        // Check if user is authenticated
        const token = localStorage.getItem('token')
        if (!token) {
          showError('Please login to access the dashboard')
          setTimeout(() => navigate('/login'), 1500)
          return
        }
        
        // Simulate API call to verify token and get user info
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // You can decode the token or make an API call to get user info
        setUser({ name: 'User', email: 'user@example.com' }) // Placeholder
        showInfo('Welcome to your dashboard!')
        
      } catch (error) {
        console.error('Authentication error:', error)
        showError('Failed to authenticate. Please login again.')
        setTimeout(() => navigate('/login'), 1500)
      } finally {
        setIsLoading(false)
      }
    }
    
    authenticateUser()
  }, [navigate, showError, showInfo])

  const handleLogout = () => {
    try {
      localStorage.removeItem('token')
      showSuccess('Logged out successfully!')
      setTimeout(() => {
        navigate('/login')
      }, 1000)
    } catch (error) {
      console.error('Logout error:', error)
      showError('Error during logout. Please try again.')
    }
  }

  if (isLoading) {
    return (
      <div className='dashboard-container' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Loader size='large' text='Loading your dashboard...' />
      </div>
    )
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
      
      {/* Toast Notifications */}
      {toasts.map(toast => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          isVisible={toast.isVisible}
          onClose={() => removeToast(toast.id)}
          duration={toast.duration}
        />
      ))}
    </div>
  )
}

export default Dashboard
