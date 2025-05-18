import mongoose from "mongoose";

export async function dbConnect() {
    try {
        const conn = await mongoose.connect(String(process.env.MONGODB_CONNECTION_STRING)).then((conn) => {
            console.log(`MongoDB Connected: ${conn.connection.host}`);
        }).catch((err) => {
            console.log(err);
            process.exit(1);
        });

    } catch (error) {
        console.log(error)
    }
}