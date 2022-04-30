import React, { useState } from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import FileBase from 'react-file-base64'
import './CreateBlog.css'
import { useParams, useNavigate, Link } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import Logo from '../../asset/about me 1.jpg'
import { MdDelete } from 'react-icons/md'
import { useEffect } from 'react'
import { apiBlog } from '../../apis/axios'

const CreateBlog = ({ blogId, blog, isLoading, setIsLoading, user }) => {
    const navigate = useNavigate()
    const [blogData, setBlogData] = useState({title: '', desc: '', username: '', photo: '', categories: []})
    const [wrongImageType, setWrongImageType] = useState(false)
    const [isLoadingImage, setIsLoadingImage] = useState(false)
    const [imageAsset, setImageAsset] = useState(null)
    const [update, setUpdate] = useState(false)

    useEffect(() => {
        if(blog && blogId ) {
            document.title = 'Blog-Update blog'
            setBlogData({ ...blog })
            setUpdate(true)
        } else {
            document.title = 'Blog-Write blog'
            setBlogData({ username: user.data.username, ...blog })
            setIsLoading(false)
        }
    }, [blog, blogId])

    const uploadImage = (file) => {
        const { type, name, base64 } = file
        if(type === 'image/png' || type === 'image/svg' || type === 'image/gif' || type === 'image/jpeg') {
            setIsLoadingImage(true)
            setWrongImageType(false)
            setImageAsset(base64)
            setBlogData({...blogData, photo: base64})
            setIsLoadingImage(false)
        } else {
            setIsLoadingImage(true)
            setWrongImageType(true)
            setIsLoadingImage(false)
        }
    }

    const handlePost = async (e) => {
        e.preventDefault()
        if(update) {
            await apiBlog.patch(`/${blogId}`, blogData)
            navigate(`/blog/${blogId}`)
        } else {
            await apiBlog.post('/', blogData)
            navigate('/')
        }
    }

    if(isLoading && !blog ) return(<div className='createBlog'><Spinner/></div>)

    return (
        <div className='createBlog'>
            <h3 className='title-res'>Write a Blog</h3>
            <form className='createForm'>
                <div className='postImg_wrapper'>
                    {wrongImageType && <span style={{fontSize: '20px', color: 'red', position: 'absolute', top: '15%'}}>Wrong image type.</span>}
                    {blog ? (
                        <div className='postImg_img'>
                            <img src={blogData?.photo} alt="" />
                        </div>
                    ) : (
                    !imageAsset ? (
                        <div className='postImg_layout'>
                            <label>
                                <div>
                                    <div>
                                        <p>
                                            <AiOutlineCloudUpload size={32}/>
                                        </p>
                                        <p className='postImg_suggest'>Click to upload</p>
                                        <p className='postImg_recommend'>Recommend type JPG, SVG, GIF, PNG less than 20mb.</p>
                                    </div>
                                    <FileBase id='blog-file' type={'file'} multiple={false} onDone={uploadImage}/>
                                </div>
                            </label>
                        </div>
                    ) : (
                        isLoadingImage ? (
                            <div className='postImg_img'>
                                <Spinner/>
                            </div>
                            ) : (
                            <div className='postImg_img'>
                                <img src={blogData.photo} alt="" />
                                <button className='btnDelete_img'>
                                    <MdDelete size={32} color='white' onClick={() => setImageAsset(false)}/>
                                </button>
                            </div>
                        )
                    ))}
                </div>
                <div className="writeFormGroup">

                    <input
                        className="writeInput"
                        placeholder="Title"
                        type="text"
                        autoFocus={true}
                        value={blogData.title}
                        onChange={(e) => setBlogData({...blogData, title: e.target.value})}
                    />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        className="writeInput writeText"
                        placeholder="Tell your story..."
                        type="text"
                        value={blogData.desc}
                        onChange={(e) => setBlogData({...blogData, desc: e.target.value})}
                    />
                </div>
                <button className="writeSubmit" type="submit" onClick={handlePost}>
                    {update ? 'Update' : 'Publish'}
                </button>
                {update && (
                    <Link to={`/blog/${blogId}`} className ='writeSubmit btn-left'>
                        Cancel
                    </Link>
                )}
            </form>
        </div>
    )
}

export default CreateBlog