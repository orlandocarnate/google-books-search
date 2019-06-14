import axios from "axios";

export default {
  getFavorites() {
    return axios.get("/api/books")
  },
  // saveSearchList(bookData) {
  //   return axios.post("/api/books/searchlist", bookData)
  // },
  // getSearchList(bookData) {
  //   return axios.get("/api/books/searchlist", bookData)
  // },
  saveFavorite(bookData) {
    return axios.post("/api/books", bookData)
  },
  deleteFavorite(bookId) {
    return axios.delete("/api/books/" + bookId)
  },
  searchGoogleBooks(bookQuery) {
    return axios.get("https://www.googleapis.com/books/v1/volumes", { params: { q: bookQuery } })
  }
};
