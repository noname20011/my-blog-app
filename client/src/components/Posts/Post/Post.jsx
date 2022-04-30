import React from 'react'
import postLogo from '../../../asset/about me.jpg'
import moment from 'moment'
import './Post.css'
import { Link } from 'react-router-dom'

const Post = ({ blog }) => {
    return (
        <div className='post_section'>
            <Link to={`/blog/${blog._id}`}>
                <img src={blog.photo || postLogo} alt="post" className="post_img" />
            </Link>
            <div className="post_info">
                <div className="post_casts">
                    <span className="post_cast">#Travel</span>
                    <span className="post_cast">#Hang out</span>
                </div>
                <Link to={`/blog/${blog._id}`}><h3 className="post_title">{blog.title}</h3></Link>
                <span className="post_date">{moment(blog.createdAt).fromNow()}</span>
                <p className="post_desc">{blog.desc.length < 60 ? blog.desc : `${blog.desc.slice(0, 60)}...`}</p>
            </div>
        </div>
    )
}

export default Post