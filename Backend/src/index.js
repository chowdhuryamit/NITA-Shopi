import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config();

connectDB()
    .then(() => {
        const PORT = process.env.PORT || 8000;
        app.listen(PORT, () => {
            console.log(`MongoDB connected. Server is running on http://localhost:${PORT}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed!", err);
        process.exit(1);
    });
