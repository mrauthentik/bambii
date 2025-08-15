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
        await axios.post('http://localhost:5200/api/auth/register', {email, password, fullname})
        alert('User registered successfully')
        navigate('/login')

    }
  return (
    <div className='register'>
      <h1>Register your Details here</h1>
        <form onSubmit={registerUser}>
            <input type="text" placeholder='Enter your name' value={fullname} onChange={(e)=>setFullName(e.target.value)} />
            <input type="email" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type='submit'>Register</button>
        </form>
        <p>Already have an account? <Link to='/login'> Login</Link></p>
        <p>Go to <Link to='/'>Home</Link></p>
    </div>
  )
}

export default Register
