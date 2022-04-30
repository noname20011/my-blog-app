import bcrypt from 'bcryptjs'
import userModel from '../models/user.js'
import blogModel from '../models/blog.js'

export const updateUser = async (req, res) => {
    const { id } = req.params
    const { userId, password } = req.body
    try {
        if(id === userId) {
            if(password) {
                password = await bcrypt.hash(password, 12)
                const updatedUser = await userModel.findByIdAndUpdate(userId, { $set: req.body}, { new: true })
                res.status(202).json(updatedUser)
            }
        }
    } catch (error) {
        res.status(500).json({ message: error})
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params
    const { userId } = req.body
    try {
        if(id === userId) {
            const existingUser = await userModel.findById(userId)
            if(existingUser) {
                await blogModel.deleteMany({ username: existingUser.username })
                await userModel.findByIdAndRemove(userId)
                res.status(202).json({ message: 'Delete account completed.'})
            } else res.status(404).json({ message: 'User not found.'})
        }
    } catch (error) {
        res.status(500).json({ message: error}) 
    }
}

export const getUser = async (req, res) => {
    const { id } = req.params
    try {
        const getUser = await userModel.findById(id)
        if(getUser) {
            const { password, ...others } = getUser
            res.status(200).json(others)
        }
    } catch (error) {
        res.status(500).json({ message: error}) 
    }
}