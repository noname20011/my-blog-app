import express from 'express'
import { updateUser, deleteUser, getUser } from '../controllers/user.js'

const userRouters = express.Router()

userRouters.get('/:id', getUser)
userRouters.post('/:id', updateUser)
userRouters.delete('/:id', deleteUser)

export default userRouters