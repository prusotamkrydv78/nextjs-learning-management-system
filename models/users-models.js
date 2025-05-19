import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'instructor', 'student'],
        default: 'student'
    },
    bio: {
        type: String,
        default: ''
    },
    socialMedia: {
        type: Object,
        default: {
            facebook: '',
            twitter: '',
            linkedin: ''
        }
    },
    profilePicture: {
        type: String,
        default: ''
    },
    designation: {
        type: String,
        default: ''
    }
}, { timestamps: true });

const UserModel = mongoose.models.users ?? mongoose.model('users', userSchema);

export default UserModel;