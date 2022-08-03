import mongoose from "mongoose";
import "dotenv/config";

mongoose.connect(
  `${process.env.MONGO_URL || "mongodb://localhost:27017/livraria"}`,
);

const db = mongoose.connection;

export default db;
