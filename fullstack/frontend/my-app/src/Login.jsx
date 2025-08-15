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
    <div className='register'>
      <h1>Register your Details here</h1>
        <form onSubmit={LoginUser}>
            
            <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
        <p>Already have an account? <Link to='/login'> Login</Link></p>
        <p>Go to <Link to='/'>Home</Link></p>
    </div>
  )
}

export default Login
