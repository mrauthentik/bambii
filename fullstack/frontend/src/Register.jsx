import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Toast from './components/Toast'
import { LoadingButton } from './components/Loader'
import { useToast } from './hooks/useToast'
const Register = () => {
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()
    const { toasts, showSuccess, showError, removeToast } = useToast()
    const registerUser = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        
        try {
            // Validate inputs
            if (!fullname || !email || !password) {
                showError('Please fill in all fields')
                return
            }
            
            if (fullname.trim().length < 2) {
                showError('Full name must be at least 2 characters long')
                return
            }
            
            if (!email.includes('@') || !email.includes('.')) {
                showError('Please enter a valid email address')
                return
            }
            
            if (password.length < 6) {
                showError('Password must be at least 6 characters long')
                return
            }
            
            // Check password strength
            const hasUpperCase = /[A-Z]/.test(password)
            const hasLowerCase = /[a-z]/.test(password)
            const hasNumbers = /\d/.test(password)
            
            if (!hasUpperCase || !hasLowerCase || !hasNumbers) {
                showError('Password must contain at least one uppercase letter, one lowercase letter, and one number')
                return
            }

            await axios.post('https://bambii.onrender.com/api/auth/register', {
                email, 
                password, 
                fullname: fullname.trim()
            })
            
            showSuccess('Account created successfully! Redirecting to login...')
            
            // Delay navigation to show success message
            setTimeout(() => {
                navigate('/login')
            }, 1500)
            
        } catch (error) {
            console.error('Registration error:', error)
            
            if (error.response) {
                // Server responded with error status
                const { status, data } = error.response
                
                switch (status) {
                    case 400:
                        if (data.message && data.message.includes('email')) {
                            showError('This email is already registered. Please use a different email or try logging in.')
                        } else {
                            showError(data.message || 'Invalid request. Please check your inputs.')
                        }
                        break
                    case 409:
                        showError('An account with this email already exists. Please try logging in instead.')
                        break
                    case 422:
                        showError('Invalid data provided. Please check all fields and try again.')
                        break
                    case 500:
                        showError('Server error. Please try again later.')
                        break
                    default:
                        showError(data.message || 'Registration failed. Please try again.')
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
          <h1>Create Account</h1>
          <p>Join us today and get started</p>
        </div>
        <form onSubmit={registerUser} className='auth-form'>
            <div className='input-group'>
              <label htmlFor='fullname'>Full Name</label>
              <input 
                type="text" 
                id='fullname'
                placeholder='Enter your full name' 
                value={fullname} 
                onChange={(e)=>setFullName(e.target.value)}
                required 
              />
            </div>
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
                placeholder='Create a strong password' 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)}
                required 
              />
            </div>
            <LoadingButton 
                type='submit' 
                className='auth-btn primary'
                isLoading={isLoading}
                loadingText='Creating Account...'
                disabled={!fullname || !email || !password}
            >
                Create Account
            </LoadingButton>
        </form>
        <div className='auth-footer'>
          <p>Already have an account? <Link to='/login' className='auth-link'>Sign in</Link></p>
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

export default Register
