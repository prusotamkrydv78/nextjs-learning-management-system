import mongoose, { Schema } from 'mongoose';

const enrollmentSchema = new mongoose.Schema({
    enrollment_date: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    completion_date: {
        type: Date,
        default: null,
    },
    method: {
        type: String
    },
    course: {
        type: Schema.ObjectId
    },
    student: {
        type: Schema.ObjectId
    }
});

const EnrollmentModel = mongoose.models.Enrollment || mongoose.model('Enrollment', enrollmentSchema);

export default EnrollmentModel;
