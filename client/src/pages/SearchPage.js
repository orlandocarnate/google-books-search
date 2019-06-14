import React, { Component } from "react";
import API from "../utils/API";
// import "./App.css";
// import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Title from "../components/Title";
// import SearchItem from "../components/SearchItem";
import SaveBtn from '../components/SaveBtn';

var axios = require("axios");

class App extends Component {
  state = {
    books: [],
    search: ''
  }

  saveBook = (id) => {
    const book = { ...this.state }
    this.props.saveBook(book)
    console.log(book);
  }

  // create function to call API Books search
  googleSearch = (query) => {
    if (query) {
      API.searchGoogleBooks(query)
        .then(res => {
          // add isSaved false key value pair to each object in array
          // const books = res.data.items.map(item => {
          //   let obj = Object.assign({}, item);
          //   obj.isSaved = false;
          //   return obj
          // })
          // console.log(books);
          this.setState({ books: res.data.items});
        })
        .catch(err => console.log(err));
    }
  }

  saveBook = (book) => {
    book.isSaved = true;
    console.log("PARENT: \n", book);
    this.setState({
      books: [...this.state.books.filter(item => book.id !== item.id), { book }
      ]
    });
    console.log(this.state.books);
    // API.saveBook(book)
    // .catch(err => console.log(err));

  }

  handleSearchChange = (event) => {
    this.setState({ search: event.target.value });
    // console.log("Form onSubmit Event data:\n", this.state.search);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Form onSubmit Event data:\n", this.state.search);
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
              return (
                <li className="media my-4" key={book.id}>
                  <img src={book.volumeInfo.imageLinks.smallThumbnail} className="mr-3" alt="..." />
                  <div className="media-body">
                    <h5 className="mt-0 mb-1">{book.volumeInfo.title} <span className="font-italic">by {book.volumeInfo.authors.join(", ")}</span></h5>
                    <p>{book.volumeInfo.description}</p>
                    <a className="btn btn-primary" target="_blank" href={book.volumeInfo.link}>View</a> {" "}
                    <SaveBtn onClick={() => this.saveBook(book._id)} />

                  </div>
                </li>
              )
            })}

          </ul>
        </div>
      </div>
      // </React.Fragment>

    );
  }
}

export default App;
