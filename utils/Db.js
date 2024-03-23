import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.DB_URI;

export const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connected successfully");
  } catch (error) {
    throw new Error(error);
  }
};
