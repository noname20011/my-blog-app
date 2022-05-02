import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { FcGoogle} from 'react-icons/fc'
import GoogleLogin from 'react-google-login'
import { apiAuth } from '../../apis/axios'
import './Login.css'

const Login = () => {
    document.title = 'Blog-Login'
    const navigate = useNavigate()
    const [userData, setUserData] = useState({ email: '', password: ''})

    const handleLogin = (e) => {
        e.preventDefault()
        const fetchLogin = async() => {
            const { data } = await apiAuth.post('/login', userData)
            localStorage.setItem('user', JSON.stringify(data))
            navigate('/')
        }
        fetchLogin()
    }

    // const responseLoginGoogle = (res) => {
    //     localStorage.setItem('user', JSON.stringify({data: res.profileObj, tokenId: res.tokenId}))
    //     console.log(res);
    //     navigate('/')
    // }

    return (
        <div className="login">
            <div className='login_layout'>
                <span className="loginTitle">Login</span>
                <form className="loginForm">
                    <label>Email</label>
                    <input className="loginInput" type="text" placeholder="Enter your email..." 
                        value={userData.email} 
                        onChange={(e) => setUserData({...userData, email: e.target.value})}/>
                    <label>Password</label>
                    <input className="loginInput" type="password" placeholder="Enter your password..." 
                        value={userData.password} 
                        onChange={(e) => setUserData({...userData, password: e.target.value})}/>
                    <button className="loginButton" onClick={handleLogin}>Login</button>
                </form>
                <span className='option-login'>OR</span>
                {/* <GoogleLogin
                    clientId='43479753631-1f4bkoouumnsnocu2qiqsi10i5glr6sg.apps.googleusercontent.com'
                    render={(renderProps => (
                        <button type='button' className='loginGoogleButton' 
                        onClick={renderProps.onClick} 
                        disabled={renderProps.disabled}>
                            <FcGoogle/>Login with Google</button>
                    ))}
                    onSuccess={responseLoginGoogle}
                    onFailure={responseLoginGoogle}
                    cookiePolicy='single_host_origin'/> */}
                <Link to={'/register'}>
                    <button className="loginRegisterButton">Register</button>
                </Link>
            </div>
        </div>
    )
}

export default Login