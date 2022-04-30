import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true},
    password: { type: String, required: true },
    picProfile: { type: String, default: ''}
    },
    { timestamps: true }
)

const userModel = mongoose.model('User', userSchema)

export default userModel