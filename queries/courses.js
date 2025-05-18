import CourseModels from "@/models/courses-models";
import mongoose from "mongoose";

export const coursesQuery = async () => {
    try {
        const courses = await CourseModels.find({}, 'title category');

        return courses;
    } catch (error) {
        console.log(error);
        return [];
    }
}