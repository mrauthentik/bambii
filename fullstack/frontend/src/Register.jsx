import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
const Register = () => {
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const registerUser = async (e)=> {
    e.preventDefault()
    // Handle registration logic here
        await axios.post('https://bambii.onrender.com/api/auth/register', {email, password, fullname})
        alert('User registered successfully')
        navigate('/login')

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
            <button type='submit' className='auth-btn primary'>Create Account</button>
        </form>
        <div className='auth-footer'>
          <p>Already have an account? <Link to='/login' className='auth-link'>Sign in</Link></p>
          <p><Link to='/' className='auth-link'>← Back to Home</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Register
