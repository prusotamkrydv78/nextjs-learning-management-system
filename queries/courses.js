import CategoryModel from "@/models/category-models";
import CourseModels from "@/models/courses-models";
import mongoose from "mongoose";

export const coursesQuery = async () => {
    try {
        const courses = await CourseModels.find({}).populate({
            path: "category",
            model:CategoryModel
        });

        return courses;
    } catch (error) {
        console.log(error);
        return [];
    }
}