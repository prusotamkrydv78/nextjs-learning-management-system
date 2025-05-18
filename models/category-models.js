import mongoose from 'mongoose'

const categorySchema =  mongoose.Schema({
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

const CategoryModel = mongoose.models.category ?? mongoose.model('category', categorySchema)

export default CategoryModel