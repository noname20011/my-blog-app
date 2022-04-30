import React, { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './index.css'
import { Home, PostDetail, WriteBlog, Login, Register, About, Contact } from './pages'

const App = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null)
    const userData = JSON.parse(localStorage.getItem('user'))
    
    useEffect(() => {
        if(userData) {
            setUser(userData)
        }
    },[] )
    return (
        <div>
            <Routes>
                <Route path='/' element={user && <Home user={user}/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/blog/:blogId' element={user && <PostDetail user={user} />}/>
                <Route path='/create-blog' element={user ? <WriteBlog user={user} /> : <Login/>}/>
                <Route path='/blog/edit/:blogId' element={user ? <WriteBlog user={user}/> : <Login/>}/>
                <Route path='/login' element={user ? <Home user={user}/> : <Login/> }/>
                <Route path='/register' element={user ? <Home user={user}/> : <Register/>}/>
            </Routes>
        </div>
    )
}

export default App