import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI?.trim();

        if (
            !mongoUri ||
            mongoUri === "--------------" ||
            (!mongoUri.startsWith("mongodb://") && !mongoUri.startsWith("mongodb+srv://"))
        ) {
            throw new Error(
                "Invalid MONGODB_URI. Set a valid MongoDB connection string in server/.env."
            );
        }

        mongoose.connection.on("connected", () => console.log("Database Connected"));
        await mongoose.connect(mongoUri);
    } catch (error) {
        console.error(error.message);
    }
};


export default connectDB;
