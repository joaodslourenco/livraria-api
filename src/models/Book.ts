import mongoose from "mongoose";

interface IBook {
  id: string;
  title: string;
  author: string;
  publisher: string;
  pageNumber?: number;
}

const bookSchema = new mongoose.Schema<IBook>({
  id: { type: String },
  title: { type: String, required: true },
  author: { type: String, required: true },
  publisher: { type: String, required: true },
  pageNumber: { type: Number },
});

const books = mongoose.model("Books", bookSchema);

export default books;
