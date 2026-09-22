import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedAt: { type: Date, required: true },
    description: { type: String },
  },
  {
    timestamps: true,
  },
);

export const Book = mongoose.model("Book", bookSchema);
