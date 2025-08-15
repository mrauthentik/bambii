import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')
    const navigate = useNavigate()
    const LoginUser = async (e)=> {
    e.preventDefault()
    // Handle registration logic here
       const res = await axios.post('https://bambii.onrender.com/api/auth/login', {email, password})
        setToken(res.data.token)
        localStorage.setItem('token', res.data.token)
        alert('User Login successfully')
        navigate('/dashboard')

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
            <button type='submit' className='auth-btn primary'>Sign In</button>
        </form>
        <div className='auth-footer'>
          <p>Don't have an account? <Link to='/register' className='auth-link'>Sign up</Link></p>
          <p><Link to='/' className='auth-link'>← Back to Home</Link></p>
        </div>
      </div>
    </div>
  )
}

export default Login
