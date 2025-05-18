import mongoose, { Schema } from "mongoose";

const courseSchema = new mongoose.Schema(
    {
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
        price: {
            type: Number,
            required: true,
        },
        active: {
            type: Boolean,
            default: true,
        },
        category: {
            type: Schema.ObjectId,
            required: true,
            ref: "category",
        },
        instructor: {
            type: Schema.ObjectId,
            required: true,
        },
        modules: {
            type: [Schema.ObjectId],
            required: true,
        },
        testimonials: {
            required: true,
            type: [Schema.ObjectId],
        },
        quizSet: {
            required: true,
            type: [Schema.ObjectId],
            ref: "Quiz",
        },
        subtitle: {
            type: String,
            required: true,
        },
        learning: {
            type: [String],
            required: true,
        },
        createdOn: {
            type: Date,
            default: Date.now,
        },
        modifiedOn: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const CourseModels = mongoose.models.Course ?? mongoose.model("Course", courseSchema);

export default CourseModels;
