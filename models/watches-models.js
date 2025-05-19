import mongoose, { Schema } from 'mongoose';

const watchesSchema = new Schema({
    user_id: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },
    lesson_id: {
        type: Schema.ObjectId,
        ref: 'Lesson',
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    modified_at: {
        type: Date,
        default: Date.now()
    },
    state: {
        type: String,
        enum: ['completed', 'incompleted', 'unwatched'],
        default: 'unwatched'
    },
    last_time: {
        type: Number,
        default: 0
    }
});

const WatchesModel = mongoose.model.Watches ?? mongoose.model('Watches', watchesSchema);

export default WatchesModel;