import axios from "axios";

export default {
  getSavedBooks() {
    return axios.get("/api/books")
  },
  getBookById(bookId) {
    return axios.get("/api/books/" + bookId);
  },
  saveBook(bookData) {
    return axios.post("/api/books", bookData)
  },
  deleteBook(bookId) {
    return axios.delete("/api/books/" + bookId)
  },
  searchGoogleBooks(bookQuery) {
    return axios.get("https://www.googleapis.com/books/v1/volumes", { params: { q: bookQuery } })
  }
};
