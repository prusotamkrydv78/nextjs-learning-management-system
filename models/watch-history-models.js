import mongoose, { Schema } from "mongoose";

const watchHistorySchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        lesson_id: {
            type: Schema.Types.ObjectId,
            ref: "Lesson",
            required: true,
        },
        created_at: {
            type: Date,
            default: Date.now,
        },
        modified_at: {
            type: Date,
            default: Date.now,
        },
        state: {
            type: String,
            enum: ["completed", "incomplete", "unwatched"],
            default: "unwatched",
        },
        last_time: {
            type: Number,
            default: 0,
        },
    },
    { timestamps: true }
);

const WatchHistoryModel = mongoose.models.WatchHistory ?? mongoose.model("WatchHistory", watchHistorySchema);

export default WatchHistoryModel;