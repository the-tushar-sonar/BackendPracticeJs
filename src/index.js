import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env",
});

connectDB();

/*
// Approch 1 :

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;
    }
})();
*/
