import React, { Component } from "react";
import API from "../utils/API";
// import "./App.css";
// import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Title from "../components/Title";
import SearchBook from "../components/SearchBook";

var axios = require("axios");

class App extends Component {
  state = {
    books: [],
    search: ""
  }

  // load last search on page load
  // componentDidMount = () => {
  //   // test api
  //   // this.googleSearch();
  //   this.searchList();

  // }

  // get last search list
  // searchList = () => {
  //   API.getSearchList()
  //     .then(res => {
  //       if (res.data.items !== undefined) {
  //         this.setState({ books: res.data.items })
  //       }
  //     })
  //     .catch(err => console.log(err));
  // }

  // create function to call API Books search
  googleSearch = (query) => {
    if (query) {
      API.searchGoogleBooks(query)
        .then(res => {
          this.setState({ books: res.data.items })
        })
        .catch(err => console.log(err));
    }
  }

  saveBook = (book) => {
    console.log("PARENT: \n", book);
    API.saveBook(book)
    .catch(err => console.log(err));

  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
    console.log("Form onSubmit Event data:\n", this.state.search);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form onSubmit Event data:\n", this.state.search);
    this.googleSearch(this.state.search)
  }

  render() {
    return (
      // <React.Fragment>
      <div className="container">
        {/* <Navbar /> */}
        <Title />
        <Search handleSubmit={this.handleSubmit} handleSearchChange={this.handleSearchChange} />
        <div className="row">
          <ul className="list-unstyled">
            {this.state.books.map(book => {
              return <SearchBook key={book.id} book={book} saveBook={this.saveBook} />
            })}

          </ul>
        </div>
      </div>
      // </React.Fragment>

    );
  }
}

export default App;
