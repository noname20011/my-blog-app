import React, { useEffect, useState } from 'react'
import './WriteBlog.css'
import { useParams } from 'react-router-dom'
import { Sidebar, CreateBlog, Topbar } from '../../components'
import { apiBlog } from '../../apis/axios'

const WriteBlog = ({ user }) => {
    const { blogId } = useParams()
    const [blog, setBlog] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(blogId) {
            setIsLoading(true)
            const fetchBlog = async () => {
                const { data } = await apiBlog.get(`/${blogId}`)
                setBlog(data)
            }
            fetchBlog()
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
        }
    }, [])

    return (
        <div className='writeBlog_section'>
            <Topbar user={user} />
            <div className="wrapper">
                <CreateBlog blogId={blogId} blog={blog} isLoading={isLoading} setIsLoading={setIsLoading} user={user}/>
                <Sidebar user={user}/>
            </div>
        </div>
    )
}

export default WriteBlog