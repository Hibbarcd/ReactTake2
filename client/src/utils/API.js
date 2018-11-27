import axios from "axios";

export default {

  getNewBook: function(query) {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query + "&callback=handleResponse")
    },
  //=================================================
  // Gets all books from db
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id from db
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id from db
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
