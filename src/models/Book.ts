import mongoose from "mongoose";
import { IAuthor } from "./Author";

export interface IBook {
  id: string;
  title: string;
  author: IAuthor;
  publisher: string;
  pageNumber?: number;
}

const bookSchema = new mongoose.Schema<IBook>({
  id: { type: String },
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "authors",
    required: true,
  },
  publisher: { type: String, required: true },
  pageNumber: { type: Number },
});

const books = mongoose.model("Books", bookSchema);

export default books;
