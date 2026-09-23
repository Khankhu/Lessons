import { Book } from "../models/Book.js";

export const createBook = async (req, res) => {
  try {
    const { title, author, publishedAt, description, genre } = req.body;
    // req.body хэрэгтэй датагаа салгаж авч байна. Ж: req.body.title = title г.м

    const newBook = {
      title,
      author,
      publishedAt,
      description,
      genre,
    };
    // тэр хэрэгтэй салгаж авсан датагаар шинээр newBook нэртэй object үүсгэж байна
    // newBook = DB-д оруулахаар бэлдсэн JavaScript object
    //Document = DB дотор бодитоор хадгалагдсан data

    const createdBook = await Book.create(newBook);
    //newBook object-ийг Book Model ашиглан DB-д шинэ document болгож хадгал.
    // Хадгалсны дараа үүссэн document-ийг createdBook-д хий.
    //Book Model дээр байгаа create method-ийг ажиллуул.object.method()
    //Book.create(newBook) нь newBook object-ийг MongoDB-д шинэ document болгон хадгалдаг.

    res.status(201).json(createBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    //Database-ээс бүх номыг олж аваад, гарсан үр дүнг books гэдэг хувьсагчид хий.
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    //Book Mongoose Model-ийн findById() method-ийг ашиглаад, өгөгдсөн ID-тай номын document-ийг MongoDB-ээс хайж олно.
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBook = async (req, res) => {
  try {
    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedBook);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
