import express from 'express'
import { register, login } from '../controllers/auth.js'

const authRouters = express.Router()

authRouters.post('/register', register)
authRouters.post('/login', login)

export default authRouters