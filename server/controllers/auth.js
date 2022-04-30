import userModel from '../models/user.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const register = async (req, res) => {
    const { username, email, password, confirmPassword, picProfile } = req.body

    try {
        const existingEmail = await userModel.findOne({ email })

        if (!existingEmail) {
            if(password === confirmPassword) {
                const hashPassword = await bcrypt.hash(password, 12)
                const newUser = await userModel.create({ username, email, password: hashPassword, picProfile })
                const token = jwt.sign({ id: newUser._id, email: newUser.email} , 'secret', { expiresIn: '4h' })
                res.status(200).json({ data: newUser, token })
            } else {
                res.status(400).json({ message: 'Password and confirm password not match!' })
            }
        } else {
            res.status(400).json({ message: 'Email already existing!' })
        }
    } catch (error) {
        res.status(500).json({ message: error.message})
    }
}

export const login = async (req, res) => {
    const { email, password } = req.body

    try {
        const existingUser = await userModel.findOne({ email })
        if(existingUser) {
            const matchPassword = await bcrypt.compare(password, existingUser.password)
            if(matchPassword) {
                const token = jwt.sign({ id: existingUser._id, email: existingUser.email}, 'secret', { expiresIn: '4h'})
                const { password, ...others } = existingUser._doc
                res.status(200).json({ data: others, token }) 
            } else {
                res.status(400).json({ message: 'Password not match!' })
            }
        } else {
            res.status(400).json({ message: 'Email not exist!' })
        }
    } catch (error) {
        res.status(500).json({ message: error})
    }
}