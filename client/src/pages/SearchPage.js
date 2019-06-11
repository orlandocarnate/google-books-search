import React, { Component } from "react";
import API from "../utils/API";
// import "./App.css";
// import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Title from "../components/Title";
import Book from "../components/Book";

var axios = require("axios");

class App extends Component {
  state = {
    books: [],
    search: ""
  }

  // load last search on page load
  componentDidMount = () => {
    // test api
    // this.googleSearch();
    this.searchList();

  }

  // create function to call API Books search
  googleSearch = (query = "Harry Potter") => {
    if (query) {
      API.searchGoogleBooks(query)
        .then(res => {
          API.saveSearchList(res.data);
          console.log(res.data.items);
          this.setState({ books: res.data.items })
        })
        .catch(err => console.log(err));
    }

  }

  // get last search list
  searchList = () => {
    API.getSearchList()
      .then( res => {
        
        this.setState({ books: res.data.items })
      })
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
              return <Book key={book.id} book={book} />
            })}

          </ul>
        </div>
      </div>
      // </React.Fragment>

    );
  }
}

export default App;
