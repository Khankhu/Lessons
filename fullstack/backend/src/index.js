import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./database/db.js";
import bookRouter from "./routes/bookRouter.js";

connectDB();

const app = express();
const port = 8000;

app.use(express.json());
app.use("/api/books", bookRouter);

app.listen(port, () => {
  console.log("Server is running", port);
});
