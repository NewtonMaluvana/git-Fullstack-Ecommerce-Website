import mongoose from "mongoose";

async function dbConncet() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!);
  } catch (error) {
    throw new Error("connection failed!!");
  }
}

export default dbConncet;
