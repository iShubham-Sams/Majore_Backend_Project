import mongoose from "mongoose";
require("dotenv").config();
const uri = process.env.DATABASE_URL ?? "";

mongoose
  .connect(uri)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err: Error) => console.error("Error connecting to MongoDB:", err));
