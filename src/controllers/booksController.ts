import books from "../models/Book";
import { Request, Response } from "express";

class BookController {
  static listBooks = (req: Request, res: Response) => {
    books.find((err, books) => {
      res.status(200).json(books);
    });
  };
}

export default BookController;
