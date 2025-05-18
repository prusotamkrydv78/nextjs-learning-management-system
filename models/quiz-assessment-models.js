import mongoose, { Schema } from 'mongoose'

const quizAssessmentSchema = new mongoose.Schema({
    marks: {
        type: Number,
        required: true
    },
    noc: {
        type: Number,
        required: true
    },
    assessments: {

        type: [Schema.ObjectId],
    },
    course: {
        type: String,
        required: true
    },
    user_id: {
        type: String,
        required: true
    }
})


const QuizAssessmentModel = mongoose.models.QuizAssessmentModel || mongoose.model('QuizAssessment', quizAssessmentSchema)

export default QuizAssessmentModel