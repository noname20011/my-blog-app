import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { apiAuth } from '../../apis/axios'
import './Register.css'

const Register = () => {
    const navigate = useNavigate()
    const [userData, setUserData] = useState({ username: '', email: '', password: '', confirmPassword: '', picProfile: ''})

    const handleRegister = (e) => {
        e.preventDefault()
        const fetchRegister = async() => {
            const { data } = await apiAuth.post('/register', userData)
            localStorage.setItem('user', JSON.stringify(data))
            navigate('/')
        }
        fetchRegister()
    }

    return (
        <div className="register">
            <div className="register_layout">
                <span className="registerTitle">Register</span>
                <form className="registerForm">
                    <label>Username</label>
                    <input className="registerInput" type="text" placeholder="Enter your username..." 
                        value={userData.username} 
                        onChange={(e) => setUserData({...userData, username: e.target.value})}/>
                    <label>Email</label>
                    <input className="registerInput" type="text" placeholder="Enter your email..." 
                        value={userData.email} 
                        onChange={(e) => setUserData({...userData, email: e.target.value})}/>
                    <label>Password</label>
                    <input className="registerInput" type="password" placeholder="Enter your password..." 
                        value={userData.password} 
                        onChange={(e) => setUserData({...userData, password: e.target.value})}/>
                    <label>Confirm Password</label>
                    <input className="registerInput" type="password" placeholder="Enter confirm password..." 
                        value={userData.confirmPassword} 
                        onChange={(e) => setUserData({...userData, confirmPassword: e.target.value})}/>
                    <button className="registerButton" onClick={handleRegister}>Register</button>
                </form>
                <Link to={'/login'}>
                    <button className="registerLoginButton" >Login</button>
                </Link>
            </div>
        </div>
    )
}

export default Register