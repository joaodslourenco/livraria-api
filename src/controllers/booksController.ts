import books, { IBook } from "../models/Book";
import { Request, Response } from "express";
import { CallbackError, HydratedDocument } from "mongoose";

class BookController {
  static listBookById = (req: Request, res: Response) => {
    const id = req.params.id;
    books.findById(id, (err: CallbackError, book: IBook) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} = Book ID not found.` });
      } else {
        res.status(200).send(book);
      }
    });
  };

  static listBooks = (req: Request, res: Response) => {
    books.find((err, books) => {
      res.status(200).json(books);
    });
  };

  static registerBook = (req: Request, res: Response) => {
    const book: HydratedDocument<IBook> = new books(req.body);
    book.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - failure while registering book.`,
        });
      } else {
        res.status(201).send(book.toJSON());
      }
    });
  };

  static updateBook = (req: Request, res: Response) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, { $set: req.body }, (err: CallbackError) => {
      if (!err) {
        res.status(200).send({ message: "Book updated successfully." });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default BookController;
