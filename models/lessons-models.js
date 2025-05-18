import mongoose from "mongoose";

const lessonSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        videoUrl: {
            type: String,
            required: true,
        },
        published: {
            type: Boolean,
            default: false,
        },
        slug: {
            type: String,
            required: true,
        },
        access: {
            type: String,
            enum: ["public", "private"],
            default: "free",
        },
    },
    {
        timestamps: true,
    }
);

const LessonModel = mongoose.models.Lesson || mongoose.model("Lesson", lessonSchema);

export default LessonModel;
