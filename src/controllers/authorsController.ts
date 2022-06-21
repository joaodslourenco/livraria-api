import authors, { IAuthor } from "../models/Author";
import { Request, Response } from "express";
import { CallbackError, HydratedDocument } from "mongoose";

class AuthorController {
  static listAuthorById = (req: Request, res: Response) => {
    const id = req.params.id;
    authors.findById(id, (err: CallbackError, author: IAuthor) => {
      if (err) {
        res
          .status(400)
          .send({ message: `${err.message} = Author ID not found.` });
      } else {
        res.status(200).send(author);
      }
    });
  };

  static listAuthors = (req: Request, res: Response) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };

  static registerAuthor = (req: Request, res: Response) => {
    const author: HydratedDocument<IAuthor> = new authors(req.body);
    author.save((err) => {
      if (err) {
        res.status(500).send({
          message: `${err.message} - failure while registering author.`,
        });
      } else {
        res.status(201).send(author.toJSON());
      }
    });
  };

  static updateAuthor = (req: Request, res: Response) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, { $set: req.body }, (err: CallbackError) => {
      if (!err) {
        res.status(200).send({ message: "Author updated successfully." });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteAuthor = (req: Request, res: Response) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err: CallbackError) => {
      if (!err) {
        res.status(200).send({ message: "Author was removed successfully." });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default AuthorController;
