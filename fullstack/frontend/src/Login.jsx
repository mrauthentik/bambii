import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Toast from './components/Toast'
import { LoadingButton } from './components/Loader'
import { useToast } from './hooks/useToast'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const { toasts, showSuccess, showError, removeToast } = useToast()
    const LoginUser = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        
        try {
            // Validate inputs
            if (!email || !password) {
                showError('Please fill in all fields')
                return
            }
            
            if (!email.includes('@')) {
                showError('Please enter a valid email address')
                return
            }
            
            if (password.length < 6) {
                showError('Password must be at least 6 characters long')
                return
            }

            const res = await axios.post('https://bambii.onrender.com/api/auth/login', {
                email, 
                password
            })
            
            setToken(res.data.token)
            localStorage.setItem('token', res.data.token)
            showSuccess('Login successful! Redirecting to dashboard...')
            
            // Delay navigation to show success message
            setTimeout(() => {
                navigate('/dashboard')
            }, 1500)
            
        } catch (error) {
            console.error('Login error:', error)
            
            if (error.response) {
                // Server responded with error status
                const { status, data } = error.response
                
                switch (status) {
                    case 400:
                        showError(data.message || 'Invalid request. Please check your inputs.')
                        break
                    case 401:
                        showError('Invalid credentials. Please check your email and password.')
                        break
                    case 404:
                        showError('User not found. Please check your email or register first.')
                        break
                    case 500:
                        showError('Server error. Please try again later.')
                        break
                    default:
                        showError(data.message || 'Login failed. Please try again.')
                }
            } else if (error.request) {
                // Network error
                showError('Network error. Please check your internet connection and try again.')
            } else {
                // Other error
                showError('An unexpected error occurred. Please try again.')
            }
        } finally {
            setIsLoading(false)
        }
    }
  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <div className='auth-header'>
          <h1>Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>
        <form onSubmit={LoginUser} className='auth-form'>
            <div className='input-group'>
              <label htmlFor='email'>Email Address</label>
              <input 
                type="email" 
                id='email'
                placeholder='Enter your email' 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)}
                required 
              />
            </div>
            <div className='input-group'>
              <label htmlFor='password'>Password</label>
              <input 
                type="password" 
                id='password'
                placeholder='Enter your password' 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                required 
              />
            </div>
            <LoadingButton 
                type='submit' 
                className='auth-btn primary'
                isLoading={isLoading}
                loadingText='Signing In...'
                disabled={!email || !password}
            >
                Sign In
            </LoadingButton>
        </form>
        <div className='auth-footer'>
          <p>Don't have an account? <Link to='/register' className='auth-link'>Sign up</Link></p>
          <p><Link to='/' className='auth-link'>← Back to Home</Link></p>
        </div>
      </div>
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

export default Login
