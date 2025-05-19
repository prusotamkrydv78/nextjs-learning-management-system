import mongoose from "mongoose";

const modulesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
    status: {
        type: String,
        enum: ["active", "inactive"],
        default: "active",
    },
    slug: {
        type: String,
        required: true,
    },
    lessonIds: [
        {
            type: mongoose.Schema.Types.ObjectId,

        },
    ],
    duration: {
        type: Number,
        required: true,
    },
});

const ModulesModel = mongoose.models.modules ?? mongoose.model("modules", modulesSchema);

export default ModulesModel;
