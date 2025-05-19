import mongoose, { Schema } from 'mongoose'

const certificateSchema = new mongoose.Schema({
    user_id: {
        type: Schema.ObjectId,

    },
    course_id: {
        type: Schema.ObjectId,
    },
    enrollment_id: {
        type: Schema.ObjectId,
        required: true
    },
    certificate_link: {
        type: String,
        required: true
    }
}, { timestamps: true })

const CertificateModel = mongoose.models.certificate ??  mongoose.model('certificate', certificateSchema)

export default CertificateModel;