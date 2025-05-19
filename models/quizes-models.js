import mongoose from "mongoose";

const quizesSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    options: {
        type:
            [
                {
                    text: String,
                    is_correct: Boolean,
                }
            ]
        ,
        required: true,
    },
    explanations: {
        type: String,
        required: true,
    },
    marks: {
        type: Number,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
});

const QuizesModel = mongoose.models.Quizes ??mongoose.model("Quizes", quizesSchema);

export default QuizesModel;