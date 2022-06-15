import express from "express";

const app = express();

app.use(express.json());

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

app.get("/books/:id", (req, res) => {
  let index = getBookById(+req.params.id);
  res.status(200).json(books[index]);
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Book was registered successfully!");
});

app.put("/books/:id", (req, res) => {
  let index = getBookById(+req.params.id);
  books[index].titulo = req.body.titulo;
  res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
  let { id } = req.params;
  let index = getBookById(+id);
  books.splice(index, 1);
  res.status(200).send(`Book ${id} was deleted successfully.`);
});

function getBookById(id: number) {
  return books.findIndex((book) => book.id === id);
}

export default app;
