import React from 'react'
import './Posts.css'
import Post from './Post/Post'
import Spinner from '../Spinner/Spinner'
import { Link } from 'react-router-dom'

const Posts = ({ blogs, isLoading }) => {

    
    if (isLoading || !blogs) return (<div className='posts_section'><Spinner/></div>)

    if(blogs.length === 0) return (
        <div className='posts_section'>
            <div className='posts_wrapper'>
                    <div style={{position: 'absolute', top : '40%', left: '40%', textAlign: 'center'}}>
                        <p>You don't have blog.</p>
                        <Link to={'/create-blog'}>
                            <span className='btn-writeBlog'>
                                Write first blog now 
                            </span>
                        </Link>
                    </div>
            </div>
        </div>
    )

    return (
        <div className='posts_section'>
            <div className='posts_wrapper'>
                {blogs.map(blog => <Post key={blog._id} blog= {blog}/> )}
            </div>
        </div>
    )
}

export default Posts