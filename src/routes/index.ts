import express from "express";
import booksRoutes from "./booksRoutes";
import authorsRoutes from "./authorsRoutes";

const routes = (app: express.Application) => {
  app.route("/").get((req, res) => {
    res.status(200).send({ title: "curso de node" });
  });

  app.use(express.json(), booksRoutes, authorsRoutes);
};

export default routes;
