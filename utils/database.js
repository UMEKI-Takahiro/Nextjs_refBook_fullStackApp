import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://TarouTanaka:lplVXbunTzmlWOIR@cluster0.a5crub3.mongodb.net/appDataBase?retryWrites=true&w=majority");
    console.log("Success: Connected to MongoDB");
  } catch (error) {
    console.log("Failure: Unconnected to MongoDB");
    throw new Error();
  }
};

export default connectDB;
