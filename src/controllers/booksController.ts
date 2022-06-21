import books, { IBook } from "../models/Book";
import { Request, Response } from "express";
import { CallbackError, HydratedDocument } from "mongoose";

class BookController {
  static listBookById = (req: Request, res: Response) => {
    const id = req.params.id;
    books
      .findById(id)
      .populate("author", "name")
      .exec((err, book) => {
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
    books
      .find()
      .populate("author")
      .exec((err, books) => {
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

  static deleteBook = (req: Request, res: Response) => {
    const id = req.params.id;

    books.findByIdAndDelete(id, (err: CallbackError) => {
      if (!err) {
        res.status(200).send({ message: "Book was removed successfully." });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static listBookByPublisher = (req: Request, res: Response) => {
    const publisher = req.query.publisher;

    books.find(
      { publisher: publisher },
      {},
      (err: CallbackError, books: IBook) => {
        res.status(200).send(books);
      },
    );
  };
}

export default BookController;
