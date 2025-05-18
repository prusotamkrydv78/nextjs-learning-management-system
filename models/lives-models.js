import mongoose from "mongoose";

const livesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    video_id: {
        type: String,
        required: true,
    },
    slug: {
        type: Date,
        required: true,
    },
    schedule: {
        type: Date,

    },
    quiz_id: {
        type: String,
        required: true,
    },
    instructor_id: {
        type: String,
        required: true,
    },

}
)

const livesModel = mongoose.models.lives || mongoose.model("lives", livesSchema);

export default livesModel;