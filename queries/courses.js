import CategoryModel from "@/models/category-models";
import CourseModels from "@/models/courses-models";
import ModulesModel from "@/models/modules-models";
import TestimonialsModel from "@/models/testimonials-models";
import UserModel from "@/models/users-models";
import mongoose from "mongoose";

export const coursesQuery = async () => {
    try {
        const courses = await CourseModels.find({}).limit(1).populate({
            path: "category",
            model:CategoryModel
        }).populate({
            path: "instructor",
            model: UserModel
        }).populate({
            path: "modules",
            model: ModulesModel
        }) 
        return courses;
 
    } catch (error) {
        console.log(error);
        return [];
    }
}