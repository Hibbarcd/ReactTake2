import axios from "axios";


export default {
//========== Search Google API ======================
  // search: function(query) {
  //   return axios.get(BASEURL + query);
  // },
  searchBook: function () {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=emily");
    },
//=============================
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  }
};

