import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/container/index";
import SearchForm from "../components/SearchForm/index";
// import SearchResults from "../components/SearchResults/index";
// const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const baseSearch = "emily";

class Search extends Component {
    state = {
        books: [],
        title: "",
        author: "",
        synopsis: "",
        link: ""
      };
      componentDidMount() {
        API.searchBook()       
        };

    handleInputChange = event => {
        this.setState({ search: event.target.value });
      };
    
    handleFormSubmit = event => {
        event.preventDefault();
        API.searchBook(this.state.books)
          .then(res => {
            if (res.data.status === "error") {
              throw new Error(res.data.message);
            }
            this.setState({ results: res.data.message, error: "" });
          })
          .catch(err => this.setState({ error: err.message }));
      };

    render() {
        return (
          <div>
            <Container style={{ minHeight: "80%" }}>
              <h1 className="text-center">Search By Title!</h1>
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
                books={this.state.books}
              />
              {/* <SearchResults results={this.state.results} /> */}
            </Container>
          </div>
        );
      }
    }
    export default Search;