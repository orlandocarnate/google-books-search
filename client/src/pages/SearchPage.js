import React, { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Title from "../components/Title";
import Book from "../components/Book";

class App extends Component {
  state = {
    books = []
  }

  // load books on page load
  componentDidMount = () => {
    // test api
    this.googleSearch();
    
  }

  // create function to call API Books search
  googleSearch = () => {
    API.searchBooks("Harry Potter")
    .then( res => {
      this.setState({ books: res.data })
    })
    .catch(err => console.log(err));
  }
  // save books to state



  render() {
    return (
      // <React.Fragment>
      <div className="container">
        {/* <Navbar /> */}
        <Title />
        <Search />
        <div className="row">
      {this.state.books.map( book => {
        <Book key={book.id} title={book.title} />
      })}
        </div>
      </div>
      // </React.Fragment>
      
    );
  }
}

export default App;
