import mongoose, { Schema } from 'mongoose'

const quizSetSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    marks: {
        type: Number,
        required: true
    },
    slug: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['active', 'inactive'],
        default: 'active'
    },
    quizIds: {
        type: [Schema.ObjectId],
        ref: 'Quiz',
        required: true
    },
})

const QuizSetModel = mongoose.models.quiz-set ?? mongoose.model('quiz-set', quizSetSchema)

export default QuizSetModel