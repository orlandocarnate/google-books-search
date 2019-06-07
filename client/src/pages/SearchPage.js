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

  // load books on page load
  componentDidMount = () => {
    // test api
    this.googleSearch();

  }

  // create function to call API Books search
  googleSearch = (query = "Harry Potter") => {
    API.searchGoogleBooks(query)
      .then(res => {
        console.log(res.data.items);
        this.setState({ books: res.data.items })
      })
      .catch(err => console.log(err));

    // const url = "https://www.googleapis.com/books/v1/";
    // let findBooksUrl = url + "volumes?q=" + "Harry Potter";
    // axios({
    //   method: 'GET',
    //   url: findBooksUrl
    // })
    //   .then(axiosResponse => {
    //     // response.json(axiosResponse.data)
    //     console.log("AXIOS RESPONSE:\n", axiosResponse.data.items)
    //     this.setState({ books: axiosResponse.data.items })
    //   })
  }
  // save books to state

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
          <ul>
            {this.state.books.map(book => {
              return <Book key={book.id} title={book.volumeInfo.title} />
            })}

          </ul>
        </div>
      </div>
      // </React.Fragment>

    );
  }
}

export default App;
