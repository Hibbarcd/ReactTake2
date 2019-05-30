import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Container } from "../components/Grid";
import SearchForm from "../components/Search/SearchForm";
import SearchResults from "../components/Search/SearchResults";

class Search extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };
  //================================
  componentDidMount() {
    this.loadBooks();
  }
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "", image: "", link: "" })
      )
      .catch(err => console.log(err));
  };
//============================================
getNewBook = () => {
  API.getNewBook()
  .then(res =>
    this.setState({ books: res.data, title: "", author: "", synopsis: "", image: "", link: "" })
  )
  .catch(err => console.log(err));
}
//================================================
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    API.getNewBook(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: "" });
       console.log(res);
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render () 
  return (
  <Container>
    <Jumbotron>
    <div
        style={{ height: 150, width: 500, clear: "both", paddingTop: 50, position: "relative", textAlign: "center",  }}>
        <h1>Google Book App</h1>
        <h2>Welcome To Google Books Search!</h2>
    </div>
    </Jumbotron>
    <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            books={this.state.books}
          />
          <SearchResults results={this.state.results} />

    </Container>
  );
  }
}
export default Search;
