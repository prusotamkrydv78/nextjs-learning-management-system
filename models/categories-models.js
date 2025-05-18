import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: false
    },
    thubnail: {
        type: String,
        required: false
    },

})

const CategoryModel = mongoose.models.categories || mongoose.model('categories', categorySchema)

export default CategoryModel