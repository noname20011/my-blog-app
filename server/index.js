import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import blogRouters from './routes/blog.js'
import authRouters from './routes/auth.js'
import userRouters from './routes/user.js'
import categoryRouters from './routes/category.js'

dotenv.config()
const PORT = process.env.PORT || 5000
const app = express()

app.use(bodyParser.json({ limit: '30mb', extend: true}))
app.use(bodyParser.urlencoded({ limit: '50mb', extend: true}))
app.use(cors())

app.use('/blogs', blogRouters)
app.use('/auth', authRouters)
app.use('/user', userRouters)
app.use('/category', categoryRouters)
app.get('/', (req, res) => {
    res.send('App is running!')
})

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log('Server running on: ' + PORT)))
    .catch(err => console.log('Connect Failure!: ' + err))

