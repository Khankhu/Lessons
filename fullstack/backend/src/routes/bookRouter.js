//Ямар HTTP method + ямар URL ирэхэд ямар controller ажиллуулах вэ?
//HTTP Request-ийг зөв controller руу чиглүүлдэг зам

import express from "express";
import {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} from "../controllers/bookController.js";

const bookRouter = express.Router();

bookRouter
  .post("/", createBook)
  .get("/", getBooks)
  .get("/:id", getBookById)
  .put("/:id", updateBook)
  .delete("/:id", deleteBook);

export default bookRouter;
