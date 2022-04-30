import mongoose from "mongoose"
import blogModel from "../models/blog.js"

export const getAllBlog= async (req, res) => {
    const { user, category } = req.params
    try {
        let blogs
        if(user) {
            blogs = await blogModel.find({username: user})
        } else if (category) {
            blogs = await blogModel.find({ category: { $in: [category]}})
        } else {
            blogs = await blogModel.find()
        }
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const getAllBlogByUser = async (req, res) => {
    const { user, category } = req.params
    const { username } = req.body
    try {
        let blogs
        blogs = await blogModel.find({ username : username , function (err, result) {
            if(err) {
                return 
            } else {
                return result
            }
        }})
        res.status(200).json(blogs)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const getBlog = async (req, res) => {
    const { blogId } = req.params
    try {
        const blog = await blogModel.findById(blogId)
        res.status(200).json(blog)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const createBlog = async (req, res) => {
    const { title, desc, photo, category, username } = req.body
    const createBlog = await blogModel.create({ title, desc, photo, category, username })
    try {
        await createBlog.save()
        res.status(201).json(createBlog)
    } catch (error) {
        res.status(409).json({ message: error })
    }
}

export const updateBlog = async (req, res) => {
    const { blogId } = req.params
    const { title, desc, photo } = req.body

    if(!mongoose.Types.ObjectId(blogId)) res.status(404).json({ message: 'Blog not found!'})
    const updateBlog = { title, desc, photo }
    await blogModel.findByIdAndUpdate(blogId, updateBlog, { new: true })
    res.status(202).json(updateBlog)
}

export const deleteBlog = async (req, res) => {
    const { blogId } = req.params

    if(!mongoose.Types.ObjectId(blogId)) res.status(404).json({ message: 'Blog not found!'})
    await blogModel.findByIdAndRemove(blogId)
    res.status(202).json({message: 'Blog deleted!'})
}