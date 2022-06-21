import express from "express";
import BookController from "../controllers/booksController";

const router = express.Router();

router.get("/books", BookController.listBooks);

router.post("/books", BookController.registerBook);

router.put("/books/:id", BookController.updateBook);

export default router;
