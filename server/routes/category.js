import express from 'express'
import { getCategories, createCategory } from '../controllers/category.js'

const categoryRouters = express.Router()

categoryRouters.get('/', getCategories)
categoryRouters.post('/', createCategory)

export default categoryRouters