import categoryModel from '../models/category.js'

export const createCategory = async (req, res) => {
    const newCat = new categoryModel(req.body);
    try {
        const savedCat = await newCat.save();
        res.status(200).json(savedCat);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getCategories = async (req, res) => {
    try {
        const cats = await categoryModel.find();
        res.status(200).json(cats);
    } catch (err) {
        res.status(500).json(err);
    }
}