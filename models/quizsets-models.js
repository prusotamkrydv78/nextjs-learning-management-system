import mongoose, { Schema } from 'mongoose'

const quizsetsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    mark: {
        type: Number,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        required: true
    },
    quizIds: {
        type: [Schema.objectId],
        ref: 'Quiz',
        required: true
    }

}, { timestamps: true })

const QuizsetsModel = mongoose.models.Quizsets ?? mongoose.model('Quizsets', quizsetsSchema)

export default QuizsetsModel