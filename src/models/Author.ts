import mongoose from "mongoose";

export interface IAuthor {
  id: string;
  name: string;
  nationality?: string;
}

const authorSchema = new mongoose.Schema<IAuthor>(
  {
    id: { type: String },
    name: { type: String, required: true },
    nationality: { type: String },
  },
  {
    versionKey: false,
  },
);

const authors = mongoose.model("authors", authorSchema);

export default authors;
