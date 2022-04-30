import express from "express";
import { getAllBlog,getAllBlogByUser, getBlog, createBlog, updateBlog, deleteBlog } from "../controllers/blog.js";
import { auth } from '../middleware/auth.js'

const blogRouters = express.Router()

blogRouters.get('/', getAllBlog)
blogRouters.patch('/about', getAllBlogByUser)
blogRouters.get('/:blogId', getBlog)
blogRouters.post('/', createBlog)
blogRouters.patch('/:blogId', updateBlog)
blogRouters.delete('/:blogId', deleteBlog)

export default blogRouters