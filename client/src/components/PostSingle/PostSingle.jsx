import React from 'react'
import './PosstSingle.css'
import LogoPost from '../../asset/about me.jpg'
import Spinner from '../Spinner/Spinner'
import { useParams, Link } from 'react-router-dom'
import moment from 'moment'
import { apiBlog } from '../../apis/axios'

const PostSingle = ({ blog, isLoading, user }) => {
    const { blogId } = useParams()

    const handleDeleteBlog = async () => {
        await apiBlog.delete(`/${blogId}`)
    }

    if (isLoading || !blog) return (
        <div className='postSingle'>
            <Spinner/>
        </div>
    )

    return (
        <div className='postSingle'>
            <img src={blog.photo || LogoPost} alt="" className="postSingle_img" />
            <h1 className="postSingle_title">{blog.title}</h1>
            <div className="postSingle_info">
                <span>
                    Author: 
                    <b className="postSingle_author">{blog.username}</b>
                </span>
                <span>{moment(blog.createdAt).fromNow()}</span>
            </div>
            <p className="postSingle_desc">{blog.desc}</p>
            {(user?.data?.username || user?.data?.name) === blog.username && (
                <div className="singlePostEdit">
                    <Link to={`/blog/edit/${blogId}`}><i className="singlePostIcon far fa-edit"></i></Link>
                    <Link to={'/'}>
                        <i className="singlePostIcon far fa-trash-alt" onClick={handleDeleteBlog}></i>
                    </Link>
                </div>
            )} 
        </div>
    )
}

export default PostSingle