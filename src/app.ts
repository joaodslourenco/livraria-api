import express from "express";

const app = express();

const books = [
  { id: 1, titulo: "senhor dos aneis" },
  { id: 2, titulo: "O Hobbit" },
];

app.get("/", (req, res) => {
  res.status(200).send("Curso de node");
});

app.get("/books", (req, res) => {
  res.status(200).json(books);
});

export default app;
