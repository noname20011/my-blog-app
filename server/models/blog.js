import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true},
    desc: { type: String, required: true, },
    photo: { type: String, required: false},
    username: { type: String, required: true},
    categories: { type: Array, required: false},
    },
    { timestamps: true }
)

const blogModel = mongoose.model('Blog', blogSchema)

export default blogModel