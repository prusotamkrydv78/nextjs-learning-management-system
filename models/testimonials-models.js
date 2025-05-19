
import mongoose, { Schema } from "mongoose";

const TestimonialsSchema = new Schema(
    {
        content: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        courseId: {
            type: Schema.Types.ObjectId,
            ref: "Course",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const TestimonialsModel = mongoose.models.testimonials ?? mongoose.model("testimonials", TestimonialsSchema);

export default TestimonialsModel;
