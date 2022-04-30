import React, { useState, useEffect } from 'react'
import { apiBlog } from '../../apis/axios'
import { Header, Sidebar, Posts, Topbar } from '../../components'
import './Home.css'

const Home = ({ user }) => {
    document.title = 'Blog-Home'
    const [blogs, setBlogs] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => { 
        setIsLoading(true)
        const fetchAllBlog = async () => {
            const { data } = await apiBlog.get('/')   
            setBlogs(data)
        }
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        fetchAllBlog()
    },[])

    return (
        <div>
            <Topbar user={user && user}/>
            <Header/>
            <div className='wrapper'>
                <Posts blogs={blogs} isLoading={isLoading}/>
                <Sidebar user={user}/>
            </div>
        </div>
    )
}

export default Home