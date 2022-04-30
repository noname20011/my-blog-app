import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { apiBlog } from '../../apis/axios'
import { Sidebar, PostSingle, Topbar } from '../../components' 
import './PostDetail.css'

const Post = ({ user }) => {
    const { blogId } = useParams()
    const [blog, setBlog] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    document.title = 'Blog-Blog Detail'

    useEffect(() => {
        setIsLoading(true)
        const fetchBlog = async () => {
            const { data } = await apiBlog.get(`/${blogId}`)
            setBlog(data)
        }
        fetchBlog()
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [blogId])

    return (
        <div className='postDetail_section'>
            <Topbar user={user}/>
            <div className='wrapper'>
                <PostSingle blog={blog} isLoading={isLoading} user={user}/>
                <Sidebar user={user}/>
            </div>
        </div>
    )
}

export default Post