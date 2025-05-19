import mongoose, { Schema } from 'mongoose';



const reportsSchema = new Schema({
    totalCompletedLessons: {
        type: [Schema.ObjectId]
    },
    totalCompletedModules: {
        type: [Schema.ObjectId]
    },
    course: {
        type: Schema.ObjectId,
        ref: 'Course'
    },
    student: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    quizAssessment: {
        type: Schema.ObjectId
    }
});

const ReportsModel = mongoose.models.Reports ?? mongoose.model('Reports', reportsSchema);

export default ReportsModel;