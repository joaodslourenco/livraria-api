import express from "express";
import BookController from "../controllers/booksController";

const router = express.Router();

router.get("/books", BookController.listBooks);

export default router;
