import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const url = process.env.DATABASE_URL || "";

export default async function connectDB() {
  try {
    const res = await mongoose.connect(url);
    console.log(`Database is connected to: ${res.connection.host}`);
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
}
